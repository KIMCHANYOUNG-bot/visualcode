let friends =[];
let i = 0;

// 전역변수 


function input_friend(){
    //펑션입니다. 라는 의미임 써주겠다.
    let namef = document.getElementById('name').value;
    // 굳이 같게 안해줘도 상관없다. namef라고 적은이유
    let agef = document.getElementById('age').value;
    let hobbyf =  document.getElementById('hobby').value;

    let friend = {};
    friend.name = namef;
    friend.age = agef;
    friend.hobby = hobbyf;

    //지역변수

    friends[i++] = friend;
    console.clear();

    for (friend of friends){
        for(field in friend){
            console.log(friend[field]);
        }
        // 이거 잘 이해 안된다.
    }
    // console.log(namef.value , agef.value , hobbyf.value);
    // // .value 초기값으 가져온다. 초기값이 없으면 입력한 값을 가져온다.
  
    //  document.getElementById("result").value
    //   = namef.value +','+ agef.value +','+  hobbyf.value;
}


