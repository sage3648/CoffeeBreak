class CountDownClock {

    constructor(targetDate, component){
        this.Component = component;
        this.TargetDate = targetDate;
        this.Days = 0;
        this.Hours = 0;
        this.Minutes = 0;
        this.Seconds = 0;
    }

    runCountDown() {
         // get tag element
        // find the amount of "seconds" between now and target
        let currentDate = new Date().getTime();
        if(currentDate > this.TargetDate){
            this.Days = this.pad(0);
            this.Hours = this.pad(0);
            this.Minutes = this.pad(0);
            this.Seconds = this.pad(0);
        } else {
            let secondsLeft = (this.TargetDate - currentDate) / 1000;

            this.Days = this.pad(parseInt(secondsLeft / 86400));
            secondsLeft = secondsLeft % 86400;

            this.Hours = this.pad(parseInt(secondsLeft / 3600));
            secondsLeft = secondsLeft % 3600;

            this.Minutes = this.pad(parseInt(secondsLeft / 60));
            this.Seconds = this.pad(parseInt(secondsLeft % 60));
        }

        // format countdown string + set tag value removing the days
        //countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>";

        this.Component.innerHTML = "<span>" + this.Hours + "</span>:<span>" + this.Minutes + "</span>:<span>" + this.Seconds + "</span>";
    }

    pad(n) {
        return (n < 10 ? '0' : '') + n;
    }

    start() {
        this.runCountDown();
        setInterval(() => {this.runCountDown()}, 1000);
    }

}