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

module.exports = "  <app-header></app-header>\r\n  <router-outlet></router-outlet>\r\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__homepage_homepage_component__ = __webpack_require__("../../../../../src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__practice_practice_component__ = __webpack_require__("../../../../../src/app/practice/practice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__donate_donate_component__ = __webpack_require__("../../../../../src/app/donate/donate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__lead_lead_component__ = __webpack_require__("../../../../../src/app/lead/lead.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__homepage_homepage_component__["a" /* HomepageComponent */] },
    { path: 'bid', component: __WEBPACK_IMPORTED_MODULE_6__main_section_main_section_component__["a" /* MainSectionComponent */] },
    { path: 'practice', component: __WEBPACK_IMPORTED_MODULE_11__practice_practice_component__["a" /* PracticeComponent */] },
    { path: 'donate', component: __WEBPACK_IMPORTED_MODULE_12__donate_donate_component__["a" /* DonateComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_13__contact_contact_component__["a" /* ContactComponent */] },
    { path: 'lead', component: __WEBPACK_IMPORTED_MODULE_14__lead_lead_component__["a" /* LeadComponent */] },
    { path: '**', redirectTo: '' }
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
            __WEBPACK_IMPORTED_MODULE_8__bid_form_bid_form_component__["a" /* BidFormComponent */],
            __WEBPACK_IMPORTED_MODULE_9__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_10__homepage_homepage_component__["a" /* HomepageComponent */],
            __WEBPACK_IMPORTED_MODULE_11__practice_practice_component__["a" /* PracticeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__donate_donate_component__["a" /* DonateComponent */],
            __WEBPACK_IMPORTED_MODULE_13__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_14__lead_lead_component__["a" /* LeadComponent */]
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

module.exports = "<form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n  <div class=\"row\" style=\"margin: 5px;\">\n    <div class=\"col-xs-12\" role=\"group\" aria-label=\"...\">\n      <label for=\"num\">Choose a number</label>\n      <select class=\"form-control\" name=\"numericBid\" id=\"num\" required ngModel #num=\"ngModel\">\n            <option value=\"1\">1</option>\n            <option value=\"1\">2</option>\n            <option value=\"1\">3</option>\n            <option value=\"1\">4</option>\n            <option value=\"1\">5</option>\n            <option value=\"1\">6</option>\n            <option value=\"1\">7</option>\n            <option value=\"Pass\">Pass</option>\n        </select>\n      <span *ngIf=\"num.invalid && num.touched\"> You need to choose a numeric bid</span>\n      <label for=\"suit\">Choose a Suit</label>\n      <select class=\"form-control pull-right\" name=\"suitBid\" id=\"suit\" required ngModel #suit=\"ngModel\">\n            <option value=\"Spades\">Spades</option>\n            <option value=\"Hearts\">Hearts</option>\n            <option value=\"Diamonds\">Diamonds</option>\n            <option value=\"Clubs\">Clubs</option>\n            <option value=\"NoTrump\">NoTrump</option>\n            <option value=\"Pass\">Pass</option>\n          </select>\n      <div class=\"row\">\n        <span *ngIf=\"suit.invalid && suit.touched\">\n              You need to choose a suit bid\n            </span>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-12\" style=\"display: flex; justify-content: center; margin-top: 10px;\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"Pass()\">Pass</button>\n      </div>\n      </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"comment\">Comment:</label>\n    <textarea class=\"form-control col-xs-12\" rows=\"5\" id=\"comment\" ngModel name=\"comments\" required #comment=\"ngModel\"></textarea>\n  </div>\n  <span *ngIf=\"comment.invalid && comment.touched\">You need to type a comment</span>\n  <br>\n  <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!f.valid\">Submit Auction</button>\n  <button type=\"button\" (click)=\"toPracticeBids()\" class=\"btn btn-primary\" [disabled]=\"!f.valid\">To practice Bids</button>\n</form>\n"

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
    }
    BidFormComponent.prototype.onSubmit = function () {
        this.bridgeApi.saveBid(this.bridgeForm.value.numericBid, this.bridgeForm.value.suitBid, this.bridgeForm.value.comments);
        console.log(this.bridgeApi.bid);
        this.bridgeApi.toDatabase().subscribe(function (data) { return console.log('A bid was succesfully sent'); }, function (error) { return console.error(error); });
        this.bridgeForm.reset();
    };
    BidFormComponent.prototype.toPracticeBids = function () {
        this.bridgeApi.saveBid(this.bridgeForm.value.numericBid, this.bridgeForm.value.suitBid, this.bridgeForm.value.comments);
        console.log(this.bridgeApi.bid);
        this.bridgeApi.toPracticeCollection().subscribe(function (data) { return console.log('A bid was succesfully sent'); }, function (error) { return console.error(error); });
    };
    BidFormComponent.prototype.Pass = function () {
        this.bridgeForm.setValue({ numericBid: 'Pass', suitBid: 'Pass', comments: '' });
    };
    BidFormComponent.prototype.ngOnInit = function () { };
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
        this.submitted = false;
        this.bid = {
            hand: [],
            hcp: 0,
            numbid: '',
            suit: '',
            comment: ''
        };
    }
    BridgeApi.prototype.coinFlip = function () {
        return (Math.random() < 0.5 ? 0 : 1);
    };
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
        this.submitted = true;
        return this.http.post('https://bridge-auction-app.herokuapp.com/addauction', body, { headers: header })
            .map(function (response) { response.json(); }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error.json()); });
    };
    BridgeApi.prototype.toPracticeCollection = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var body = JSON.stringify(this.bid);
        return this.http.post('https://bridge-auction-app.herokuapp.com/addpracticebid', body, { headers: header })
            .map(function (response) { response.json(); }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error.json()); });
    };
    BridgeApi.prototype.fetchHand = function () {
        return this.http.get('/randomhand').map(function (response) { return response.json().result; }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error.json()); });
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

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  contact works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/donate/donate.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/donate/donate.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  donate works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/donate/donate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DonateComponent = (function () {
    function DonateComponent() {
    }
    DonateComponent.prototype.ngOnInit = function () {
    };
    return DonateComponent;
}());
DonateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-donate',
        template: __webpack_require__("../../../../../src/app/donate/donate.component.html"),
        styles: [__webpack_require__("../../../../../src/app/donate/donate.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DonateComponent);

//# sourceMappingURL=donate.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#menu-item {\r\n  color: lightgrey;\r\n  font-size: 16px;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n#menu-item:hover {\r\n  color: white;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <nav class=\"navbar navbar-inverse\" style=\"background: linear-gradient(to right, darkgreen , green)\">\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n        <ul class=\"nav navbar-nav\">\n          <li style=\"cursor:pointer;\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n            <a id=\"menu-item\" routerLink=\"/\">Home</a></li>\n          <li style=\"cursor:pointer\" routerLinkActive=\"active\">\n            <a id=\"menu-item\" routerLink=\"/bid\">Bid Now</a></li>\n          <li style=\"cursor:pointer\" routerLinkActive=\"active\">\n            <a id=\"menu-item\" routerLink=\"/practice\">Practice</a> </li>\n          <li style=\"cursor:pointer\" routerLinkActive=\"active\">\n            <a id=\"menu-item\" routerLink=\"/lead\">Lead</a></li>\n            <li style=\"cursor:pointer\" routerLinkActive=\"active\">\n              <a id=\"menu-item\" routerLink=\"/donate\">Donate</a></li>\n              <li style=\"cursor:pointer\" routerLinkActive=\"active\">\n                <a id=\"menu-item\" routerLink=\"/contact\">Contact</a></li>\n        </ul>\n      </div>\n    </nav>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  homepage works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomepageComponent = (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    return HomepageComponent;
}());
HomepageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-homepage',
        template: __webpack_require__("../../../../../src/app/homepage/homepage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/homepage/homepage.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomepageComponent);

//# sourceMappingURL=homepage.component.js.map

/***/ }),

/***/ "../../../../../src/app/lead/lead.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lead/lead.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  lead works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/lead/lead.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LeadComponent = (function () {
    function LeadComponent() {
    }
    LeadComponent.prototype.ngOnInit = function () {
    };
    return LeadComponent;
}());
LeadComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-lead',
        template: __webpack_require__("../../../../../src/app/lead/lead.component.html"),
        styles: [__webpack_require__("../../../../../src/app/lead/lead.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LeadComponent);

//# sourceMappingURL=lead.component.js.map

/***/ }),

/***/ "../../../../../src/app/main-section/main-section.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\r\n  float: left;\r\n  width: auto;\r\n  height: 150px;\r\n  display: block;\r\n  border: 1px solid;\r\n  border-right:1px bold;\r\n  border-color: grey;;\r\n  padding: 6px;\r\n  text-align: center;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n  background-color: white;\r\n  border-radius: 3px;\r\n}\r\n.suit {\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n.board {\r\n  padding: 100px 30px 60px 30px;\r\n  background-color: green;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  border-radius: 10px;\r\n}\r\n.red {\r\n  color:#E31818;\r\n}\r\n.hcpdisplay {\r\n  font-weight: bold;\r\n  font-size: 18px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n.form-control {\r\n  height: auto;\r\n  margin-bottom: 3px;\r\n}\r\n@media screen and (max-width: 480px) {\r\n  .board {\r\n    padding: 20px 20px 20px 20px;\r\n    background-color: green;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    border-radius: 10px;\r\n  }\r\n  .card {\r\n    height: auto;\r\n    font-size: 15px;\r\n  }\r\n  .suit {\r\n    width: 18px;\r\n    height: 18px;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-section/main-section.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\" style=\"display:flex; justify-content:center; padding:0px 20px 20px 20px;\">\r\n      <button class=\"btn btn-primary\" (click)=\"getHand(cardsArray)\">Initialize Hand</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <div class=\"col-xs-6\">\r\n        <div class=\"board\" *ngIf=\"handInitialized\">\r\n          <div class=\"row\">\r\n            <div class=\"card\" *ngFor=\"let card of spades\">{{card.name}}\r\n              <br>\r\n              <img class=\"suit\" src=\"https://i.imgur.com/tXgx0h3.png\">\r\n            </div>\r\n            <div class=\"card red\" *ngFor=\"let card of hearts\">{{card.name}}\r\n              <br>\r\n              <img class=\"suit\" src=\"https://i.imgur.com/Chg6eQ8.jpg\">\r\n            </div>\r\n            <div class=\"card\" *ngFor=\"let card of clubs\">{{card.name}}\r\n              <br>\r\n              <img class=\"suit\" src=\"https://i.imgur.com/TsBK3k9.jpg\">\r\n            </div>\r\n            <div class=\"card red\" *ngFor=\"let card of diamonds\">{{card.name}}\r\n              <br>\r\n              <img class=\"suit\" src=\"https://i.imgur.com/khCb5Vu.jpg\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"handInitialized\">\r\n          <div class=\"col-xs-12 hcpdisplay\">Total HCP = {{hcp}}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-6\">\r\n        <div *ngIf=\"handInitialized\" style=\"margin:10px\">\r\n          <app-bid-form></app-bid-form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"newHand\">\r\n    <div class=\"col-xs-12 form-control\">\r\n      <label> This is a new hand. Thank you for contributing!</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"handInitialized && bridgeApi.submitted && !newHand\">\r\n    <div class=\"col-xs-12\">\r\n      <label for=\"comments\"> Bid and Comments</label>\r\n      <div class=\"form-control\" *ngFor=\"let bid of bids\">\r\n        <strong> Bid : {{bid.numericBid}} </strong>\r\n        <p *ngIf=\"bid.numericBid==='!Pass'\">{{bid.suitBid}}</p> <br>\r\n        <strong> Comments</strong> : {{bid.comments}} </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/main-section/main-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bridge_service__ = __webpack_require__("../../../../../src/app/bridge.service.ts");
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
    function MainSectionComponent(bridgeApi, http) {
        this.bridgeApi = bridgeApi;
        this.http = http;
        this.handInitialized = false;
        this.bids = [];
        this.newHand = false;
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
        var _this = this;
        this.bridgeApi.submitted = false;
        var coin = this.bridgeApi.coinFlip();
        this.bids = [];
        if (coin) {
            this.bridgeApi.fetchHand().subscribe(function (results) {
                console.log('This is an existing hand', results);
                _this.newHand = false;
                _this.hand = results[0].array;
                _this.hcp = results[0].hcp;
                results.forEach(function (el) { _this.bids.push(el); });
                _this.spades = _this.bridgeApi.filterArray(_this.hand, 'Spades');
                _this.hearts = _this.bridgeApi.filterArray(_this.hand, 'Hearts');
                _this.diamonds = _this.bridgeApi.filterArray(_this.hand, 'Diamonds');
                _this.clubs = _this.bridgeApi.filterArray(_this.hand, 'Clubs');
                _this.handInitialized = true;
                _this.bridgeApi.saveHand(_this.hand, _this.hcp);
                console.log(_this.bridgeApi.bid);
            });
        }
        else {
            this.newHand = true;
            this.bids = [];
            this.hand = this.bridgeApi.initializeHand(array);
            this.spades = this.bridgeApi.filterArray(this.hand, 'Spades');
            this.bridgeApi.sortArrayValues(this.spades);
            this.hearts = this.bridgeApi.filterArray(this.hand, 'Hearts');
            this.bridgeApi.sortArrayValues(this.hearts);
            this.diamonds = this.bridgeApi.filterArray(this.hand, 'Diamonds');
            this.bridgeApi.sortArrayValues(this.diamonds);
            this.clubs = this.bridgeApi.filterArray(this.hand, 'Clubs');
            this.bridgeApi.sortArrayValues(this.clubs);
            this.handInitialized = true;
            this.hand = this.fixHcp(this.hand);
            this.hand = this.spades.concat(this.hearts).concat(this.clubs).concat(this.diamonds);
            console.log(this.hand);
            var sum_1 = 0;
            this.hand.forEach(function (el) {
                sum_1 = el.value + sum_1;
            });
            this.hcp = sum_1;
            this.bridgeApi.saveHand(this.hand, this.hcp);
            console.log(this.bridgeApi.bid);
        }
        this.cardsArray = this.bridgeApi.deck();
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__bridge_service__["a" /* BridgeApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__bridge_service__["a" /* BridgeApi */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
], MainSectionComponent);

var _a, _b;
//# sourceMappingURL=main-section.component.js.map

/***/ }),

/***/ "../../../../../src/app/practice/practice.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/practice/practice.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  practice works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/practice/practice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PracticeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PracticeComponent = (function () {
    function PracticeComponent() {
    }
    PracticeComponent.prototype.ngOnInit = function () {
    };
    return PracticeComponent;
}());
PracticeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-practice',
        template: __webpack_require__("../../../../../src/app/practice/practice.component.html"),
        styles: [__webpack_require__("../../../../../src/app/practice/practice.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PracticeComponent);

//# sourceMappingURL=practice.component.js.map

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