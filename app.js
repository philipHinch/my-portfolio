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
const header = document.querySelector('header');
//color variables
let colorAlertDiv = document.querySelector('.color-alert');
const color = document.querySelectorAll('.color');
const activeColor = document.querySelectorAll('.active');
let logo = document.querySelector('.logo');
let mainImage = document.querySelector('.main-image');
let mainSvg = document.querySelector('.main-image svg');
let chosenColor;
let mode;
//create alert div
let alertDiv = document.createElement('div');


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
            //showAlert('Color Selected');
        }
        chosenColor = color.textContent;
        setColor('color', color);
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

    alertDiv.className = 'alert';
    alertDiv.style.color = localStorage.getItem('color');
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


// test orange:#ed8e26 blue:#2a9d8f green:#b1e84a pink:#ff87ab


function updatePortfolioColor() {
    activeColor.forEach((color) => {
        color.style.color = chosenColor;
    })
    if (chosenColor === '#2a9d8f') {
        logo.classList.remove('orange-background-color', 'green-background-color', 'pink-background-color');
        logo.classList.add('blue-background-color');
        logo.classList.remove('orange-border-bottom', 'green-border-bottom', 'pink-border-bottom');
        logo.classList.add('blue-border-bottom');
        header.classList.remove('orange-border-right', 'green-border-right', 'pink-border-right');
        header.classList.add('blue-border-right');
        mainSvg.classList.add('transparent');
        mainImage.classList.remove('orange-background-image');
        mainImage.classList.add('blue-background-image');
    } else if (chosenColor === '#ed8e26') {
        logo.classList.remove('blue-background-color', 'green-background-color', 'pink-background-color');
        logo.classList.add('orange-background-color');
        logo.classList.remove('blue-border-bottom', 'green-border-bottom', 'pink-border-bottom');
        logo.classList.add('orange-border-bottom');
        header.classList.remove('blue-border-right', 'green-border-right', 'pink-border-right');
        header.classList.add('orange-border-right');
        mainSvg.classList.add('transparent');
        mainImage.classList.remove('orange-background-image');
        mainImage.classList.add('orange-background-image');
    } else if (chosenColor === '#b1e84a') {
        logo.classList.remove('blue-background-color', 'orange-background-color', 'pink-background-color');
        logo.classList.add('green-background-color');
        logo.classList.remove('blue-border-bottom', 'orange-border-bottom', 'pink-border-bottom');
        logo.classList.add('green-border-bottom');
        header.classList.remove('orange-border-right', 'blue-border-right', 'pink-border-right');
        header.classList.add('green-border-right');
        mainSvg.classList.add('transparent');
        mainImage.classList.remove('orange-background-image');
        mainImage.classList.add('green-background-image');
    } else if (chosenColor === '#ff87ab') {
        logo.classList.remove('blue-background-color', 'orange-background-color', 'green-background-color');
        logo.classList.add('pink-background-color');
        logo.classList.remove('blue-border-bottom', 'orange-border-bottom', 'green-border-bottom');
        logo.classList.add('pink-border-bottom');
        header.classList.remove('orange-border-right', 'blue-border-right', 'green-border-right');
        header.classList.add('pink-border-right');
        mainSvg.classList.add('transparent');
        mainImage.classList.remove('orange-background-image');
        mainImage.classList.add('pink-background-image');






        // CONTINUE WITH CHANGING COLORS 
    }
};




