let today = new Date(); // today = 현재시각
 today = new Date ('2020-12-15');
// today.setMonth(0);
console.log(today.getDay());   //Month = 0~11 / Date = 1~31 / Hours = 0~23
// / Minute, Seconds = 0~59 /

function setCal(yyyy, mm , dd){
    let today = new Date(yyyy+'-'+mm+'-'+dd);
    today = new Date(yyyy, mm, 0);
    console.log(today.getDate());

}


setCal('2020','06','05');
//date.js
function showCal() {
    let clearCal = document.getElementById('show');
    clearCal.innerHTML = ' ';

    let yyyy = document.getElementById('year').value;
    let mm = document.getElementById('month').value;
    if(mm > 12 || mm < 1){
        alert('정확한 날짜를 입력하세요');
    }else{
        let days = ['Sun','Mon','Tue','Wed','Thr','Fri','Sat'];
        let dates = [];
        for(let i=1; i<=35; i++){
            //1일이 시작되는 요일
            let today = new Date(yyyy, mm-1, 1);
            let k = today.getDay();
            let j = i-k;
            if(j > 0 && j < 32){
                dates.push(j);
            }else{
                dates.push(' ');
                }
            }
            let insertYnM = document.createElement('tr');
            insertYnM.setAttribute('style', 'font-size: 40px; ;')
            insertYnM.innerHTML = '<'+yyyy+'년'+mm+'월>';
            document.getElementById('show').append(insertYnM)
            let tableTag = document.createElement('table');
            tableTag.setAttribute('border','2px');
            tableTag.setAttribute('style','text-align:center');
            tableTag.setAttribute('id','tbl');
            let trTag = document.createElement('tr');
            days.forEach(createHeader);     
            dates.forEach(createData);       
            document.getElementById('show').append(tableTag);
        
            function createHeader(a,b,c){
                let thTag = document.createElement('th');
                thTag.setAttribute('style','background-color: gray; color: white;');
                thTag.innerHTML = a;
                trTag.append(thTag);
                tableTag.append(trTag);
            }
        
            function createData(a,b,c){
                let tdTag = document.createElement('td');
                tdTag.innerHTML = a;
                if(b%7==0){
                    trTag = document.createElement('tr');
                    tdTag.setAttribute('style','color:red');
                    trTag.append(tdTag);
                }
                if(b%7==6){
                    tdTag.setAttribute('style','color:blue');
                }
                if(a==0){
                    tdTag.setAttribute('style','background-color:silver');
                }
                trTag.append(tdTag);
                tableTag.append(trTag);
            }
    }
}