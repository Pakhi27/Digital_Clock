
let hrs=document.getElementById("hrs");
let min=document.getElementById("min");
let sec=document.getElementById("sec");

function updateTime(){
    let currentTime=new Date();

    hrs.innerHTML=currentTime.getHours();
    min.innerHTML=currentTime.getMinutes();
    sec.innerHTML=currentTime.getSeconds(); 
}

updateTime();

setInterval(updateTime,1000);




