"use strict";
(self["webpackChunkodins_eats"] = self["webpackChunkodins_eats"] || []).push([["menu"],{

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Menu)
/* harmony export */ });
function Menu() {
    const menuItems = [
        {
            name: "Thunderous Thor's Steaks",
            description: "Rich and powerful steak. Will make your head explode.",
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0RBQXNELGlCQUFpQjs7QUFFdkU7QUFDQSwwQ0FBMEMsV0FBVzs7QUFFckQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2RpbnMtZWF0cy8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnUoKSB7XG4gICAgY29uc3QgbWVudUl0ZW1zID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIlRodW5kZXJvdXMgVGhvcidzIFN0ZWFrc1wiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiUmljaCBhbmQgcG93ZXJmdWwgc3RlYWsuIFdpbGwgbWFrZSB5b3VyIGhlYWQgZXhwbG9kZS5cIixcbiAgICAgICAgICAgIHByaWNlOiBcIjI1IEdvbGQgUGllY2VzXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJMb2tpJ3MgTWlzY2hpZWYgTWVhdGJhbGxzXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTcGljeS4uLmtpbmQgb2YgZnVja2VkIHVwLlwiLFxuICAgICAgICAgICAgcHJpY2U6IFwiMTUgR29sZCBDaHVua3NcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkZyZXlqYSdzIEZqb3JkIEZpc2hcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIk9jZWFuaWMgZnJlc2huZXNzIHN0cmFpZ2h0IG91dCB0aGUgZmpvcmRzLlwiLFxuICAgICAgICAgICAgcHJpY2U6IFwiMjAgR29sZCBOdWdzXCJcbiAgICAgICAgfVxuICAgIF07XG4gICAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LWRpdicpO1xuICAgIG1lbnVJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBuZXdJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5ld0l0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gICAgICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XG4gICAgICAgIGl0ZW1OYW1lLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1uYW1lJyk7XG5cbiAgICAgICAgY29uc3QgaXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBpdGVtRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgRGVzY3JpcHRpb246ICR7aXRlbS5kZXNjcmlwdGlvbn1gO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaXRlbVByaWNlLnRleHRDb250ZW50ID0gYFByaWNlOiAke2l0ZW0ucHJpY2V9YDtcblxuICAgICAgICBuZXdJdGVtLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcbiAgICAgICAgbmV3SXRlbS5hcHBlbmRDaGlsZChpdGVtRGVzY3JpcHRpb24pO1xuICAgICAgICBuZXdJdGVtLmFwcGVuZENoaWxkKGl0ZW1QcmljZSk7XG5cbiAgICAgICAgbWVudURpdi5hcHBlbmRDaGlsZChuZXdJdGVtKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtZW51RGl2O1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==