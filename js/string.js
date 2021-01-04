// string.js 
let str = ' Please locate where "locate" occurs!' ;
let strLeng = str.length 

console.log(strLeng);

//indexOf, lastIndexOf, search

strLeng =str.indexOf('locate', 13);
strLeng = str.indexOf('locate'); // 글자가 몇번쨰인지 알려줌
strLeng = str.indexOf('hello'); // 없으면 -1로 뜬다.
str.lastIndexOf('locate'); // lastIndexOf는 뒤에서부터찾음.

console.log(strLeng);
console.log(str.lastIndexOf('locate'));
console.log(str.search('locate'));


//  slice , substring , substr
let fruit = 'Apple, Banana, kiwi';
let result = fruit.slice(0,5); // 첫값은 포함 , 마지막 값은 포함안됨.

let from = fruit.indexOf('Banana');
result =  fruit.substring(from, from + 6);
console.log(result);

result = fruit.substr(from,6);

console.log(result);

//replace
let newFruit = fruit.replace('Banana' , 'Orange');
// 문자열 변경 바나나 대신에 오렌지 넣음.
console.clear();
console.log(newFruit);

//toUpperCase, toLowerCase, concat (concat은 두문자열 연결)
//trim(좌우 문자열 잘라주는 메소드) , padStar ,padEnd

console.log('        good  hello      '.trim().toUpperCase()); 
//문자열에 비어있는 여백만 잘라주는 기능은 ' '.trim()
console.log('55'.padStart(6 , '0'));
console.log('55'.padEnd(6 , '0'));
//비어있는 공간을 ?라는 숫자를 채워주고 싶습니다.

let uri = 'http://www.naver.net';
console.log(uri.replace('net','com'));
console.log(uri.replace(uri.substring(uri.lastIndexOf('.')),'.com'));

let fruits = fruit.split(','); //Apple, Banana , kiwi
for(f of fruits){
    console.log(f.trim());
}
// 990101-1234567
// 990102-2345678
// 000201-3456789
// 000202-4567890

// 2000년 이전 , 이후 구분 -> 1,3 이면 남자
// 2000년 이전 , 이후 구분 -> 2,4 이면 여자

// let numbers = '990101-1234567';
// numbers +=  '990102-2345678';
// numbers +=  '000201-3456789';
// numbers +=  '000202-4567890';

// let num;
// let num1;

// function getGender(num=numbers.substring(7,15)){
//     if(num.indexOf(1)==1,3){
//         return '남자';    
//     } else{
//         return '여자';
//     }
    
// }

// // getGender('000202-4567890');



// let numAry = numbers.split(' ');
// for(num1 of numAry){
//     result = getGender(num);
//     console.log('결과: '+ result);
// }

// // function getGender(num){
// //     let fNum = num.replace('-',''),substr(6,1);
// //     let fYear = num.substr(0,2);
// //     if(fNum == '1')
// // }

//////////////////////////

function getGender(num){
    if(num.slice(-7,-6) == 1 || num.slice(-7,-6) == 3){
        return '남자';
    }else if(num.slice(-7,-6) == 2 || num.slice(-7,-6) == 4){
        return '여자';
    }
}


let numbers = '990101-3234567';
numbers += ' 990102-2345678';
numbers += ' 000201-3456789';
numbers += ' 000202-4567890';
numbers += ' 0003014567890';

let numAry = numbers.split(' ');
for(num of numAry){
    result = getGender(num);
    console.log(result);
}