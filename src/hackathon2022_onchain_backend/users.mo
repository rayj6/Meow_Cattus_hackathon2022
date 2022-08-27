import HashMap "mo:base/HashMap";
module {
    public type users = {
        username : Text;
        email : Text;
    };
    public type voteOwnerOf = {
        roomID : Nat;
    };
};