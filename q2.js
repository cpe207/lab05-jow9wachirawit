// assign interface/type to the function definition properly
function findTopNames(students) {
    /* Your code here */
    var Top = [];
    var S = students.filter(function (x) { return x.score > 8; });
    for (var i = 0; i < S.length; i++) {
        Top[i] = S[i].name;
    }
    return Top;
}
;
// assign interface/type to the student1 object properly
var students1 = [
    { name: "john", score: 10 },
    { name: "jane", score: 9 },
    { name: "jim", score: 8 },
];
console.log(findTopNames(students1));
module.exports = findTopNames;
/*
รหัส นศ.: 660612156

ชื่อ-สกุล : วชิรวิทย์ ไชยมาตย์
*/ 
