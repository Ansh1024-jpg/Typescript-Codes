var score = 33;
score = 44;
score = "55";
var alice = {
    name: 'Alice',
    id: 1
};
alice = { username: "AC", id: 1 };
// 
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else {
        id + 2;
    }
}
getDbId(3);
getDbId("3");
