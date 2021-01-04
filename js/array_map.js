//array_map.js
let person = {};    //new Object();
person.name = 'Hong';
person.age = 10;

person = {
    name : 'Hwang' ,
    age : 15
}

function Person ( name, age ){
    this.name = name;
    this.age = age;

}

person = new Person('Park' , 20);
console.log(person);

let persons = [];

persons.push(person);
persons.push(new Person('Choi', 21));
persons.push(new Person('Hong', 22));
persons.push(new Person('Hwang', 23));

let names = persons.map(function(a,b,c){
    console.log(a,b,c); // a , b ,c 가 뭔지 말해줌.
    let member = {};
    member.id = a.name + '_' + b;
    member.age = a.age; 
    return member;
});

let over21 = persons.filter(function(a,b,c){
    return a.age >21;
}).map(function(a,b,c){
    return a.age;
});
console.log(over21);

names.forEach(function (a,b,c){
    document.write('<h1>'+a.id+ '/'+ a.age+ '</h1>');
});

// console.log(names);