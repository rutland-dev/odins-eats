"use strict";
(self["webpackChunkodins_eats"] = self["webpackChunkodins_eats"] || []).push([["contact"],{

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/contact.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLDZCQUFlLHNDQUFZO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFlBQVk7O0FBRTlDO0FBQ0Esa0NBQWtDLGFBQWE7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2RpbnMtZWF0cy8uL3NyYy9jb250YWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBwaG9uZU51bWJlciA9IFwiNTU1LU9ESU4tRUFUXCI7XG4gICAgY29uc3QgZW1haWxBZGRyZXNzID0gXCJvZGluc2VhdHNAYXNtYWlsLmdvZFwiXG4gICAgXG4gICAgY29uc3QgY29udGFjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3REaXYuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0LWRpdicpO1xuICAgIFxuICAgIGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBob25lLnRleHRDb250ZW50ID0gYFBob25lOiAke3Bob25lTnVtYmVyfWA7XG5cbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBlbWFpbC50ZXh0Q29udGVudCA9IGBFbWFpbDogJHtlbWFpbEFkZHJlc3N9YDtcblxuICAgIGNvbnN0IG5vdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IG5vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbm90ZURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3Qtbm90ZScpO1xuICAgIG5vdGUudGV4dENvbnRlbnQgPSBcIioqSXQncyBvZGlucyBlYXRzLCBub3Qgb2RpbiBzZWF0cy4gUGxlYXNlIHN0b3AgY2FsbGluZyB0byBzZWUgaWYgeW91IGNhbiBidXkgY2hhaXJzLioqXCJcbiAgICBub3RlRGl2LmFwcGVuZENoaWxkKG5vdGUpO1xuXG4gICAgY29udGFjdERpdi5hcHBlbmRDaGlsZChwaG9uZSk7XG4gICAgY29udGFjdERpdi5hcHBlbmRDaGlsZChlbWFpbCk7XG4gICAgY29udGFjdERpdi5hcHBlbmRDaGlsZChub3RlRGl2KTtcblxuICAgIHJldHVybiBjb250YWN0RGl2O1xuXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==