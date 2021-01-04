//array.js
// let numbers = [3,4,8,9,12,83,22];
// let sum = 0;
// for( num of numbers){
//     if(num% 2 ==0)
//     sum += num;
//     console.log(num);
// }
// console.log("합계: "+sum);

let numbers = [3,4,8,9,12,83,22];
let sum = 0;
let i = 1;
for( num of numbers){
    if(sum< num){
        sum = num;
    }
    
    console.log(num);
}
console.log("가장 큰수: "+sum);



let friend1 = {
    name: '송다희' ,
    age: 20 ,
    hobby: '코딩',
    grade: 'A'
}

let friend2 = {
    name: '김찬영' ,
    age: 40 ,
    hobby: '농구',
    grade: 'B'
}

let friend3 = {
    name: '산타' ,
    age: 70 ,
    hobby: '굴뚝타기',
    grade: 'C'
}
let friends = [friend1, friend2, friend3];


document.write('<table border="1"><tr>');
for(field in friend1){
    document.write('<th>'+field+'</th>');
}

document.write('</tr>');
for(friend of friends) {
    document.write('<tr>');
    for(field in friend){
        document.write('<td>'+ friend[field] + '</td>');
    }
    document.write('</tr>');
}
document.write('</table>');

//of 는 배열이고 in 은 필드값을 가져온다.

