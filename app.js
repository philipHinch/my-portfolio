//DATE VARIABLES
// let dayUI = document.querySelector('.day');
// let monthUI = document.querySelector('.month');
// let yearUI = document.querySelector('.year');
// let hourUI = document.querySelector('.hour');
// let minUI = document.querySelector('.min');
// let secUI = document.querySelector('.sec');
// let colonUI = document.querySelector('.colon');
let dateUI = document.querySelector('.date');
let timeUI = document.querySelector('.time');

//UI VARIABLES

const toggleMode = document.getElementById('toggle-mode');
const modeText = document.querySelector('.mode-text');
const lightDiv = document.querySelector('.light-div');
let h1 = document.querySelectorAll('h1');
const contactBtn = document.querySelector('.contact-me-btn');
const timeBox = document.querySelector('.time');

//EVENT LISTENERS

toggleMode.addEventListener('click', () => {
    //toggle visibility class name
    lightDiv.classList.toggle('visibility');
    //change light/dark mode text color
    modeText.classList.toggle('dark-color');
    //change h1s text color
    h1.forEach((el) => {
        el.classList.toggle('dark-color')
    });
    //change contact me button text color
    contactBtn.classList.toggle('dark-color');
    //change time border color
    timeBox.classList.toggle('dark-color')

    //CHANGE BUTTON BACKGROUND ON HOVER IN LIGHT MODE


})




//TIME & DATE FUNCTIONS
function getTime() {
    let day = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();

    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;
    hour = hour < 10 ? '0' + hour : hour;
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;

    if (lightDiv.classList.contains('visibility')) {
        dateUI.innerHTML = `
        <span class="day dark-color">${ day } <span class="active">/</span>
        </span><span class="month dark-color">${ month } <span class="active">/</span>
        </span><span class="year dark-color">${ year }</span>
        `;
        timeUI.innerHTML = `
        <span class="hour dark-color">${ hour }<span class="active colo">:</span></span><span class="min dark-color">${ min }</span><span class="colon"><span class="active colo">:</span></span><span class="sec dark-color">${ sec }</span>
        `;
    } else {

        dateUI.innerHTML = `
        <span class="day">${ day } <span class="active">/</span>
        </span><span class="month">${ month } <span class="active">/</span>
        </span><span class="year">${ year }</span>
    `;

        timeUI.innerHTML = `
        <span class="hour">${ hour }<span class="not-active">:</span></span><span class="min">${ min }</span><span class="colon"><span class="not-active">:</span></span><span class="sec">${ sec }</span>
    `;
    }


};

setInterval(function () {
    getTime();
}, 1000);


