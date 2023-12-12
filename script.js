function updateHexClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hexColor = `#${padZero(hours)}${padZero(minutes)}${padZero(seconds)}`;

    document.body.style.backgroundColor = hexColor;

    setTimeout(updateHexClock, 1000); // Aktualizuj každou sekundu
}

function padZero(value) {
    return value < 10 ? `0${value}` : value;
}

updateHexClock();

let intervalId;
let remainingTime = 0;

function updateHexClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hexColor = `#${padZero(hours)}${padZero(minutes)}${padZero(seconds)}`;
    const hexTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;

    document.body.style.backgroundColor = hexColor;
    document.getElementById('hexTime').innerText = hexTime;

    setTimeout(updateHexClock, 1000); // Update every second
}

function padZero(value) {
    return value < 10 ? `0${value}` : value;
}

function startTimer() {
    const timerInput = document.getElementById('timerInput');
    const timerValue = parseInt(timerInput.value, 10);

    if (isNaN(timerValue) || timerValue <= 0) {
        alert('Enter a valid timer value.');
        return;
    }

    remainingTime = timerValue;
    updateHexClock(); // Update the hex clock immediately with the new background color

    intervalId = setInterval(function () {
        if (remainingTime > 0) {
            remainingTime--;
            updateHexClock();
        } else {
            clearInterval(intervalId);
            alert('Timer completed!');
        }
    }, 1000);
}

function cancelTimer() {
    clearInterval(intervalId);
    remainingTime = 0;
    updateHexClock(); // Update the hex clock immediately with the new background color
}

updateHexClock();