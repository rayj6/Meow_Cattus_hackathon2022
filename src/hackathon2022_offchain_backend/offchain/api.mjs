// ------------------imports--------------------------------
import {login, register, fetch_all_UserData} from "./users/userFunc.mjs";
import {fetchVoteRoomId} from "./voteRoom/voteFunc.mjs";
import {fetchRoomProps} from "./roomManager/roomFunc.mjs";
//----------------------------------------------------------------
//-------------------export function----------------------------
export {userData, roomId, roomData};
export {login, register}
// ----------------------------------------------------------------

// fetch
const userData = fetch_all_UserData();
const roomId   = fetchVoteRoomId();
const roomData = fetchRoomProps();

console.log(fetch_all_UserData());