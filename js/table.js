//table.js
//타이틀영역
var tableTag = document.getElementById('tbl');
//변수이름임
//<a href =http:www.daum.net>DAUM</a>  이걸 엘리멘트라 부름
// <a ~> 오픈테그 </a> 클로즈테그  DAUM 컨텐츠

var trTag1 = document.createElement('tr');
var tdTag1 = document.createElement('td');
tdTag1.innerHTML = 'Name';
tdTag1.setAttribute('id' , 'first');
tdTag1.setAttribute('class', 'title');
var tdTag2 = document.createElement('td');
tdTag2.innerHTML = 'Age';
tdTag2.setAttribute('class', 'title');

trTag1.append(tdTag1);
trTag1.append(tdTag2);
console.log(trTag1);//콘솔확인용 출력문

tableTag.append(trTag1);

//데이터영역
var trTag2 = document.createElement('tr');
var tdTag3 = document.createElement('td');
tdTag3.setAttribute("class", "data")
tdTag3.innerHTML = 'Hong';
var tdTag4 = document.createElement('td');
tdTag4.setAttribute("class" , "data")
tdTag4.innerHTML = '15';
trTag2.append(tdTag3);
trTag2.append(tdTag4);
tableTag.append(trTag2);

console.log(trTag2);
//다른거
