// variable.js
// undefined
let something = '0';
 something = 1 < 2; 
 

if(something){
    console.log ("참입니다.")
} else {
    console.log("거짓입니다.")
}

//object
something = {
    name: 'Hong',
    age: 20,
    phone: '010-1111-2222',
    field: ''
}

console.log(something.phone);

something.name;

let name = something.name;
let age = something['age'];

for (field in something){
console.log(field, something[field]);
}

let nameAry = ['Hong', 'Park' , "Kim" ,'Hwang' , 'Lee'];
let name1 = nameAry[0];
let name2 = nameAry[1];
nameAry[2] = 'Choi';

for(let i =0; i < nameAry.length; i++){
    console.log('nameAry[' +i+ '] =>' + nameAry[i] );
}

document.write('<table>');
document.write('<table border =1>')

document.write('<tr><td>순번</td><td>이름</td></tr>')
// let str 안쓰고 str만 써줘도 됨.
i=1;
for(let str of nameAry){
document.write('<tr>'+'<td>' + i++ + '</td>' + '<td>'+str+'</td>' +'</tr>' );

}
document.write('</table>');