// array_map1.js

let students = [];
let student = {
    sno: 1,
    sname: 'Hong',
    sgen: 'F',
    score: 80
}

for(let i=1 ; i <=5; i++){
    let std = {};
    std.sno = i;
    std.sname = 'Hong' + i;
    std.sgen = i%2 ==0 ? 'M' : 'F';
    std.score = 80 + i;
    students.push(std);
}   
console.log(students);


//여성인 사람들의 점수만 가져오기 , 필터링은 성별로 하고

let result = students.filter(function (a,b,c){
    return a.sgen == 'F';
    }).map(function(a,b,c){
        return console.log(a.sname+ ' / '+a.score+'점');
    });
    console.log(result);

    result = students.filter(function(a,b,c){
        return a.sgen =='F';
    }).forEach(function(a,b,c){
        a.score
    });
    console.log(result);
 