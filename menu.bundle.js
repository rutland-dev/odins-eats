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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0RBQXNELGlCQUFpQjs7QUFFdkU7QUFDQSwwQ0FBMEMsV0FBVzs7QUFFckQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2RpbnMtZWF0cy8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnUoKSB7XG4gICAgY29uc3QgbWVudUl0ZW1zID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIlRodW5kZXJvdXMgVGhvcidzIFN0ZWFrc1wiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiUmljaCBhbmQgcG93ZXJmdWwgc3RlYWsuIFlvdSBjYW4ndCBsaWZ0IGl0IG9mZiB0aGUgcGxhdGUuXCIsXG4gICAgICAgICAgICBwcmljZTogXCIyNSBHb2xkIFBpZWNlc1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiTG9raSdzIE1pc2NoaWVmIE1lYXRiYWxsc1wiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiU3BpY3kuLi5raW5kIG9mIGZ1Y2tlZCB1cC5cIixcbiAgICAgICAgICAgIHByaWNlOiBcIjE1IEdvbGQgQ2h1bmtzXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJGcmV5amEncyBGam9yZCBGaXNoXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJPY2VhbmljIGZyZXNobmVzcyBzdHJhaWdodCBvdXQgdGhlIGZqb3Jkcy5cIixcbiAgICAgICAgICAgIHByaWNlOiBcIjIwIEdvbGQgTnVnc1wiXG4gICAgICAgIH1cbiAgICBdO1xuICAgIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS1kaXYnKTtcbiAgICBtZW51SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgbmV3SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuZXdJdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xuICAgICAgICBpdGVtTmFtZS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tbmFtZScpO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaXRlbURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYERlc2NyaXB0aW9uOiAke2l0ZW0uZGVzY3JpcHRpb259YDtcblxuICAgICAgICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGl0ZW1QcmljZS50ZXh0Q29udGVudCA9IGBQcmljZTogJHtpdGVtLnByaWNlfWA7XG5cbiAgICAgICAgbmV3SXRlbS5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XG4gICAgICAgIG5ld0l0ZW0uYXBwZW5kQ2hpbGQoaXRlbURlc2NyaXB0aW9uKTtcbiAgICAgICAgbmV3SXRlbS5hcHBlbmRDaGlsZChpdGVtUHJpY2UpO1xuXG4gICAgICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQobmV3SXRlbSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWVudURpdjtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=