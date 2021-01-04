// function2.js

//      let name1 = window.prompt('이름을 입력하세요.');
//  // let name1 = document.getElementById('name').value;
//     console.log('입력한 이름은: ' + name1);

// //name function(){} 없어도 됨.
// nameFunc();

// 90이상: A , 80이상: B , 70이상:C ,그외 D
// DOCUMENT 영역에 표시해 주는 것을 만들어 보시오.


let name1 = window.prompt('숫자를 입력하세요.');
let name2 = window.prompt('숫자를 입력하세요.');
let name2 = window.prompt('숫자를 입력하세요');


checkGrade(name1);
 function checkGrade(name1){
     if(name1>=90){
         document.write("A입니다.");
         console.log("A입니다.");    }
          else if(name1>=80) {
         document.write("B입니다.");
         console.log("B입니다.");
        } else if(name1>=70){
         document.write("C입니다.");
         console.log("C입니다.");
        } else {
         document.write("D입니다.");
         console.log("D입니다.");
        }
    }

diffSum(name1,name2);// 입력받은 두수 사이의 합 : 15~25
function diffSum(name1, name2){
    for(let i= name1 ; i<=name2 ; l)
    let n1 = parseInt(a)


}

5개 숫자 입력
5개 숫자 최대가 findMax(){}


let numAry = [];
for (let i = 0; i <5; i++){
    let name1 = window.prompt('숫자를 입력하세요.');
    numAry[i] = parseInt(name1);

}

findMax();

function findMax(){

    //numAry[]
}
sum(name1, name2);

function sum(a , b){
    
    let n1 = parseInt(a); // '30'
    let n2 = parseInt(b);
    document.write(n1 + n2);
}