webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<!-- <div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to {{title}}!\r\n  </h1>\r\n  <img width=\"300\" src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNTAgMjUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTAgMjUwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojREQwMDMxO30NCgkuc3Qxe2ZpbGw6I0MzMDAyRjt9DQoJLnN0MntmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjxnPg0KCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTI1LDMwIDEyNSwzMCAxMjUsMzAgMzEuOSw2My4yIDQ2LjEsMTg2LjMgMTI1LDIzMCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAJIi8+DQoJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxMjUsMzAgMTI1LDUyLjIgMTI1LDUyLjEgMTI1LDE1My40IDEyNSwxNTMuNCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAxMjUsMzAgCSIvPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMjUsNTIuMUw2Ni44LDE4Mi42aDBoMjEuN2gwbDExLjctMjkuMmg0OS40bDExLjcsMjkuMmgwaDIxLjdoMEwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMQ0KCQlMMTI1LDUyLjF6IE0xNDIsMTM1LjRIMTA4bDE3LTQwLjlMMTQyLDEzNS40eiIvPg0KPC9nPg0KPC9zdmc+DQo=\">\r\n</div>\r\n<h2>Here are some links to help you start: </h2>\r\n<ul>\r\n  <li>\r\n    <h2><a target=\"_blank\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" href=\"https://blog.angular.io//\">Angular blog</a></h2>\r\n  </li>\r\n</ul> -->\r\n<div class=\"container\">\r\n<router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_section_main_section_component__ = __webpack_require__("../../../../../src/app/main-section/main-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bridge_service__ = __webpack_require__("../../../../../src/app/bridge.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bid_form_bid_form_component__ = __webpack_require__("../../../../../src/app/bid-form/bid-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__main_section_main_section_component__["a" /* MainSectionComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__main_section_main_section_component__["a" /* MainSectionComponent */],
            __WEBPACK_IMPORTED_MODULE_8__bid_form_bid_form_component__["a" /* BidFormComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(routes),
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__bridge_service__["a" /* BridgeApi */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/bid-form/bid-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "select.ng-invalid.ng-touched, textarea.ng-invalid.ng-touched  {\r\n  border: 2px solid red;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bid-form/bid-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n  <div class=\"row\" style=\"margin: 5px;\">\n    <div class=\"col-xs-4\" role=\"group\" aria-label=\"...\">\n      <label for=\"num\">Choose a number</label>\n      <select class=\"form-control\" name=\"numericBid\" id=\"num\" required ngModel #num=\"ngModel\">\n            <option value=\"1\">1</option>\n            <option value=\"1\">2</option>\n            <option value=\"1\">3</option>\n            <option value=\"1\">4</option>\n            <option value=\"1\">5</option>\n            <option value=\"1\">6</option>\n            <option value=\"1\">7</option>\n        </select>\n      <span *ngIf=\"num.invalid && num.touched\"> You need to choose a numeric bid</span>\n      <select class=\"form-control pull-right\" name=\"suitBid\" id=\"suit\" required ngModel #suit=\"ngModel\">\n            <option value=\"Spades\">Spades</option>\n            <option value=\"Hearts\">Hearts</option>\n            <option value=\"Diamonds\">Diamonds</option>\n            <option value=\"Clubs\">Clubs</option>\n            <option value=\"NoTrump\">NoTrump</option>\n          </select>\n      <div class=\"row\">\n        <span *ngIf=\"suit.invalid && suit.touched\">\n              You need to choose a suit bid\n            </span>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"comment\">Comment:</label>\n    <textarea class=\"form-control\" rows=\"5\" id=\"comment\" ngModel name=\"comments\" required #comment=\"ngModel\"></textarea>\n  </div>\n  <span *ngIf=\"comment.invalid && comment.touched\">You need to type a comment</span>\n  <br>\n  <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!f.valid\">Submit Auction</button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/bid-form/bid-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BidFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bridge_service__ = __webpack_require__("../../../../../src/app/bridge.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BidFormComponent = (function () {
    function BidFormComponent(bridgeApi, http) {
        this.bridgeApi = bridgeApi;
        this.http = http;
        this.defaultSuit = 'Spades';
        this.defaultNum = 1;
    }
    BidFormComponent.prototype.onSubmit = function () {
        this.bridgeApi.saveBid(this.bridgeForm.value.numericBid, this.bridgeForm.value.suitBid, this.bridgeForm.value.comments);
        console.log(this.bridgeApi.bid);
        this.bridgeApi.toDatabase().subscribe(function (data) { console.log(data); }, function (error) { console.error(error); });
        this.bridgeForm.reset();
    };
    BidFormComponent.prototype.ngOnInit = function () {
    };
    return BidFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], BidFormComponent.prototype, "bridgeForm", void 0);
BidFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-bid-form',
        template: __webpack_require__("../../../../../src/app/bid-form/bid-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/bid-form/bid-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__bridge_service__["a" /* BridgeApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__bridge_service__["a" /* BridgeApi */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _c || Object])
], BidFormComponent);

var _a, _b, _c;
//# sourceMappingURL=bid-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/bridge.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BridgeApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_model__ = __webpack_require__("../../../../../src/app/card.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BridgeApi = (function () {
    function BridgeApi(http) {
        this.http = http;
        this.bid = {
            hand: [],
            hcp: 0,
            numbid: '',
            suit: '',
            comment: ''
        };
    }
    BridgeApi.prototype.deck = function () {
        var names = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        var suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
        var cards = [];
        for (var s = 0; s < suits.length; s++) {
            for (var n = 0; n < names.length; n++) {
                cards.push(new __WEBPACK_IMPORTED_MODULE_0__card_model__["a" /* Card */](n + 1, names[n], suits[s]));
            }
        }
        return cards;
    };
    BridgeApi.prototype.initializeHand = function (array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        var shuffledArray = array.slice(0, 13);
        shuffledArray.sort(function (a, b) {
            var suit1 = a.suit;
            var suit2 = b.suit;
            if (suit1 > suit2) {
                return -1;
            }
            if (suit1 < suit2) {
                return 1;
            }
            return 0;
        });
        return shuffledArray;
    };
    BridgeApi.prototype.sortArrayValues = function (array) {
        array.sort(function (a, b) {
            var value1 = a.value;
            var value2 = b.value;
            if (value1 < value2) {
                return 1;
            }
            if (value2 > value2) {
                return -1;
            }
            return 0;
        });
        return array;
    };
    BridgeApi.prototype.filterArray = function (array, condition) {
        var newArray = array.filter(function (el) {
            return el.suit === condition;
        });
        return newArray;
    };
    BridgeApi.prototype.saveHand = function (hand, hcp) {
        this.bid.hand = hand;
        this.bid.hcp = hcp;
    };
    BridgeApi.prototype.saveBid = function (no, suit, comment) {
        this.bid.comment = comment;
        this.bid.numbid = no;
        this.bid.suit = suit;
    };
    BridgeApi.prototype.toDatabase = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var body = JSON.stringify(this.bid);
        return this.http.post('/', body, { headers: header })
            .map(function (response) { response.json(); }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error.json()); });
    };
    return BridgeApi;
}());
BridgeApi = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], BridgeApi);

var _a;
//# sourceMappingURL=bridge.service.js.map

/***/ }),

/***/ "../../../../../src/app/card.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Card; });
var Card = (function () {
    function Card(value, name, suit) {
        this.value = value;
        this.name = name;
        this.suit = suit;
    }
    return Card;
}());

//# sourceMappingURL=card.model.js.map

/***/ }),

/***/ "../../../../../src/app/main-section/main-section.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\r\n  float: left;\r\n  width: 100px;\r\n  height: 100px;\r\n  display: block;\r\n  border: 3px solid;\r\n  margin: 5px;\r\n  border-radius: 3px;\r\n  border-color: lightblue;;\r\n  padding: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-section/main-section.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-12\" style=\"display:flex; justify-content:center; margin-top:30px; padding:20px;\">\r\n    <button class=\"btn btn-primary\" (click)=\"getHand(cardsArray)\">Initialize Hand</button>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-6\">\r\n        <div class=\"card\" *ngFor=\"let card of spades\">{{card.name}} {{card.suit}} <br>\r\n          <div *ngIf=\"card.value>0\"> HCP = {{card.value}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-6\">\r\n        <div class=\"card\" *ngFor=\"let card of hearts\">{{card.name}} {{card.suit}} <br>\r\n          <div *ngIf=\"card.value>0\"> HCP = {{card.value}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-6\">\r\n        <div class=\"card\" *ngFor=\"let card of diamonds\">{{card.name}} {{card.suit}} <br>\r\n          <div *ngIf=\"card.value>0\"> HCP = {{card.value}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-6\">\r\n        <div class=\"card\" *ngFor=\"let card of clubs\">{{card.name}} {{card.suit}} <br>\r\n          <div *ngIf=\"card.value>0\"> HCP = {{card.value}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12\">\r\n    <div *ngIf=\"handInitialized\"  style=\"margin:10px\">\r\n      <app-bid-form></app-bid-form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/main-section/main-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bridge_service__ = __webpack_require__("../../../../../src/app/bridge.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainSectionComponent = (function () {
    function MainSectionComponent(bridgeApi) {
        this.bridgeApi = bridgeApi;
        this.handInitialized = false;
    }
    MainSectionComponent.prototype.fixHcp = function (array) {
        array.forEach(function (element) {
            if (element.value >= 10) {
                element.value = element.value % 10 + 1;
            }
            else {
                element.value = 0;
            }
        });
        return array;
    };
    MainSectionComponent.prototype.getHand = function (array) {
        this.hand = this.bridgeApi.initializeHand(array);
        this.hand = this.fixHcp(this.hand);
        this.spades = this.bridgeApi.filterArray(this.hand, 'Spades');
        this.bridgeApi.sortArrayValues(this.spades);
        this.hearts = this.bridgeApi.filterArray(this.hand, 'Hearts');
        this.bridgeApi.sortArrayValues(this.hearts);
        this.diamonds = this.bridgeApi.filterArray(this.hand, 'Diamonds');
        this.bridgeApi.sortArrayValues(this.diamonds);
        this.clubs = this.bridgeApi.filterArray(this.hand, 'Clubs');
        this.bridgeApi.sortArrayValues(this.clubs);
        this.handInitialized = true;
        var sum = 0;
        this.hand.forEach(function (el) {
            sum = el.value + sum;
        });
        this.bridgeApi.saveHand(this.hand, sum);
        console.log(this.bridgeApi.bid);
    };
    MainSectionComponent.prototype.ngOnInit = function () {
        this.cardsArray = this.bridgeApi.deck();
    };
    return MainSectionComponent;
}());
MainSectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-main-section',
        template: __webpack_require__("../../../../../src/app/main-section/main-section.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main-section/main-section.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__bridge_service__["a" /* BridgeApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__bridge_service__["a" /* BridgeApi */]) === "function" && _a || Object])
], MainSectionComponent);

var _a;
//# sourceMappingURL=main-section.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map