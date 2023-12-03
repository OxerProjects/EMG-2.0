//Alert
var r = document.querySelector(':root');
var backgroundColor
const alertButton = document.querySelector('#alertButton')

function getBackground() {
    var rs = getComputedStyle(r);
    backgroundColor = r.style.getPropertyValue('--background-color');
}

getBackground();

function alertBackground() {
  r.style.setProperty('--background-color', 'var(--alert-color)');
}

function deAlertBackground() {
    r.style.setProperty('--background-color',`${backgroundColor}`);
}

//Button Activation
let i = 0
alertButton.addEventListener("click", () => {
    if (i == 0) {
        alertBackground()
        i = 1;
    } else {
        deAlertBackground()
        i = 0;
    }
})

//Get Alerts

async function getAlerts() {
    const response = await fetch("https://www.mako.co.il/Collab/amudanan/alerts.json");
    const alertArray = await response.json();
    if(alertArray.length > 0) {
        console.log("נמצאה אזעקה ב:");
        console.log(alertArray);
        console.log(alertArray.data);
        console.log(alertArray.cities);
    }
    setTimeout(getAlerts, 1000)
}

getAlerts()