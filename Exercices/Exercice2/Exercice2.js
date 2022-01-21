//Selectors

const clockSelector = document.getElementById("clock");

// Function to display clock

function displayClock(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    // Manage display on 2 number if value inferior to 10
    if(hour < 10){
        hour = "0" + hour;
    }
    if(minute < 10 ){
        minute = "0" + minute;
    }
    if(second < 10){
        second = "0"+ second;
    }
    clockSelector.innerHTML = hour + " : " + minute + " : " + second;

    // Refresh each second for dynamic display
    setTimeout(displayClock, 1000);
}

displayClock();