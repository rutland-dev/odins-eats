export default function () {
    const hoursText = "Sunday: 10am to 10pm\n\nMonday - Thursday: 11am to 12am\n\nFriday, Saturday: 11am to 3am"
    const hoursDiv = document.createElement('div');
    hoursDiv.setAttribute('id', 'hours-div');
    const hoursDisplay = document.createElement('p');
    hoursDisplay.textContent = hoursText;
    hoursDiv.appendChild(hoursDisplay);

    return hoursDiv;
}