export default function () {
    const phoneNumber = "555-ODIN-EAT";
    const emailAddress = "odinseats@asmail.god"
    
    const contactDiv = document.createElement('div');
    contactDiv.setAttribute('id', 'contact-div');
    
    const phone = document.createElement('p');
    phone.textContent = `Phone: ${phoneNumber}`;

    const email = document.createElement('p');
    email.textContent = `Email: ${emailAddress}`;

    const noteDiv = document.createElement('div')
    const note = document.createElement('p');
    noteDiv.setAttribute('id', 'contact-note');
    note.textContent = "**It's odins eats, not odin seats. Please stop calling to see if you can buy chairs.**"
    noteDiv.appendChild(note);

    contactDiv.appendChild(phone);
    contactDiv.appendChild(email);
    contactDiv.appendChild(noteDiv);

    return contactDiv;

};