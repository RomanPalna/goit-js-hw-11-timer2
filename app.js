function pad(value) {
    return String(value).padStart(2, '0')
}

function getTime(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));  
    
    return {days, hours, mins, secs}
}

const refs = {
    daysField: document.querySelector('[data-value="days"]'),
    hoursField: document.querySelector('[data-value="hours"]'),
    minsField: document.querySelector('[data-value="mins"]'),
    secsField: document.querySelector('[data-value="secs"]'),
    timer: document.querySelector('#timer-1')
} 

const rewerseTimer = {
    targetDate: new Date('Jul 17, 2021'),
    selector: '#timer-1',

    startNow() {
        setInterval(() => {
            timerSet()
     }, 1000)
}
}

function timerSet() {
            const currentTime = Date.now()
            const timer = rewerseTimer.targetDate - currentTime
            const { days, hours, mins, secs } = getTime(timer)

            refs.daysField.textContent = days
            refs.hoursField.textContent = hours
            refs.minsField.textContent = mins
            refs.secsField.textContent = secs
}


timerSet()
rewerseTimer.startNow()

