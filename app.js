//VARIABLES
let dayUI = document.querySelector('.day');
let monthUI = document.querySelector('.month');
let yearUI = document.querySelector('.year');
let hourUI = document.querySelector('.hour');
let minUI = document.querySelector('.min');
let secUI = document.querySelector('.sec');
let colonUI = document.querySelector('.colon');
let dateUI = document.querySelector('.date');
let timeUI = document.querySelector('.time');

//FUNCTIONS
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

    dateUI.innerHTML = `
        <span class="day">${ day }/</span><span class="month">${ month }/</span><span class="year">${ year }</span>
    `;

    timeUI.innerHTML = `
        <span class="hour">${ hour }:</span><span class="min">${ min }</span><span class="colon">:</span><span class="sec">${ sec }</span>
    `;
};

setInterval(function () {
    getTime();
}, 1000);