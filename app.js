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
let aboutTextH2 = document.querySelector('.about-text-h2');
const aboutText = document.querySelector('.about-text');
const aboutText2 = document.querySelector('.about-text2');
const aboutEmail = document.querySelector('.about-email');
const header = document.querySelector('header');
const header1 = document.querySelector('header .header');
const html = document.querySelector('html');
const body = document.querySelector('body');
//color variables
let colorAlertDiv = document.querySelector('.color-alert');
const color = document.querySelectorAll('.color');
const activeColor = document.querySelectorAll('.active');
let logo = document.querySelector('.logo');
let mainImage = document.querySelector('.main-image');
let mainText = document.querySelector('.main-text');
let mainSvg = document.querySelector('.main-image svg');
let viewProjectsBtn = document.querySelector('.view-projects-btn');
let contactMeBtn = document.querySelector('.contact-me-btn');
let btn = document.querySelector('.btn');
let avatar = document.querySelector('.avatar');
let project = document.querySelectorAll('.project');
let projectLinks = document.querySelectorAll('.project-link1');
let githubLinks = document.querySelectorAll('.github-repo1');
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
    timeBox.classList.toggle('dark-color');
    // //change work in progress color
    // workInProgress.classList.toggle('dark-color');
    //change about text color
    if (aboutTextH2 === null && aboutText === null && aboutEmail === null) {

    } else {
        aboutTextH2.classList.toggle('dark-color');
        aboutText.classList.toggle('dark-color');
        aboutText2.classList.toggle('dark-color');
        aboutEmail.classList.toggle('dark-color');
    }
} else {
    header.classList.toggle('min-height-100');
    html.classList.add('min-height-100');
    //html.classList.add('overflow-hidden');
    // html.style.height = '100vh';
    // html.style.overflow = 'hidden';
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
    aboutText2.classList.toggle('dark-color');
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
    if (localStorage.getItem('color') === null) {
        localStorage.setItem('color', '#ed8e26');
    } else {
        getColor()
        setColor()
    }
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
        <span class="day dark-color">${ day } <span style="color:${ chosenColor }">/</span>
        </span><span class="month dark-color">${ month } <span style="color:${ chosenColor }">/</span>
        </span><span class="year dark-color">${ year }</span>
        `;
        timeUI.innerHTML = `
        <span class="hour dark-color">${ hour }<span class="colo" style="color:${ chosenColor }">:</span></span><span class="min dark-color">${ min }</span><span class="colon"><span class="colo" style="color:${ chosenColor }">:</span></span><span class="sec dark-color">${ sec }</span>
        `;
    } else {

        dateUI.innerHTML = `
        <span class="day">${ day } <span style="color:${ chosenColor }">/</span>
        </span><span class="month">${ month } <span style="color:${ chosenColor }">/</span>
        </span><span class="year">${ year }</span>
    `;

        timeUI.innerHTML = `
        <span class="hour" style="color:${ chosenColor }">${ hour }<span class="not-active">:</span></span><span class="min" style="color:${ chosenColor }">${ min }</span><span class="colon"><span class="not-active">:</span></span><span class="sec" style="color:${ chosenColor }">${ sec }</span>
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
        viewProjectsBtn.style.backgroundColor = chosenColor;
        viewProjectsBtn.style.borderColor = chosenColor;
        contactMeBtn.style.borderColor = chosenColor;
    })
    if (chosenColor === '#2a9d8f') {
        logo.classList.remove('orange-background-color', 'green-background-color', 'pink-background-color');
        logo.classList.add('blue-background-color');
        logo.classList.remove('orange-border-bottom', 'green-border-bottom', 'pink-border-bottom');
        logo.classList.add('blue-border-bottom');
        header.classList.remove('orange-border-right', 'green-border-right', 'pink-border-right');
        header.classList.add('blue-border-right');
        header.classList.remove('orange-border-bottom', 'green-border-bottom', 'pink-border-bottom');
        header.classList.add('blue-border-bottom');
        if (mainSvg === null) {
        } else {
            mainSvg.classList.add('transparent');
        }
        if (mainImage === null) {
        } else {
            mainImage.classList.remove('orange-background-image');
            mainImage.classList.add('blue-background-image');
        }
        if (mainText === null) {
        } else {
            mainText.classList.remove('orange-border-color', 'green-border-color', 'pink-border-color');
            mainText.classList.add('blue-border-color');
        }
        if (avatar === null) {

        } else {
            avatar.classList.remove('orange-border-color', 'green-border-color', 'pink-border-color');
            avatar.classList.add('blue-border-color');
        }
        if (aboutTextH2 === null) {

        } else {
            aboutTextH2.classList.remove('orange-border-color', 'green-border-color', 'pink-border-color');
            aboutTextH2.classList.add('blue-color');
        }
        if (project === null) {

        } else {
            project.forEach((proj) => {
                proj.classList.remove('orange-background-image', 'green-background-image', 'pink-background-image');
                proj.classList.add('blue-background-image');
                proj.classList.remove('orange-border-color', 'green-border-color', 'pink-border-color');
                proj.classList.add('blue-border-color');
            })
            projectLinks.forEach((proj) => {
                proj.classList.remove('orange-border-color', 'green-border-color', 'pink-border-color');
                proj.classList.add('blue-border-color');
            })
            githubLinks.forEach((git) => {
                git.classList.remove('orange-border-color', 'green-border-color', 'pink-border-color');
                git.classList.add('blue-border-color');
            })
        }




    } else if (chosenColor === '#ed8e26') {
        logo.classList.remove('blue-background-color', 'green-background-color', 'pink-background-color');
        logo.classList.add('orange-background-color');
        logo.classList.remove('blue-border-bottom', 'green-border-bottom', 'pink-border-bottom');
        logo.classList.add('orange-border-bottom');
        header.classList.remove('blue-border-right', 'green-border-right', 'pink-border-right');
        header.classList.add('orange-border-right');
        header.classList.remove('blue-border-bottom', 'green-border-bottom', 'pink-border-bottom');
        header.classList.add('orange-border-bottom');
        if (mainSvg === null) {
        } else {
            mainSvg.classList.add('transparent');
        }
        if (mainImage === null) {
        } else {
            mainImage.classList.remove('blue-background-image');
            mainImage.classList.add('orange-background-image');
        }
        if (mainText === null) {
        } else {
            mainText.classList.remove('blue-border-color', 'green-border-color', 'pink-border-color');
            mainText.classList.add('orange-border-color');
        }
        if (avatar === null) {

        } else {
            avatar.classList.remove('blue-border-color', 'green-border-color', 'pink-border-color');
            avatar.classList.add('orange-border-color');
        }
        if (aboutTextH2 === null) {

        } else {
            aboutTextH2.classList.remove('blue-border-color', 'green-border-color', 'pink-border-color');
            aboutTextH2.classList.add('orange-color');
        }
        if (project === null) {

        } else {
            project.forEach((proj) => {
                proj.classList.remove('blue-background-image', 'green-background-image', 'pink-background-image');
                proj.classList.add('orange-background-image');
                proj.classList.remove('blue-border-color', 'green-border-color', 'pink-border-color');
                proj.classList.add('orange-border-color');
            })
            projectLinks.forEach((proj) => {
                proj.classList.remove('blue-border-color', 'green-border-color', 'pink-border-color');
                proj.classList.add('orange-border-color');
            })
            githubLinks.forEach((git) => {
                git.classList.remove('blue-border-color', 'green-border-color', 'pink-border-color');
                git.classList.add('orange-border-color');
            })
        }

    } else if (chosenColor === '#b1e84a') {
        logo.classList.remove('blue-background-color', 'orange-background-color', 'pink-background-color');
        logo.classList.add('green-background-color');
        logo.classList.remove('blue-border-bottom', 'orange-border-bottom', 'pink-border-bottom');
        logo.classList.add('green-border-bottom');
        header.classList.remove('orange-border-right', 'blue-border-right', 'pink-border-right');
        header.classList.add('green-border-right');
        header.classList.remove('orange-border-bottom', 'blue-border-bottom', 'pink-border-bottom');
        header.classList.add('green-border-bottom');
        if (mainSvg === null) {
        } else {
            mainSvg.classList.add('transparent');
        }
        if (mainImage === null) {
        } else {
            mainImage.classList.remove('orange-background-image');
            mainImage.classList.add('green-background-image');
        }
        if (mainText === null) {
        } else {
            mainText.classList.remove('orange-border-color', 'blue-border-color', 'pink-border-color');
            mainText.classList.add('green-border-color');
        }
        if (avatar === null) {

        } else {
            avatar.classList.remove('orange-border-color', 'blue-border-color', 'pink-border-color');
            avatar.classList.add('green-border-color');
        }
        if (aboutTextH2 === null) {

        } else {
            aboutTextH2.classList.remove('orange-border-color', 'blue-border-color', 'pink-border-color');
            aboutTextH2.classList.add('green-color');
        }
        if (project === null) {

        } else {
            project.forEach((proj) => {
                proj.classList.remove('orange-background-image', 'blue-background-image', 'pink-background-image');
                proj.classList.add('green-background-image');
                proj.classList.remove('blue-border-color', 'green-border-color', 'pink-border-color');
                proj.classList.add('green-border-color');
            })
            projectLinks.forEach((proj) => {
                proj.classList.remove('orange-border-color', 'blue-border-color', 'pink-border-color');
                proj.classList.add('green-border-color');
            })
            githubLinks.forEach((git) => {
                git.classList.remove('orange-border-color', 'blue-border-color', 'pink-border-color');
                git.classList.add('green-border-color');
            })
        }

    } else if (chosenColor === '#ff87ab') {
        logo.classList.remove('blue-background-color', 'orange-background-color', 'green-background-color');
        logo.classList.add('pink-background-color');
        logo.classList.remove('blue-border-bottom', 'orange-border-bottom', 'green-border-bottom');
        logo.classList.add('pink-border-bottom');
        header.classList.remove('orange-border-right', 'blue-border-right', 'green-border-right');
        header.classList.add('pink-border-right');
        header.classList.remove('orange-border-bottom', 'blue-border-bottom', 'green-border-bottom');
        header.classList.add('pink-border-bottom');
        if (mainSvg === null) {
        } else {
            mainSvg.classList.add('transparent');
        }
        if (mainImage === null) {
        } else {
            mainImage.classList.remove('orange-background-image');
            mainImage.classList.add('pink-background-image');
        }
        if (mainText === null) {
        } else {
            mainText.classList.remove('orange-border-color', 'blue-border-color', 'green-border-color');
            mainText.classList.add('pink-border-color');
        }
        if (avatar === null) {

        } else {
            avatar.classList.remove('orange-border-color', 'blue-border-color', 'green-border-color');
            avatar.classList.add('pink-border-color');
        }
        if (aboutTextH2 === null) {

        } else {
            aboutTextH2.classList.remove('orange-border-color', 'blue-border-color', 'green-border-color');
            aboutTextH2.classList.add('pink-color');
        }
        if (project === null) {

        } else {
            project.forEach((proj) => {
                proj.classList.remove('blue-background-image', 'green-background-image', 'orange-background-image');
                proj.classList.add('pink-background-image');
                proj.classList.remove('orange-border-color', 'green-border-color', 'blue-border-color');
                proj.classList.add('pink-border-color');
            })
            projectLinks.forEach((proj) => {
                proj.classList.remove('orange-border-color', 'green-border-color', 'blue-border-color');
                proj.classList.add('pink-border-color');
            })
            githubLinks.forEach((git) => {
                git.classList.remove('orange-border-color', 'green-border-color', 'blue-border-color');
                git.classList.add('pink-border-color');
            })
        }






        // CONTINUE WITH CHANGING COLORS 
    }
};



