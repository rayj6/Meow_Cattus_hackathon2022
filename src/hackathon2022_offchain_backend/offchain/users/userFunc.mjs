// ------------import connections------------------------
import {auth, db, database} from "../config.mjs";
// ------------------------------------------------------
// ------------import dependencies------------------------
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
  } from "firebase/auth";

import {
    set,
    ref,
    onValue
  } from "firebase/database";
// -------------------------------------------------------
// ---------------------exports---------------------------
export {register, login, fetch_all_UserData};
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

function login (email, password) {
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


function fetch_all_UserData (){
  const starCountRef = ref(database, 'users/');
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    // console.log(data);
    global.fetchData = data;
    // return data;
  });
}

console.log(fetch_all_UserData());
console.log(fetchData);