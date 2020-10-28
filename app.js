

const refs = {
    daysField: document.querySelector('[data-value="days"]'),
    hoursField: document.querySelector('[data-value="hours"]'),
    minsField: document.querySelector('[data-value="mins"]'),
    secsField: document.querySelector('[data-value="secs"]'),
    timer: document.querySelector('#timer-1')
} 

// const rewerseTimer = {
//     targetDate: new Date('Jul 17, 2021'),
//     selector: '#timer-1',

//     startNow() {
//         setInterval(() => {
//             timerSet()
//      }, 1000)
// }
// }


class CountdownTimer  {
    constructor({targetDate,selector }) {
     this.targetDate = targetDate;
     this.selector = selector;

}
    startNow() {
        setInterval(() => {
            this.timerSet()
        }, 1000)
    }
  
    timerSet() {
            const currentTime = Date.now()
            const timer = this.targetDate - currentTime
            const { days, hours, mins, secs } = this.getTime(timer)

            refs.daysField.textContent = days
            refs.hoursField.textContent = hours
            refs.minsField.textContent = mins
            refs.secsField.textContent = secs
}

     pad(value) {
    return String(value).padStart(2, '0')
}

     getTime(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));  
    
    return {days, hours, mins, secs}
}
    
}

const newTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});



newTimer.timerSet()
newTimer.startNow()

