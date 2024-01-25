/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/add-to-favorites.js":
/*!*****************************************!*\
  !*** ./src/scripts/add-to-favorites.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addToFavorites: () => (/* binding */ addToFavorites)
/* harmony export */ });
const addToFavorites = () => {
  const likeBtn = document.querySelector('.offers__card-like');
  const offersCards = document.querySelectorAll('.offers__card');
  offersCards.forEach(card => {
    card.addEventListener('click', event => {
      event.preventDefault();
      if (event.target.closest('.offers__card-like')) {
        card.classList.toggle('offers__card--active');
      }
    });
  });
};

/***/ }),

/***/ "./src/scripts/calendar.js":
/*!*********************************!*\
  !*** ./src/scripts/calendar.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addDate: () => (/* binding */ addDate)
/* harmony export */ });
const addDate = () => {
  flatpickr('.top__input-date-1', {
    enableTime: false,
    dateFormat: "d.m.Y",
    minDate: "today",
    language: 'ru'
  });
  flatpickr('.top__input-date-2', {
    enableTime: false,
    dateFormat: "d.m.Y",
    minDate: "today",
    language: 'ru'
  });
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icons/home-icon.svg */ "./src/img/icons/home-icon.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icons/calendar-icon.svg */ "./src/img/icons/calendar-icon.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icons/users-icon.svg */ "./src/img/icons/users-icon.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --text-contrast: #FFF;
  --text-primary: #0C131D;
  --text-secondary: #9EA9B7;
  --text-accent: #96B763;
  --bg-primary: #F9F9F9;
  --bg-green: #96B763;
  --bg-secondary: #373B41;
  --bg-green-hover: #7C9852;
}

body {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  color: #0C131D;
  color: var(--text-primary);
}

h1 {
  font-size: 55px;
  font-weight: 700;
  line-height: 130%;
  color: #FFF;
  color: var(--text-contrast);
}

h2 {
  font-size: 45px;
  font-weight: 700;
  line-height: 130%;
  color: #0C131D;
  color: var(--text-primary);
}

.green-btn {
  padding: 16px 42px 16px 42px;
  border-radius: 12px;
  outline: none;
  background-color: #96B763;
  background-color: var(--bg-green);
  color: #FFF;
  color: var(--text-contrast);
  border: none;
  box-shadow: 1px 1px 16px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.1s;
}
.green-btn:hover {
  background-color: #7C9852;
  background-color: var(--bg-green-hover);
  transition: all 0.1s;
}

.white-btn {
  padding: 16px 20px 16px 20px;
  border-radius: 12px;
  outline: none;
  background-color: #F9F9F9;
  background-color: var(--bg-primary);
  color: #0C131D;
  color: var(--text-primary);
  border: none;
  box-shadow: 1px 1px 16px 0px rgba(0, 0, 0, 0.1);
}

.tr-btn {
  font-size: 20px;
  font-weight: 600;
  padding: 16px 20px 16px 20px;
  border-radius: 12px;
  outline: none;
  background-color: transparent;
  color: #96B763;
  color: var(--text-accent);
  border: 1px solid #96B763;
  border: 1px solid var(--text-accent);
  transition: all 0.3s;
}
.tr-btn:hover {
  transition: all 0.3s;
  color: #FFF;
  color: var(--text-contrast);
  background-color: #96B763;
  background-color: var(--bg-green);
}

html {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}

*,
*::after,
*::before {
  box-sizing: inherit;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

input,
button,
textarea,
select {
  font: inherit;
}

a {
  -webkit-text-decoration: none;
  text-decoration: none;
}

ul[class],
ol[class] {
  padding: 0;
}

ul[class] {
  list-style: none;
}

img {
  max-width: 100%;
  display: block;
}

input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type=number],
input[type=number]:hover,
input[type=number]:focus {
  -webkit-appearance: none;
          appearance: none;
  -moz-appearance: textfield;
}

.header__wrapper {
  padding: 20px 0;
}
.header__items {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.header__item-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
}
.header__logo-link {
  font-size: 20px;
  font-weight: 600;
  line-height: 130%;
  color: #0C131D;
  color: var(--text-primary);
}
.header__menu-item-link {
  color: #9EA9B7;
  color: var(--text-secondary);
}
.header__menu-link-tomain {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
}
.header__menu-link-tomain:hover {
  color: #96B763;
  color: var(--text-accent);
  transition: all 0.1s;
}
.header__menu-link-tomain:hover svg path {
  fill: #96B763;
  fill: var(--text-accent);
  transition: all 0.1s;
}
.header__menu-link-tomain:active {
  color: #7C9852;
  color: var(--bg-green-hover);
  transition: all 0.1s;
}
.header__menu-link-tomain:active svg path {
  fill: #7C9852;
  fill: var(--bg-green-hover);
  transition: all 0.1s;
}
.header__login-btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  background-color: transparent;
  font-weight: 600;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.1s;
}
.header__login-btn:hover {
  color: #96B763;
  color: var(--text-accent);
  transition: all 0.1s;
}
.header__login-btn:hover svg path {
  fill: #96B763;
  fill: var(--text-accent);
  transition: all 0.1s;
}
.header__login-btn:active {
  color: #7C9852;
  color: var(--bg-green-hover);
  transition: all 0.1s;
}
.header__login-btn:active svg path {
  fill: #7C9852;
  fill: var(--bg-green-hover);
  transition: all 0.1s;
}

.top {
  position: relative;
  height: 682px;
  margin-bottom: 84px;
}
.top__bg {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}
.top__wrapper {
  max-width: 1295px;
  padding-top: 78px;
  margin: 0 auto;
}
.top__title {
  padding-bottom: 35px;
}
.top__input-label-place {
  width: 100%;
}
.top__input-label {
  position: relative !important;
}
.top__input-text {
  position: absolute !important;
}
.top__input-text {
  font-weight: 400;
  left: 50px;
  top: 15px;
  transition: 0.2s;
  cursor: text;
  color: #9EA9B7;
  color: var(--text-secondary);
}
.top__input-label .top__input:focus + span, .top__input-label .top__input:valid + span {
  font-size: 8px;
  font-weight: 600;
  top: -20px;
  left: 14px;
  text-transform: uppercase;
  color: #FFF;
  color: var(--text-contrast);
}
.top__inputs-box {
  padding: 40px 34px;
  border-radius: 20px;
  border: 1px solid #FFF;
  border: 1px solid var(--text-contrast);
  background: rgba(255, 255, 255, 0.1);
  -webkit-backdrop-filter: blur(22px);
          backdrop-filter: blur(22px);
  display: flex;
  align-items: center;
  gap: 4px;
}
.top__input {
  padding: 16px 10px 16px 46px;
  border-radius: 12px;
  outline: none;
  border: none;
}
.top__input-place {
  width: 100%;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  background-position: 14px 12px;
}
.top__input-date-1, .top__input-date-2 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-repeat: no-repeat;
  background-position: 14px 12px;
}
.top__input-users {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  background-repeat: no-repeat;
  background-position: 14px 12px;
}
.top__arrow-down {
  position: absolute;
  bottom: 34px;
  left: 50%;
  transform: translateX(-50%);
  animation: animate 1s infinite;
  animation-timing-function: linear;
}
@keyframes animate {
  0% {
    bottom: 34px;
  }
  50% {
    bottom: 24px;
  }
  100% {
    bottom: 34px;
  }
}

.flatpickr-day.selected {
  background: #96B763;
  background: var(--bg-green);
  border: none;
  border-radius: 12px;
}

.offers {
  margin-bottom: 100px;
}
.offers__top {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 40px;
}
.offers__filters-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}
.offers__filters-btn, .offers__sorting-btn {
  transition: all 0.3s;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}
.offers__filters-btn:hover, .offers__sorting-btn:hover {
  background-color: #96B763;
  background-color: var(--bg-green);
  color: #FFF;
  color: var(--text-contrast);
  transition: all 0.3s;
}
.offers__filters-btn:hover svg path, .offers__sorting-btn:hover svg path {
  stroke: #F9F9F9;
  stroke: var(--bg-primary);
  transition: all 0.3s;
}
.offers__cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;
  gap: 24px;
  margin-bottom: 42px;
}
.offers__card {
  position: relative;
  border-radius: 12px;
  box-shadow: 5px 7px 20px 0px rgba(0, 0, 0, 0.06);
  padding-bottom: 20px;
  transition: all 0.3s;
}
.offers__card:hover {
  box-shadow: 5px 7px 20px 0px rgba(0, 0, 0, 0.2);
}
.offers__card:hover .offers__card-arrow {
  background: #96B763;
  background: var(--bg-green);
  transition: all 0.3s;
}
.offers__card:hover .offers__card-arrow svg path {
  fill: #fff;
  transition: all 0.3s;
}
.offers__card-link {
  cursor: pointer;
  color: #0C131D;
  color: var(--text-primary);
}
.offers__card-img-box {
  height: 215px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 14px;
}
.offers__card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.offers__card-info {
  padding: 0 20px;
}
.offers__card-name {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 4px;
}
.offers__card-rating-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  line-height: 100%;
  margin-bottom: 4px;
}
.offers__card-rating-num {
  font-size: 13px;
  color: #F4AE43;
  margin-left: 4px;
}
.offers__card-rating-count-review {
  font-size: 13px;
  color: #9EA9B7;
  margin-left: 8px;
}
.offers__card-cost-inner {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
}
.offers__card-city-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
}
.offers__card-cost-box {
  font-size: 20px;
  font-weight: 600;
}
.offers__card-cost-box span {
  font-size: 13px;
  font-weight: 400;
  color: #9EA9B7;
}
.offers__card-arrow {
  position: absolute;
  top: 190px;
  right: 20px;
  z-index: 2;
  padding: 14px;
  border-radius: 16px;
  background-color: #F9F9F9;
  background-color: var(--bg-primary);
  box-shadow: 5px 7px 20px 0 rgba(0, 0, 0, 0.06);
}
.offers__card-like-icon {
  width: 24px;
  height: 24px;
}
.offers__card-like {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
  padding: 10px 8px 6px 8px;
  border-radius: 12px;
  background-color: #F9F9F9;
  background-color: var(--bg-primary);
  box-shadow: 5px 7px 20px 0 rgba(0, 0, 0, 0.06);
}
.offers__cards-btn {
  display: block;
  margin: 0 auto;
}
.offers__card--active .offers__card-like-icon path {
  fill: #F99999;
  stroke: #F99999;
}

.descr {
  margin-bottom: 84px;
}
.descr__logo {
  font-size: 45px;
  font-weight: 700;
}
.descr__wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 85px;
}
.descr__inner {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}
.descr__text {
  max-width: 550px;
}

.advantages {
  padding-top: 84px;
  padding-bottom: 140px;
  background-color: #373B41;
  background-color: var(--bg-secondary);
}
.advantages__wrapper {
  position: relative;
}
.advantages__items {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.advantages__item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  padding-left: 90px;
  border: 1px solid #F9F9F9;
  border: 1px solid var(--bg-primary);
  width: 1800px;
}
.advantages__item-1 {
  margin-left: auto;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-right: none;
}
.advantages__item-2 {
  margin-right: auto;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  padding-left: 190px;
  border-left: none;
}
.advantages__item-3 {
  margin: 0 auto;
  width: 1700px;
  border-radius: 20px;
}
.advantages__item-text {
  font-size: 45px;
  font-weight: 700;
  line-height: 130%;
  max-width: 732px;
  color: #FFF;
  color: var(--text-contrast);
}
.advantages__item-text span {
  color: #96B763;
  color: var(--text-accent);
}
.advantages__item-img-box {
  height: 180px;
  width: 50%;
  position: relative;
}
.advantages__item-gradient {
  position: absolute;
  z-index: 2;
  width: 560px;
  height: 100%;
  background: linear-gradient(90deg, #373B41 7.54%, rgba(55, 59, 65, 0) 92.1%);
}
.advantages__item-img {
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.footer {
  background-color: #F9F9F9;
  background-color: var(--bg-primary);
}
.footer__wrapper {
  padding: 32px 0;
}
.footer__links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 65px;
}
.footer__link {
  font-size: 13px;
  color: #0C131D;
  color: var(--text-primary);
}

html {
  font-family: "Manrope", sans-serif;
}

body {
  font-family: "Roboto Flex", sans-serif;
  background-color: var(--bg-main);
  color: var(--color-primary);
}

.container {
  max-width: 1750px;
  margin: 0 auto;
  padding: 0 15px;
}`, "",{"version":3,"sources":["webpack://./src/style/_var.scss","webpack://./src/index.scss","webpack://./src/style/_typography.scss","webpack://./src/style/_reset.scss","webpack://./src/style/_header.scss","webpack://./src/style/_top.scss","webpack://./src/style/_offers.scss","webpack://./src/style/_descr.scss","webpack://./src/style/_advantages.scss","webpack://./src/style/_footer.scss","webpack://./src/style/style.scss"],"names":[],"mappings":"AAAA;EAEE,qBAAA;EACA,uBAAA;EACA,yBAAA;EACA,sBAAA;EAGA,qBAAA;EACA,mBAAA;EACA,uBAAA;EAIA,yBAAA;ACLF;;ACTA;EACE,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,cAAA;EAAA,0BAAA;ADYF;;ACTA;EACE,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,WAAA;EAAA,2BAAA;ADYF;;ACTA;EACE,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,cAAA;EAAA,0BAAA;ADYF;;ACTA;EACE,4BAAA;EACA,mBAAA;EACA,aAAA;EACA,yBAAA;EAAA,iCAAA;EACA,WAAA;EAAA,2BAAA;EACA,YAAA;EACA,+CAAA;EACA,eAAA;EACA,oBAAA;ADYF;ACXE;EACE,yBAAA;EAAA,uCAAA;EACA,oBAAA;ADaJ;;ACTA;EACE,4BAAA;EACA,mBAAA;EACA,aAAA;EACA,yBAAA;EAAA,mCAAA;EACA,cAAA;EAAA,0BAAA;EACA,YAAA;EACA,+CAAA;ADYF;;ACTA;EACE,eAAA;EACA,gBAAA;EACA,4BAAA;EACA,mBAAA;EACA,aAAA;EACA,6BAAA;EACA,cAAA;EAAA,yBAAA;EACA,yBAAA;EAAA,oCAAA;EACA,oBAAA;ADYF;ACXE;EACE,oBAAA;EACA,WAAA;EAAA,2BAAA;EACA,yBAAA;EAAA,iCAAA;ADaJ;;AE1EA;EACI,sBAAA;AF6EJ;;AE1EA;EACI,SAAA;EACA,UAAA;AF6EJ;;AE1EA;;;EAGI,mBAAA;AF6EJ;;AE1EA;;;;;;;;;;;;;;;;EAgBI,SAAA;AF6EJ;;AE1EA;;;;EAII,aAAA;AF6EJ;;AE1EA;EACI,6BAAA;EAAA,qBAAA;AF6EJ;;AE1EA;;EAEI,UAAA;AF6EJ;;AE1EA;EACI,gBAAA;AF6EJ;;AE1EA;EACI,eAAA;EACA,cAAA;AF6EJ;;AE1EA;;EAEI,wBAAA;AF6EJ;;AE1EA;;;EAGI,wBAAA;UAAA,gBAAA;EACA,0BAAA;AF6EJ;;AGhJE;EACE,eAAA;AHmJJ;AGjJE;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,mBAAA;AHmJJ;AGjJE;EACE,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,SAAA;AHmJJ;AGjJE;EACE,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,cAAA;EAAA,0BAAA;AHmJJ;AGjJE;EACE,cAAA;EAAA,4BAAA;AHmJJ;AGjJE;EACE,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,2BAAA;EACA,QAAA;AHmJJ;AGlJI;EACE,cAAA;EAAA,yBAAA;EACA,oBAAA;AHoJN;AGlJQ;EACE,aAAA;EAAA,wBAAA;EACA,oBAAA;AHoJV;AGhJI;EACE,cAAA;EAAA,4BAAA;EACA,oBAAA;AHkJN;AGhJQ;EACE,aAAA;EAAA,2BAAA;EACA,oBAAA;AHkJV;AG5IE;EACE,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,yBAAA;EACA,QAAA;EACA,6BAAA;EACA,gBAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,oBAAA;AH8IJ;AG7II;EACE,cAAA;EAAA,yBAAA;EACA,oBAAA;AH+IN;AG7IQ;EACE,aAAA;EAAA,wBAAA;EACA,oBAAA;AH+IV;AG3II;EACE,cAAA;EAAA,4BAAA;EACA,oBAAA;AH6IN;AG3IQ;EACE,aAAA;EAAA,2BAAA;EACA,oBAAA;AH6IV;;AI9NA;EACE,kBAAA;EACA,aAAA;EACA,mBAAA;AJiOF;AIhOE;EACE,kBAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,WAAA;AJkOJ;AIhOE;EACE,iBAAA;EACA,iBAAA;EACA,cAAA;AJkOJ;AIhOE;EACE,oBAAA;AJkOJ;AI9NE;EACE,WAAA;AJgOJ;AI9NE;EACE,6BAAA;AJgOJ;AI7NE;EACE,6BAAA;AJqOJ;AItOE;EAEE,gBAAA;EACA,UAAA;EACA,SAAA;EACA,gBAAA;EACA,YAAA;EACA,cAAA;EAAA,4BAAA;AJ+NJ;AI5NE;EAEE,cAAA;EACA,gBAAA;EACA,UAAA;EACA,UAAA;EACA,yBAAA;EACA,WAAA;EAAA,2BAAA;AJ6NJ;AIzNE;EACE,kBAAA;EACA,mBAAA;EACA,sBAAA;EAAA,sCAAA;EACA,oCAAA;EACA,mCAAA;UAAA,2BAAA;EACA,aAAA;EACA,mBAAA;EACA,QAAA;AJ2NJ;AIzNE;EACE,4BAAA;EACA,mBAAA;EACA,aAAA;EACA,YAAA;AJ2NJ;AIpNE;EACE,WAAA;EACA,yDAAA;EACA,4BAAA;EACA,8BAAA;AJsNJ;AIpNE;EACE,yDAAA;EACA,4BAAA;EACA,8BAAA;AJsNJ;AIpNE;EACE,yDAAA;EACA,4BAAA;EACA,8BAAA;AJsNJ;AIpNE;EACE,kBAAA;EACA,YAAA;EACA,SAAA;EACA,2BAAA;EACA,8BAAA;EACA,iCAAA;AJsNJ;AIpNE;EACE;IACE,YAAA;EJsNJ;EIpNE;IACE,YAAA;EJsNJ;EIpNE;IACE,YAAA;EJsNJ;AACF;;AIhNA;EACE,mBAAA;EAAA,2BAAA;EACA,YAAA;EACA,mBAAA;AJmNF;;AKpUA;EACE,oBAAA;ALuUF;AKtUE;EACE,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,8BAAA;EACA,SAAA;EACA,mBAAA;ALwUJ;AKtUE;EACE,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,8BAAA;EACA,QAAA;ALwUJ;AKtUE;EACE,oBAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,QAAA;EACA,eAAA;ALwUJ;AKvUI;EACE,yBAAA;EAAA,iCAAA;EACA,WAAA;EAAA,2BAAA;EACA,oBAAA;ALyUN;AKvUQ;EACE,eAAA;EAAA,yBAAA;EACA,oBAAA;ALyUV;AKpUE;EACE,aAAA;EACA,qCAAA;EACA,cAAA;EAAA,SAAA;EACA,mBAAA;ALsUJ;AKpUE;EACE,kBAAA;EACA,mBAAA;EACA,gDAAA;EACA,oBAAA;EACA,oBAAA;ALsUJ;AKrUI;EACE,+CAAA;ALuUN;AKtUM;EACE,mBAAA;EAAA,2BAAA;EACA,oBAAA;ALwUR;AKtUU;EACE,UAAA;EACA,oBAAA;ALwUZ;AK3TE;EACE,eAAA;EACA,cAAA;EAAA,0BAAA;AL6TJ;AK3TE;EACE,aAAA;EACA,mBAAA;EACA,gBAAA;EACA,mBAAA;AL6TJ;AK3TE;EACE,WAAA;EACA,YAAA;EACA,iBAAA;AL6TJ;AK3TE;EACE,eAAA;AL6TJ;AK3TE;EACE,eAAA;EACA,gBAAA;EACA,kBAAA;AL6TJ;AK3TE;EACE,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,iBAAA;EACA,kBAAA;AL6TJ;AK3TE;EACE,eAAA;EACA,cAAA;EACA,gBAAA;AL6TJ;AK3TE;EACE,eAAA;EACA,cAAA;EACA,gBAAA;AL6TJ;AK3TE;EACE,aAAA;EACA,mBAAA;EACA,qBAAA;EACA,8BAAA;AL6TJ;AK3TE;EACE,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,QAAA;AL6TJ;AK3TE;EACE,eAAA;EACA,gBAAA;AL6TJ;AK3TE;EACE,eAAA;EACA,gBAAA;EACA,cAAA;AL6TJ;AK3TE;EACE,kBAAA;EACA,UAAA;EACA,WAAA;EACA,UAAA;EACA,aAAA;EACA,mBAAA;EACA,yBAAA;EAAA,mCAAA;EACA,8CAAA;AL6TJ;AK3TE;EACE,WAAA;EACA,YAAA;AL6TJ;AK3TE;EACE,kBAAA;EACA,SAAA;EACA,WAAA;EACA,WAAA;EACA,yBAAA;EACA,mBAAA;EACA,yBAAA;EAAA,mCAAA;EACA,8CAAA;AL6TJ;AK3TE;EACE,cAAA;EACA,cAAA;AL6TJ;AK1TI;EACE,aAAA;EACA,eAAA;AL4TN;;AM7dA;EACE,mBAAA;ANgeF;AM/dE;EACE,eAAA;EACA,gBAAA;ANieJ;AM/dE;EACE,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,2BAAA;EACA,SAAA;ANieJ;AM/dE;EACE,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,8BAAA;EACA,SAAA;ANieJ;AM/dE;EACE,gBAAA;ANieJ;;AOtfA;EACE,iBAAA;EACA,qBAAA;EACA,yBAAA;EAAA,qCAAA;APyfF;AOxfE;EACE,kBAAA;AP0fJ;AOxfE;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AP0fJ;AOxfE;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,mBAAA;EACA,gBAAA;EACA,kBAAA;EACA,yBAAA;EAAA,mCAAA;EACA,aAAA;AP0fJ;AOxfE;EACE,iBAAA;EACA,4BAAA;EACA,+BAAA;EACA,kBAAA;AP0fJ;AOxfE;EACE,kBAAA;EACA,6BAAA;EACA,gCAAA;EACA,mBAAA;EACA,iBAAA;AP0fJ;AOxfE;EACE,cAAA;EACA,aAAA;EACA,mBAAA;AP0fJ;AOxfE;EACE,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,gBAAA;EACA,WAAA;EAAA,2BAAA;AP0fJ;AOzfI;EACE,cAAA;EAAA,yBAAA;AP2fN;AOxfE;EACE,aAAA;EACA,UAAA;EACA,kBAAA;AP0fJ;AOxfE;EACE,kBAAA;EACA,UAAA;EACA,YAAA;EACA,YAAA;EACA,4EAAA;AP0fJ;AOxfE;EACE,kBAAA;EACA,UAAA;EACA,YAAA;EACA,WAAA;EACA,iBAAA;AP0fJ;;AQ7jBA;EACE,yBAAA;EAAA,mCAAA;ARgkBF;AQ/jBE;EACE,eAAA;ARikBJ;AQ/jBE;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;ARikBJ;AQ/jBE;EACE,eAAA;EACA,cAAA;EAAA,0BAAA;ARikBJ;;ASpkBA;EACE,kCAAA;ATukBF;;ASpkBA;EACE,sCAAA;EACA,gCAAA;EACA,2BAAA;ATukBF;;ASrkBA;EACE,iBAAA;EACA,cAAA;EACA,eAAA;ATwkBF","sourcesContent":[":root {\r\n  //text\r\n  --text-contrast: #FFF;\r\n  --text-primary: #0C131D;\r\n  --text-secondary: #9EA9B7;\r\n  --text-accent: #96B763;\r\n\r\n  // background\r\n  --bg-primary: #F9F9F9;\r\n  --bg-green: #96B763;\r\n  --bg-secondary: #373B41;\r\n\r\n  // background-hover\r\n\r\n  --bg-green-hover: #7C9852;\r\n\r\n\r\n\r\n\r\n  //--bg-main: #fff;\r\n  //--bg-secondary: #33302D;\r\n  //--bg-accent: #E8CEAB;\r\n}\r\n\r\n\r\n\r\n\r\n",":root {\n  --text-contrast: #FFF;\n  --text-primary: #0C131D;\n  --text-secondary: #9EA9B7;\n  --text-accent: #96B763;\n  --bg-primary: #F9F9F9;\n  --bg-green: #96B763;\n  --bg-secondary: #373B41;\n  --bg-green-hover: #7C9852;\n}\n\nbody {\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 130%;\n  color: var(--text-primary);\n}\n\nh1 {\n  font-size: 55px;\n  font-weight: 700;\n  line-height: 130%;\n  color: var(--text-contrast);\n}\n\nh2 {\n  font-size: 45px;\n  font-weight: 700;\n  line-height: 130%;\n  color: var(--text-primary);\n}\n\n.green-btn {\n  padding: 16px 42px 16px 42px;\n  border-radius: 12px;\n  outline: none;\n  background-color: var(--bg-green);\n  color: var(--text-contrast);\n  border: none;\n  box-shadow: 1px 1px 16px 0px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  transition: all 0.1s;\n}\n.green-btn:hover {\n  background-color: var(--bg-green-hover);\n  transition: all 0.1s;\n}\n\n.white-btn {\n  padding: 16px 20px 16px 20px;\n  border-radius: 12px;\n  outline: none;\n  background-color: var(--bg-primary);\n  color: var(--text-primary);\n  border: none;\n  box-shadow: 1px 1px 16px 0px rgba(0, 0, 0, 0.1);\n}\n\n.tr-btn {\n  font-size: 20px;\n  font-weight: 600;\n  padding: 16px 20px 16px 20px;\n  border-radius: 12px;\n  outline: none;\n  background-color: transparent;\n  color: var(--text-accent);\n  border: 1px solid var(--text-accent);\n  transition: all 0.3s;\n}\n.tr-btn:hover {\n  transition: all 0.3s;\n  color: var(--text-contrast);\n  background-color: var(--bg-green);\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: inherit;\n}\n\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nul[class],\nol[class],\nli,\nfigure,\nfigcaption,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\na {\n  text-decoration: none;\n}\n\nul[class],\nol[class] {\n  padding: 0;\n}\n\nul[class] {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  display: block;\n}\n\ninput[type=number]::-webkit-outer-spin-button,\ninput[type=number]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n\ninput[type=number],\ninput[type=number]:hover,\ninput[type=number]:focus {\n  appearance: none;\n  -moz-appearance: textfield;\n}\n\n.header__wrapper {\n  padding: 20px 0;\n}\n.header__items {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n.header__item-nav {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 24px;\n}\n.header__logo-link {\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 130%;\n  color: var(--text-primary);\n}\n.header__menu-item-link {\n  color: var(--text-secondary);\n}\n.header__menu-link-tomain {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 8px;\n}\n.header__menu-link-tomain:hover {\n  color: var(--text-accent);\n  transition: all 0.1s;\n}\n.header__menu-link-tomain:hover svg path {\n  fill: var(--text-accent);\n  transition: all 0.1s;\n}\n.header__menu-link-tomain:active {\n  color: var(--bg-green-hover);\n  transition: all 0.1s;\n}\n.header__menu-link-tomain:active svg path {\n  fill: var(--bg-green-hover);\n  transition: all 0.1s;\n}\n.header__login-btn {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 8px;\n  background-color: transparent;\n  font-weight: 600;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.1s;\n}\n.header__login-btn:hover {\n  color: var(--text-accent);\n  transition: all 0.1s;\n}\n.header__login-btn:hover svg path {\n  fill: var(--text-accent);\n  transition: all 0.1s;\n}\n.header__login-btn:active {\n  color: var(--bg-green-hover);\n  transition: all 0.1s;\n}\n.header__login-btn:active svg path {\n  fill: var(--bg-green-hover);\n  transition: all 0.1s;\n}\n\n.top {\n  position: relative;\n  height: 682px;\n  margin-bottom: 84px;\n}\n.top__bg {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  z-index: -1;\n}\n.top__wrapper {\n  max-width: 1295px;\n  padding-top: 78px;\n  margin: 0 auto;\n}\n.top__title {\n  padding-bottom: 35px;\n}\n.top__input-label-place {\n  width: 100%;\n}\n.top__input-label {\n  position: relative !important;\n}\n.top__input-text {\n  position: absolute !important;\n  font-weight: 400;\n  left: 50px;\n  top: 15px;\n  transition: 0.2s;\n  cursor: text;\n  color: var(--text-secondary);\n}\n.top__input-label .top__input:focus + span, .top__input-label .top__input:valid + span {\n  font-size: 8px;\n  font-weight: 600;\n  top: -20px;\n  left: 14px;\n  text-transform: uppercase;\n  color: var(--text-contrast);\n}\n.top__inputs-box {\n  padding: 40px 34px;\n  border-radius: 20px;\n  border: 1px solid var(--text-contrast);\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(22px);\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.top__input {\n  padding: 16px 10px 16px 46px;\n  border-radius: 12px;\n  outline: none;\n  border: none;\n}\n.top__input-place {\n  width: 100%;\n  background-image: url(\"../img/icons/home-icon.svg\");\n  background-repeat: no-repeat;\n  background-position: 14px 12px;\n}\n.top__input-date-1, .top__input-date-2 {\n  background-image: url(\"../img/icons/calendar-icon.svg\");\n  background-repeat: no-repeat;\n  background-position: 14px 12px;\n}\n.top__input-users {\n  background-image: url(\"../img/icons/users-icon.svg\");\n  background-repeat: no-repeat;\n  background-position: 14px 12px;\n}\n.top__arrow-down {\n  position: absolute;\n  bottom: 34px;\n  left: 50%;\n  transform: translateX(-50%);\n  animation: animate 1s infinite;\n  animation-timing-function: linear;\n}\n@keyframes animate {\n  0% {\n    bottom: 34px;\n  }\n  50% {\n    bottom: 24px;\n  }\n  100% {\n    bottom: 34px;\n  }\n}\n\n.flatpickr-day.selected {\n  background: var(--bg-green);\n  border: none;\n  border-radius: 12px;\n}\n\n.offers {\n  margin-bottom: 100px;\n}\n.offers__top {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  margin-bottom: 40px;\n}\n.offers__filters-box {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.offers__filters-btn, .offers__sorting-btn {\n  transition: all 0.3s;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n}\n.offers__filters-btn:hover, .offers__sorting-btn:hover {\n  background-color: var(--bg-green);\n  color: var(--text-contrast);\n  transition: all 0.3s;\n}\n.offers__filters-btn:hover svg path, .offers__sorting-btn:hover svg path {\n  stroke: var(--bg-primary);\n  transition: all 0.3s;\n}\n.offers__cards {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px;\n  margin-bottom: 42px;\n}\n.offers__card {\n  position: relative;\n  border-radius: 12px;\n  box-shadow: 5px 7px 20px 0px rgba(0, 0, 0, 0.06);\n  padding-bottom: 20px;\n  transition: all 0.3s;\n}\n.offers__card:hover {\n  box-shadow: 5px 7px 20px 0px rgba(0, 0, 0, 0.2);\n}\n.offers__card:hover .offers__card-arrow {\n  background: var(--bg-green);\n  transition: all 0.3s;\n}\n.offers__card:hover .offers__card-arrow svg path {\n  fill: #fff;\n  transition: all 0.3s;\n}\n.offers__card-link {\n  cursor: pointer;\n  color: var(--text-primary);\n}\n.offers__card-img-box {\n  height: 215px;\n  border-radius: 12px;\n  overflow: hidden;\n  margin-bottom: 14px;\n}\n.offers__card-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.offers__card-info {\n  padding: 0 20px;\n}\n.offers__card-name {\n  font-size: 20px;\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n.offers__card-rating-box {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  line-height: 100%;\n  margin-bottom: 4px;\n}\n.offers__card-rating-num {\n  font-size: 13px;\n  color: #F4AE43;\n  margin-left: 4px;\n}\n.offers__card-rating-count-review {\n  font-size: 13px;\n  color: #9EA9B7;\n  margin-left: 8px;\n}\n.offers__card-cost-inner {\n  display: flex;\n  flex-direction: row;\n  align-items: baseline;\n  justify-content: space-between;\n}\n.offers__card-city-box {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 6px;\n}\n.offers__card-cost-box {\n  font-size: 20px;\n  font-weight: 600;\n}\n.offers__card-cost-box span {\n  font-size: 13px;\n  font-weight: 400;\n  color: #9EA9B7;\n}\n.offers__card-arrow {\n  position: absolute;\n  top: 190px;\n  right: 20px;\n  z-index: 2;\n  padding: 14px;\n  border-radius: 16px;\n  background-color: var(--bg-primary);\n  box-shadow: 5px 7px 20px 0 rgba(0, 0, 0, 0.06);\n}\n.offers__card-like-icon {\n  width: 24px;\n  height: 24px;\n}\n.offers__card-like {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  z-index: 10;\n  padding: 10px 8px 6px 8px;\n  border-radius: 12px;\n  background-color: var(--bg-primary);\n  box-shadow: 5px 7px 20px 0 rgba(0, 0, 0, 0.06);\n}\n.offers__cards-btn {\n  display: block;\n  margin: 0 auto;\n}\n.offers__card--active .offers__card-like-icon path {\n  fill: #F99999;\n  stroke: #F99999;\n}\n\n.descr {\n  margin-bottom: 84px;\n}\n.descr__logo {\n  font-size: 45px;\n  font-weight: 700;\n}\n.descr__wrapper {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 85px;\n}\n.descr__inner {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n}\n.descr__text {\n  max-width: 550px;\n}\n\n.advantages {\n  padding-top: 84px;\n  padding-bottom: 140px;\n  background-color: var(--bg-secondary);\n}\n.advantages__wrapper {\n  position: relative;\n}\n.advantages__items {\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n}\n.advantages__item {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  overflow: hidden;\n  padding-left: 90px;\n  border: 1px solid var(--bg-primary);\n  width: 1800px;\n}\n.advantages__item-1 {\n  margin-left: auto;\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n  border-right: none;\n}\n.advantages__item-2 {\n  margin-right: auto;\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px;\n  padding-left: 190px;\n  border-left: none;\n}\n.advantages__item-3 {\n  margin: 0 auto;\n  width: 1700px;\n  border-radius: 20px;\n}\n.advantages__item-text {\n  font-size: 45px;\n  font-weight: 700;\n  line-height: 130%;\n  max-width: 732px;\n  color: var(--text-contrast);\n}\n.advantages__item-text span {\n  color: var(--text-accent);\n}\n.advantages__item-img-box {\n  height: 180px;\n  width: 50%;\n  position: relative;\n}\n.advantages__item-gradient {\n  position: absolute;\n  z-index: 2;\n  width: 560px;\n  height: 100%;\n  background: linear-gradient(90deg, #373B41 7.54%, rgba(55, 59, 65, 0) 92.1%);\n}\n.advantages__item-img {\n  position: absolute;\n  z-index: 1;\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n}\n\n.footer {\n  background-color: var(--bg-primary);\n}\n.footer__wrapper {\n  padding: 32px 0;\n}\n.footer__links {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 65px;\n}\n.footer__link {\n  font-size: 13px;\n  color: var(--text-primary);\n}\n\nhtml {\n  font-family: \"Manrope\", sans-serif;\n}\n\nbody {\n  font-family: \"Roboto Flex\", sans-serif;\n  background-color: var(--bg-main);\n  color: var(--color-primary);\n}\n\n.container {\n  max-width: 1750px;\n  margin: 0 auto;\n  padding: 0 15px;\n}","body{\r\n  font-size: 16px;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  line-height: 130%;\r\n  color: var(--text-primary);\r\n}\r\n\r\nh1{\r\n  font-size: 55px;\r\n  font-weight: 700;\r\n  line-height: 130%;\r\n  color: var(--text-contrast);\r\n}\r\n\r\nh2{\r\n  font-size: 45px;\r\n  font-weight: 700;\r\n  line-height: 130%;\r\n  color: var(--text-primary);\r\n}\r\n\r\n.green-btn{\r\n  padding: 16px 42px 16px 42px;\r\n  border-radius: 12px;\r\n  outline: none;\r\n  background-color: var(--bg-green);\r\n  color: var(--text-contrast);\r\n  border: none;\r\n  box-shadow: 1px 1px 16px 0px rgba(0, 0, 0, 0.10);\r\n  cursor: pointer;\r\n  transition: all .1s;\r\n  &:hover{\r\n    background-color: var(--bg-green-hover);\r\n    transition: all .1s;\r\n  }\r\n}\r\n\r\n.white-btn{\r\n  padding: 16px 20px 16px 20px;\r\n  border-radius: 12px;\r\n  outline: none;\r\n  background-color: var(--bg-primary);\r\n  color: var(--text-primary);\r\n  border: none;\r\n  box-shadow: 1px 1px 16px 0px rgba(0, 0, 0, 0.10);\r\n}\r\n\r\n.tr-btn{\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n  padding: 16px 20px 16px 20px;\r\n  border-radius: 12px;\r\n  outline: none;\r\n  background-color: transparent;\r\n  color: var(--text-accent);\r\n  border: 1px solid var(--text-accent);\r\n  transition: all .3s;\r\n  &:hover{\r\n    transition: all .3s;\r\n    color: var(--text-contrast);\r\n    background-color: var(--bg-green);\r\n  }\r\n}\r\n\r\n","html {\n    box-sizing: border-box;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\n*,\n*::after,\n*::before {\n    box-sizing: inherit;\n}\n\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nul[class],\nol[class],\nli,\nfigure,\nfigcaption,\nblockquote,\ndl,\ndd {\n    margin: 0;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n    font: inherit;\n}\n\na {\n    text-decoration: none;\n}\n\nul[class],\nol[class] {\n    padding: 0;\n}\n\nul[class] {\n    list-style: none;\n}\n\nimg {\n    max-width: 100%;\n    display: block;\n}\n\ninput[type=\"number\"]::-webkit-outer-spin-button,\ninput[type=\"number\"]::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n}\n\ninput[type='number'],\ninput[type=\"number\"]:hover,\ninput[type=\"number\"]:focus {\n    appearance: none;\n    -moz-appearance: textfield;\n}",".header{\r\n  &__wrapper{\r\n    padding: 20px 0;\r\n  }\r\n  &__items{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n  &__item-nav{\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    gap: 24px;\r\n  }\r\n  &__logo-link{\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    line-height: 130%;\r\n    color: var(--text-primary);\r\n  }\r\n  &__menu-item-link{\r\n    color: var(--text-secondary);\r\n  }\r\n  &__menu-link-tomain{\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    gap: 8px;\r\n    &:hover{\r\n      color: var(--text-accent);\r\n      transition: all .1s;\r\n      svg{\r\n        path{\r\n          fill: var(--text-accent);\r\n          transition: all .1s;\r\n        }\r\n      }\r\n    }\r\n    &:active{\r\n      color: var(--bg-green-hover);\r\n      transition: all .1s;\r\n      svg{\r\n        path{\r\n          fill: var(--bg-green-hover);\r\n          transition: all .1s;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  &__login-btn{\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    gap: 8px;\r\n    background-color: transparent;\r\n    font-weight: 600;\r\n    border: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n    transition: all .1s;\r\n    &:hover{\r\n      color: var(--text-accent);\r\n      transition: all .1s;\r\n      svg{\r\n        path{\r\n          fill: var(--text-accent);\r\n          transition: all .1s;\r\n        }\r\n      }\r\n    }\r\n    &:active{\r\n      color: var(--bg-green-hover);\r\n      transition: all .1s;\r\n      svg{\r\n        path{\r\n          fill: var(--bg-green-hover);\r\n          transition: all .1s;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}",".top{\r\n  position: relative;\r\n  height: 682px;\r\n  margin-bottom: 84px;\r\n  &__bg{\r\n    position: absolute;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n    z-index: -1;\r\n  }\r\n  &__wrapper{\r\n    max-width: 1295px;\r\n    padding-top: 78px;\r\n    margin: 0 auto;\r\n  }\r\n  &__title{\r\n    padding-bottom: 35px;\r\n  }\r\n\r\n\r\n  &__input-label-place{\r\n    width: 100%;\r\n  }\r\n  &__input-label{\r\n    position: relative !important;\r\n  }\r\n\r\n  &__input-text{\r\n    position: absolute !important;\r\n    font-weight: 400;\r\n    left: 50px;\r\n    top: 15px;\r\n    transition: 0.2s;\r\n    cursor: text;\r\n    color: var(--text-secondary);\r\n  }\r\n\r\n  &__input-label .top__input:focus + span,\r\n  &__input-label .top__input:valid + span{\r\n    font-size: 8px;\r\n    font-weight: 600;\r\n    top: -20px;\r\n    left: 14px;\r\n    text-transform: uppercase;\r\n    color: var(--text-contrast);\r\n  }\r\n\r\n\r\n  &__inputs-box{\r\n    padding: 40px 34px;\r\n    border-radius: 20px;\r\n    border: 1px solid var(--text-contrast);\r\n    background: rgba(255, 255, 255, 0.10);\r\n    backdrop-filter: blur(22px);\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 4px;\r\n  }\r\n  &__input{\r\n    padding: 16px 10px 16px 46px;\r\n    border-radius: 12px;\r\n    outline: none;\r\n    border: none;\r\n\r\n    //background: transparent;\r\n    //position: absolute;\r\n    //bottom: 0;\r\n  }\r\n\r\n  &__input-place{\r\n    width: 100%;\r\n    background-image: url(\"../img/icons/home-icon.svg\");\r\n    background-repeat: no-repeat;\r\n    background-position: 14px 12px;\r\n  }\r\n  &__input-date-1, &__input-date-2{\r\n    background-image: url(\"../img/icons/calendar-icon.svg\");\r\n    background-repeat: no-repeat;\r\n    background-position: 14px 12px;\r\n  }\r\n  &__input-users{\r\n    background-image: url(\"../img/icons/users-icon.svg\");\r\n    background-repeat: no-repeat;\r\n    background-position: 14px 12px;\r\n  }\r\n  &__arrow-down{\r\n    position: absolute;\r\n    bottom: 34px;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    animation: animate 1s infinite;\r\n    animation-timing-function: linear;\r\n  }\r\n  @keyframes animate {\r\n    0% {\r\n      bottom: 34px;\r\n    }\r\n    50% {\r\n      bottom: 24px;\r\n    }\r\n    100% {\r\n      bottom: 34px;\r\n    }\r\n  }\r\n}\r\n\r\n// Стили для календаря (выбор даты приезда и отъезда)\r\n\r\n.flatpickr-day.selected{\r\n  background: var(--bg-green);\r\n  border: none;\r\n  border-radius: 12px;\r\n}\r\n\r\n",".offers{\r\n  margin-bottom: 100px;\r\n  &__top{\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 20px;\r\n    margin-bottom: 40px;\r\n  }\r\n  &__filters-box{\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 8px;\r\n  }\r\n  &__filters-btn, &__sorting-btn{\r\n    transition: all .3s;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    gap: 8px;\r\n    cursor: pointer;\r\n    &:hover{\r\n      background-color: var(--bg-green);\r\n      color: var(--text-contrast);\r\n      transition: all .3s;\r\n      svg{\r\n        path{\r\n          stroke: var(--bg-primary);\r\n          transition: all .3s;\r\n        }\r\n      }\r\n    }\r\n  }\r\n  &__cards{\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 1fr);\r\n    gap: 24px;\r\n    margin-bottom: 42px;\r\n  }\r\n  &__card{\r\n    position: relative;\r\n    border-radius: 12px;\r\n    box-shadow: 5px 7px 20px 0px rgba(0, 0, 0, 0.06);\r\n    padding-bottom: 20px;\r\n    transition: all .3s;\r\n    &:hover{\r\n      box-shadow: 5px 7px 20px 0px rgba(0, 0, 0, 0.2);\r\n      .offers__card-arrow{\r\n        background: var(--bg-green);\r\n        transition: all .3s;\r\n        svg{\r\n          path{\r\n            fill: #fff;\r\n            transition: all .3s;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n  //&__card-like .offers__card--active{\r\n  //  svg{\r\n  //    path{\r\n  //      fill: rgba(248, 146, 146, 0.7);\r\n  //    }\r\n  //  }\r\n  //}\r\n  &__card-link{\r\n    cursor: pointer;\r\n    color: var(--text-primary);\r\n  }\r\n  &__card-img-box{\r\n    height: 215px;\r\n    border-radius: 12px;\r\n    overflow: hidden;\r\n    margin-bottom: 14px;\r\n  }\r\n  &__card-img{\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n  }\r\n  &__card-info{\r\n    padding: 0 20px;\r\n  }\r\n  &__card-name{\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    margin-bottom: 4px;\r\n  }\r\n  &__card-rating-box{\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    line-height: 100%;\r\n    margin-bottom: 4px;\r\n  }\r\n  &__card-rating-num{\r\n    font-size: 13px;\r\n    color: #F4AE43;\r\n    margin-left: 4px;\r\n  }\r\n  &__card-rating-count-review{\r\n    font-size: 13px;\r\n    color: #9EA9B7;\r\n    margin-left: 8px;\r\n  }\r\n  &__card-cost-inner{\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: baseline;\r\n    justify-content: space-between;\r\n  }\r\n  &__card-city-box{\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    gap: 6px;\r\n  }\r\n  &__card-cost-box{\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n  }\r\n  &__card-cost-box span{\r\n    font-size: 13px;\r\n    font-weight: 400;\r\n    color: #9EA9B7;\r\n  }\r\n  &__card-arrow{\r\n    position: absolute;\r\n    top: 190px;\r\n    right: 20px;\r\n    z-index: 2;\r\n    padding: 14px;\r\n    border-radius: 16px;\r\n    background-color: var(--bg-primary);\r\n    box-shadow: 5px 7px 20px 0 rgba(0, 0, 0, 0.06);\r\n  }\r\n  &__card-like-icon{\r\n    width: 24px;\r\n    height: 24px;\r\n  }\r\n  &__card-like{\r\n    position: absolute;\r\n    top: 20px;\r\n    right: 20px;\r\n    z-index: 10;\r\n    padding: 10px 8px 6px 8px;\r\n    border-radius: 12px;\r\n    background-color: var(--bg-primary);\r\n    box-shadow: 5px 7px 20px 0 rgba(0, 0, 0, 0.06);\r\n  }\r\n  &__cards-btn{\r\n    display: block;\r\n    margin: 0 auto;\r\n  }\r\n  &__card--active .offers__card-like-icon{\r\n    path{\r\n      fill: #F99999;\r\n      stroke: #F99999;\r\n    }\r\n  }\r\n\r\n}",".descr{\r\n  margin-bottom: 84px;\r\n  &__logo{\r\n    font-size: 45px;\r\n    font-weight: 700;\r\n  }\r\n  &__wrapper{\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    gap: 85px;\r\n  }\r\n  &__inner{\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 24px;\r\n  }\r\n  &__text{\r\n    max-width: 550px;\r\n  }\r\n}",".advantages{\r\n  padding-top: 84px;\r\n  padding-bottom: 140px;\r\n  background-color: var(--bg-secondary);\r\n  &__wrapper{\r\n    position: relative;\r\n  }\r\n  &__items{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 40px;\r\n  }\r\n  &__item{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    overflow: hidden;\r\n    padding-left: 90px;\r\n    border: 1px solid var(--bg-primary);\r\n    width: 1800px;\r\n  }\r\n  &__item-1{\r\n    margin-left: auto;\r\n    border-top-left-radius: 20px;\r\n    border-bottom-left-radius: 20px;\r\n    border-right: none;\r\n  }\r\n  &__item-2{\r\n    margin-right: auto;\r\n    border-top-right-radius: 20px;\r\n    border-bottom-right-radius: 20px;\r\n    padding-left: 190px;\r\n    border-left: none;\r\n  }\r\n  &__item-3{\r\n    margin: 0 auto;\r\n    width: 1700px;\r\n    border-radius: 20px;\r\n  }\r\n  &__item-text{\r\n    font-size: 45px;\r\n    font-weight: 700;\r\n    line-height: 130%;\r\n    max-width: 732px;\r\n    color: var(--text-contrast);\r\n    span{\r\n      color: var(--text-accent);\r\n    }\r\n  }\r\n  &__item-img-box{\r\n    height: 180px;\r\n    width: 50%;\r\n    position: relative;\r\n  }\r\n  &__item-gradient{\r\n    position: absolute;\r\n    z-index: 2;\r\n    width: 560px;\r\n    height: 100%;\r\n    background: linear-gradient(90deg, #373B41 7.54%, rgba(55, 59, 65, 0.00) 92.1%);\r\n  }\r\n  &__item-img{\r\n    position: absolute;\r\n    z-index: 1;\r\n    height: 100%;\r\n    width: 100%;\r\n    object-fit: cover;\r\n  }\r\n}\r\n",".footer{\r\n  background-color: var(--bg-primary);\r\n  &__wrapper{\r\n    padding: 32px 0;\r\n  }\r\n  &__links{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 65px;\r\n  }\r\n  &__link{\r\n    font-size: 13px;\r\n    color: var(--text-primary);\r\n  }\r\n}","@import '_var';\r\n@import '_typography';\r\n@import '_reset';\r\n@import '_header';\r\n@import '_top';\r\n@import '_offers';\r\n@import '_descr';\r\n@import '_advantages';\r\n@import '_footer';\r\n\r\nhtml {\r\n  font-family: 'Manrope', sans-serif;\r\n}\r\n\r\nbody{\r\n  font-family: 'Roboto Flex', sans-serif;\r\n  background-color: var(--bg-main);\r\n  color: var(--color-primary);\r\n}\r\n.container{\r\n  max-width: 1750px;\r\n  margin: 0 auto;\r\n  padding: 0 15px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/favicon.svg */ "./src/img/favicon.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/favicon.png */ "./src/img/favicon.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/top-bg.jpg */ "./src/img/top-bg.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icons/arrow-down.svg */ "./src/img/icons/arrow-down.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/offers/1.jpg */ "./src/img/offers/1.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icons/spin.svg */ "./src/img/icons/spin.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/offers/2.jpg */ "./src/img/offers/2.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/offers/3.jpg */ "./src/img/offers/3.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./img/offers/4.jpg */ "./src/img/offers/4.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./img/offers/5.jpg */ "./src/img/offers/5.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./img/offers/6.jpg */ "./src/img/offers/6.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./img/offers/7.jpg */ "./src/img/offers/7.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./img/offers/8.jpg */ "./src/img/offers/8.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./img/offers/9.jpg */ "./src/img/offers/9.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./img/offers/10.jpg */ "./src/img/offers/10.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./img/offers/11.jpg */ "./src/img/offers/11.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./img/offers/12.jpg */ "./src/img/offers/12.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./img/advantages/adv-1.jpg */ "./src/img/advantages/adv-1.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./img/advantages/adv-2.jpg */ "./src/img/advantages/adv-2.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ./img/advantages/adv-3.jpg */ "./src/img/advantages/adv-3.jpg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);
var ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);
var ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_17___);
var ___HTML_LOADER_REPLACEMENT_18___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_18___);
var ___HTML_LOADER_REPLACEMENT_19___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_19___);
var code = "<!DOCTYPE html>\r\n<html lang=\"ru\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n\r\n  <link rel=\"icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"image/svg+xml\">\r\n  <link rel=\"icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" type=\"image/png\">\r\n  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\r\n  <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\r\n  <link href=\"https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,400;8..144,600;8..144,700&display=swap\" rel=\"stylesheet\">\r\n  <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css\">\r\n\r\n  <title>Webpack</title>\r\n</head>\r\n<body>\r\n  <header class=\"header\">\r\n    <div class=\"container\">\r\n      <div class=\"header__wrapper\">\r\n        <div class=\"header__items\">\r\n          <div class=\"header__item header__item-nav\">\r\n            <a class=\"header__logo-link\" href=\"\">LuxeRent</a>\r\n            <nav class=\"header__menu\">\r\n              <ul class=\"header__menu-list\">\r\n                <li class=\"header__menu-item\">\r\n                  <a class=\"header__menu-item-link header__menu-link-tomain\" href=\"#\">\r\n                    <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                      <path d=\"M7 11.6621C7 12.0039 7.12695 12.2969 7.40039 12.5508L14.998 19.9922C15.2129 20.207 15.4863 20.3242 15.8086 20.3242C16.4531 20.3242 16.9707 19.8164 16.9707 19.1621C16.9707 18.8398 16.834 18.5566 16.6191 18.332L9.77344 11.6621L16.6191 4.99219C16.834 4.76758 16.9707 4.47461 16.9707 4.16211C16.9707 3.50781 16.4531 3 15.8086 3C15.4863 3 15.2129 3.11719 14.998 3.33203L7.40039 10.7637C7.12695 11.0273 7 11.3203 7 11.6621Z\" fill=\"#9EA9B7\"/>\r\n                    </svg>\r\n                    <span>На главную</span>\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n            </nav>\r\n          </div>\r\n          <div class=\"header__item\">\r\n            <button class=\"header__login-btn\">\r\n              <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10ZM12 20.5C13.784 20.5 15.4397 19.9504 16.8069 19.0112C17.4108 18.5964 17.6688 17.8062 17.3178 17.1632C16.59 15.8303 15.0902 15 11.9999 15C8.90969 15 7.40997 15.8302 6.68214 17.1632C6.33105 17.8062 6.5891 18.5963 7.19296 19.0111C8.56018 19.9503 10.2159 20.5 12 20.5Z\" fill=\"#0C131D\"/>\r\n              </svg>\r\n              <span>Профиль</span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </header>\r\n\r\n  <main class=\"main\">\r\n    <section class=\"top\">\r\n      <img class=\"top__bg\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\">\r\n      <div class=\"container\">\r\n        <div class=\"top__wrapper\">\r\n          <h1 class=\"top__title\">Поиск элитной недвижимости в пару кликов</h1>\r\n          <form action=\"\" class=\"form\">\r\n            <div class=\"top__inputs-box\">\r\n              <label class=\"top__input-label top__input-label-place\" for=\"\">\r\n                <input type=\"text\" class=\"top__input top__input-place\" required>\r\n                <span class=\"top__input-text\">Куда</span>\r\n              </label>\r\n              <label class=\"top__input-label\" for=\"\">\r\n                <input type=\"text\" class=\"top__input top__input-date-1\" required>\r\n                <span class=\"top__input-text top__input-text-2\">Прибытие</span>\r\n              </label>\r\n              <label class=\"top__input-label\" for=\"\">\r\n                <input type=\"text\" class=\"top__input top__input-date-2\" required>\r\n                <span class=\"top__input-text\">Отъезд</span>\r\n              </label>\r\n              <label class=\"top__input-label\" for=\"\">\r\n                <input type=\"text\" class=\"top__input top__input-users\" required>\r\n                <span class=\"top__input-text\">Кто едет</span>\r\n              </label>\r\n              <button class=\"top__btn green-btn\">Подобрать</button>\r\n            </div>\r\n          </form>\r\n          <img class=\"top__arrow-down\" src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\">\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"offers\">\r\n      <div class=\"container\">\r\n        <div class=\"offers__wrapper\">\r\n          <div class=\"offers__top\">\r\n            <h2 class=\"offers__title\">Предложения для вас</h2>\r\n            <div class=\"offers__filters-box\">\r\n              <button class=\"offers__filters-btn white-btn\">\r\n                <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                  <path d=\"M22 6.5H16M6 6.5H2M22 17.5H18M8 17.5H2M10 10C10.4596 10 10.9148 9.90947 11.3394 9.73358C11.764 9.55769 12.1499 9.29988 12.4749 8.97487C12.7999 8.64987 13.0577 8.26403 13.2336 7.83939C13.4095 7.41475 13.5 6.95963 13.5 6.5C13.5 6.04037 13.4095 5.58525 13.2336 5.16061C13.0577 4.73597 12.7999 4.35013 12.4749 4.02513C12.1499 3.70012 11.764 3.44231 11.3394 3.26642C10.9148 3.09053 10.4596 3 10 3C9.07174 3 8.1815 3.36875 7.52513 4.02513C6.86875 4.6815 6.5 5.57174 6.5 6.5C6.5 7.42826 6.86875 8.3185 7.52513 8.97487C8.1815 9.63125 9.07174 10 10 10ZM14 21C14.9283 21 15.8185 20.6313 16.4749 19.9749C17.1313 19.3185 17.5 18.4283 17.5 17.5C17.5 16.5717 17.1313 15.6815 16.4749 15.0251C15.8185 14.3687 14.9283 14 14 14C13.0717 14 12.1815 14.3687 11.5251 15.0251C10.8687 15.6815 10.5 16.5717 10.5 17.5C10.5 18.4283 10.8687 19.3185 11.5251 19.9749C12.1815 20.6313 13.0717 21 14 21Z\" stroke=\"#0C131D\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n                </svg>\r\n                <span>Фильтры</span>\r\n              </button>\r\n              <button class=\"offers__sorting-btn white-btn\">\r\n                <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                  <path d=\"M8.45001 4.72L4.73001 1M4.73001 1L1.01001 4.72M4.73001 1V19M11.55 15.28L15.27 19M15.27 19L18.99 15.28M15.27 19V1\" stroke=\"#0C131D\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n                </svg>\r\n                <span>Сортировка</span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n          <div class=\"offers__cards\">\r\n            <div class=\"offers__card\">\r\n              <a class=\"offers__card-link\" href=\"\">\r\n                <div class=\"offers__card-img-box\">\r\n                  <img class=\"offers__card-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\">\r\n                </div>\r\n                <div class=\"offers__card-info\">\r\n                  <p class=\"offers__card-name\">Домик у озера</p>\r\n                  <div class=\"offers__card-rating-box\">\r\n                    <svg width=\"13\" height=\"14\" viewBox=\"0 0 13 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                      <path d=\"M6.02229 2.04591C6.16748 1.57607 6.83252 1.57607 6.97771 2.04591L7.92555 5.11318C7.99029 5.32268 8.18398 5.46556 8.40326 5.46556H11.5219C12.0001 5.46556 12.2054 6.07255 11.8254 6.36289L9.25993 8.32272C9.09342 8.44992 9.02388 8.66746 9.08575 8.86767L10.0554 12.0054C10.1991 12.4705 9.66097 12.8459 9.27412 12.5504L6.80353 10.663C6.62433 10.5261 6.37567 10.5261 6.19647 10.663L3.72588 12.5504C3.33903 12.8459 2.80091 12.4705 2.94463 12.0054L3.91425 8.86767C3.97611 8.66746 3.90658 8.44992 3.74007 8.32272L1.17462 6.36289C0.794561 6.07255 0.999881 5.46556 1.47815 5.46556H4.59674C4.81602 5.46556 5.00971 5.32268 5.07445 5.11318L6.02229 2.04591Z\" fill=\"#F4AE43\"/>\r\n                    </svg>\r\n                    <div class=\"offers__card-rating-num\">4.8</div>\r\n                    <div class=\"offers__card-rating-count-review\">(30 отзывов)</div>\r\n                  </div>\r\n                  <div class=\"offers__card-cost-inner\">\r\n                    <div class=\"offers__card-city-box\">\r\n                      <img class=\"offers__card-city-icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\">\r\n                      <span>Приозерск</span>\r\n                    </div>\r\n                    <div class=\"offers__card-cost-box\">\r\n                      15 300р./\r\n                      <span>за ночь</span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"offers__card-arrow\">\r\n                    <svg class=\"offers__card-arrow-icon\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                      <path d=\"M20.3848 0.999989C20.3848 0.447705 19.9371 -1.0632e-05 19.3848 -1.08849e-05L10.3848 -1.00841e-05C9.83249 -1.04213e-05 9.38478 0.447705 9.38478 0.99999C9.38478 1.55227 9.83249 1.99999 10.3848 1.99999L18.3848 1.99999L18.3848 9.99999C18.3848 10.5523 18.8325 11 19.3848 11C19.9371 11 20.3848 10.5523 20.3848 9.99999L20.3848 0.999989ZM1.70711 20.0919L20.0919 1.7071L18.6777 0.292883L0.292893 18.6777L1.70711 20.0919Z\" fill=\"#0C131D\"/>\r\n                    </svg>\r\n                  </div>\r\n                  <div class=\"offers__card-like\">\r\n                    <svg class=\"offers__card-like-icon\" width=\"19\" height=\"17\" viewBox=\"0 0 19 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                      <path d=\"M9.85 15.9543C9.56666 16.0543 9.1 16.0543 8.81667 15.9543C6.4 15.1293 1 11.6876 1 5.85432C1 3.27932 3.075 1.19598 5.63333 1.19598C7.15 1.19598 8.49167 1.92932 9.33333 3.06265C9.76148 2.48421 10.3191 2.01409 10.9617 1.68994C11.6042 1.36579 12.3137 1.19662 13.0333 1.19598C15.5917 1.19598 17.6667 3.27932 17.6667 5.85432C17.6667 11.6876 12.2667 15.1293 9.85 15.9543Z\" fill=\"#9EA9B7\" stroke=\"#9EA9B7\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n                    </svg>\r\n                  </div>\r\n                </div>\r\n              </a>\r\n            </div>\r\n            <div class=\"offers__card\">\r\n              <a class=\"offers__card-link\" href=\"\">\r\n                <div class=\"offers__card-img-box\">\r\n                  <img class=\"offers__card-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"\">\r\n                </div>\r\n                <div class=\"offers__card-info\">\r\n                  <p class=\"offers__card-name\">Домик у озера</p>\r\n                  <div class=\"offers__card-rating-box\">\r\n                    <svg width=\"13\" height=\"14\" viewBox=\"0 0 13 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                      <path d=\"M6.02229 2.04591C6.16748 1.57607 6.83252 1.57607 6.97771 2.04591L7.92555 5.11318C7.99029 5.32268 8.18398 5.46556 8.40326 5.46556H11.5219C12.0001 5.46556 12.2054 6.07255 11.8254 6.36289L9.25993 8.32272C9.09342 8.44992 9.02388 8.66746 9.08575 8.86767L10.0554 12.0054C10.1991 12.4705 9.66097 12.8459 9.27412 12.5504L6.80353 10.663C6.62433 10.5261 6.37567 10.5261 6.19647 10.663L3.72588 12.5504C3.33903 12.8459 2.80091 12.4705 2.94463 12.0054L3.91425 8.86767C3.97611 8.66746 3.90658 8.44992 3.74007 8.32272L1.17462 6.36289C0.794561 6.07255 0.999881 5.46556 1.47815 5.46556H4.59674C4.81602 5.46556 5.00971 5.32268 5.07445 5.11318L6.02229 2.04591Z\" fill=\"#F4AE43\"/>\r\n                    </svg>\r\n                    <div class=\"offers__card-rating-num\">4.8</div>\r\n                    <div class=\"offers__card-rating-count-review\">(30 отзывов)</div>\r\n                  </div>\r\n                  <div class=\"offers__card-cost-inner\">\r\n                    <div class=\"offers__card-city-box\">\r\n                      <img class=\"offers__card-city-icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\">\r\n                      <span>Приозерск</span>\r\n                    </div>\r\n                    <div class=\"offers__card-cost-box\">\r\n                      15 300р./\r\n                      <span>за ночь</span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"offers__card-arrow\">\r\n                    <svg class=\"offers__card-arrow-icon\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                      <path d=\"M20.3848 0.999989C20.3848 0.447705 19.9371 -1.0632e-05 19.3848 -1.08849e-05L10.3848 -1.00841e-05C9.83249 -1.04213e-05 9.38478 0.447705 9.38478 0.99999C9.38478 1.55227 9.83249 1.99999 10.3848 1.99999L18.3848 1.99999L18.3848 9.99999C18.3848 10.5523 18.8325 11 19.3848 11C19.9371 11 20.3848 10.5523 20.3848 9.99999L20.3848 0.999989ZM1.70711 20.0919L20.0919 1.7071L18.6777 0.292883L0.292893 18.6777L1.70711 20.0919Z\" fill=\"#0C131D\"/>\r\n                    </svg>\r\n                  </div>\r\n                  <div class=\"offers__card-like\">\r\n                    <svg class=\"offers__card-like-icon\" width=\"19\" height=\"17\" viewBox=\"0 0 19 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                      <path d=\"M9.85 15.9543C9.56666 16.0543 9.1 16.0543 8.81667 15.9543C6.4 15.1293 1 11.6876 1 5.85432C1 3.27932 3.075 1.19598 5.63333 1.19598C7.15 1.19598 8.49167 1.92932 9.33333 3.06265C9.76148 2.48421 10.3191 2.01409 10.9617 1.68994C11.6042 1.36579 12.3137 1.19662 13.0333 1.19598C15.5917 1.19598 17.6667 3.27932 17.6667 5.85432C17.6667 11.6876 12.2667 15.1293 9.85 15.9543Z\" fill=\"#9EA9B7\" stroke=\"#9EA9B7\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n                    </svg>\r\n                  </div>\r\n                </div>\r\n              </a>\r\n            </div>\r\n            <div class=\"offers__card\">\r\n              <a class=\"offers__card-link\" href=\"\">\r\n                <div class=\"offers__card-img-box\">\r\n                  <img class=\"offers__card-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"\">\r\n                </div>\r\n                <div class=\"offers__card-info\">\r\n                  <p class=\"offers__card-name\">Домик у озера</p>\r\n                  <div class=\"offers__card-rating-box\">\r\n                    <svg width=\"13\" height=\"14\" viewBox=\"0 0 13 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                      <path d=\"M6.02229 2.04591C6.16748 1.57607 6.83252 1.57607 6.97771 2.04591L7.92555 5.11318C7.99029 5.32268 8.18398 5.46556 8.40326 5.46556H11.5219C12.0001 5.46556 12.2054 6.07255 11.8254 6.36289L9.25993 8.32272C9.09342 8.44992 9.02388 8.66746 9.08575 8.86767L10.0554 12.0054C10.1991 12.4705 9.66097 12.8459 9.27412 12.5504L6.80353 10.663C6.62433 10.5261 6.37567 10.5261 6.19647 10.663L3.72588 12.5504C3.33903 12.8459 2.80091 12.4705 2.94463 12.0054L3.91425 8.86767C3.97611 8.66746 3.90658 8.44992 3.74007 8.32272L1.17462 6.36289C0.794561 6.07255 0.999881 5.46556 1.47815 5.46556H4.59674C4.81602 5.46556 5.00971 5.32268 5.07445 5.11318L6.02229 2.04591Z\" fill=\"#F4AE43\"/>\r\n                    </svg>\r\n                    <div class=\"offers__card-rating-num\">4.8</div>\r\n                    <div class=\"offers__card-rating-count-review\">(30 отзывов)</div>\r\n                  </div>\r\n                  <div class=\"offers__card-cost-inner\">\r\n                    <div class=\"offers__card-city-box\">\r\n                      <img class=\"offers__card-city-icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\">\r\n                      <span>Приозерск</span>\r\n                    </div>\r\n                    <div class=\"offers__card-cost-box\">\r\n                      15 300р./\r\n                      <span>за ночь</span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"offers__card-arrow\">\r\n                    <svg class=\"offers__card-arrow-icon\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                      <path d=\"M20.3848 0.999989C20.3848 0.447705 19.9371 -1.0632e-05 19.3848 -1.08849e-05L10.3848 -1.00841e-05C9.83249 -1.04213e-05 9.38478 0.447705 9.38478 0.99999C9.38478 1.55227 9.83249 1.99999 10.3848 1.99999L18.3848 1.99999L18.3848 9.99999C18.3848 10.5523 18.8325 11 19.3848 11C19.9371 11 20.3848 10.5523 20.3848 9.99999L20.3848 0.999989ZM1.70711 20.0919L20.0919 1.7071L18.6777 0.292883L0.292893 18.6777L1.70711 20.0919Z\" fill=\"#0C131D\"/>\r\n                    </svg>\r\n                  </div>\r\n                  <div class=\"offers__card-like\">\r\n                    <svg class=\"offers__card-like-icon\" width=\"19\" height=\"17\" viewBox=\"0 0 19 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                      <path d=\"M9.85 15.9543C9.56666 16.0543 9.1 16.0543 8.81667 15.9543C6.4 15.1293 1 11.6876 1 5.85432C1 3.27932 3.075 1.19598 5.63333 1.19598C7.15 1.19598 8.49167 1.92932 9.33333 3.06265C9.76148 2.48421 10.3191 2.01409 10.9617 1.68994C11.6042 1.36579 12.3137 1.19662 13.0333 1.19598C15.5917 1.19598 17.6667 3.27932 17.6667 5.85432C17.6667 11.6876 12.2667 15.1293 9.85 15.9543Z\" fill=\"#9EA9B7\" stroke=\"#9EA9B7\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n                    </svg>\r\n                  </div>\r\n                </div>\r\n              </a>\r\n            </div>\r\n            <div class=\"offers__card\">\r\n              <a class=\"offers__card-link\" href=\"\">\r\n                <div class=\"offers__card-img-box\">\r\n                  <img class=\"offers__card-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"\">\r\n                </div>\r\n                <div class=\"offers__card-info\">\r\n                  <p class=\"offers__card-name\">Домик у озера</p>\r\n                  <div class=\"offers__card-rating-box\">\r\n                    <svg width=\"13\" height=\"14\" viewBox=\"0 0 13 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                      <path d=\"M6.02229 2.04591C6.16748 1.57607 6.83252 1.57607 6.97771 2.04591L7.92555 5.11318C7.99029 5.32268 8.18398 5.46556 8.40326 5.46556H11.5219C12.0001 5.46556 12.2054 6.07255 11.8254 6.36289L9.25993 8.32272C9.09342 8.44992 9.02388 8.66746 9.08575 8.86767L10.0554 12.0054C10.1991 12.4705 9.66097 12.8459 9.27412 12.5504L6.80353 10.663C6.62433 10.5261 6.37567 10.5261 6.19647 10.663L3.72588 12.5504C3.33903 12.8459 2.80091 12.4705 2.94463 12.0054L3.91425 8.86767C3.97611 8.66746 3.90658 8.44992 3.74007 8.32272L1.17462 6.36289C0.794561 6.07255 0.999881 5.46556 1.47815 5.46556H4.59674C4.81602 5.46556 5.00971 5.32268 5.07445 5.11318L6.02229 2.04591Z\" fill=\"#F4AE43\"/>\r\n                    </svg>\r\n                    <div class=\"offers__card-rating-num\">4.8</div>\r\n                    <div class=\"offers__card-rating-count-review\">(30 отзывов)</div>\r\n                  </div>\r\n                  <div class=\"offers__card-cost-inner\">\r\n                    <div class=\"offers__card-city-box\">\r\n                      <img class=\"offers__card-city-icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\">\r\n                      <span>Приозерск</span>\r\n                    </div>\r\n                    <div class=\"offers__card-cost-box\">\r\n                      15 300р./\r\n                      <span>за ночь</span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"offers__card-arrow\">\r\n                    <svg class=\"offers__card-arrow-icon\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                      <path d=\"M20.3848 0.999989C20.3848 0.447705 19.9371 -1.0632e-05 19.3848 -1.08849e-05L10.3848 -1.00841e-05C9.83249 -1.04213e-05 9.38478 0.447705 9.38478 0.99999C9.38478 1.55227 9.83249 1.99999 10.3848 1.99999L18.3848 1.99999L18.3848 9.99999C18.3848 10.5523 18.8325 11 19.3848 11C19.9371 11 20.3848 10.5523 20.3848 9.99999L20.3848 0.999989ZM1.70711 20.0919L20.0919 1.7071L18.6777 0.292883L0.292893 18.6777L1.70711 20.0919Z\" fill=\"#0C131D\"/>\r\n                    </svg>\r\n                  </div>\r\n                  <div class=\"offers__card-like\">\r\n                    <svg class=\"offers__card-like-icon\" width=\"19\" height=\"17\" viewBox=\"0 0 19 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                      <path d=\"M9.85 15.9543C9.56666 16.0543 9.1 16.0543 8.81667 15.9543C6.4 15.1293 1 11.6876 1 5.85432C1 3.27932 3.075 1.19598 5.63333 1.19598C7.15 1.19598 8.49167 1.92932 9.33333 3.06265C9.76148 2.48421 10.3191 2.01409 10.9617 1.68994C11.6042 1.36579 12.3137 1.19662 13.0333 1.19598C15.5917 1.19598 17.6667 3.27932 17.6667 5.85432C17.6667 11.6876 12.2667 15.1293 9.85 15.9543Z\" fill=\"#9EA9B7\" stroke=\"#9EA9B7\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n                    </svg>\r\n                  </div>\r\n                </div>\r\n              </a>\r\n            </div>\r\n            <div class=\"offers__card\">\r\n              <a class=\"offers__card-link\" href=\"\">\r\n                <div class=\"offers__card-img-box\">\r\n                  <img class=\"offers__card-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"\">\r\n                </div>\r\n                <div class=\"offers__card-info\">\r\n                  <p class=\"offers__card-name\">Домик у озера</p>\r\n                  <div class=\"offers__card-rating-box\">\r\n                    <svg width=\"13\" height=\"14\" viewBox=\"0 0 13 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                      <path d=\"M6.02229 2.04591C6.16748 1.57607 6.83252 1.57607 6.97771 2.04591L7.92555 5.11318C7.99029 5.32268 8.18398 5.46556 8.40326 5.46556H11.5219C12.0001 5.46556 12.2054 6.07255 11.8254 6.36289L9.25993 8.32272C9.09342 8.44992 9.02388 8.66746 9.08575 8.86767L10.0554 12.0054C10.1991 12.4705 9.66097 12.8459 9.27412 12.5504L6.80353 10.663C6.62433 10.5261 6.37567 10.5261 6.19647 10.663L3.72588 12.5504C3.33903 12.8459 2.80091 12.4705 2.94463 12.0054L3.91425 8.86767C3.97611 8.66746 3.90658 8.44992 3.74007 8.32272L1.17462 6.36289C0.794561 6.07255 0.999881 5.46556 1.47815 5.46556H4.59674C4.81602 5.46556 5.00971 5.32268 5.07445 5.11318L6.02229 2.04591Z\" fill=\"#F4AE43\"/>\r\n                    </svg>\r\n                    <div class=\"offers__card-rating-num\">4.8</div>\r\n                    <div class=\"offers__card-rating-count-review\">(30 отзывов)</div>\r\n                  </div>\r\n                  <div class=\"offers__card-cost-inner\">\r\n                    <div class=\"offers__card-city-box\">\r\n                      <img class=\"offers__card-city-icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\">\r\n                      <span>Приозерск</span>\r\n                    </div>\r\n                    <div class=\"offers__card-cost-box\">\r\n                      15 300р./\r\n                      <span>за ночь</span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"offers__card-arrow\">\r\n                    <svg class=\"offers__card-arrow-icon\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                      <path d=\"M20.3848 0.999989C20.3848 0.447705 19.9371 -1.0632e-05 19.3848 -1.08849e-05L10.3848 -1.00841e-05C9.83249 -1.04213e-05 9.38478 0.447705 9.38478 0.99999C9.38478 1.55227 9.83249 1.99999 10.3848 1.99999L18.3848 1.99999L18.3848 9.99999C18.3848 10.5523 18.8325 11 19.3848 11C19.9371 11 20.3848 10.5523 20.3848 9.99999L20.3848 0.999989ZM1.70711 20.0919L20.0919 1.7071L18.6777 0.292883L0.292893 18.6777L1.70711 20.0919Z\" fill=\"#0C131D\"/>\r\n                    </svg>\r\n                  </div>\r\n                  <div class=\"offers__card-like\">\r\n                    <svg class=\"offers__card-like-icon\" width=\"19\" height=\"17\" viewBox=\"0 0 19 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                      <path d=\"M9.85 15.9543C9.56666 16.0543 9.1 16.0543 8.81667 15.9543C6.4 15.1293 1 11.6876 1 5.85432C1 3.27932 3.075 1.19598 5.63333 1.19598C7.15 1.19598 8.49167 1.92932 9.33333 3.06265C9.76148 2.48421 10.3191 2.01409 10.9617 1.68994C11.6042 1.36579 12.3137 1.19662 13.0333 1.19598C15.5917 1.19598 17.6667 3.27932 17.6667 5.85432C17.6667 11.6876 12.2667 15.1293 9.85 15.9543Z\" fill=\"#9EA9B7\" stroke=\"#9EA9B7\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n                    </svg>\r\n                  </div>\r\n                </div>\r\n              </a>\r\n            </div>\r\n            <div class=\"offers__card\">\r\n              <a class=\"offers__card-link\" href=\"\">\r\n                <div class=\"offers__card-img-box\">\r\n                  <img class=\"offers__card-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"\">\r\n                </div>\r\n                <div class=\"offers__card-info\">\r\n                  <p class=\"offers__card-name\">Домик у озера</p>\r\n                  <div class=\"offers__card-rating-box\">\r\n                    <svg width=\"13\" height=\"14\" viewBox=\"0 0 13 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                      <path d=\"M6.02229 2.04591C6.16748 1.57607 6.83252 1.57607 6.97771 2.04591L7.92555 5.11318C7.99029 5.32268 8.18398 5.46556 8.40326 5.46556H11.5219C12.0001 5.46556 12.2054 6.07255 11.8254 6.36289L9.25993 8.32272C9.09342 8.44992 9.02388 8.66746 9.08575 8.86767L10.0554 12.0054C10.1991 12.4705 9.66097 12.8459 9.27412 12.5504L6.80353 10.663C6.62433 10.5261 6.37567 10.5261 6.19647 10.663L3.72588 12.5504C3.33903 12.8459 2.80091 12.4705 2.94463 12.0054L3.91425 8.86767C3.97611 8.66746 3.90658 8.44992 3.74007 8.32272L1.17462 6.36289C0.794561 6.07255 0.999881 5.46556 1.47815 5.46556H4.59674C4.81602 5.46556 5.00971 5.32268 5.07445 5.11318L6.02229 2.04591Z\" fill=\"#F4AE43\"/>\r\n                    </svg>\r\n                    <div class=\"offers__card-rating-num\">4.8</div>\r\n                    <div class=\"offers__card-rating-count-review\">(30 отзывов)</div>\r\n                  </div>\r\n                  <div class=\"offers__card-cost-inner\">\r\n                    <div class=\"offers__card-city-box\">\r\n                      <img class=\"offers__card-city-icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\">\r\n                      <span>Приозерск</span>\r\n                    </div>\r\n                    <div class=\"offers__card-cost-box\">\r\n                      15 300р./\r\n                      <span>за ночь</span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"offers__card-arrow\">\r\n                    <svg class=\"offers__card-arrow-icon\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                      <path d=\"M20.3848 0.999989C20.3848 0.447705 19.9371 -1.0632e-05 19.3848 -1.08849e-05L10.3848 -1.00841e-05C9.83249 -1.04213e-05 9.38478 0.447705 9.38478 0.99999C9.38478 1.55227 9.83249 1.99999 10.3848 1.99999L18.3848 1.99999L18.3848 9.99999C18.3848 10.5523 18.8325 11 19.3848 11C19.9371 11 20.3848 10.5523 20.3848 9.99999L20.3848 0.999989ZM1.70711 20.0919L20.0919 1.7071L18.6777 0.292883L0.292893 18.6777L1.70711 20.0919Z\" fill=\"#0C131D\"/>\r\n                    </svg>\r\n                  </div>\r\n                  <div class=\"offers__card-like\">\r\n                    <svg class=\"offers__card-like-icon\" width=\"19\" height=\"17\" viewBox=\"0 0 19 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                      <path d=\"M9.85 15.9543C9.56666 16.0543 9.1 16.0543 8.81667 15.9543C6.4 15.1293 1 11.6876 1 5.85432C1 3.27932 3.075 1.19598 5.63333 1.19598C7.15 1.19598 8.49167 1.92932 9.33333 3.06265C9.76148 2.48421 10.3191 2.01409 10.9617 1.68994C11.6042 1.36579 12.3137 1.19662 13.0333 1.19598C15.5917 1.19598 17.6667 3.27932 17.6667 5.85432C17.6667 11.6876 12.2667 15.1293 9.85 15.9543Z\" fill=\"#9EA9B7\" stroke=\"#9EA9B7\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n                    </svg>\r\n                  </div>\r\n                </div>\r\n              </a>\r\n            </div>\r\n            <div class=\"offers__card\">\r\n              <a class=\"offers__card-link\" href=\"\">\r\n                <div class=\"offers__card-img-box\">\r\n                  <img class=\"offers__card-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"\">\r\n                </div>\r\n                <div class=\"offers__card-info\">\r\n                  <p class=\"offers__card-name\">Домик у озера</p>\r\n                  <div class=\"offers__card-rating-box\">\r\n                    <svg width=\"13\" height=\"14\" viewBox=\"0 0 13 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                      <path d=\"M6.02229 2.04591C6.16748 1.57607 6.83252 1.57607 6.97771 2.04591L7.92555 5.11318C7.99029 5.32268 8.18398 5.46556 8.40326 5.46556H11.5219C12.0001 5.46556 12.2054 6.07255 11.8254 6.36289L9.25993 8.32272C9.09342 8.44992 9.02388 8.66746 9.08575 8.86767L10.0554 12.0054C10.1991 12.4705 9.66097 12.8459 9.27412 12.5504L6.80353 10.663C6.62433 10.5261 6.37567 10.5261 6.19647 10.663L3.72588 12.5504C3.33903 12.8459 2.80091 12.4705 2.94463 12.0054L3.91425 8.86767C3.97611 8.66746 3.90658 8.44992 3.74007 8.32272L1.17462 6.36289C0.794561 6.07255 0.999881 5.46556 1.47815 5.46556H4.59674C4.81602 5.46556 5.00971 5.32268 5.07445 5.11318L6.02229 2.04591Z\" fill=\"#F4AE43\"/>\r\n                    </svg>\r\n                    <div class=\"offers__card-rating-num\">4.8</div>\r\n                    <div class=\"offers__card-rating-count-review\">(30 отзывов)</div>\r\n                  </div>\r\n                  <div class=\"offers__card-cost-inner\">\r\n                    <div class=\"offers__card-city-box\">\r\n                      <img class=\"offers__card-city-icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\">\r\n                      <span>Приозерск</span>\r\n                    </div>\r\n                    <div class=\"offers__card-cost-box\">\r\n                      15 300р./\r\n                      <span>за ночь</span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"offers__card-arrow\">\r\n                    <svg class=\"offers__card-arrow-icon\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                      <path d=\"M20.3848 0.999989C20.3848 0.447705 19.9371 -1.0632e-05 19.3848 -1.08849e-05L10.3848 -1.00841e-05C9.83249 -1.04213e-05 9.38478 0.447705 9.38478 0.99999C9.38478 1.55227 9.83249 1.99999 10.3848 1.99999L18.3848 1.99999L18.3848 9.99999C18.3848 10.5523 18.8325 11 19.3848 11C19.9371 11 20.3848 10.5523 20.3848 9.99999L20.3848 0.999989ZM1.70711 20.0919L20.0919 1.7071L18.6777 0.292883L0.292893 18.6777L1.70711 20.0919Z\" fill=\"#0C131D\"/>\r\n                    </svg>\r\n                  </div>\r\n                  <div class=\"offers__card-like\">\r\n                    <svg class=\"offers__card-like-icon\" width=\"19\" height=\"17\" viewBox=\"0 0 19 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                      <path d=\"M9.85 15.9543C9.56666 16.0543 9.1 16.0543 8.81667 15.9543C6.4 15.1293 1 11.6876 1 5.85432C1 3.27932 3.075 1.19598 5.63333 1.19598C7.15 1.19598 8.49167 1.92932 9.33333 3.06265C9.76148 2.48421 10.3191 2.01409 10.9617 1.68994C11.6042 1.36579 12.3137 1.19662 13.0333 1.19598C15.5917 1.19598 17.6667 3.27932 17.6667 5.85432C17.6667 11.6876 12.2667 15.1293 9.85 15.9543Z\" fill=\"#9EA9B7\" stroke=\"#9EA9B7\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n                    </svg>\r\n                  </div>\r\n                </div>\r\n              </a>\r\n            </div>\r\n            <div class=\"offers__card\">\r\n              <a class=\"offers__card-link\" href=\"\">\r\n                <div class=\"offers__card-img-box\">\r\n                  <img class=\"offers__card-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"\">\r\n                </div>\r\n                <div class=\"offers__card-info\">\r\n                  <p class=\"offers__card-name\">Домик у озера</p>\r\n                  <div class=\"offers__card-rating-box\">\r\n                    <svg width=\"13\" height=\"14\" viewBox=\"0 0 13 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                      <path d=\"M6.02229 2.04591C6.16748 1.57607 6.83252 1.57607 6.97771 2.04591L7.92555 5.11318C7.99029 5.32268 8.18398 5.46556 8.40326 5.46556H11.5219C12.0001 5.46556 12.2054 6.07255 11.8254 6.36289L9.25993 8.32272C9.09342 8.44992 9.02388 8.66746 9.08575 8.86767L10.0554 12.0054C10.1991 12.4705 9.66097 12.8459 9.27412 12.5504L6.80353 10.663C6.62433 10.5261 6.37567 10.5261 6.19647 10.663L3.72588 12.5504C3.33903 12.8459 2.80091 12.4705 2.94463 12.0054L3.91425 8.86767C3.97611 8.66746 3.90658 8.44992 3.74007 8.32272L1.17462 6.36289C0.794561 6.07255 0.999881 5.46556 1.47815 5.46556H4.59674C4.81602 5.46556 5.00971 5.32268 5.07445 5.11318L6.02229 2.04591Z\" fill=\"#F4AE43\"/>\r\n                    </svg>\r\n                    <div class=\"offers__card-rating-num\">4.8</div>\r\n                    <div class=\"offers__card-rating-count-review\">(30 отзывов)</div>\r\n                  </div>\r\n                  <div class=\"offers__card-cost-inner\">\r\n                    <div class=\"offers__card-city-box\">\r\n                      <img class=\"offers__card-city-icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\">\r\n                      <span>Приозерск</span>\r\n                    </div>\r\n                    <div class=\"offers__card-cost-box\">\r\n                      15 300р./\r\n                      <span>за ночь</span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"offers__card-arrow\">\r\n                    <svg class=\"offers__card-arrow-icon\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                      <path d=\"M20.3848 0.999989C20.3848 0.447705 19.9371 -1.0632e-05 19.3848 -1.08849e-05L10.3848 -1.00841e-05C9.83249 -1.04213e-05 9.38478 0.447705 9.38478 0.99999C9.38478 1.55227 9.83249 1.99999 10.3848 1.99999L18.3848 1.99999L18.3848 9.99999C18.3848 10.5523 18.8325 11 19.3848 11C19.9371 11 20.3848 10.5523 20.3848 9.99999L20.3848 0.999989ZM1.70711 20.0919L20.0919 1.7071L18.6777 0.292883L0.292893 18.6777L1.70711 20.0919Z\" fill=\"#0C131D\"/>\r\n                    </svg>\r\n                  </div>\r\n                  <div class=\"offers__card-like\">\r\n                    <svg class=\"offers__card-like-icon\" width=\"19\" height=\"17\" viewBox=\"0 0 19 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                      <path d=\"M9.85 15.9543C9.56666 16.0543 9.1 16.0543 8.81667 15.9543C6.4 15.1293 1 11.6876 1 5.85432C1 3.27932 3.075 1.19598 5.63333 1.19598C7.15 1.19598 8.49167 1.92932 9.33333 3.06265C9.76148 2.48421 10.3191 2.01409 10.9617 1.68994C11.6042 1.36579 12.3137 1.19662 13.0333 1.19598C15.5917 1.19598 17.6667 3.27932 17.6667 5.85432C17.6667 11.6876 12.2667 15.1293 9.85 15.9543Z\" fill=\"#9EA9B7\" stroke=\"#9EA9B7\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n                    </svg>\r\n                  </div>\r\n                </div>\r\n              </a>\r\n            </div>\r\n            <div class=\"offers__card\">\r\n              <a class=\"offers__card-link\" href=\"\">\r\n                <div class=\"offers__card-img-box\">\r\n                  <img class=\"offers__card-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"\">\r\n                </div>\r\n                <div class=\"offers__card-info\">\r\n                  <p class=\"offers__card-name\">Домик у озера</p>\r\n                  <div class=\"offers__card-rating-box\">\r\n                    <svg width=\"13\" height=\"14\" viewBox=\"0 0 13 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                      <path d=\"M6.02229 2.04591C6.16748 1.57607 6.83252 1.57607 6.97771 2.04591L7.92555 5.11318C7.99029 5.32268 8.18398 5.46556 8.40326 5.46556H11.5219C12.0001 5.46556 12.2054 6.07255 11.8254 6.36289L9.25993 8.32272C9.09342 8.44992 9.02388 8.66746 9.08575 8.86767L10.0554 12.0054C10.1991 12.4705 9.66097 12.8459 9.27412 12.5504L6.80353 10.663C6.62433 10.5261 6.37567 10.5261 6.19647 10.663L3.72588 12.5504C3.33903 12.8459 2.80091 12.4705 2.94463 12.0054L3.91425 8.86767C3.97611 8.66746 3.90658 8.44992 3.74007 8.32272L1.17462 6.36289C0.794561 6.07255 0.999881 5.46556 1.47815 5.46556H4.59674C4.81602 5.46556 5.00971 5.32268 5.07445 5.11318L6.02229 2.04591Z\" fill=\"#F4AE43\"/>\r\n                    </svg>\r\n                    <div class=\"offers__card-rating-num\">4.8</div>\r\n                    <div class=\"offers__card-rating-count-review\">(30 отзывов)</div>\r\n                  </div>\r\n                  <div class=\"offers__card-cost-inner\">\r\n                    <div class=\"offers__card-city-box\">\r\n                      <img class=\"offers__card-city-icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\">\r\n                      <span>Приозерск</span>\r\n                    </div>\r\n                    <div class=\"offers__card-cost-box\">\r\n                      15 300р./\r\n                      <span>за ночь</span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"offers__card-arrow\">\r\n                    <svg class=\"offers__card-arrow-icon\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                      <path d=\"M20.3848 0.999989C20.3848 0.447705 19.9371 -1.0632e-05 19.3848 -1.08849e-05L10.3848 -1.00841e-05C9.83249 -1.04213e-05 9.38478 0.447705 9.38478 0.99999C9.38478 1.55227 9.83249 1.99999 10.3848 1.99999L18.3848 1.99999L18.3848 9.99999C18.3848 10.5523 18.8325 11 19.3848 11C19.9371 11 20.3848 10.5523 20.3848 9.99999L20.3848 0.999989ZM1.70711 20.0919L20.0919 1.7071L18.6777 0.292883L0.292893 18.6777L1.70711 20.0919Z\" fill=\"#0C131D\"/>\r\n                    </svg>\r\n                  </div>\r\n                  <div class=\"offers__card-like\">\r\n                    <svg class=\"offers__card-like-icon\" width=\"19\" height=\"17\" viewBox=\"0 0 19 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                      <path d=\"M9.85 15.9543C9.56666 16.0543 9.1 16.0543 8.81667 15.9543C6.4 15.1293 1 11.6876 1 5.85432C1 3.27932 3.075 1.19598 5.63333 1.19598C7.15 1.19598 8.49167 1.92932 9.33333 3.06265C9.76148 2.48421 10.3191 2.01409 10.9617 1.68994C11.6042 1.36579 12.3137 1.19662 13.0333 1.19598C15.5917 1.19598 17.6667 3.27932 17.6667 5.85432C17.6667 11.6876 12.2667 15.1293 9.85 15.9543Z\" fill=\"#9EA9B7\" stroke=\"#9EA9B7\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n                    </svg>\r\n                  </div>\r\n                </div>\r\n              </a>\r\n            </div>\r\n            <div class=\"offers__card\">\r\n              <a class=\"offers__card-link\" href=\"\">\r\n                <div class=\"offers__card-img-box\">\r\n                  <img class=\"offers__card-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\">\r\n                </div>\r\n                <div class=\"offers__card-info\">\r\n                  <p class=\"offers__card-name\">Домик у озера</p>\r\n                  <div class=\"offers__card-rating-box\">\r\n                    <svg width=\"13\" height=\"14\" viewBox=\"0 0 13 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                      <path d=\"M6.02229 2.04591C6.16748 1.57607 6.83252 1.57607 6.97771 2.04591L7.92555 5.11318C7.99029 5.32268 8.18398 5.46556 8.40326 5.46556H11.5219C12.0001 5.46556 12.2054 6.07255 11.8254 6.36289L9.25993 8.32272C9.09342 8.44992 9.02388 8.66746 9.08575 8.86767L10.0554 12.0054C10.1991 12.4705 9.66097 12.8459 9.27412 12.5504L6.80353 10.663C6.62433 10.5261 6.37567 10.5261 6.19647 10.663L3.72588 12.5504C3.33903 12.8459 2.80091 12.4705 2.94463 12.0054L3.91425 8.86767C3.97611 8.66746 3.90658 8.44992 3.74007 8.32272L1.17462 6.36289C0.794561 6.07255 0.999881 5.46556 1.47815 5.46556H4.59674C4.81602 5.46556 5.00971 5.32268 5.07445 5.11318L6.02229 2.04591Z\" fill=\"#F4AE43\"/>\r\n                    </svg>\r\n                    <div class=\"offers__card-rating-num\">4.8</div>\r\n                    <div class=\"offers__card-rating-count-review\">(30 отзывов)</div>\r\n                  </div>\r\n                  <div class=\"offers__card-cost-inner\">\r\n                    <div class=\"offers__card-city-box\">\r\n                      <img class=\"offers__card-city-icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\">\r\n                      <span>Приозерск</span>\r\n                    </div>\r\n                    <div class=\"offers__card-cost-box\">\r\n                      15 300р./\r\n                      <span>за ночь</span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"offers__card-arrow\">\r\n                    <svg class=\"offers__card-arrow-icon\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                      <path d=\"M20.3848 0.999989C20.3848 0.447705 19.9371 -1.0632e-05 19.3848 -1.08849e-05L10.3848 -1.00841e-05C9.83249 -1.04213e-05 9.38478 0.447705 9.38478 0.99999C9.38478 1.55227 9.83249 1.99999 10.3848 1.99999L18.3848 1.99999L18.3848 9.99999C18.3848 10.5523 18.8325 11 19.3848 11C19.9371 11 20.3848 10.5523 20.3848 9.99999L20.3848 0.999989ZM1.70711 20.0919L20.0919 1.7071L18.6777 0.292883L0.292893 18.6777L1.70711 20.0919Z\" fill=\"#0C131D\"/>\r\n                    </svg>\r\n                  </div>\r\n                  <div class=\"offers__card-like\">\r\n                    <svg class=\"offers__card-like-icon\" width=\"19\" height=\"17\" viewBox=\"0 0 19 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                      <path d=\"M9.85 15.9543C9.56666 16.0543 9.1 16.0543 8.81667 15.9543C6.4 15.1293 1 11.6876 1 5.85432C1 3.27932 3.075 1.19598 5.63333 1.19598C7.15 1.19598 8.49167 1.92932 9.33333 3.06265C9.76148 2.48421 10.3191 2.01409 10.9617 1.68994C11.6042 1.36579 12.3137 1.19662 13.0333 1.19598C15.5917 1.19598 17.6667 3.27932 17.6667 5.85432C17.6667 11.6876 12.2667 15.1293 9.85 15.9543Z\" fill=\"#9EA9B7\" stroke=\"#9EA9B7\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n                    </svg>\r\n                  </div>\r\n                </div>\r\n              </a>\r\n            </div>\r\n            <div class=\"offers__card\">\r\n              <a class=\"offers__card-link\" href=\"\">\r\n                <div class=\"offers__card-img-box\">\r\n                  <img class=\"offers__card-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"\">\r\n                </div>\r\n                <div class=\"offers__card-info\">\r\n                  <p class=\"offers__card-name\">Домик у озера</p>\r\n                  <div class=\"offers__card-rating-box\">\r\n                    <svg width=\"13\" height=\"14\" viewBox=\"0 0 13 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                      <path d=\"M6.02229 2.04591C6.16748 1.57607 6.83252 1.57607 6.97771 2.04591L7.92555 5.11318C7.99029 5.32268 8.18398 5.46556 8.40326 5.46556H11.5219C12.0001 5.46556 12.2054 6.07255 11.8254 6.36289L9.25993 8.32272C9.09342 8.44992 9.02388 8.66746 9.08575 8.86767L10.0554 12.0054C10.1991 12.4705 9.66097 12.8459 9.27412 12.5504L6.80353 10.663C6.62433 10.5261 6.37567 10.5261 6.19647 10.663L3.72588 12.5504C3.33903 12.8459 2.80091 12.4705 2.94463 12.0054L3.91425 8.86767C3.97611 8.66746 3.90658 8.44992 3.74007 8.32272L1.17462 6.36289C0.794561 6.07255 0.999881 5.46556 1.47815 5.46556H4.59674C4.81602 5.46556 5.00971 5.32268 5.07445 5.11318L6.02229 2.04591Z\" fill=\"#F4AE43\"/>\r\n                    </svg>\r\n                    <div class=\"offers__card-rating-num\">4.8</div>\r\n                    <div class=\"offers__card-rating-count-review\">(30 отзывов)</div>\r\n                  </div>\r\n                  <div class=\"offers__card-cost-inner\">\r\n                    <div class=\"offers__card-city-box\">\r\n                      <img class=\"offers__card-city-icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\">\r\n                      <span>Приозерск</span>\r\n                    </div>\r\n                    <div class=\"offers__card-cost-box\">\r\n                      15 300р./\r\n                      <span>за ночь</span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"offers__card-arrow\">\r\n                    <svg class=\"offers__card-arrow-icon\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                      <path d=\"M20.3848 0.999989C20.3848 0.447705 19.9371 -1.0632e-05 19.3848 -1.08849e-05L10.3848 -1.00841e-05C9.83249 -1.04213e-05 9.38478 0.447705 9.38478 0.99999C9.38478 1.55227 9.83249 1.99999 10.3848 1.99999L18.3848 1.99999L18.3848 9.99999C18.3848 10.5523 18.8325 11 19.3848 11C19.9371 11 20.3848 10.5523 20.3848 9.99999L20.3848 0.999989ZM1.70711 20.0919L20.0919 1.7071L18.6777 0.292883L0.292893 18.6777L1.70711 20.0919Z\" fill=\"#0C131D\"/>\r\n                    </svg>\r\n                  </div>\r\n                  <div class=\"offers__card-like\">\r\n                    <svg class=\"offers__card-like-icon\" width=\"19\" height=\"17\" viewBox=\"0 0 19 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                      <path d=\"M9.85 15.9543C9.56666 16.0543 9.1 16.0543 8.81667 15.9543C6.4 15.1293 1 11.6876 1 5.85432C1 3.27932 3.075 1.19598 5.63333 1.19598C7.15 1.19598 8.49167 1.92932 9.33333 3.06265C9.76148 2.48421 10.3191 2.01409 10.9617 1.68994C11.6042 1.36579 12.3137 1.19662 13.0333 1.19598C15.5917 1.19598 17.6667 3.27932 17.6667 5.85432C17.6667 11.6876 12.2667 15.1293 9.85 15.9543Z\" fill=\"#9EA9B7\" stroke=\"#9EA9B7\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n                    </svg>\r\n                  </div>\r\n                </div>\r\n              </a>\r\n            </div>\r\n            <div class=\"offers__card\">\r\n              <a class=\"offers__card-link\" href=\"\">\r\n                <div class=\"offers__card-img-box\">\r\n                  <img class=\"offers__card-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"\">\r\n                </div>\r\n                <div class=\"offers__card-info\">\r\n                  <p class=\"offers__card-name\">Домик у озера</p>\r\n                  <div class=\"offers__card-rating-box\">\r\n                    <svg width=\"13\" height=\"14\" viewBox=\"0 0 13 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                      <path d=\"M6.02229 2.04591C6.16748 1.57607 6.83252 1.57607 6.97771 2.04591L7.92555 5.11318C7.99029 5.32268 8.18398 5.46556 8.40326 5.46556H11.5219C12.0001 5.46556 12.2054 6.07255 11.8254 6.36289L9.25993 8.32272C9.09342 8.44992 9.02388 8.66746 9.08575 8.86767L10.0554 12.0054C10.1991 12.4705 9.66097 12.8459 9.27412 12.5504L6.80353 10.663C6.62433 10.5261 6.37567 10.5261 6.19647 10.663L3.72588 12.5504C3.33903 12.8459 2.80091 12.4705 2.94463 12.0054L3.91425 8.86767C3.97611 8.66746 3.90658 8.44992 3.74007 8.32272L1.17462 6.36289C0.794561 6.07255 0.999881 5.46556 1.47815 5.46556H4.59674C4.81602 5.46556 5.00971 5.32268 5.07445 5.11318L6.02229 2.04591Z\" fill=\"#F4AE43\"/>\r\n                    </svg>\r\n                    <div class=\"offers__card-rating-num\">4.8</div>\r\n                    <div class=\"offers__card-rating-count-review\">(30 отзывов)</div>\r\n                  </div>\r\n                  <div class=\"offers__card-cost-inner\">\r\n                    <div class=\"offers__card-city-box\">\r\n                      <img class=\"offers__card-city-icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\">\r\n                      <span>Приозерск</span>\r\n                    </div>\r\n                    <div class=\"offers__card-cost-box\">\r\n                      15 300р./\r\n                      <span>за ночь</span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"offers__card-arrow\">\r\n                    <svg class=\"offers__card-arrow-icon\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                      <path d=\"M20.3848 0.999989C20.3848 0.447705 19.9371 -1.0632e-05 19.3848 -1.08849e-05L10.3848 -1.00841e-05C9.83249 -1.04213e-05 9.38478 0.447705 9.38478 0.99999C9.38478 1.55227 9.83249 1.99999 10.3848 1.99999L18.3848 1.99999L18.3848 9.99999C18.3848 10.5523 18.8325 11 19.3848 11C19.9371 11 20.3848 10.5523 20.3848 9.99999L20.3848 0.999989ZM1.70711 20.0919L20.0919 1.7071L18.6777 0.292883L0.292893 18.6777L1.70711 20.0919Z\" fill=\"#0C131D\"/>\r\n                    </svg>\r\n                  </div>\r\n                  <div class=\"offers__card-like\">\r\n                    <svg class=\"offers__card-like-icon\" width=\"19\" height=\"17\" viewBox=\"0 0 19 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                      <path d=\"M9.85 15.9543C9.56666 16.0543 9.1 16.0543 8.81667 15.9543C6.4 15.1293 1 11.6876 1 5.85432C1 3.27932 3.075 1.19598 5.63333 1.19598C7.15 1.19598 8.49167 1.92932 9.33333 3.06265C9.76148 2.48421 10.3191 2.01409 10.9617 1.68994C11.6042 1.36579 12.3137 1.19662 13.0333 1.19598C15.5917 1.19598 17.6667 3.27932 17.6667 5.85432C17.6667 11.6876 12.2667 15.1293 9.85 15.9543Z\" fill=\"#9EA9B7\" stroke=\"#9EA9B7\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n                    </svg>\r\n                  </div>\r\n                </div>\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <button class=\"offers__cards-btn tr-btn\">Показать еще</button>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"descr\">\r\n      <div class=\"container\">\r\n        <div class=\"descr__wrapper\">\r\n          <div class=\"descr__logo-box\">\r\n            <p class=\"descr__logo\">LuxeRent</p>\r\n          </div>\r\n          <div class=\"descr__inner\">\r\n            <p class=\"descr__text\">Это сервис, помогающий арендовать качественное жилье для отдыха загородом. В каталоге домов вы найдете дома под любой вкус. У нас представлены дома Шале, Фахверк, Хай-Тек, Барнхаус, Глэмпинг. Работаем только с ответственными арендодателями. </p>\r\n            <p class=\"descr__text\">Это сервис, помогающий арендовать качественное жилье для отдыха загородом. В каталоге домов вы найдете дома под любой вкус. У нас представлены дома Шале, Фахверк, Хай-Тек, Барнхаус, Глэмпинг. Работаем только с ответственными арендодателями. </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"advantages\">\r\n      <div class=\"advantages__wrapper\">\r\n        <div class=\"advantages__items\">\r\n          <div class=\"advantages__item advantages__item-1\">\r\n            <p class=\"advantages__item-text\"><span>Дома комфорт-класса</span> и выше</p>\r\n            <div class=\"advantages__item-img-box\">\r\n              <div class=\"advantages__item-gradient\"></div>\r\n              <img alt=\"\" class=\"advantages__item-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\">\r\n            </div>\r\n          </div>\r\n          <div class=\"advantages__item advantages__item-2\">\r\n            <p class=\"advantages__item-text\"><span>Быстрый выбор из</span> качественной базы жилья</p>\r\n            <div class=\"advantages__item-img-box\">\r\n              <div class=\"advantages__item-gradient\"></div>\r\n              <img alt=\"\" class=\"advantages__item-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\">\r\n            </div>\r\n          </div>\r\n          <div class=\"advantages__item advantages__item-3\">\r\n            <p class=\"advantages__item-text\"><span>Простая система</span> бронирования</p>\r\n            <div class=\"advantages__item-img-box\">\r\n              <div class=\"advantages__item-gradient\"></div>\r\n              <img alt=\"\" class=\"advantages__item-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n  </main>\r\n\r\n  <footer class=\"footer\">\r\n    <div class=\"container\">\r\n      <div class=\"footer__wrapper\">\r\n        <div class=\"footer__links\">\r\n          <a class=\"footer__link\" href=\"#\">© 2023 LuxeRent</a>\r\n          <a class=\"footer__link\" href=\"#\">Конфиденциальность</a>\r\n          <a class=\"footer__link\" href=\"#\">Условия</a>\r\n          <a class=\"footer__link\" href=\"#\">Реквизиты компании</a>\r\n          <a class=\"footer__link\" href=\"#\">Поддержка</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n</body>\r\n<" + "script src=\"https://cdn.jsdelivr.net/npm/flatpickr\"><" + "/script>\r\n</html>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../node_modules/group-css-media-queries-loader/lib/index.js!../node_modules/resolve-url-loader/index.js!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/img/advantages/adv-1.jpg":
/*!**************************************!*\
  !*** ./src/img/advantages/adv-1.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/adv-1.jpg";

/***/ }),

/***/ "./src/img/advantages/adv-2.jpg":
/*!**************************************!*\
  !*** ./src/img/advantages/adv-2.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/adv-2.jpg";

/***/ }),

/***/ "./src/img/advantages/adv-3.jpg":
/*!**************************************!*\
  !*** ./src/img/advantages/adv-3.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/adv-3.jpg";

/***/ }),

/***/ "./src/img/favicon.png":
/*!*****************************!*\
  !*** ./src/img/favicon.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/favicon.png";

/***/ }),

/***/ "./src/img/favicon.svg":
/*!*****************************!*\
  !*** ./src/img/favicon.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/favicon.svg";

/***/ }),

/***/ "./src/img/icons/arrow-down.svg":
/*!**************************************!*\
  !*** ./src/img/icons/arrow-down.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/arrow-down.svg";

/***/ }),

/***/ "./src/img/icons/calendar-icon.svg":
/*!*****************************************!*\
  !*** ./src/img/icons/calendar-icon.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/calendar-icon.svg";

/***/ }),

/***/ "./src/img/icons/home-icon.svg":
/*!*************************************!*\
  !*** ./src/img/icons/home-icon.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/home-icon.svg";

/***/ }),

/***/ "./src/img/icons/spin.svg":
/*!********************************!*\
  !*** ./src/img/icons/spin.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/spin.svg";

/***/ }),

/***/ "./src/img/icons/users-icon.svg":
/*!**************************************!*\
  !*** ./src/img/icons/users-icon.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/users-icon.svg";

/***/ }),

/***/ "./src/img/offers/1.jpg":
/*!******************************!*\
  !*** ./src/img/offers/1.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/1.jpg";

/***/ }),

/***/ "./src/img/offers/10.jpg":
/*!*******************************!*\
  !*** ./src/img/offers/10.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/10.jpg";

/***/ }),

/***/ "./src/img/offers/11.jpg":
/*!*******************************!*\
  !*** ./src/img/offers/11.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/11.jpg";

/***/ }),

/***/ "./src/img/offers/12.jpg":
/*!*******************************!*\
  !*** ./src/img/offers/12.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/12.jpg";

/***/ }),

/***/ "./src/img/offers/2.jpg":
/*!******************************!*\
  !*** ./src/img/offers/2.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/2.jpg";

/***/ }),

/***/ "./src/img/offers/3.jpg":
/*!******************************!*\
  !*** ./src/img/offers/3.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/3.jpg";

/***/ }),

/***/ "./src/img/offers/4.jpg":
/*!******************************!*\
  !*** ./src/img/offers/4.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/4.jpg";

/***/ }),

/***/ "./src/img/offers/5.jpg":
/*!******************************!*\
  !*** ./src/img/offers/5.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/5.jpg";

/***/ }),

/***/ "./src/img/offers/6.jpg":
/*!******************************!*\
  !*** ./src/img/offers/6.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/6.jpg";

/***/ }),

/***/ "./src/img/offers/7.jpg":
/*!******************************!*\
  !*** ./src/img/offers/7.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/7.jpg";

/***/ }),

/***/ "./src/img/offers/8.jpg":
/*!******************************!*\
  !*** ./src/img/offers/8.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/8.jpg";

/***/ }),

/***/ "./src/img/offers/9.jpg":
/*!******************************!*\
  !*** ./src/img/offers/9.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/9.jpg";

/***/ }),

/***/ "./src/img/top-bg.jpg":
/*!****************************!*\
  !*** ./src/img/top-bg.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/top-bg.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _scripts_add_to_favorites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/add-to-favorites */ "./src/scripts/add-to-favorites.js");
/* harmony import */ var _scripts_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/calendar */ "./src/scripts/calendar.js");




(0,_scripts_add_to_favorites__WEBPACK_IMPORTED_MODULE_2__.addToFavorites)();
(0,_scripts_calendar__WEBPACK_IMPORTED_MODULE_3__.addDate)();
})();

/******/ })()
;
//# sourceMappingURL=main.3e399a80188fa3c015cb.js.map