class ClockCounter {
    constructor(displayElement, twelveHrBtnElement) {
        
        this.display = displayElement; 
        this.twelveHrBtn = twelveHrBtnElement;

        this.hours = 0; 
        this.minutes = 0; 
        this.seconds = 0; 
    }

    incrementSeconds() {

        if(this.seconds >= 0 && this.seconds < 59){
            this.seconds++;
        } else if(this.seconds == 59){
            this.incrementMinutes();
            this.seconds = 0;
        }

        this.updateDisplay();
    }

    incrementMinutes() {
        if (this.minutes >= 0 && this.minutes < 59) {
            this.minutes++;
        } else if (this.minutes == 59){
            this.incrementHours();
            this.minutes = 0;
        }

        this.updateDisplay();
    }

    incrementHours() {
        if (this.hours >= 0 && this.hours < 23){
            this.hours++;
        } else if (this.hours == 23){
            this.hours = 0;
        }

        this.updateDisplay();
    }

    decrementSeconds() {
        if (this.seconds > 0) {
            this.seconds--;
        } else if (this.seconds == 0 && this.minutes == 0 && this.hours == 0) {
            this.seconds = 59;
            this.minutes = 59;
            this.hours = 23;
        } else if (this.seconds == 0 && this.minutes > 0) {
            this.decrementMinutes();
            this.seconds = 59;
        }

        this.updateDisplay();
    }

    decrementMinutes() {
        if (this.minutes > 0){
            this.minutes--;
        } else if (this.minutes == 0 && this.hours == 0) {
            this.minutes = 59;
            this.hours = 23;
        } else if (this.minutes == 0 && this.hours > 0) {
            this.decrementHours();
            this.minutes = 59;
        }

        this.updateDisplay();
    }

    decrementHours() {
        if (this.hours > 0) {
            this.hours--;
        } else if (this.hours == 0){
            this.hours = 23;
        }

        this.updateDisplay();
    }

    updateDisplay(){
        if (this.twelveHrBtn.checked){
            this.updateTwelveHour();
        } else {
            this.updateTwentyFourHour();
        }
    }

    updateTwentyFourHour() {
        const hours = String(this.hours).padStart(2, "0");
        const minutes = String(this.minutes).padStart(2, "0");
        const seconds = String(this.seconds).padStart(2, "0");
        this.display.textContent = `${hours}:${minutes}:${seconds}`;
    }

    updateTwelveHour(){
        const hours = String(this.hours).padStart(2, "0");
        const minutes = String(this.minutes).padStart(2, "0");
        const seconds = String(this.seconds).padStart(2, "0");
        const phase = this.hours >= 12 ? "pm" : "am";

        if(this.hours == 0){
            this.display.textContent = `12:${minutes}:${seconds} ${phase}`;
        }  

        else{
            this.display.textContent = `${Math.abs(hours > 12 ? hours - 12: hours)}:${minutes}:${seconds} ${phase}`
        }
    }
    
}

// Export the class
export default ClockCounter;