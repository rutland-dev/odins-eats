import './style.css';
import LogoArt from './odin-eating.png';
import Menu from './menu.js';
import Hours from './hours.js';
import Contact from './contact.js';
import Spear from './spear-stuck-clear.png';

function components() {
    const message = `As Odin, the Allfather, I have feasted across the Nine Realms, but "Odin's Eats" on Midgard has captivated me with its divine culinary offerings. From the Thunderous Thor's Steak, rich and powerful, to the cunningly spiced Loki's Mischief Meatballs, each dish is a saga of flavors. The Freyja's Fjord Fish, with its oceanic freshness, and the ambrosial mead, worthy of Valhalla itself, left my godly palate thoroughly impressed. Odin's Eats is not merely a restaurant; it is a celestial experience, blending mortal craftsmanship with the taste of the divine. Skål to this remarkable feast that even the gods would cherish!\n-Odin`

    const logoDiv = document.createElement('div');
    logoDiv.setAttribute('id', 'logo');

    const spear = new Image();
    spear.src = Spear;

    const logoArt = new Image();
    logoArt.src = LogoArt;

    logoDiv.appendChild(logoArt);

    const logoText = document.createElement('h1');
    
    logoText.textContent = "Odin's Eats";
    logoDiv.appendChild(logoText);

    const navBar = document.createElement('div');
    navBar.setAttribute('id', 'navbar');

    const menuBtnDiv = document.createElement('div');
    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Menu';
    menuBtn.addEventListener('click', () => {
        while (contentDiv.firstChild) {
            contentDiv.removeChild(contentDiv.firstChild);
        }
        menuBtn.appendChild(spear);
        contentDiv.appendChild(Menu());
    });
    menuBtnDiv.appendChild(menuBtn);
    navBar.appendChild(menuBtnDiv);

    const hoursBtnDiv = document.createElement('div');
    const hoursBtn = document.createElement('button');
    hoursBtn.textContent = 'Hours';
    hoursBtn.addEventListener('click', () => {
        while (contentDiv.firstChild) {
            contentDiv.removeChild(contentDiv.firstChild);
        }
        hoursBtn.appendChild(spear);
        contentDiv.appendChild(Hours());
    });
    hoursBtnDiv.appendChild(hoursBtn);
    navBar.appendChild(hoursBtnDiv);

    const contactBtnDiv = document.createElement('div');
    const contactBtn = document.createElement('button');
    contactBtn.textContent = 'Contact';
    contactBtn.addEventListener('click', () => {
        while (contentDiv.firstChild) {
            contentDiv.removeChild(contentDiv.firstChild);
        }
        contactBtn.appendChild(spear);
        contentDiv.appendChild(Contact());
    });
    contactBtnDiv.appendChild(contactBtn);
    navBar.appendChild(contactBtnDiv);

    logoDiv.appendChild(navBar);

    const contentDiv = document.createElement('div');
    contentDiv.setAttribute('id', 'content');
    logoDiv.appendChild(contentDiv);

    const reviewDiv = document.createElement('div');
    reviewDiv.setAttribute('id', 'review-div');
    const reviewText = document.createElement('p');
    reviewText.textContent = message;
    reviewDiv.appendChild(reviewText);
    contentDiv.appendChild(reviewDiv);

    return logoDiv;
}

document.body.appendChild(components());a