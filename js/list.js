function myFunc(){
    document.write("<ul><li>Apple</li><li>Banana</li></ul>");
    document.write('<style> .odd{background: yellow; }')
    let dan = 4;
    document.write('<ul>');
    document.write('<table border= "1" >')

    for(let i =1; i <= 10; i++){
        if(i%2 ==1){
            document.write('<strong><li class= "even" > '+ dan+ '*' + i + ' = '+ (dan*i)+'</li>');
        }else{ document.write('<li class="odd" >'+dan+' * '+ i + ' = '+ (dan* i)+'</li>');}
    }

    // for(let i = 1; i <= 10; i++){
    //     if(i%2==1){
    //     document.write('<strong><li class="even" >'+dan+' * '+ i + ' = '+ (dan* i)+'</li>');
    //     // b 쓰면  글자 진해지네...
    //     } else {
    //     document.write('<li class="odd" >'+dan+' * '+ i + ' = '+ (dan* i)+'</li>');
    
    //     }
    // }
    document.write('</ul>');
}