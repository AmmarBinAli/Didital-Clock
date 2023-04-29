function displayTime() {
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var amPm = document.getElementById("am_pm");

    if (hrs >= 12) {
        amPm.innerHTML = 'PM';
    } else {
        amPm.innerHTML = 'AM'
    }

    if (hrs >= 12) {
        hrs = hrs - 12;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('min').innerHTML = min;
    document.getElementById('sec').innerHTML = sec;
}

setInterval(displayTime, 10);