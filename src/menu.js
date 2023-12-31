export default function Menu() {
    const menuItems = [
        {
            name: "Thunderous Thor's Steaks",
            description: "Rich and powerful steak. You can't lift it off the plate.",
            price: "25 Gold Pieces"
        },
        {
            name: "Loki's Mischief Meatballs",
            description: "Spicy...kind of fucked up.",
            price: "15 Gold Chunks"
        },
        {
            name: "Freyja's Fjord Fish",
            description: "Oceanic freshness straight out the fjords.",
            price: "20 Gold Nugs"
        }
    ];
    const menuDiv = document.createElement('div');
    menuDiv.setAttribute('id', 'menu-div');
    menuItems.forEach(item => {
        const newItem = document.createElement('div');
        newItem.classList.add('menu-item');
        const itemName = document.createElement('h2');
        itemName.textContent = item.name;
        itemName.classList.add('menu-item-name');

        const itemDescription = document.createElement('p');
        itemDescription.textContent = `Description: ${item.description}`;

        const itemPrice = document.createElement('p');
        itemPrice.textContent = `Price: ${item.price}`;

        newItem.appendChild(itemName);
        newItem.appendChild(itemDescription);
        newItem.appendChild(itemPrice);

        menuDiv.appendChild(newItem);
    });

    return menuDiv;
}