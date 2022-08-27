export const idlFactory = ({ IDL }) => {
  const Votes = IDL.Record({
    'content' : IDL.Text,
    'owner' : IDL.Principal,
    'options' : IDL.Vec(IDL.Text),
  });
  const Users = IDL.Record({ 'username' : IDL.Text, 'email' : IDL.Text });
  return IDL.Service({
    'CreateAccount' : IDL.Func([IDL.Text, IDL.Text], [IDL.Text], []),
    'allRooms' : IDL.Func([], [IDL.Vec(IDL.Text)], []),
    'allroomEntries' : IDL.Func([], [IDL.Vec(IDL.Tuple(IDL.Text, Votes))], []),
    'allvoteEntries' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Principal, IDL.Vec(Votes)))],
        [],
      ),
    'clearall' : IDL.Func([IDL.Text], [], []),
    'createVote' : IDL.Func(
        [IDL.Text, IDL.Vec(IDL.Text), IDL.Text],
        [IDL.Opt(Votes)],
        [],
      ),
    'currentResult' : IDL.Func(
        [IDL.Opt(IDL.Vec(IDL.Vec(IDL.Nat)))],
        [IDL.Vec(IDL.Float64)],
        [],
      ),
    'endVote' : IDL.Func([IDL.Text], [IDL.Opt(IDL.Vec(IDL.Float64))], []),
    'isJoined' : IDL.Func([IDL.Text], [IDL.Bool], []),
    'joinVote' : IDL.Func([IDL.Text, IDL.Vec(IDL.Nat)], [IDL.Text], []),
    'returnRoomID' : IDL.Func([IDL.Text], [IDL.Opt(Votes)], []),
    'returnVote' : IDL.Func([], [IDL.Opt(IDL.Vec(Votes))], []),
    'returnaccount' : IDL.Func([], [IDL.Opt(Users)], []),
    'sayHi' : IDL.Func([], [IDL.Text], []),
    'test' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Principal, IDL.Vec(Votes)))],
        [],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
