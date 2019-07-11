var endDate = new Date("July 25, 2019 17:30:00").getTime();
var daysField = document.getElementById("timer-days");
var hoursField = document.getElementById("timer-hours");
var minutesField = document.getElementById("timer-minutes");
var secondsField = document.getElementById("timer-seconds");
var over = document.getElementById("timer");

var timer = setInterval(function(){
    
    let now = new Date().getTime();
    let t = endDate - now;

    if (t >= 0){
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((t % (1000 * 60)) / (1000));

        daysField.innerHTML = days + "<span class='label'>DAY(S)</span>";
        hoursField.innerHTML = ("0" + hours).slice(-2) + "<span class='label'>HR(S)</span>";
        minutesField.innerHTML = ("0" + minutes).slice(-2) + "<span class='label'>MIN(S)</span>";
        secondsField.innerHTML = ("0" + seconds).slice(-2) + "<span class='label'>SEC(S)</span>";
    } else {
        over.innerHTML = "It's too late now";
    }
}, 1000);
