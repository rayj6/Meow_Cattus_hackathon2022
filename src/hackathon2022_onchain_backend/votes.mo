import HashMap "mo:base/HashMap";
module {
    public type votingroom = {
        content : Text;
        options : [Text];
        owner : Principal;
    };
};