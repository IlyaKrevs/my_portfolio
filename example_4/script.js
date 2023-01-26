const arrowLeft = document.querySelector('.button_left');
const arrowRight = document.querySelector('.button_right');
const carouselTrack = document.querySelector('.carousel__track');
const carouselItem = document.querySelector('.carousel__item');

const mediaQuery = window.matchMedia('(max-width: 425px)')


let startPos = 0;


arrowLeft.addEventListener('click', (e) => {
    if (mediaQuery.matches) {
        if (startPos < 0) {
            startPos = startPos + 425;
        }
    }
    else {
        if (startPos < 0) {
            startPos = startPos + 600;
        }
    }
    carouselTrack.style.marginLeft = startPos + 'px';
});

arrowRight.addEventListener('click', (e) => {
    if (mediaQuery.matches) {
        if (startPos > -850) {
            startPos = startPos - 425;
        }
    }
    else {
        if (startPos > -1200) {
            startPos = startPos - 600;
        }
    }
    carouselTrack.style.marginLeft = startPos + 'px';
});






function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    return {
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 30 * 60 * 1000); // for endless timer
initializeClock('countdown', deadline);