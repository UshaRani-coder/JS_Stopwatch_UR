//destructuring hrs,min,sec,milli_sec to 00

let[hrs,min,sec,milli_sec] = [00,00,00,00];
let displayTime = document.querySelector(".time");

//initially setting timer to null,we will set the value later

var timer = null;

function stopWatch(){
    milli_sec++;
    if(milli_sec == 100){
        milli_sec = 0;
        sec++;
        if(sec == 60){
            sec = 0;
            min++;
        }
        if(min == 60){
            min = 0;
            hrs++;
            
        }  
    }
    //adding 0 on the left side if the conditions below are ture

    let h = hrs < 10 ? "0" + hrs : hrs;
    let m = min < 10 ? "0" + min : min;
    let s = sec < 10 ? "0" + sec : sec;
    let ms = milli_sec <10 ? "0" + milli_sec : milli_sec;
    displayTime.innerHTML = h + ":" + m + ":" + s + ":" + ms;  
}


function startTimer(){
    timer = setInterval(stopWatch,10);
}

function stopTimer(){
    if(timer!==null){
        clearInterval(timer);   
    }
    
}

function resetTimer(){
    clearInterval(timer);
displayTime.innerHTML = "00" + ":" + "00" + ":" + "00" + ":" + "00" ;
}