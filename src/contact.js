export default function () {
    const phoneNumber = "555-odin-eat";
    const emailAddress = "odinseats@asmail.god"
    
    const contactDiv = document.createElement('div');
    contactDiv.setAttribute('id', 'contact-div');
    
    const phone = document.createElement('p');
    phone.textContent = `Phone: ${phoneNumber}`;

    const email = document.createElement('p');
    email.textContent = `Email: ${emailAddress}`;

    contactDiv.appendChild(phone);
    contactDiv.appendChild(email);

    return contactDiv;

};