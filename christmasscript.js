

const days = document.getElementById('days'),
      minutes = document.getElementById('minutes'),
      hours = document.getElementById('hours'),
      seconds = document.getElementById('seconds');
let xYear = 2020;
setInterval(() => {
    findDate();
}, 1000);

function findDate(){
    let currentTime = new Date(),
        christmasYear = currentTime.getFullYear();

    // getMonth() method returns the month (from 0 to 11)
    if(currentTime.getMonth() == 11 && currentTime.getDate() > 25){
        christmasYear += 1; 
    }

    let christmasTime = new Date(christmasYear, 11, 25); 
    let dateDiff = Math.floor(christmasTime - currentTime);

    let DAYS = 0, HOURS = 0, MINUTES = 0, SECONDS = 0;

    if(currentTime.getMonth() != 11 || (currentTime.getMonth() == 11 && currentTime.getDate() != 25)){
        DAYS = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
        HOURS = Math.floor((dateDiff) % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        MINUTES = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
        SECONDS = Math.floor((dateDiff) % (1000 * 60) / 1000);
    }
    displayDate(setZero(DAYS), setZero(HOURS), setZero(MINUTES), setZero(SECONDS));
}

function displayDate(d, h, m, s){
    days.innerHTML = d;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
}

function setZero(timeValue){
    if(timeValue < 10){
        timeValue = "0" + timeValue;
    }
    return timeValue;
}

/*
function check(){
    let currentDate = new Date(),
        targetDate = new Date(xYear, 11, 25);
    let dateDiff = targetDate - currentDate;
    let s = Math.fllor(dateDiff / 1000);
    dateDiff %= 1000;
    let m = Math.floor(s / 60);
    s %= 60;
    let h = Math.fllor(m / 60);
    m %= 60;
    let d = Math.floor(h / 24);
    h %= 24;
    console.log(d, h, m, s);
}
*/
