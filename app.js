//DATE VARIABLES
let dateUI = document.querySelector('.date');
let timeUI = document.querySelector('.time');

//UI VARIABLES ------------------------------------------------------------------------------

const toggleMode = document.getElementById('toggle-mode');
const modeText = document.querySelector('.mode-text');
const lightDiv = document.querySelector('.light-div');
let h1 = document.querySelectorAll('h1');
const contactBtn = document.querySelector('.contact-me-btn');
const timeBox = document.querySelector('.time');
const workInProgress = document.querySelector('.work-in-progress');
const mainMenuLinks = document.querySelectorAll('.menu-item');
const mainNavBar = document.querySelector('.main-nav-bar');
const aboutTextH2 = document.querySelector('.about-text-h2');
const aboutText = document.querySelector('.about-text');
const aboutEmail = document.querySelector('.about-email');
const color = document.querySelectorAll('.color');
const activeColor = document.querySelectorAll('.active');
let chosenColor;
let mode;


//EVENT LISTENERS --------------------------------------------------------------------------

//get data from local storage and change classes
if (localStorage.getItem('mode') === 'light-mode-active') {
    toggleMode.checked = true;
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
    // //change work in progress color
    // workInProgress.classList.toggle('dark-color');
    //change about text color
    if (aboutTextH2 === null && aboutText === null && aboutEmail === null) {

    } else {
        aboutTextH2.classList.toggle('dark-color');
        aboutText.classList.toggle('dark-color');
        aboutEmail.classList.toggle('dark-color');
    }
}



//toggle light / dark modes 
toggleMode.addEventListener('click', () => {
    if (localStorage.getItem('mode') === null) {
        mode = 'light-mode-active';
        localStorage.setItem('mode', 'light-mode-active');
    } else if (localStorage.getItem('mode') === 'dark-mode-active') {
        localStorage.setItem('mode', 'light-mode-active');
        mode = 'light-mode-active';
    } else {
        localStorage.getItem('mode') === 'light-mode-active';
        localStorage.setItem('mode', 'dark-mode-active');
        mode = 'dark-mode-active';
    }

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
    // //change work in progress color
    // workInProgress.classList.toggle('dark-color');
    //change about text color
    aboutTextH2.classList.toggle('dark-color');
    aboutText.classList.toggle('dark-color');
    aboutEmail.classList.toggle('dark-color');

    //CHANGE BUTTON BACKGROUND ON HOVER IN LIGHT MODE

});

//PORTFOLIO COLOR CHANGE 
//on color click show alert & set color
color.forEach((color) => {
    color.addEventListener('click', () => {
        if (document.querySelector('.alert')) {
            return
        } else {
            showAlert('Color Selected');
        }
        chosenColor = color.textContent;
        setColor('color', color);
        return chosenColor;
    })
});

// update colors on window load
document.addEventListener('DOMContentLoaded', () => {
    getColor()
    setColor()
});

//FUNCTIONS --------------------------------------------------------------------------------------------
//time and date functions
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

//call time function
setInterval(function () {
    getTime();
}, 1000);

// alert function
function showAlert(message) {
    let colorAlertDiv = document.querySelector('.color-alert');
    let alertDiv = document.createElement('div');
    alertDiv.className = 'alert active';
    alertDiv.textContent = message;
    colorAlertDiv.appendChild(alertDiv);
    setTimeout(() => {
        document.querySelector('.alert').remove()
    }, 1000)
};

//local storage color functions NOT COMPLETE
function getColor() {
    let color;
    if (localStorage.getItem('color') === null) {
        return
    } else {
        color = localStorage.getItem('color');
    }
    chosenColor = color;
    return chosenColor;
};

function setColor() {
    localStorage.setItem('color', chosenColor);
    updatePortfolioColor()
};

function updatePortfolioColor() {
    activeColor.forEach((color) => {
        color.style.color = chosenColor;
    })
};




