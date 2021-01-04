// // 5개 숫자 입력
// // 5개 숫자 최대가 findMax(){}

// //
// let friend1 ={} 
// friend1.name = 'Hong';
// friend1.age = 20;
// friend1.hobby = 'reading';

// let friend2 = {
//     name : 'Hwang',
//     age : 20,
// }

// let friends = [];
// friends[0] = friend1;
// friends[1] = friend2;
// for(friend of friends) {
//     for (field in friend){
//         console.log(friend [field]);
//     }
// }

// let numAry = [];
// for (let i = 0; i <5; i++){
//     let name1 = window.prompt('숫자를 입력하세요.');
//     numAry[i] = parseInt(name1);
    

// // findMax();



// // function findMax(){
// //     //numAry[]
// //     let max=0;
// //     for (val of numAry){
// //         if(max< val){
// //         max = val;
// //     }
// //   }
// // }

//입력한 사람 이름에 입력한 숫자 표로 나오게.

let friends = []; // array
for(let i=0; i<3;  i++){
let name = window.prompt('이름을 입력하세요.');
let age  = window.prompt('나이를 입력하세요.');
let friend = {}; // object
friend.name = name;
friend.age = age;
friends[i] =friend;
}
document.write('<table border= "1">')
for(friend of friends){
    document.write('<tr>')
    for(field in friend){
        document.write('<td>' + friend[field] + '</td>')
    }
    document.write('</tr>')
}
document.write('</table border>')
