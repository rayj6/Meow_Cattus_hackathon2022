import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Users { 'username' : string, 'email' : string }
export interface Votes {
  'content' : string,
  'owner' : Principal,
  'options' : Array<string>,
}
export interface _SERVICE {
  'CreateAccount' : ActorMethod<[string, string], string>,
  'allRooms' : ActorMethod<[], Array<string>>,
  'allroomEntries' : ActorMethod<[], Array<[string, Votes]>>,
  'allvoteEntries' : ActorMethod<[], Array<[Principal, Array<Votes>]>>,
  'clearall' : ActorMethod<[string], undefined>,
  'createVote' : ActorMethod<[string, Array<string>, string], [] | [Votes]>,
  'currentResult' : ActorMethod<[[] | [Array<Array<bigint>>]], Array<number>>,
  'endVote' : ActorMethod<[string], [] | [Array<number>]>,
  'isJoined' : ActorMethod<[string], boolean>,
  'joinVote' : ActorMethod<[string, Array<bigint>], string>,
  'returnRoomID' : ActorMethod<[string], [] | [Votes]>,
  'returnVote' : ActorMethod<[], [] | [Array<Votes>]>,
  'returnaccount' : ActorMethod<[], [] | [Users]>,
  'sayHi' : ActorMethod<[], string>,
  'test' : ActorMethod<[], Array<[Principal, Array<Votes>]>>,
}
