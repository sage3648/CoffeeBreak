document.addEventListener('DOMContentLoaded', function () {

    let endDate = new Date().getTime() + (1000 * 60 * 10);

    let clockComponent = document.getElementById("tiles");

    countDownClock = new CountDownClock(endDate, clockComponent);

    countDownClock.start();

});