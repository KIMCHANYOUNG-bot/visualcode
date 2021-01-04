//array_map2.js
//reduce
let students = [];
for(let i=1 ; i <=5; i++){
    let std = {};
    std.sno = i;
    std.sname = 'Hong' + i;
    std.sgen = i%2 == 0 ? 'M' : 'F';
    std.score = 80+i;
    students.push(std);
}   
let result = students.some(function(a,b,c){

    return a.score >81;
});
//some 은 하나라도 만족할때  , every는 모두 만족할때 
result = students.map(function (a){
    return a.sname;
}).indexOf('Hong2');    
console.log(result);

//JS Array Iteration 참조해서 배워랑~~~~~~~~~~~~~~~~~
//AJAX 중요하당~~~ 선행학습해랑~~~~~~~~~~~ 젤중요~~~~~~~~




// let result =students.map(function (a,b,c){
//     // console.log('a값',a,'/b값', b,'/c값', c,'/d값', d);
    
//     return a.score;
// }).reduce(function(a,b,c,d){
//     console.log(a,b);
//     return a<b ? a:b; 
// });  


// console.log('result: ', result);

//reduce 잊어버려~  map하고 filter만