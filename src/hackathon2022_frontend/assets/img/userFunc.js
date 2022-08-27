// ------------import connections------------------------
const {auth, db, database} = require("../config.mjs");
// ------------------------------------------------------
// ------------import dependencies------------------------
const {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
  } = require("firebase/auth");

const {
    set,
    ref,
  } = require("firebase/database");
// -------------------------------------------------------
// ---------------------exports---------------------------
module.export = {register, login};
// -------------------------------------------------------

function register (email, password, toConnectPlug, homeScr) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
 
            set(ref(database, "users/" + user.uid), {
                username: email,
                password: password,
            })
            .then(() => {
                // Data saved successfully!
                console.log("create successfully !");
                })
            .catch((error) => {
                // The write failed...
                console.log(error);
            });
            toConnectPlug(homeScr)
            })

        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorMessage);
        });
}

function login (email, password, toConnectPlug, now, homeScr) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          console.log("Login successfully !");
          location.href = "connectPlug_screen"
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });
}