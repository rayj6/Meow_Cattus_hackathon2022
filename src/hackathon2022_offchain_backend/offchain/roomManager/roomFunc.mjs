// ------------import connections------------------------
import {database} from "../config.mjs";
// ------------------------------------------------------
// ------------import dependencies------------------------
import {
    set,
    ref,
    onValue
  } from "firebase/database";
// -------------------------------------------------------
// ---------------------exports---------------------------
export {fetchRoomProps};
// -------------------------------------------------------

function fetchRoomProps(roomId) {
  const starCountRef = ref(database, 'roomManager/${roomId}/');
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);

    return data;
  });
}

fetchRoomProps("ABCXYZ")