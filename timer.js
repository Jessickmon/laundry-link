import React from 'react';


export default function startTimer(duration, display) {
    duration = duration * 60
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        display.textContent = minutes;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}