//js.js 스크립트의영역을 복붙했다.
        var name = document.getElementById('show').innerHTML;
        console.log(name);
         document.getElementById('show').innerHTML = "World";

         var divTag = document.createElement("div");
        //creatElement tag를 하나 만들겠다..
         divTag.innerHTML = "Nice"; //<div>Nice</div>

        document.getElementById('show').after(divTag);

        var li_1 = document.createElement("li");
        var li_2 = document.createElement("li");
        li_1.innerHTML = "Apple";
        li_2.innerHTML = "Orange";
 
        document.getElementById("fruit").append(li_1);
        document.getElementById("fruit").append(li_2);
        ///////////////////////////////////////////////////////////
        var grade = 5;
        for(var i = 1; i<=9; i++){
            var str = grade + ' * ' + i + ' = ' + (grade*i);
            console.log(str);
           // console.log(str);
         //콘솔영역에 출력하겠습니다. 
         
     } 
       //결과값: 5050입니다.