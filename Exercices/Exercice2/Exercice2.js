//Selectors

const clockSelector = document.getElementById("clock");


/**Function to display clock
 * Revovery of the current time (hour, minute and second)
 * Manage display on 2 number if value inforior to 10
 * Refresh each second to dynamic display
 */
function displayClock(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
 
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

    setTimeout(displayClock, 1000);
}

displayClock();