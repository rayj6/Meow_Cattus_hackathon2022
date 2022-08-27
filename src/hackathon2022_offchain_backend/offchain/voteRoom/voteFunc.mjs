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
export {fetchVoteRoomId};
// -------------------------------------------------------

function fetchVoteRoomId() {
  const starCountRef = ref(database, 'voteRoom/');
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);

    return data;
  });
}