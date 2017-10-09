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

/***/ "../../../../../src/app/Bid Section/bid-form/bid-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "select.ng-invalid.ng-touched, textarea.ng-invalid.ng-touched  {\r\n  border: 2px solid red;\r\n}\r\n.warning {\r\n  margin: 5px 0px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Bid Section/bid-form/bid-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n  <div class=\"row\" style=\"margin: 5px;\">\n    <div class=\"col-xs-12\" role=\"group\" aria-label=\"...\">\n      <div class=\"row\">\n        <label for=\"num\">Choose a number</label>\n      </div>\n      <select class=\"form-control\" name=\"numericBid\" id=\"num\" required ngModel #num=\"ngModel\">\n            <option value=\"1\">1</option>\n            <option value=\"1\">2</option>\n            <option value=\"1\">3</option>\n            <option value=\"1\">4</option>\n            <option value=\"1\">5</option>\n            <option value=\"1\">6</option>\n            <option value=\"1\">7</option>\n            <option value=\"Pass\">Pass</option>\n        </select>\n      <div class=\"row warning\">\n        <span *ngIf=\"num.invalid && num.touched\"> You need to choose a numeric bid</span>\n      </div>\n      <div class=\"row\">\n        <label for=\"suit\">Choose a Suit</label>\n      </div>\n      <select class=\"form-control pull-right\" name=\"suitBid\" id=\"suit\" required ngModel #suit=\"ngModel\">\n            <option value=\"Spades\">Spades</option>\n            <option value=\"Hearts\">Hearts</option>\n            <option value=\"Diamonds\">Diamonds</option>\n            <option value=\"Clubs\">Clubs</option>\n            <option value=\"NoTrump\">NoTrump</option>\n            <option value=\"Pass\">Pass</option>\n          </select>\n      <div class=\"row warning\">\n        <span *ngIf=\"suit.invalid && suit.touched\">\n              You need to choose a suit bid\n            </span>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-12\" style=\"display: flex; justify-content: center; margin-top: 10px;\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"Pass()\">Pass</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"comment\">Comment:</label>\n    <textarea class=\"form-control col-xs-12\" rows=\"5\" id=\"comment\" ngModel name=\"comments\" required #comment=\"ngModel\"></textarea>\n  </div>\n  <span *ngIf=\"comment.invalid && comment.touched\">You need to type a comment</span>\n  <br>\n  <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!f.valid\">Submit Bid</button>\n  <br>\n  <strong>Password : </strong>\n  <input type=\"password\" [(ngModel)]=\"password\" [ngModelOptions]=\"{standalone: true}\">\n  <button type=\"button\" (click)=\"toPracticeBids()\" class=\"btn btn-primary\" [disabled]=\"f.invalid || password !== 'FKI'\">\n      To practice Bids\n      </button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/Bid Section/bid-form/bid-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BidFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_bridge_service__ = __webpack_require__("../../../../../src/app/Services/bridge.service.ts");
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
        this.bridgeApi.toPracticeCollection().subscribe(function (data) { return console.log('A practice bid was succesfully sent'); }, function (error) { return console.error(error); });
        this.bridgeApi.toDatabase().subscribe(function (data) { return console.log('A bid was succesfully sent'); }, function (error) { return console.error(error); });
        this.bridgeForm.reset();
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
        template: __webpack_require__("../../../../../src/app/Bid Section/bid-form/bid-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Bid Section/bid-form/bid-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Services_bridge_service__["a" /* BridgeApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_bridge_service__["a" /* BridgeApi */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _c || Object])
], BidFormComponent);

var _a, _b, _c;
//# sourceMappingURL=bid-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/Bid Section/bid-thread/bid-thread.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hcpdisplay {\r\n  font-weight: bold;\r\n  font-size: 18px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n.form-control {\r\n  height: auto;\r\n  margin-bottom: 3px;\r\n}\r\n.vote{\r\n  width:4%;\r\n  float: left;\r\n}\r\n#comment {\r\n  width:96%;\r\n  float: left;\r\n}\r\n#subheading {\r\n  display:-webkit-box;\r\n  display:-ms-flexbox;\r\n  display:flex;\r\n  color: #974141;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  font-size: large;\r\n  font-weight: bold;\r\n  box-sizing: border-box;\r\n  margin: 5px auto;\r\n  border: 3px dotted lightgrey;\r\n  border-radius: 3px;\r\n  width: 80%;\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Bid Section/bid-thread/bid-thread.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"user.loggedIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\" style=\"display:flex; justify-content:center; padding:0px 20px 20px 20px;\">\r\n      <button class=\"btn btn-primary\" (click)=\"getHand(cardsArray)\">Initialize Hand</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <div class=\"col-xs-6\">\r\n        <app-card-board [cards]=\"hand\" [Initialized]=\"handInitialized\"></app-card-board>\r\n        <div class=\"row\" *ngIf=\"handInitialized\">\r\n          <div class=\"col-xs-12 hcpdisplay\">Total HCP = {{hcp}}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-6\">\r\n        <div *ngIf=\"handInitialized\" style=\"margin:10px\">\r\n          <app-bid-form></app-bid-form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"newHand\">\r\n    <div class=\"col-xs-12 form-control\">\r\n      <label> This is a new hand. Thank you for contributing!</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"handInitialized && bridgeApi.submitted && !newHand\">\r\n    <label class=\"row\" for=\"comments\"> Bid and Comments</label>\r\n    <div class=\"row\" *ngFor=\"let bid of bids\">\r\n      <div class=\"col-xs-12\">\r\n        <div class=\"vote\">\r\n          <app-comment [link]=\"'/bidvote'\" [id]=\"bid._id\" [votes]=\"bid.votes\"></app-comment>\r\n        </div>\r\n        <div class=\"form-control\" id=\"comment\"><strong> Bid : </strong>{{bid.numericBid}}\r\n          <span *ngIf=\"bid.numericBid!=='Pass'\">of {{bid.suitBid}}</span> <br>\r\n          <strong> Comments</strong> : {{bid.comments}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"container\" *ngIf=\"!user.loggedIn\">\r\n  <div id=\"subheading\">\r\n    <h2>Please log in, in order to be able to use this section.</h2>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/Bid Section/bid-thread/bid-thread.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BidThreadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_bridge_service__ = __webpack_require__("../../../../../src/app/Services/bridge.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_user_service__ = __webpack_require__("../../../../../src/app/Services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BidThreadComponent = (function () {
    function BidThreadComponent(bridgeApi, http, user) {
        this.bridgeApi = bridgeApi;
        this.http = http;
        this.user = user;
        this.handInitialized = false;
        this.bids = [];
        this.newHand = false;
    }
    BidThreadComponent.prototype.getHand = function (array) {
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
                _this.bids.sort(function (a, b) {
                    var value1 = a.votes;
                    var value2 = b.votes;
                    return value2 - value1;
                });
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
            var hcpValid = true;
            var _loop_1 = function () {
                this_1.hand = this_1.bridgeApi.initializeHand(array);
                this_1.spades = this_1.bridgeApi.filterArray(this_1.hand, 'Spades');
                this_1.spades = this_1.bridgeApi.sortArrayValues(this_1.spades);
                this_1.hearts = this_1.bridgeApi.filterArray(this_1.hand, 'Hearts');
                this_1.hearts = this_1.bridgeApi.sortArrayValues(this_1.hearts);
                this_1.diamonds = this_1.bridgeApi.filterArray(this_1.hand, 'Diamonds');
                this_1.diamonds = this_1.bridgeApi.sortArrayValues(this_1.diamonds);
                this_1.clubs = this_1.bridgeApi.filterArray(this_1.hand, 'Clubs');
                this_1.clubs = this_1.bridgeApi.sortArrayValues(this_1.clubs);
                this_1.hand = this_1.bridgeApi.fixHcp(this_1.hand);
                this_1.hand = this_1.spades.concat(this_1.hearts).concat(this_1.clubs).concat(this_1.diamonds);
                console.log(this_1.hand);
                var sum = 0;
                this_1.hand.forEach(function (el) {
                    sum = el.value + sum;
                });
                this_1.hcp = sum;
                if (this_1.hcp > 10) {
                    hcpValid = false;
                    this_1.handInitialized = true;
                }
                else {
                    array = this_1.bridgeApi.deck();
                }
            };
            var this_1 = this;
            while (hcpValid) {
                _loop_1();
            }
            this.bridgeApi.saveHand(this.hand, this.hcp);
            console.log(this.bridgeApi.bid);
        }
        this.cardsArray = this.bridgeApi.deck();
    };
    BidThreadComponent.prototype.ngOnInit = function () {
        this.cardsArray = this.bridgeApi.deck();
    };
    return BidThreadComponent;
}());
BidThreadComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-bid-thread',
        template: __webpack_require__("../../../../../src/app/Bid Section/bid-thread/bid-thread.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Bid Section/bid-thread/bid-thread.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Services_bridge_service__["a" /* BridgeApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_bridge_service__["a" /* BridgeApi */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__Services_user_service__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Services_user_service__["a" /* User */]) === "function" && _c || Object])
], BidThreadComponent);

var _a, _b, _c;
//# sourceMappingURL=bid-thread.component.js.map

/***/ }),

/***/ "../../../../../src/app/Bid Section/practice/practice.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".heading {\r\n  display:-webkit-box;\r\n  display:-ms-flexbox;\r\n  display:flex;\r\n  color: black;\r\n   -webkit-box-pack: center;\r\n       -ms-flex-pack: center;\r\n           justify-content: center;\r\n    border:1px solid black;\r\n    text-align: center;\r\n}\r\n#subheading {\r\n  display:-webkit-box;\r\n  display:-ms-flexbox;\r\n  display:flex;\r\n  color: #974141;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  font-size: large;\r\n  font-weight: bold;\r\n  box-sizing: border-box;\r\n  margin: 10px auto;\r\n  border: 3px dotted lightgrey;\r\n  border-radius: 3px;\r\n  width: 50%;\r\n  text-align: center;\r\n}\r\n.hline {\r\n  border-color: black;\r\n  width: 100%;\r\n}\r\n.hcpdisplay {\r\n  font-weight: bold;\r\n  font-size: 18px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n.card {\r\n  float: left;\r\n  width: auto;\r\n  height: 150px;\r\n  display: block;\r\n  border: 1px solid;\r\n  border-right:1px bold;\r\n  border-color: grey;;\r\n  padding: 6px;\r\n  text-align: center;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n  background-color: white;\r\n  border-radius: 3px;\r\n}\r\n.suit {\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n.board {\r\n  padding: 100px 30px 60px 30px;\r\n  background-color: green;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  border-radius: 10px;\r\n}\r\n.red {\r\n  color:#E31818;\r\n}\r\n@media screen and (max-width: 480px) {\r\n  .board {\r\n    padding: 20px 20px 20px 20px;\r\n    background-color: green;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    border-radius: 10px;\r\n  }\r\n  .card {\r\n    height: auto;\r\n    font-size: 15px;\r\n  }\r\n  .suit {\r\n    width: 18px;\r\n    height: 18px;\r\n  }\r\n}\r\n.response {\r\n  box-sizing: border-box;\r\n  padding: 10px;\r\n  border: 2px solid lightseagreen;\r\n  border-radius: 1px;\r\n  margin-top: auto;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n#com {\r\n  text-align: center;\r\n}\r\n.form-control {\r\n  height: auto;\r\n  margin-bottom: 3px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Bid Section/practice/practice.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div class=\"row heading\">\n        <h2>This sections give you the chance to practice on how to open the bidding phase</h2>\n      </div>\n      <div class=\"row\">\n        <span id=\"subheading\"> When you click the \"start practicing\" button, you will be served\n          a specific hand that has a specific bid as an answer</span>\n      </div>\n    </div>\n  </div>\n  <hr class=\"hline\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\" style=\"display:flex; justify-content:center; padding:0px 20px 20px 20px;\">\n      <button class=\"btn btn-primary\" (click)=\"startPractice()\">Start Practicing</button>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div class=\"col-xs-6\">\n        <app-card-board [cards]=\"hand\" [Initialized]=\"handInitialized\"></app-card-board>\n        <div class=\"row\" *ngIf=\"handInitialized\">\n          <div class=\"col-xs-12 hcpdisplay\">Total HCP = {{hcp}}</div>\n        </div>\n      </div>\n      <div class=\"col-xs-6\">\n        <div *ngIf=\"handInitialized && !bridgeApi.answerStatus\" style=\"margin:10px\">\n          <app-practiceform></app-practiceform>\n        </div>\n        <div *ngIf=\"bridgeApi.answerStatus\" class=\"response\">\n          <div *ngIf=\"correctbid === bridgeApi.answer\">\n            <h3 id=\"com\">Your answer is correct!</h3><br>\n            <div class=\"form-control\">\n              <strong>Tip: </strong>{{comment}}\n            </div>\n          </div>\n          <div *ngIf=\"correctbid !== bridgeApi.answer\">\n            <h3 id=\"com\">\n              Your answer is incorrect. You should\n              <span *ngIf=\"correctbid !=='Pass Pass'\"> bid {{correctbid}}</span>\n              <span *ngIf=\"correctbid ==='Pass Pass'\"> Pass</span></h3>\n            <div class=\"form-control\"> <strong>Tip: </strong> {{comment}}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/Bid Section/practice/practice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PracticeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_bridge_service__ = __webpack_require__("../../../../../src/app/Services/bridge.service.ts");
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
    function PracticeComponent(bridgeApi) {
        this.bridgeApi = bridgeApi;
        this.handInitialized = false;
    }
    PracticeComponent.prototype.startPractice = function () {
        var _this = this;
        this.bridgeApi.answerStatus = false;
        this.bridgeApi.answer = '';
        this.bridgeApi.fetchPractice().subscribe(function (results) {
            _this.hand = results.array;
            _this.hcp = results.hcp;
            _this.spades = _this.bridgeApi.filterArray(_this.hand, 'Spades');
            _this.hearts = _this.bridgeApi.filterArray(_this.hand, 'Hearts');
            _this.diamonds = _this.bridgeApi.filterArray(_this.hand, 'Diamonds');
            _this.clubs = _this.bridgeApi.filterArray(_this.hand, 'Clubs');
            _this.comment = results.comments;
            _this.correctbid = results.numericBid + ' ' + results.suitBid;
            _this.handInitialized = true;
            console.log(_this.comment, _this.correctbid);
        });
    };
    PracticeComponent.prototype.ngOnInit = function () {
    };
    return PracticeComponent;
}());
PracticeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-practice',
        template: __webpack_require__("../../../../../src/app/Bid Section/practice/practice.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Bid Section/practice/practice.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_bridge_service__["a" /* BridgeApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_bridge_service__["a" /* BridgeApi */]) === "function" && _a || Object])
], PracticeComponent);

var _a;
//# sourceMappingURL=practice.component.js.map

/***/ }),

/***/ "../../../../../src/app/Bid Section/practiceform/practiceform.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "select.ng-invalid.ng-touched, textarea.ng-invalid.ng-touched  {\r\n  border: 2px solid red;\r\n}\r\n.warning {\r\n  margin: 5px 0px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Bid Section/practiceform/practiceform.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n  <div class=\"row\" style=\"margin: 5px;\">\n    <div class=\"col-xs-12\" role=\"group\" aria-label=\"...\">\n      <div class=\"row\">\n        <label for=\"num\">Choose a number</label>\n      </div>\n      <select class=\"form-control\" name=\"numericBid\" id=\"num\" required ngModel #num=\"ngModel\">\n            <option value=\"1\">1</option>\n            <option value=\"1\">2</option>\n            <option value=\"1\">3</option>\n            <option value=\"1\">4</option>\n            <option value=\"1\">5</option>\n            <option value=\"1\">6</option>\n            <option value=\"1\">7</option>\n            <option value=\"Pass\">Pass</option>\n        </select>\n      <div class=\"row warning\">\n        <span *ngIf=\"num.invalid && num.touched\"> You need to choose a numeric bid</span>\n      </div>\n      <div class=\"row\">\n        <label for=\"suit\">Choose a Suit</label>\n      </div>\n      <select class=\"form-control pull-right\" name=\"suitBid\" id=\"suit\" required ngModel #suit=\"ngModel\">\n            <option value=\"Spades\">Spades</option>\n            <option value=\"Hearts\">Hearts</option>\n            <option value=\"Diamonds\">Diamonds</option>\n            <option value=\"Clubs\">Clubs</option>\n            <option value=\"NoTrump\">NoTrump</option>\n            <option value=\"Pass\">Pass</option>\n          </select>\n      <div class=\"row warning\">\n        <span *ngIf=\"suit.invalid && suit.touched\">\n              You need to choose a suit bid\n            </span>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-12\" style=\"display: flex; justify-content: center; margin-top: 10px;\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"Pass()\">Pass</button>\n      </div>\n    </div>\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!f.valid\">Submit your Answer</button>\n"

/***/ }),

/***/ "../../../../../src/app/Bid Section/practiceform/practiceform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PracticeformComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_bridge_service__ = __webpack_require__("../../../../../src/app/Services/bridge.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PracticeformComponent = (function () {
    function PracticeformComponent(bridgeApi) {
        this.bridgeApi = bridgeApi;
        this.answered = false;
    }
    PracticeformComponent.prototype.Pass = function () {
        this.bridgeForm.setValue({ numericBid: 'Pass', suitBid: 'Pass' });
    };
    PracticeformComponent.prototype.onSubmit = function () {
        this.answered = true;
        this.bridgeApi.answerStatus = true;
        this.bridgeApi.answer = this.bridgeForm.value.numericBid + ' ' + this.bridgeForm.value.suitBid;
        console.log(this.bridgeApi.answer);
        this.bridgeForm.reset();
    };
    PracticeformComponent.prototype.ngOnInit = function () {
    };
    return PracticeformComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], PracticeformComponent.prototype, "bridgeForm", void 0);
PracticeformComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-practiceform',
        template: __webpack_require__("../../../../../src/app/Bid Section/practiceform/practiceform.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Bid Section/practiceform/practiceform.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Services_bridge_service__["a" /* BridgeApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_bridge_service__["a" /* BridgeApi */]) === "function" && _b || Object])
], PracticeformComponent);

var _a, _b;
//# sourceMappingURL=practiceform.component.js.map

/***/ }),

/***/ "../../../../../src/app/Lead Section/lead-form/lead-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\r\n  float: left;\r\n  width: auto;\r\n  height: 100px;\r\n  display: block;\r\n  border: 1px solid;\r\n  border-right:1px bold;\r\n  border-color: grey;;\r\n  padding: 6px;\r\n  text-align: center;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n  background-color: white;\r\n  border-radius: 3px;\r\n  cursor: pointer;\r\n}\r\n.suit {\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n.contract-table {\r\n  border: 1px solid black;\r\n}\r\n.clicked {\r\n  background-color: lightcoral;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Lead Section/lead-form/lead-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"col-xs-12\">\n    <form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n      <div class=\"row\">\n        <div class=\"col-xs-12\" ngModelGroup=\"Colors\" required>\n          <div class=\"row\" style=\"display:flex; color: red; justify-content: center; border:1px dashed black\">\n            <label>Set Colors</label>\n          </div>\n          <div class=\"col-xs-3\">\n            <label for=\"\">North</label>\n            <div class=\"radio\" *ngFor=\"let color of colors\">\n              <label>\n              <input type=\"radio\"\n              name=\"colorNorth\"\n              ngModel\n              required\n              [value]=\"color\">\n              {{color}}\n            </label>\n            </div>\n          </div>\n          <div class=\"col-xs-3\">\n            <label for=\"\">East</label>\n            <div class=\"radio\" *ngFor=\"let color of colors\">\n              <label>\n                <input type=\"radio\"\n                name=\"colorEast\"\n                ngModel\n                required\n                [value]=\"color\">\n                {{color}}\n              </label>\n            </div>\n          </div>\n          <div class=\"col-xs-3\">\n            <label for=\"\">South</label>\n            <div class=\"radio\" *ngFor=\"let color of colors\">\n              <label>\n                  <input type=\"radio\"\n                  name=\"colorSouth\"\n                  ngModel\n                  required\n                  [value]=\"color\">\n                  {{color}}\n                </label>\n            </div>\n          </div>\n          <div class=\"col-xs-3\">\n            <label for=\"\">West</label>\n            <div class=\"radio\" *ngFor=\"let color of colors\">\n              <label>\n                    <input type=\"radio\"\n                    name=\"colorWest\"\n                    ngModel\n                    required\n                    [value]=\"color\">\n                    {{color}}\n                  </label>\n            </div>\n          </div>\n        </div>\n        <div>\n          <hr style=\"border: 1px solid lightblue;\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-3\" ngModelGroup=\"North\" #northBid=\"ngModelGroup\">\n          <label for=\"North\"> North</label>\n          <select name=\"numBid\" class=\"form-control\" ngModel>\n              <option value=\"Empty\"></option>\n              <option value=\"1\">1</option>\n              <option value=\"2\">2</option>\n              <option value=\"3\">3</option>\n              <option value=\"4\">4</option>\n              <option value=\"5\">5</option>\n              <option value=\"6\">6</option>\n              <option value=\"7\">7</option>\n              <option value=\"Pass\">Pass</option>\n              <option value=\"Double\">Double</option>\n              <option value=\"Ddouble\">Ddouble</option>\n          </select>\n          <select class=\"form-control\" name=\"suitBid\" ngModel>\n              <option value=\"Empty\"></option>\n              <option value=\"Spades\">Spades</option>\n              <option value=\"Hearts\">Hearts</option>\n              <option value=\"Diamonds\">Diamonds</option>\n              <option value=\"Clubs\">Clubs</option>\n              <option value=\"NoTrump\">NoTrump</option>\n              <option value=\"Pass\">Pass</option>\n              <option value=\"Double\">Double</option>\n              <option value=\"Ddouble\">Ddouble</option>\n          </select>\n          <input type=\"text\" class=\"form-control\" name=\"bidComment\" ngModel>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"toSideArray('North',northBid)\">Submit</button>\n        </div>\n        <div class=\"col-xs-3\" ngModelGroup=\"East\" #eastBid=\"ngModelGroup\">\n          <label for=\"East\"> East</label>\n          <select name=\"numBid\" class=\"form-control\" ngModel>\n              <option value=\"Empty\"></option>\n              <option value=\"1\">1</option>\n              <option value=\"2\">2</option>\n              <option value=\"3\">3</option>\n              <option value=\"4\">4</option>\n              <option value=\"5\">5</option>\n              <option value=\"6\">6</option>\n              <option value=\"7\">7</option>\n              <option value=\"Pass\">Pass</option>\n              <option value=\"Double\">Double</option>\n              <option value=\"Ddouble\">Ddouble</option>\n    </select>\n          <select class=\"form-control\" name=\"suitBid\" ngModel>\n              <option value=\"Empty\"></option>\n              <option value=\"Spades\">Spades</option>\n              <option value=\"Hearts\">Hearts</option>\n              <option value=\"Diamonds\">Diamonds</option>\n              <option value=\"Clubs\">Clubs</option>\n              <option value=\"NoTrump\">NoTrump</option>\n              <option value=\"Pass\">Pass</option>\n              <option value=\"Double\">Double</option>\n              <option value=\"Ddouble\">Ddouble</option>\n      </select>\n          <input type=\"text\" class=\"form-control\" name=\"bidComment\" ngModel>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"toSideArray('East',eastBid)\">Submit</button>\n        </div>\n        <div class=\"col-xs-3\" ngModelGroup=\"South\" #southBid=\"ngModelGroup\">\n          <label for=\"South\">South</label>\n          <select name=\"numBid\" class=\"form-control\" ngModel>\n              <option value=\"Empty\"></option>\n              <option value=\"1\">1</option>\n              <option value=\"2\">2</option>\n              <option value=\"3\">3</option>\n              <option value=\"4\">4</option>\n              <option value=\"5\">5</option>\n              <option value=\"6\">6</option>\n              <option value=\"7\">7</option>\n              <option value=\"Pass\">Pass</option>\n              <option value=\"Double\">Double</option>\n              <option value=\"Ddouble\">Ddouble</option>\n    </select>\n          <select class=\"form-control\" name=\"suitBid\" ngModel>\n              <option value=\"Empty\"></option>\n              <option value=\"Spades\">Spades</option>\n              <option value=\"Hearts\">Hearts</option>\n              <option value=\"Diamonds\">Diamonds</option>\n              <option value=\"Clubs\">Clubs</option>\n              <option value=\"NoTrump\">NoTrump</option>\n              <option value=\"Pass\">Pass</option>\n              <option value=\"Double\">Double</option>\n              <option value=\"Ddouble\">Ddouble</option>\n      </select>\n          <input type=\"text\" class=\"form-control\" name=\"bidComment\" ngModel>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"toSideArray('South',southBid)\">Submit</button>\n        </div>\n        <div class=\"col-xs-3\" ngModelGroup=\"West\" #westBid=\"ngModelGroup\">\n          <label for=\"West\">West</label>\n          <select name=\"numBid\" class=\"form-control\" ngModel>\n                <option value=\"Empty\"></option>\n                <option value=\"1\">1</option>\n                <option value=\"2\">2</option>\n                <option value=\"3\">3</option>\n                <option value=\"4\">4</option>\n                <option value=\"5\">5</option>\n                <option value=\"6\">6</option>\n                <option value=\"7\">7</option>\n                <option value=\"Pass\">Pass</option>\n                <option value=\"Double\">Double</option>\n                <option value=\"Ddouble\">Ddouble</option>\n    </select>\n          <select class=\"form-control\" name=\"suitBid\" ngModel>\n                <option value=\"Empty\"></option>\n                <option value=\"Spades\">Spades</option>\n                <option value=\"Hearts\">Hearts</option>\n                <option value=\"Diamonds\">Diamonds</option>\n                <option value=\"Clubs\">Clubs</option>\n                <option value=\"NoTrump\">NoTrump</option>\n                <option value=\"Pass\">Pass</option>\n                <option value=\"Double\">Double</option>\n                <option value=\"Ddouble\">Ddouble</option>\n      </select>\n          <input type=\"text\" class=\"form-control\" name=\"bidComment\" ngModel>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"toSideArray('West',westBid)\">Submit</button>\n        </div>\n      </div>\n      <div>\n        <hr style=\"border: 1px solid lightblue;\">\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"col-xs-3 contract-table\">\n            <label for=\"NorthBid\">North</label>\n            <div class=\"form-control\" *ngFor=\"let bid of contract.North\">\n              {{bid.numBid}}\n              <span *ngIf=\"bid.numBid !== 'Pass'\">{{bid.suitBid}}</span>\n            </div>\n          </div>\n          <div class=\"col-xs-3 contract-table\">\n            <label for=\"EastBid\">East</label>\n            <div class=\"form-control\" *ngFor=\"let bid of contract.East\">\n              {{bid.numBid}}\n              <span *ngIf=\"bid.numBid !== 'Pass'\"> {{bid.suitBid}}</span>\n            </div>\n          </div>\n          <div class=\"col-xs-3 contract-table\">\n            <label for=\"SouthBid\">South</label>\n            <div class=\"form-control\" *ngFor=\"let bid of contract.South\">\n              {{bid.numBid}}\n              <span *ngIf=\"bid.numBid !== 'Pass'\"> {{bid.suitBid}}</span>\n            </div>\n          </div>\n          <div class=\"col-xs-3 contract-table\">\n            <label for=\"WestBid\">West</label>\n            <div class=\"form-control\" *ngFor=\"let bid of contract.West\">\n              {{bid.numBid}}\n              <span *ngIf=\"bid.numBid !=='Pass'\"> {{bid.suitBid}}</span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"!handSubmitted\"><label for=\"Hand\" class=\"pull-left\">Create your Hand</label></div>\n      <div class=\"row\" *ngIf=\"handSubmitted\"><label for=\"Hand\" class=\"pull-left\">Choose a Lead</label></div>\n      <div class=\"row pull-right\" style=\"border: 2px solid red; font-size:20px;\" *ngIf=\"leadSubmitted\"><label> You Chose {{contract.lead.name}} of {{contract.lead.suit}}</label></div>\n      <div class=\"row\" *ngIf=\"!handSubmitted\">\n        <div class=\"card\" (click)=\"toHand(card)\" [ngClass]=\"{'clicked':card.clicked}\" *ngFor=\"let card of spades\">{{card.name}}\n          <br>\n          <img class=\"suit\" src=\"https://i.imgur.com/tXgx0h3.png\">\n        </div>\n        <div class=\"card red\" (click)=\"toHand(card)\" [ngClass]=\"{'clicked':card.clicked}\" *ngFor=\"let card of hearts\">{{card.name}}\n          <br>\n          <img class=\"suit\" src=\"https://i.imgur.com/Chg6eQ8.jpg\">\n        </div>\n        <div class=\"card\" (click)=\"toHand(card)\" [ngClass]=\"{'clicked': card.clicked}\" *ngFor=\"let card of clubs\">{{card.name}}\n          <br>\n          <img class=\"suit\" src=\"https://i.imgur.com/TsBK3k9.jpg\">\n        </div>\n        <div class=\"card red\" (click)=\"toHand(card)\" [ngClass]=\"{'clicked':card.clicked}\" *ngFor=\"let card of diamonds\">{{card.name}}\n          <br>\n          <img class=\"suit\" src=\"https://i.imgur.com/khCb5Vu.jpg\">\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"handSubmitted\">\n        <div class=\"card\" (click)=\"chooseLead(card)\" *ngFor=\"let card of handSpades\">{{card.name}}\n          <br>\n          <img class=\"suit\" src=\"https://i.imgur.com/tXgx0h3.png\">\n        </div>\n        <div class=\"card red\" (click)=\"chooseLead(card)\" *ngFor=\"let card of handHearts\">{{card.name}}\n          <br>\n          <img class=\"suit\" src=\"https://i.imgur.com/Chg6eQ8.jpg\">\n        </div>\n        <div class=\"card\" (click)=\"chooseLead(card)\" *ngFor=\"let card of handClubs\">{{card.name}}\n          <br>\n          <img class=\"suit\" src=\"https://i.imgur.com/TsBK3k9.jpg\">\n        </div>\n        <div class=\"card red\" (click)=\"chooseLead(card)\" *ngFor=\"let card of handDiamonds\">{{card.name}}\n          <br>\n          <img class=\"suit\" src=\"https://i.imgur.com/khCb5Vu.jpg\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\" style=\"display: flex; justify-content: center; margin-top: 10px;\">\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"submitHand()\">Submit Hand</button>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"comment\">Comments:</label>\n            <textarea class=\"form-control col-xs-12\" id=\"comment\" ngModel name=\"comments\" required #comment=\"ngModel\"></textarea>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-xs-12\" style=\"display: flex; justify-content: center; margin-top: 10px;\">\n          <button type=\"submit\" class=\"btn btn-danger\" [disabled]=\"!(f.valid && leadSubmitted)\">Submit Contract</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/Lead Section/lead-form/lead-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeadFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_bridge_service__ = __webpack_require__("../../../../../src/app/Services/bridge.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_contract_model__ = __webpack_require__("../../../../../src/app/Services/contract.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LeadFormComponent = (function () {
    function LeadFormComponent(bridgeApi, contract) {
        this.bridgeApi = bridgeApi;
        this.contract = contract;
        this.colors = ['Red', 'Green'];
        this.handSubmitted = false;
        this.leadSubmitted = false;
    }
    LeadFormComponent.prototype.formlog = function () {
        console.log(this.contractform);
    };
    LeadFormComponent.prototype.toSideArray = function (name, el) {
        this.contract.changeValue(name, el);
        this.contractform.form.patchValue({
            West: {
                numBid: '',
                suitBid: '',
                bidComment: ''
            },
            East: {
                numBid: '',
                suitBid: '',
                bidComment: ''
            },
            South: {
                numBid: '',
                suitBid: '',
                bidComment: ''
            },
            North: {
                numBid: '',
                suitBid: '',
                bidComment: ''
            }
        });
    };
    LeadFormComponent.prototype.toHand = function (card) {
        if (this.handSubmitted === false && this.contract.Hand.length < 13 && !card.clicked) {
            card.clicked = true;
            this.contract.Hand.push(card);
            console.log(this.contract.Hand);
        }
        else {
            card.clicked = false;
            var i = this.contract.Hand.indexOf(card);
            if (i > -1) {
                this.contract.Hand.splice(this.contract.Hand.indexOf(card), 1);
                console.log(this.contract.Hand);
            }
        }
    };
    LeadFormComponent.prototype.chooseLead = function (card) {
        this.contract.lead = card;
        console.log('You chose ' + this.contract.lead.name + ' of ' + this.contract.lead.suit + ' as a lead');
        this.leadSubmitted = true;
    };
    LeadFormComponent.prototype.submitHand = function () {
        this.handSpades = this.bridgeApi.filterArray(this.contract.Hand, 'Spades');
        this.handSpades = this.bridgeApi.sortArrayValues(this.handSpades);
        this.handHearts = this.bridgeApi.filterArray(this.contract.Hand, 'Hearts');
        this.handHearts = this.bridgeApi.sortArrayValues(this.handHearts);
        this.handDiamonds = this.bridgeApi.filterArray(this.contract.Hand, 'Diamonds');
        this.handDiamonds = this.bridgeApi.sortArrayValues(this.handDiamonds);
        this.handClubs = this.bridgeApi.filterArray(this.contract.Hand, 'Clubs');
        this.handClubs = this.bridgeApi.sortArrayValues(this.handClubs);
        this.handSubmitted = true;
    };
    LeadFormComponent.prototype.onSubmit = function () {
        this.contract.colors = this.contractform.value.Colors;
        this.contract.comments = this.contractform.value.comments;
        this.contract.leadtoDatabase().subscribe(function (data) { return console.log('A bid was succesfully sent'); }, function (error) { return console.error(error); });
        this.contractform.reset();
        this.deck = this.bridgeApi.deck();
        this.spades = this.bridgeApi.filterArray(this.deck, 'Spades');
        this.spades = this.bridgeApi.sortArrayValues(this.spades);
        this.hearts = this.bridgeApi.filterArray(this.deck, 'Hearts');
        this.hearts = this.bridgeApi.sortArrayValues(this.hearts);
        this.diamonds = this.bridgeApi.filterArray(this.deck, 'Diamonds');
        this.diamonds = this.bridgeApi.sortArrayValues(this.diamonds);
        this.clubs = this.bridgeApi.filterArray(this.deck, 'Clubs');
        this.clubs = this.bridgeApi.sortArrayValues(this.clubs);
        this.contract.Hand = [];
        this.contract.North = [];
        this.contract.South = [];
        this.contract.East = [];
        this.contract.West = [];
        this.contract.lead = null;
        this.handSubmitted = false;
        this.leadSubmitted = false;
        console.log(this.contract);
    };
    LeadFormComponent.prototype.ngOnInit = function () {
        this.deck = this.bridgeApi.deck();
        this.spades = this.bridgeApi.filterArray(this.deck, 'Spades');
        this.spades = this.bridgeApi.sortArrayValues(this.spades);
        this.hearts = this.bridgeApi.filterArray(this.deck, 'Hearts');
        this.hearts = this.bridgeApi.sortArrayValues(this.hearts);
        this.diamonds = this.bridgeApi.filterArray(this.deck, 'Diamonds');
        this.diamonds = this.bridgeApi.sortArrayValues(this.diamonds);
        this.clubs = this.bridgeApi.filterArray(this.deck, 'Clubs');
        this.clubs = this.bridgeApi.sortArrayValues(this.clubs);
    };
    return LeadFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], LeadFormComponent.prototype, "contractform", void 0);
LeadFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-lead-form',
        template: __webpack_require__("../../../../../src/app/Lead Section/lead-form/lead-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Lead Section/lead-form/lead-form.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__Services_contract_model__["a" /* Contract */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Services_bridge_service__["a" /* BridgeApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_bridge_service__["a" /* BridgeApi */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__Services_contract_model__["a" /* Contract */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Services_contract_model__["a" /* Contract */]) === "function" && _c || Object])
], LeadFormComponent);

var _a, _b, _c;
//# sourceMappingURL=lead-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/Lead Section/lead-practice/lead-practice.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".heading {\r\n  display:-webkit-box;\r\n  display:-ms-flexbox;\r\n  display:flex;\r\n  color: black;\r\n   -webkit-box-pack: center;\r\n       -ms-flex-pack: center;\r\n           justify-content: center;\r\n    border:1px solid black;\r\n    text-align: center;\r\n}\r\n.contract {\r\n  margin-bottom: 10px;\r\n  padding: 0px 25%;\r\n  text-align: center;\r\n}\r\n#contract-bid {\r\n  background-color: lightgoldenrodyellow;\r\n  border: 1px solid rgba(0, 0, 0, 0.23);\r\n}\r\n#custom-hover {\r\n  position: absolute;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  background-color: lightgray;\r\n  border: 1px solid black;\r\n  text-align: center;\r\n  width: auto;\r\n}\r\n#subheading {\r\n  display:-webkit-box;\r\n  display:-ms-flexbox;\r\n  display:flex;\r\n  color: #974141;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  font-size: large;\r\n  font-weight: bold;\r\n  box-sizing: border-box;\r\n  margin: 5px auto;\r\n  border: 3px dotted lightgrey;\r\n  border-radius: 3px;\r\n  width: 80%;\r\n  text-align: center;\r\n}\r\n.hline {\r\n  border-color: black;\r\n  width: 100%;\r\n}\r\n.card {\r\n  float: left;\r\n  width: auto;\r\n  height: 150px;\r\n  display: block;\r\n  border: 1px solid;\r\n  border-right:1px bold;\r\n  border-color: grey;;\r\n  padding: 6px;\r\n  text-align: center;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n  background-color: white;\r\n  border-radius: 3px;\r\n  cursor: pointer;\r\n}\r\n.suit {\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n.board {\r\n  padding: 100px 30px 60px 30px;\r\n  background-color: green;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  border-radius: 10px;\r\n}\r\n.red {\r\n  color:#E31818;\r\n}\r\n.hcpdisplay {\r\n  font-weight: bold;\r\n  font-size: 18px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n.form-control {\r\n  height: auto;\r\n  margin-bottom: 3px;\r\n  padding: 5px 5px;\r\n}\r\n.response {\r\n  box-sizing: border-box;\r\n  padding: 10px;\r\n  border: 2px solid lightseagreen;\r\n  border-radius: 1px;\r\n  margin-top: auto;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n#com {\r\n  text-align: center;\r\n}\r\n@media screen and (max-width: 480px) {\r\n  .board {\r\n    padding: 20px 20px 20px 20px;\r\n    background-color: green;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    border-radius: 10px;\r\n  }\r\n  .card {\r\n    height: auto;\r\n    font-size: 15px;\r\n  }\r\n  .suit {\r\n    width: 18px;\r\n    height: 18px;\r\n  }\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Lead Section/lead-practice/lead-practice.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div class=\"row heading\">\n        <h2>This sections give you the chance to practice on how to lead as the defence</h2>\n      </div>\n      <div class=\"row\">\n        <span id=\"subheading\"> When you click the \"start practicing\" button, you will be served\n          a specific hand as well as the contract. You must find the most suitable lead, and then click it!</span>\n      </div>\n    </div>\n  </div>\n  <hr class=\"hline\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\" style=\"display:flex; justify-content:center; padding:0px 20px 20px 20px;\">\n      <button class=\"btn btn-primary\" (click)=\"startPractice()\">Start Practicing</button>\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"start\">\n    <app-contract-design [East]=\"East\" [West]=\"West\" [North]=\"North\" [South]=\"South\" [Colors]=\"Colors\"></app-contract-design>\n    <hr class=\"hline\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <div class=\"col-xs-6\">\n          <div class=\"board\" *ngIf=\"handInitialized\">\n            <div class=\"row\">\n              <div class=\"card\" (click)=\"chooseLead(card)\" *ngFor=\"let card of spades\">{{card.name}}\n                <br>\n                <img class=\"suit\" src=\"https://i.imgur.com/tXgx0h3.png\">\n              </div>\n              <div class=\"card red\" (click)=\"chooseLead(card)\" *ngFor=\"let card of hearts\">{{card.name}}\n                <br>\n                <img class=\"suit\" src=\"https://i.imgur.com/Chg6eQ8.jpg\">\n              </div>\n              <div class=\"card\" (click)=\"chooseLead(card)\" *ngFor=\"let card of clubs\">{{card.name}}\n                <br>\n                <img class=\"suit\" src=\"https://i.imgur.com/TsBK3k9.jpg\">\n              </div>\n              <div class=\"card red\" (click)=\"chooseLead(card)\" *ngFor=\"let card of diamonds\">{{card.name}}\n                <br>\n                <img class=\"suit\" src=\"https://i.imgur.com/khCb5Vu.jpg\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xs-6\">\n          <div *ngIf=\"handInitialized\" style=\"margin:10px\">\n            <div *ngIf=\"!leadClicked\" class=\"response\">\n              You can choose a lead.\n            </div>\n            <div class=\"response\" *ngIf=\"leadClicked && !answerSubmitted\">\n              <div class=\"row\">\n                <div class=\"row\" id=\"com\">\n                  <div class=\"col-xs-12\">\n                    <h3>You chose {{lead.name}} of {{lead.suit}} as your lead.</h3>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-xs-12\" style=\"display: flex; justify-content: center;\">\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"submitLead()\">Confirm\n                  </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"response\" *ngIf=\"answerSubmitted\">\n              <div class=\"row\">\n                <div class=\"row\">\n                  <div class=\"col-xs-12\">\n                    <h3 id=\"com\">{{answerComment}}</h3>\n                  </div>\n                </div>\n                <div class=\"form-control\" id=\"com\">\n                  <div class=\"row\">\n                    <div class=\"col-xs-12\"><strong>\n                    Suggested Lead: {{correctlead.name}} of {{correctlead.suit}}.\n                  </strong> <br> {{comments}}\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/Lead Section/lead-practice/lead-practice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeadPracticeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_bridge_service__ = __webpack_require__("../../../../../src/app/Services/bridge.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LeadPracticeComponent = (function () {
    function LeadPracticeComponent(bridgeApi) {
        this.bridgeApi = bridgeApi;
        this.dummyLead = {
            'colors': {
                'colorWest': 'Green',
                'colorSouth': 'Green',
                'colorEast': 'Green',
                'colorNorth': 'Green'
            },
            'comments': 'Leading a major seems better at this sequence.',
            'lead': {
                'suit': 'Hearts',
                'name': '2',
                'value': 1,
                'clicked': true
            },
            'WestBid': [
                {
                    'bidComment': 'Hello',
                    'suitBid': '',
                    'numBid': 'Pass'
                },
                {
                    'bidComment': '',
                    'suitBid': '',
                    'numBid': 'Pass'
                }
            ],
            'SouthBid': [
                {
                    'bidComment': '',
                    'suitBid': 'Hearts',
                    'numBid': '2'
                },
                {
                    'bidComment': ' hello hello hello hello hello hello',
                    'suitBid': '',
                    'numBid': 'Pass'
                }
            ],
            'EastBid': [
                {
                    'bidComment': '',
                    'suitBid': '',
                    'numBid': 'Pass'
                },
                {
                    'bidComment': '',
                    'suitBid': '',
                    'numBid': 'Pass'
                }
            ],
            'NorthBid': [
                {
                    'bidComment': '',
                    'suitBid': '',
                    'numBid': 'Pass'
                },
                {
                    'bidComment': '',
                    'suitBid': 'NoTrump',
                    'numBid': '3'
                }
            ],
            'hand': [
                {
                    'suit': 'Spades',
                    'name': '8',
                    'value': 7,
                    'clicked': true
                },
                {
                    'suit': 'Spades',
                    'name': '6',
                    'value': 5,
                    'clicked': true
                },
                {
                    'suit': 'Hearts',
                    'name': 'J',
                    'value': 10,
                    'clicked': true
                },
                {
                    'suit': 'Hearts',
                    'name': '9',
                    'value': 8,
                    'clicked': true
                },
                {
                    'suit': 'Hearts',
                    'name': '3',
                    'value': 2,
                    'clicked': true
                },
                {
                    'suit': 'Hearts',
                    'name': '2',
                    'value': 1,
                    'clicked': true
                },
                {
                    'suit': 'Diamonds',
                    'name': 'Q',
                    'value': 11,
                    'clicked': true
                },
                {
                    'suit': 'Diamonds',
                    'name': '5',
                    'value': 4,
                    'clicked': true
                },
                {
                    'suit': 'Diamonds',
                    'name': '4',
                    'value': 3,
                    'clicked': true
                },
                {
                    'suit': 'Diamonds',
                    'name': '3',
                    'value': 2,
                    'clicked': true
                },
                {
                    'suit': 'Clubs',
                    'name': 'A',
                    'value': 13,
                    'clicked': true
                },
                {
                    'suit': 'Clubs',
                    'name': '10',
                    'value': 9,
                    'clicked': true
                },
                {
                    'suit': 'Clubs',
                    'name': '2',
                    'value': 1,
                    'clicked': true
                }
            ],
        };
        this.handInitialized = true;
        this.leadClicked = false;
        this.start = false;
        this.answerValid = false;
        this.answerSubmitted = false;
    }
    LeadPracticeComponent.prototype.startPractice = function () {
        var _this = this;
        this.bridgeApi.fetchleadPractice().subscribe(function (result) {
            _this.answerSubmitted = false;
            _this.leadClicked = false;
            _this.start = true;
            _this.Colors = result.colors;
            _this.correctlead = result.lead;
            _this.comments = result.comments;
            _this.East = result.EastBid;
            _this.North = result.NorthBid;
            _this.South = result.SouthBid;
            _this.West = result.WestBid;
            _this.East.forEach(function (el) { el.hover = false; });
            _this.North.forEach(function (el) { el.hover = false; });
            _this.South.forEach(function (el) { el.hover = false; });
            _this.West.forEach(function (el) { el.hover = false; });
            _this.hand = result.hand;
            _this.spades = _this.bridgeApi.filterArray(_this.hand, 'Spades');
            _this.hearts = _this.bridgeApi.filterArray(_this.hand, 'Hearts');
            _this.diamonds = _this.bridgeApi.filterArray(_this.hand, 'Diamonds');
            _this.clubs = _this.bridgeApi.filterArray(_this.hand, 'Clubs');
        });
    };
    LeadPracticeComponent.prototype.chooseLead = function (lead) {
        this.lead = lead;
        this.leadClicked = true;
    };
    LeadPracticeComponent.prototype.submitLead = function () {
        this.answerSubmitted = true;
        if (this.lead.name === this.correctlead.name && this.lead.suit === this.correctlead.suit) {
            this.answerValid = true;
            this.answerComment = 'Your answer was correct';
        }
        else {
            this.answerValid = false;
            this.answerComment = 'Your answer was incorrect';
        }
    };
    LeadPracticeComponent.prototype.ngOnInit = function () { };
    return LeadPracticeComponent;
}());
LeadPracticeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-lead-practice',
        template: __webpack_require__("../../../../../src/app/Lead Section/lead-practice/lead-practice.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Lead Section/lead-practice/lead-practice.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_bridge_service__["a" /* BridgeApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_bridge_service__["a" /* BridgeApi */]) === "function" && _a || Object])
], LeadPracticeComponent);

var _a;
//# sourceMappingURL=lead-practice.component.js.map

/***/ }),

/***/ "../../../../../src/app/Lead Section/lead-thread-form/lead-thread-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".response {\r\n  box-sizing: border-box;\r\n  padding: 10px;\r\n  border: 2px solid lightseagreen;\r\n  border-radius: 1px;\r\n  margin-top: auto;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Lead Section/lead-thread-form/lead-thread-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit()\" #form=\"ngForm\">\n  <div class=\"col-xs-6\">\n    <div *ngIf=\"handInitialized\" style=\"margin:10px\">\n      <div *ngIf=\"!leadClicked\" class=\"response\">\n        You can choose a lead.\n      </div>\n      <div class=\"response\" *ngIf=\"leadClicked\">\n        <div class=\"row\">\n          <div class=\"row\" id=\"com\">\n            <div class=\"col-xs-12\">\n              <h3>You chose {{lead.name}} of {{lead.suit}} as your lead.</h3>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <label>Add your comment</label>\n          <input type=\"text\" class=\"form-control\" name=\"comments\" ngModel>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\" style=\"display: flex; justify-content: center; margin-top: 8px\">\n          <button type=\"submit\" [disabled]=\"lead===undefined\" class=\"btn btn-primary\">Submit Answer\n              </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/Lead Section/lead-thread-form/lead-thread-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeadThreadFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_bridge_service__ = __webpack_require__("../../../../../src/app/Services/bridge.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LeadThreadFormComponent = (function () {
    function LeadThreadFormComponent(bridgeApi) {
        this.bridgeApi = bridgeApi;
    }
    LeadThreadFormComponent.prototype.onSubmit = function () {
        var answer = {
            lead: this.lead,
            comments: this.leadForm.value.comments,
            votes: 0
        };
        this.bridgeApi.submitted = true;
        this.bridgeApi.postComment(this.id, answer).subscribe(function (data) { return console.log('A lead answer was succesfully sent'); }, function (error) { return console.error(error); });
        console.log(answer);
        this.leadForm.reset();
    };
    LeadThreadFormComponent.prototype.ngOnInit = function () {
    };
    return LeadThreadFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('form'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], LeadThreadFormComponent.prototype, "leadForm", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], LeadThreadFormComponent.prototype, "handInitialized", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], LeadThreadFormComponent.prototype, "leadClicked", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], LeadThreadFormComponent.prototype, "lead", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], LeadThreadFormComponent.prototype, "id", void 0);
LeadThreadFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-lead-thread-form',
        template: __webpack_require__("../../../../../src/app/Lead Section/lead-thread-form/lead-thread-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Lead Section/lead-thread-form/lead-thread-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Services_bridge_service__["a" /* BridgeApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_bridge_service__["a" /* BridgeApi */]) === "function" && _b || Object])
], LeadThreadFormComponent);

var _a, _b;
//# sourceMappingURL=lead-thread-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/Lead Section/lead-thread/lead-thread.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".heading {\r\n  display:-webkit-box;\r\n  display:-ms-flexbox;\r\n  display:flex;\r\n  color: black;\r\n   -webkit-box-pack: center;\r\n       -ms-flex-pack: center;\r\n           justify-content: center;\r\n    border:1px solid black;\r\n    text-align: center;\r\n}\r\n.contract {\r\n  margin-bottom: 10px;\r\n  padding: 0px 25%;\r\n  text-align: center;\r\n}\r\n#contract-bid {\r\n  background-color: lightgoldenrodyellow;\r\n  border: 1px solid rgba(0, 0, 0, 0.23);\r\n}\r\n#custom-hover {\r\n  position: absolute;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  background-color: lightgray;\r\n  border: 1px solid black;\r\n  text-align: center;\r\n  width: auto;\r\n}\r\n#subheading {\r\n  display:-webkit-box;\r\n  display:-ms-flexbox;\r\n  display:flex;\r\n  color: #974141;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  font-size: large;\r\n  font-weight: bold;\r\n  box-sizing: border-box;\r\n  margin: 5px auto;\r\n  border: 3px dotted lightgrey;\r\n  border-radius: 3px;\r\n  width: 80%;\r\n  text-align: center;\r\n}\r\n.hline {\r\n  border-color: black;\r\n  width: 100%;\r\n}\r\n.card {\r\n  float: left;\r\n  width: auto;\r\n  height: 150px;\r\n  display: block;\r\n  border: 1px solid;\r\n  border-right:1px bold;\r\n  border-color: grey;;\r\n  padding: 6px;\r\n  text-align: center;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n  background-color: white;\r\n  border-radius: 3px;\r\n  cursor: pointer;\r\n}\r\n.suit {\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n.board {\r\n  padding: 100px 30px 60px 30px;\r\n  background-color: green;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  border-radius: 10px;\r\n}\r\n.red {\r\n  color:#E31818;\r\n}\r\n.hcpdisplay {\r\n  font-weight: bold;\r\n  font-size: 18px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n.form-control {\r\n  height: auto;\r\n  margin-bottom: 3px;\r\n  padding: 5px 5px;\r\n}\r\n.response {\r\n  box-sizing: border-box;\r\n  padding: 10px;\r\n  border: 2px solid lightseagreen;\r\n  border-radius: 1px;\r\n  margin-top: auto;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n#com {\r\n  text-align: center;\r\n}\r\n@media screen and (max-width: 480px) {\r\n  .board {\r\n    padding: 20px 20px 20px 20px;\r\n    background-color: green;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    border-radius: 10px;\r\n  }\r\n  .card {\r\n    height: auto;\r\n    font-size: 15px;\r\n  }\r\n  .suit {\r\n    width: 18px;\r\n    height: 18px;\r\n  }\r\n}\r\n.vote{\r\n  width:4%;\r\n  float: left;\r\n}\r\n#comment {\r\n  width:96%;\r\n  float: left;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Lead Section/lead-thread/lead-thread.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"user.loggedIn\">\n  <div class=\"row\" *ngIf=\"!start\">\n    <div class=\"col-xs-12\">\n      <div class=\"row heading\">\n        <h2>This sections give you the chance to practice on how to lead as the defence</h2>\n      </div>\n      <div class=\"row\">\n        <span id=\"subheading\"> When you click the \"Start Leading\" button, you will be served a specific hand accompanied by a contract. After you\n          choose your Lead and press Submit, the comment section will appear and you will be able to see what other people\n          chose!</span>\n      </div>\n    </div>\n\n  </div>\n  <hr class=\"hline\" *ngIf=\"!start\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\" style=\"display:flex; justify-content:center; padding:0px 20px 20px 20px;\">\n      <button class=\"btn btn-primary\" (click)=\"startLeading()\">Start Leading</button>\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"start\">\n    <app-contract-design [East]=\"East\" [West]=\"West\" [North]=\"North\" [South]=\"South\" [Colors]=\"Colors\"></app-contract-design>\n    <hr class=\"hline\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <div class=\"col-xs-6\">\n          <div class=\"board\" *ngIf=\"handInitialized\">\n            <div class=\"row\">\n              <div class=\"card\" (click)=\"chooseLead(card)\" *ngFor=\"let card of spades\">{{card.name}}\n                <br>\n                <img class=\"suit\" src=\"https://i.imgur.com/tXgx0h3.png\">\n              </div>\n              <div class=\"card red\" (click)=\"chooseLead(card)\" *ngFor=\"let card of hearts\">{{card.name}}\n                <br>\n                <img class=\"suit\" src=\"https://i.imgur.com/Chg6eQ8.jpg\">\n              </div>\n              <div class=\"card\" (click)=\"chooseLead(card)\" *ngFor=\"let card of clubs\">{{card.name}}\n                <br>\n                <img class=\"suit\" src=\"https://i.imgur.com/TsBK3k9.jpg\">\n              </div>\n              <div class=\"card red\" (click)=\"chooseLead(card)\" *ngFor=\"let card of diamonds\">{{card.name}}\n                <br>\n                <img class=\"suit\" src=\"https://i.imgur.com/khCb5Vu.jpg\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <app-lead-thread-form [id]=\"id\" [handInitialized]=\"handInitialized\" [leadClicked]=\"leadClicked\" [lead]=\"lead\"></app-lead-thread-form>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"bridgeApi.submitted\" style=\"margin-top: 10px;\">\n      <div *ngIf=\"answers[0]!==undefined\">\n        <label for=\"comments\"> Leads and Comments</label>\n        <div class=\"row\" *ngFor=\"let answer of answers; let i = index\">\n          <div class=\"col-xs-12\">\n            <div class=\"vote\">\n              <app-comment [link]=\"'/leadvote'\" [id]=\"id\" [index]=\"i\" [votes]=\"answer.votes\"></app-comment>\n            </div>\n            <div class=\"form-control\" id=\"comment\">\n              <strong> Lead : {{answer.lead.name}} of {{answer.lead.suit}}</strong>\n              <br>\n              <strong> Comments</strong> : {{answer.comments}} </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"answers[0]===undefined\">\n        <div class=\"col-xs-12 form-control\">\n          <label> This lead has no comments yet. Thank you for contributing!</label>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"container\" *ngIf=\"!user.loggedIn\">\n  <div id=\"subheading\">\n    <h2>Please log in, in order to be able to use this section.</h2>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/Lead Section/lead-thread/lead-thread.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeadThreadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_bridge_service__ = __webpack_require__("../../../../../src/app/Services/bridge.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_user_service__ = __webpack_require__("../../../../../src/app/Services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LeadThreadComponent = (function () {
    function LeadThreadComponent(bridgeApi, user) {
        this.bridgeApi = bridgeApi;
        this.user = user;
        this.handInitialized = true;
        this.start = false;
    }
    LeadThreadComponent.prototype.chooseLead = function (lead) {
        this.lead = lead;
        this.leadClicked = true;
    };
    LeadThreadComponent.prototype.startLeading = function () {
        var _this = this;
        this.bridgeApi.fetchleadPractice().subscribe(function (result) {
            _this.bridgeApi.submitted = false;
            _this.start = true;
            _this.leadClicked = false;
            _this.Colors = result.colors;
            _this.correctlead = result.lead;
            _this.East = result.EastBid;
            _this.North = result.NorthBid;
            _this.South = result.SouthBid;
            _this.West = result.WestBid;
            _this.hand = result.hand;
            _this.id = result._id;
            _this.answers = result.answer;
            _this.spades = _this.bridgeApi.filterArray(_this.hand, 'Spades');
            _this.hearts = _this.bridgeApi.filterArray(_this.hand, 'Hearts');
            _this.diamonds = _this.bridgeApi.filterArray(_this.hand, 'Diamonds');
            _this.clubs = _this.bridgeApi.filterArray(_this.hand, 'Clubs');
        });
    };
    LeadThreadComponent.prototype.ngOnInit = function () {
    };
    return LeadThreadComponent;
}());
LeadThreadComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-lead-thread',
        template: __webpack_require__("../../../../../src/app/Lead Section/lead-thread/lead-thread.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Lead Section/lead-thread/lead-thread.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_bridge_service__["a" /* BridgeApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_bridge_service__["a" /* BridgeApi */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Services_user_service__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_user_service__["a" /* User */]) === "function" && _b || Object])
], LeadThreadComponent);

var _a, _b;
//# sourceMappingURL=lead-thread.component.js.map

/***/ }),

/***/ "../../../../../src/app/Services/bridge.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BridgeApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_model__ = __webpack_require__("../../../../../src/app/Services/card.model.ts");
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
        this.answer = '';
        this.answerStatus = false;
    }
    BridgeApi.prototype.coinFlip = function () {
        return (Math.random() < 0.5 ? 0 : 1);
    };
    BridgeApi.prototype.fixHcp = function (array) {
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
            // suits are ordered alphabetically, from weakest to strongest. This is why this sort is viable.
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
        // this is glitchy. There is no 100% working sort algorithm for all broswers. Return 0 is not defined so this works only if
        // no element is equal to any of the rest
        array.sort(function (a, b) {
            var value1 = a.value;
            var value2 = b.value;
            if (value1 < value2) {
                return 1;
            }
            else {
                return -1;
            }
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
        this.submitted = true;
        return this.http.post('https://bridge-auction-app.herokuapp.com/addpracticebid', body, { headers: header })
            .map(function (response) { response.json(); }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error.json()); });
    };
    BridgeApi.prototype.fetchHand = function () {
        return this.http.get('/randomhand').map(function (response) { return response.json().result; }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error.json()); });
    };
    BridgeApi.prototype.fetchPractice = function () {
        return this.http.get('/getpracticehand').map(function (response) { return response.json().result; }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error.json()); });
    };
    BridgeApi.prototype.fetchleadPractice = function () {
        return this.http.get('/getrandomleadpractice').map(function (response) { return response.json().result; }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error.json()); });
    };
    BridgeApi.prototype.postComment = function (id, answer) {
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var ans = {
            id: id,
            answer: answer
        };
        var body = JSON.stringify(ans);
        return this.http.post('/postleadanswer', body, { headers: header }).map(function (response) { response.json(); }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error.json()); });
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

/***/ "../../../../../src/app/Services/card.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Card; });
var Card = (function () {
    function Card(value, name, suit) {
        this.clicked = false;
        this.value = value;
        this.name = name;
        this.suit = suit;
    }
    return Card;
}());

//# sourceMappingURL=card.model.js.map

/***/ }),

/***/ "../../../../../src/app/Services/contract.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contract; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Contract = (function () {
    function Contract(http) {
        this.http = http;
        this.North = [];
        this.East = [];
        this.South = [];
        this.West = [];
        this.Hand = [];
    }
    Contract.prototype.changeValue = function (name, obj) {
        if (name === 'North') {
            this.North.push(obj.value);
            console.log(this.North);
        }
        else if (name === 'South') {
            this.South.push(obj.value);
            console.log(this.South);
        }
        else if (name === 'West') {
            this.West.push(obj.value);
            console.log(this.West);
        }
        else if (name === 'East') {
            this.East.push(obj.value);
            console.log(this.East);
        }
    };
    Contract.prototype.leadtoDatabase = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var leadObj = {
            colors: this.colors,
            lead: this.lead,
            hand: this.Hand,
            comments: this.comments,
            North: this.North,
            East: this.East,
            South: this.South,
            West: this.West
        };
        var body = JSON.stringify(leadObj);
        return this.http.post('https://bridge-auction-app.herokuapp.com/addlead', body, { headers: header })
            .map(function (response) { response.json(); }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].throw(error.json()); });
    };
    return Contract;
}());
Contract = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], Contract);

var _a;
//# sourceMappingURL=contract.model.js.map

/***/ }),

/***/ "../../../../../src/app/Services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var User = (function () {
    function User(http) {
        this.http = http;
        this.premium = false;
        this.loggedIn = false;
        this.registered = false;
        this.exists = false;
        this.logValid = false;
    }
    User.prototype.createUser = function () {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var user = {
            username: this.username,
            password: this.password,
            email: this.email
        };
        var body = JSON.stringify(user);
        return this.http.post('/register', body, { headers: header }).map(function (response) {
            _this.exists = response.json().result;
            console.log(_this.exists);
        }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json()); });
    };
    User.prototype.loginUser = function () {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var user = {
            username: this.username,
            password: this.password,
        };
        var body = JSON.stringify(user);
        return this.http.post('/login', body, { headers: header }).map(function (response) {
            var result = response.json();
            console.log(result);
            _this.loggedIn = result.result.valid;
            if (!_this.loggedIn) {
                _this.logValid = true;
                _this.errorMessage = result.title;
            }
            else {
                _this.img = result.result.img;
                _this.rank = result.result.rank;
                _this.description = result.result.desc;
                _this.username = result.result.username;
                _this.premium = result.result.premium;
            }
        }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json()); });
    };
    User.prototype.editUser = function (link, value) {
        var header = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var change = {
            username: this.username,
            value: value
        };
        var body = JSON.stringify(change);
        return this.http.post(link, body, { headers: header }).map(function (response) { response.json(); }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json()); });
    };
    return User;
}());
User = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], User);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/account-page/account/account.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img {\r\n  width: 100px;\r\n  height: 100px;\r\n  background-repeat: no-repeat;\r\n  background-size:contain;\r\n  margin: 10px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n}\r\n.form-control {\r\n  height: auto;\r\n  margin: 10px;\r\n  min-height: 100px;\r\n}\r\n.heading {\r\n  text-align: center; /* For Safari 5.1 to 6.0 */ /* For Opera 11.1 to 12.0 */ /* For Firefox 3.6 to 15 */\r\n  background: linear-gradient(rgba(190, 190, 190, 0.9), rgba(190, 190, 190, 0.2)); /* Standard syntax */\r\n}\r\n#premium {\r\n  color: green;\r\n}\r\n.info {\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n}\r\n.hr {\r\n  border: 1px solid rgba(0, 0, 0, 0.3);\r\n  margin: 10px;\r\n}\r\n.columns {\r\n  float: left;\r\n}\r\n#imgText{\r\n  margin-top: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account-page/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"heading col-xs-12\">\n      <h2>Welcome {{username}}</h2>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div class=\"col-xs-2 columns\">\n        <img src={{img}} class=\"img\" *ngIf=\"!editImg\">\n        <textarea [(ngModel)]=\"newImg\" *ngIf=\"editImg\" id=\"imgText\"></textarea>\n        <button class=\"btn btn-primary\" *ngIf=\"!editImg\" (click)=\"editImage()\">Change Image</button>\n        <button class=\"btn btn-primary\" *ngIf=\"editImg\" (click)=\"saveImg()\">Save Image</button>\n      </div>\n      <div class=\"col-xs-10 columns\">\n        <textarea class=\"form-control\" *ngIf=\"!editDesc\" readonly>{{description}}</textarea>\n        <textarea class=\"form-control\" *ngIf=\"editDesc\" type=\"text\" value={{description}} [(ngModel)]=\"description\"></textarea>\n        <button class=\"btn btn-primary\" *ngIf=\"!editDesc\" (click)=\"editDescription()\">Edit Description</button>\n        <button class=\"btn btn-primary\" *ngIf=\"editDesc\" (click)=\"saveDescription()\">Save Description Changes</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12 form-control\">\n      <label>User Info</label>\n      <hr class=\"hr\">\n      <ul class=\"info\">\n        <li> Rank: {{rank}}</li>\n        <li id=\"premium\" *ngIf=\"premium\"> Premium User</li>\n      </ul>\n    </div>\n  </div>\n  <button class=\"btn btn-primary\"  (click)=\"Logout()\">Log out</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/account-page/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_user_service__ = __webpack_require__("../../../../../src/app/Services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountComponent = (function () {
    function AccountComponent(user, router) {
        this.user = user;
        this.router = router;
        this.editDesc = false;
        this.editImg = false;
        this.newImg = 'Please paste your new image\'s url';
    }
    AccountComponent.prototype.editDescription = function () {
        this.editDesc = true;
    };
    AccountComponent.prototype.saveDescription = function () {
        this.editDesc = false;
        this.user.editUser('/changeDesc', this.description).subscribe(function (result) {
            console.log(result);
        });
    };
    AccountComponent.prototype.editImage = function () {
        this.editImg = true;
    };
    AccountComponent.prototype.saveImg = function () {
        this.editImg = false;
        this.img = this.newImg;
        this.user.editUser('/changeImg', this.img).subscribe(function (result) {
            console.log(result);
        });
    };
    AccountComponent.prototype.Logout = function () {
        this.user.loggedIn = false;
        this.user.logValid = false;
        this.user.registered = false;
        this.user.exists = false;
        this.premium = false;
        this.router.navigate(['/home']);
    };
    AccountComponent.prototype.ngOnInit = function () {
        if (this.user.loggedIn) {
            this.username = this.user.username;
            this.img = this.user.img;
            this.rank = this.user.rank;
            this.description = this.user.description;
            this.premium = this.user.premium;
        }
    };
    return AccountComponent;
}());
AccountComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-account',
        template: __webpack_require__("../../../../../src/app/account-page/account/account.component.html"),
        styles: [__webpack_require__("../../../../../src/app/account-page/account/account.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Services_user_service__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_user_service__["a" /* User */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AccountComponent);

var _a, _b;
//# sourceMappingURL=account.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidebar {\r\n  background-color: black;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  float: right;\r\n  height:100%;\r\n  max-width: 18%; /* For Safari 5.1 to 6.0 */ /* For Opera 11.1 to 12.0 */ /* For Firefox 3.6 to 15 */\r\n  background: linear-gradient(rgba(190, 190, 190, 0.9), rgba(255, 255, 255, 0)); /* Standard syntax */\r\n}\r\n.main-content {\r\n  padding: 0px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header>\r\n</app-header>\r\n<div class=\"col-xs-10 main-content\" *ngIf=\"!user.loggedIn\">\r\n  <router-outlet>\r\n  </router-outlet>\r\n</div>\r\n<div class=\"sidebar col-xs-2\" *ngIf=\"!user.loggedIn\">\r\n  <app-register></app-register>\r\n</div>\r\n<div class=\"col-xs-12 main-content\" *ngIf=\"user.loggedIn\">\r\n  <router-outlet>\r\n  </router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_user_service__ = __webpack_require__("../../../../../src/app/Services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(user) {
        this.user = user;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_user_service__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_user_service__["a" /* User */]) === "function" && _a || Object])
], AppComponent);

var _a;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Bid_Section_bid_thread_bid_thread_component__ = __webpack_require__("../../../../../src/app/Bid Section/bid-thread/bid-thread.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Services_bridge_service__ = __webpack_require__("../../../../../src/app/Services/bridge.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Services_user_service__ = __webpack_require__("../../../../../src/app/Services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Bid_Section_bid_form_bid_form_component__ = __webpack_require__("../../../../../src/app/Bid Section/bid-form/bid-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__homepage_homepage_component__ = __webpack_require__("../../../../../src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Bid_Section_practice_practice_component__ = __webpack_require__("../../../../../src/app/Bid Section/practice/practice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__donate_donate_component__ = __webpack_require__("../../../../../src/app/donate/donate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Lead_Section_lead_form_lead_form_component__ = __webpack_require__("../../../../../src/app/Lead Section/lead-form/lead-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Lead_Section_lead_practice_lead_practice_component__ = __webpack_require__("../../../../../src/app/Lead Section/lead-practice/lead-practice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Bid_Section_practiceform_practiceform_component__ = __webpack_require__("../../../../../src/app/Bid Section/practiceform/practiceform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__testpage_testpage_component__ = __webpack_require__("../../../../../src/app/testpage/testpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_components_card_board_card_board_component__ = __webpack_require__("../../../../../src/app/shared-components/card-board/card-board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_components_contract_design_contract_design_component__ = __webpack_require__("../../../../../src/app/shared-components/contract-design/contract-design.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_components_suit_img_suit_img_component__ = __webpack_require__("../../../../../src/app/shared-components/suit-img/suit-img.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_directives_dropdown_directive__ = __webpack_require__("../../../../../src/app/shared-directives/dropdown.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__Lead_Section_lead_thread_lead_thread_component__ = __webpack_require__("../../../../../src/app/Lead Section/lead-thread/lead-thread.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__Lead_Section_lead_thread_form_lead_thread_form_component__ = __webpack_require__("../../../../../src/app/Lead Section/lead-thread-form/lead-thread-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_components_comment_comment_component__ = __webpack_require__("../../../../../src/app/shared-components/comment/comment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__account_page_account_account_component__ = __webpack_require__("../../../../../src/app/account-page/account/account.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__homepage_homepage_component__["a" /* HomepageComponent */] },
    { path: 'bid', component: __WEBPACK_IMPORTED_MODULE_6__Bid_Section_bid_thread_bid_thread_component__["a" /* BidThreadComponent */] },
    { path: 'practice', component: __WEBPACK_IMPORTED_MODULE_12__Bid_Section_practice_practice_component__["a" /* PracticeComponent */] },
    { path: 'leadpractice', component: __WEBPACK_IMPORTED_MODULE_16__Lead_Section_lead_practice_lead_practice_component__["a" /* LeadPracticeComponent */] },
    { path: 'donate', component: __WEBPACK_IMPORTED_MODULE_13__donate_donate_component__["a" /* DonateComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_14__contact_contact_component__["a" /* ContactComponent */] },
    { path: 'lead', component: __WEBPACK_IMPORTED_MODULE_15__Lead_Section_lead_form_lead_form_component__["a" /* LeadFormComponent */] },
    { path: 'leadthread', component: __WEBPACK_IMPORTED_MODULE_23__Lead_Section_lead_thread_lead_thread_component__["a" /* LeadThreadComponent */] },
    { path: 'myaccount', component: __WEBPACK_IMPORTED_MODULE_27__account_page_account_account_component__["a" /* AccountComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_18__testpage_testpage_component__["a" /* TestpageComponent */] },
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
            __WEBPACK_IMPORTED_MODULE_6__Bid_Section_bid_thread_bid_thread_component__["a" /* BidThreadComponent */],
            __WEBPACK_IMPORTED_MODULE_9__Bid_Section_bid_form_bid_form_component__["a" /* BidFormComponent */],
            __WEBPACK_IMPORTED_MODULE_10__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_11__homepage_homepage_component__["a" /* HomepageComponent */],
            __WEBPACK_IMPORTED_MODULE_12__Bid_Section_practice_practice_component__["a" /* PracticeComponent */],
            __WEBPACK_IMPORTED_MODULE_13__donate_donate_component__["a" /* DonateComponent */],
            __WEBPACK_IMPORTED_MODULE_14__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_15__Lead_Section_lead_form_lead_form_component__["a" /* LeadFormComponent */],
            __WEBPACK_IMPORTED_MODULE_16__Lead_Section_lead_practice_lead_practice_component__["a" /* LeadPracticeComponent */],
            __WEBPACK_IMPORTED_MODULE_17__Bid_Section_practiceform_practiceform_component__["a" /* PracticeformComponent */],
            __WEBPACK_IMPORTED_MODULE_18__testpage_testpage_component__["a" /* TestpageComponent */],
            __WEBPACK_IMPORTED_MODULE_19__shared_components_card_board_card_board_component__["a" /* CardBoardComponent */],
            __WEBPACK_IMPORTED_MODULE_20__shared_components_contract_design_contract_design_component__["a" /* ContractDesignComponent */],
            __WEBPACK_IMPORTED_MODULE_21__shared_components_suit_img_suit_img_component__["a" /* SuitImgComponent */],
            __WEBPACK_IMPORTED_MODULE_22__shared_directives_dropdown_directive__["a" /* DropdownDirective */],
            __WEBPACK_IMPORTED_MODULE_23__Lead_Section_lead_thread_lead_thread_component__["a" /* LeadThreadComponent */],
            __WEBPACK_IMPORTED_MODULE_24__Lead_Section_lead_thread_form_lead_thread_form_component__["a" /* LeadThreadFormComponent */],
            __WEBPACK_IMPORTED_MODULE_25__shared_components_comment_comment_component__["a" /* CommentComponent */],
            __WEBPACK_IMPORTED_MODULE_26__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_27__account_page_account_account_component__["a" /* AccountComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(routes),
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__Services_bridge_service__["a" /* BridgeApi */], __WEBPACK_IMPORTED_MODULE_8__Services_user_service__["a" /* User */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page { /* For Safari 5.1 to 6.0 */ /* For Opera 11.1 to 12.0 */ /* For Firefox 3.6 to 15 */\r\n  background: linear-gradient(lightgray, white); /* Standard syntax */\r\n  height: auto;\r\n  min-height: 400px;\r\n  width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row page\">\n    <div class=\"col-xs-12\">\n        <h2>Feel free to contact us at any of the following e-mail addreses:  </h2>\n        <ul>\n          <li>gespa11019@gmail.com</li>\n          <li>fkishadow@hotmail.com</li>\n        </ul>\n    </div>\n  </div>\n</div>\n"

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
exports.push([module.i, ".page { /* For Safari 5.1 to 6.0 */ /* For Opera 11.1 to 12.0 */ /* For Firefox 3.6 to 15 */\r\n  background: linear-gradient(lightgray, white); /* Standard syntax */\r\n  height: auto;\r\n  min-height: 400px;\r\n  width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/donate/donate.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row page\">\n    <div class=\"col-xs-12\">\n      <h2>You can support us by donating on this paypal e-mail: fkishadow@hotmail.com </h2>\n    </div>\n  </div>\n</div>\n"

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
exports.push([module.i, "#menu-item {\r\n  color: lightgrey;\r\n  font-size: 16px;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n#menu-item:hover {\r\n  color: white;\r\n}\r\n#bs-example-navbar-collapse-1{\r\n  width: 100%;\r\n}\r\n.navbar {\r\n  border-radius: 0px;\r\n}\r\n#bs-example-navbar-collapse-1>ul {\r\n  width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\" style=\"background: linear-gradient(to right, darkgreen , green)\">\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n        <ul class=\"nav navbar-nav\">\n          <li style=\"cursor:pointer;\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n            <a id=\"menu-item\" routerLink=\"/\">Home</a></li>\n          <li style=\"cursor:pointer\" routerLinkActive=\"active\">\n            <a id=\"menu-item\" routerLink=\"/bid\">Bid Thread</a></li>\n          <li style=\"cursor:pointer\" routerLinkActive=\"active\">\n            <a id=\"menu-item\" routerLink=\"/practice\">Practice</a> </li>\n          <li style=\"cursor:pointer\" routerLinkActive=\"active\">\n            <a id=\"menu-item\" routerLink=\"/lead\">Lead Post</a></li>\n          <li style=\"cursor:pointer\" routerLinkActive=\"active\">\n            <a id=\"menu-item\" routerLink=\"/leadthread\">Lead Thread</a></li>\n            <li style=\"cursor:pointer\" routerLinkActive=\"active\">\n                <a id=\"menu-item\" routerLink=\"/leadpractice\">Lead Practice</a></li>\n          <li style=\"cursor:pointer\" routerLinkActive=\"active\">\n            <a id=\"menu-item\" routerLink=\"/donate\">Donate</a></li>\n          <li style=\"cursor:pointer\" routerLinkActive=\"active\">\n            <a id=\"menu-item\" routerLink=\"/contact\">Contact</a></li>\n          <li *ngIf=\"user.loggedIn\" style=\"cursor:pointer; float: right;\" routerLinkActive=\"active\">\n            <a id=\"menu-item\" routerLink=\"/myaccount\">My Account</a></li>\n        </ul>\n      </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_user_service__ = __webpack_require__("../../../../../src/app/Services/user.service.ts");
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
    function HeaderComponent(user) {
        this.user = user;
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_user_service__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_user_service__["a" /* User */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bridgeImg {\r\n  height: 100%;\r\n  width: 100%;\r\n  position: fixed;\r\n  background-image: url(https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/05/02/23/7-Bridge-Card-Rex.jpg);\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  -webkit-background-size:cover;\r\n  -moz-background-size:cover;\r\n  -o-background-size:cover;\r\n  box-sizing: border-box;\r\n}\r\n.intro {\r\n  display:-webkit-box;\r\n  display:-ms-flexbox;\r\n  display:flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  background-color: rgba(253, 253, 253, 0.70);\r\n  margin: 15% auto;\r\n  width: 50%;\r\n  height: auto;\r\n  max-height: 70%;\r\n  padding: 10px;\r\n  border-radius: 2px;\r\n  position: relative;\r\n}\r\n.sliderText {\r\n  margin-left: 2px;\r\n  color: black;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n}\r\n@media screen and (max-width:480px) {\r\n  .sliderText {\r\n    margin-left: 2px;\r\n    color: black;\r\n    font-weight: bold;\r\n    font-size: 14px;\r\n  }\r\n  .intro {\r\n    width: 75%;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bridgeImg\" >\n<div class=\"row\">\n  <div class=\"col-xs-12 \">\n    <div class=\"intro\">\n     <span class=\"sliderText\"><p>Bridge Teacher is an app that helps you get better at Bridge.</p>\n    <p>You can practice your bidding skills on completely random hands, while being able to read other peoples' answers, after your submission!</p>\n    <p>There will be more sections that will involve Lead Practicing.</p>\n    </span>\n    </div>\n  </div>\n</div>\n</div>\n"

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

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".register{\r\n  height:90vh;\r\n  max-height: 100%;\r\n}\r\n#header{\r\n  text-align: center;\r\n}\r\n.subbutton {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n#login-text{\r\n  font-weight: bolder;\r\n  margin: 5px 0px;\r\n  cursor: pointer;\r\n  font-size: 18px;\r\n  text-align: center;\r\n  background-color: rgba(211, 211, 211, 0.8);\r\n  border-radius: 5px;\r\n  padding: 3px;\r\n}\r\n#login-text:hover{\r\n  color: blue;\r\n\r\n}\r\n.btn {\r\n  margin-top: 5px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n.form-control.ng-invalid.ng-touched{\r\n  border: 2px solid red;\r\n}\r\n.warning {\r\n  text-align: center;\r\n  margin: 5px 0px;\r\n  font-weight: bold;\r\n  background-color: rgba(255, 255, 255, 0.35);\r\n  border-radius: 2px;\r\n  border: 1px solid rgba(255, 0, 0, 0.3);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"register\" (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n  <div class=\"col-xs-12\" ngModelGroup=\"Register\">\n    <div *ngIf=\"!loginbool\">\n      <div class=\"row\">\n        <h2 id=\"header\">Register</h2>\n      </div>\n      <div class=\"row\">\n        <label>Username</label>\n        <input ngModel name=\"username\" class=\"form-control\" type=\"text\" required #username=\"ngModel\">\n        <div class=\"row warning\" *ngIf=\"username.invalid && username.touched\">\n          <span>Please type a username</span>\n        </div>\n        <div class=\"row warning\" *ngIf=\"user.exists\">\n          <span>Username already exists! Please select another Username</span>\n        </div>\n      </div>\n      <div class=\"row\">\n        <label>E-mail</label>\n        <input ngModel name=\"email\" class=\"form-control\" type=\"email\" required email #mail=\"ngModel\">\n        <div class=\"row warning\" *ngIf=\"mail.invalid && mail.touched\">\n          <span>Please type your e-mail correctly</span>\n        </div>\n      </div>\n      <div class=\"row\">\n        <label>Password</label>\n        <input ngModel name=\"password\" class=\"form-control\" type=\"password\" required #pass=\"ngModel\">\n      </div>\n      <div class=\"row\">\n        <label>Retype Password</label>\n        <input ngModel name=\"retypepass\" class=\"form-control\" type=\"password\" required #retypepass=\"ngModel\">\n      </div>\n      <div class=\"row warning\" *ngIf=\"pass.value !== retypepass.value && pass.touched && retypepass.touched\">\n        <span style=\"color: rgba(0, 0, 0, 0.9); font-weight: bold; font-size:16px\">\n          Passwords don't match</span>\n      </div>\n      <div class=\"subbutton\">\n        <button type=\"submit\" [disabled]=\"!f.valid\" class=\"btn btn btn-primary\">Register</button>\n      </div>\n      <p (click)=\"changeForm()\" id=\"login-text\">Already have an account?<br> Click here to login</p>\n    </div>\n  </div>\n  <div ngModelGroup=\"Login\">\n    <div class=\"col-xs-12\" *ngIf=\"loginbool\">\n      <div class=\"row\">\n        <h2 id=\"header\">Login</h2>\n      </div>\n      <div class=\"row\">\n        <label>Username</label>\n        <input ngModel name=\"username\" class=\"form-control\" type=\"text\">\n      </div>\n      <div class=\"row\">\n        <label>Password</label>\n        <input ngModel name=\"password\" class=\"form-control\" type=\"password\">\n      </div>\n      <div class=\"subbutton\">\n        <button type=\"submit\" class=\"btn btn btn-primary\">Login</button>\n      </div>\n      <div class=\"row warning\" *ngIf=\"user.logValid\">\n        <span>{{user.errorMessage}}</span>\n      </div>\n      <p (click)=\"changeForm()\" id=\"login-text\">Click here to register</p>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_user_service__ = __webpack_require__("../../../../../src/app/Services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(user) {
        this.user = user;
        this.loginbool = false;
    }
    RegisterComponent.prototype.changeForm = function () {
        this.loginbool = !this.loginbool;
        console.log(this.logForm.value);
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.loginbool) {
            this.user.username = this.logForm.value.Register.username;
            this.user.password = this.logForm.value.Register.password;
            this.user.email = this.logForm.value.Register.email;
            this.user.createUser().subscribe(function (data) {
                console.log('Success');
                if (!_this.user.exists) {
                    _this.logForm.reset();
                    _this.loginbool = true;
                    _this.user.registered = true;
                }
            }, function (error) { return console.error(error); });
        }
        else {
            this.user.username = this.logForm.value.Login.username;
            this.user.password = this.logForm.value.Login.password;
            this.user.loginUser().subscribe(function (data) {
                console.log('Success');
                if (_this.user.loggedIn) {
                    _this.logForm.reset();
                }
            }, function (error) { return console.error(error); });
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    return RegisterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], RegisterComponent.prototype, "logForm", void 0);
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/register/register.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Services_user_service__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_user_service__["a" /* User */]) === "function" && _b || Object])
], RegisterComponent);

var _a, _b;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared-components/card-board/card-board.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\r\n  float: left;\r\n  width: auto;\r\n  height: 150px;\r\n  display: block;\r\n  border: 1px solid;\r\n  border-right:1px bold;\r\n  border-color: grey;;\r\n  padding: 6px;\r\n  text-align: center;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n  background-color: white;\r\n  border-radius: 3px;\r\n}\r\n.suit {\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n.board {\r\n  padding: 100px 30px 60px 30px;\r\n  background-color: green;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  border-radius: 10px;\r\n}\r\n.red {\r\n  color:#E31818;\r\n}\r\n@media screen and (max-width: 480px) {\r\n  .board {\r\n    padding: 20px 20px 20px 20px;\r\n    background-color: green;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    border-radius: 10px;\r\n  }\r\n  .card {\r\n    height: auto;\r\n    font-size: 15px;\r\n  }\r\n  .suit {\r\n    width: 18px;\r\n    height: 18px;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared-components/card-board/card-board.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"board\" *ngIf=\"Initialized\">\n  <div class=\"row\">\n    <div class=\"card\" *ngFor=\"let card of spades\">{{card.name}}\n      <br>\n      <img class=\"suit\" src=\"https://i.imgur.com/tXgx0h3.png\">\n    </div>\n    <div class=\"card red\" *ngFor=\"let card of hearts\">{{card.name}}\n      <br>\n      <img class=\"suit\" src=\"https://i.imgur.com/Chg6eQ8.jpg\">\n    </div>\n    <div class=\"card\" *ngFor=\"let card of clubs\">{{card.name}}\n      <br>\n      <img class=\"suit\" src=\"https://i.imgur.com/TsBK3k9.jpg\">\n    </div>\n    <div class=\"card red\" *ngFor=\"let card of diamonds\">{{card.name}}\n      <br>\n      <img class=\"suit\" src=\"https://i.imgur.com/khCb5Vu.jpg\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared-components/card-board/card-board.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardBoardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_bridge_service__ = __webpack_require__("../../../../../src/app/Services/bridge.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardBoardComponent = (function () {
    function CardBoardComponent(bridgeApi) {
        this.bridgeApi = bridgeApi;
    }
    CardBoardComponent.prototype.ngOnInit = function () { };
    CardBoardComponent.prototype.ngOnChanges = function () {
        if (this.Initialized) {
            this.spades = this.bridgeApi.filterArray(this.cards, 'Spades');
            this.hearts = this.bridgeApi.filterArray(this.cards, 'Hearts');
            this.diamonds = this.bridgeApi.filterArray(this.cards, 'Diamonds');
            this.clubs = this.bridgeApi.filterArray(this.cards, 'Clubs');
        }
    };
    return CardBoardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], CardBoardComponent.prototype, "Initialized", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], CardBoardComponent.prototype, "cards", void 0);
CardBoardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-card-board',
        template: __webpack_require__("../../../../../src/app/shared-components/card-board/card-board.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared-components/card-board/card-board.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_bridge_service__["a" /* BridgeApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_bridge_service__["a" /* BridgeApi */]) === "function" && _a || Object])
], CardBoardComponent);

var _a;
//# sourceMappingURL=card-board.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared-components/comment/comment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".glyphicon {\r\n  color: grey;\r\n  margin: 2px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  cursor: pointer;\r\n}\r\n.vote {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n.clicked {\r\n  color: #BE1717;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared-components/comment/comment.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{'clicked':votevalue===1}\" class=\"glyphicon glyphicon-arrow-up\" (click)=\"Upvote()\">\n</div>\n<span class=\"vote\">{{votes}}</span>\n<div [ngClass]=\"{'clicked':votevalue===-1}\" class=\"glyphicon glyphicon-arrow-down\" (click)=\"Downvote()\">\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared-components/comment/comment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentComponent = (function () {
    function CommentComponent(http) {
        this.http = http;
        this.votevalue = 0;
    }
    CommentComponent.prototype.Upvote = function () {
        if (this.votevalue < 1) {
            this.votes += 1;
            this.votevalue += 1;
            this.value = 1;
            this.Vote(this.value).subscribe();
        }
    };
    CommentComponent.prototype.Downvote = function () {
        if (this.votevalue > -1) {
            this.votes -= 1;
            this.votevalue -= 1;
            this.value = -1;
            this.Vote(this.value).subscribe();
        }
    };
    CommentComponent.prototype.Vote = function (value) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.bid = {
            value: value,
            id: this.id,
            index: this.index
        };
        var body = JSON.stringify(this.bid);
        return this.http.post(this.link, body, { headers: header }).map(function (response) { response.json(); }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json()); });
    };
    CommentComponent.prototype.ngOnInit = function () {
    };
    return CommentComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], CommentComponent.prototype, "votes", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], CommentComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], CommentComponent.prototype, "link", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], CommentComponent.prototype, "index", void 0);
CommentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-comment',
        template: __webpack_require__("../../../../../src/app/shared-components/comment/comment.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared-components/comment/comment.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CommentComponent);

var _a;
//# sourceMappingURL=comment.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared-components/contract-design/contract-design.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contract {\r\n  margin-bottom: 10px;\r\n  padding: 0px 25%;\r\n  text-align: center;\r\n}\r\n#contract-bid {\r\n  background-color: lightgoldenrodyellow;\r\n  border: 1px solid rgba(0, 0, 0, 0.23);\r\n  cursor: pointer;\r\n}\r\n.comment {\r\n  display: block;\r\n  position: absolute;\r\n  right: 20px;\r\n  bottom: 50px;\r\n  border: 1px solid black;\r\n  background-color: rgba(211, 211, 211, 0.95);\r\n  padding: 5px 10px;\r\n  border-radius: 7px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared-components/contract-design/contract-design.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row contract\">\n  <div class=\"col-xs-3\">\n    <label [ngStyle]=\"{'color': Colors.colorNorth === 'Green' ? 'green' : 'red'}\">North</label>\n    <div class=\"row\" *ngFor=\"let north of North\" (mouseenter)=\"onHover(north)\" (mouseleave)=\"onHover(north)\">\n      <div id=\"contract-bid\">\n        <div class=\"comment\" *ngIf=\"north.hover && north.bidComment !== ''\">\n          {{north.comment}}\n        </div>\n        {{north.numBid}} <span *ngIf=\"north.numBid === ''\"> - </span>\n        <app-suit-img [suit]=\"north.suitBid\"></app-suit-img>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xs-3\">\n    <label [ngStyle]=\"{'color': Colors.colorEast === 'Green' ? 'green' : 'red'}\">East</label>\n    <div class=\"row\" *ngFor=\"let east of East\" (mouseenter)=\"onHover(east)\" (mouseleave)=\"onHover(east)\">\n      <div id=\"contract-bid\">\n          <div class=\"comment\" *ngIf=\"east.hover && east.bidComment !== ''\">\n              {{east.bidComment}}\n            </div>\n        {{east.numBid}} <span *ngIf=\"east.numBid === ''\"> - </span>\n        <app-suit-img [suit]=\"east.suitBid\"></app-suit-img>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xs-3\">\n    <label [ngStyle]=\"{'color': Colors.colorSouth === 'Green' ? 'green' : 'red'}\">South</label>\n    <div class=\"row\" *ngFor=\"let south of South\" (mouseenter)=\"onHover(south)\" (mouseleave)=\"onHover(south)\">\n      <div id=\"contract-bid\">\n          <div class=\"comment\" *ngIf=\"south.hover && south.bidComment !== ''\">\n              {{south.bidComment}}\n            </div>\n        {{south.numBid}} <span *ngIf=\"south.numBid === ''\"> - </span>\n        <app-suit-img [suit]=\"south.suitBid\"></app-suit-img>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xs-3\">\n    <label [ngStyle]=\"{'color': Colors.colorWest === 'Green' ? 'green' : 'red'}\">West</label>\n    <div class=\"row\" *ngFor=\"let west of West\" (mouseenter)=\"onHover(west)\" (mouseleave)=\"onHover(west)\">\n      <div id=\"contract-bid\">\n          <div class=\"comment\" *ngIf=\"west.hover && west.bidComment !== ''\">\n              {{west.bidComment}}\n            </div>\n        {{west.numBid}} <span *ngIf=\"west.numBid === ''\"> - </span>\n        <app-suit-img [suit]=\"west.suitBid\"></app-suit-img>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared-components/contract-design/contract-design.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContractDesignComponent; });
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

var ContractDesignComponent = (function () {
    function ContractDesignComponent() {
    }
    ContractDesignComponent.prototype.onHover = function (element) {
        element.hover = !element.hover;
    };
    ContractDesignComponent.prototype.ngOnInit = function () {
    };
    return ContractDesignComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ContractDesignComponent.prototype, "Colors", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ContractDesignComponent.prototype, "North", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ContractDesignComponent.prototype, "East", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ContractDesignComponent.prototype, "West", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ContractDesignComponent.prototype, "South", void 0);
ContractDesignComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-contract-design',
        template: __webpack_require__("../../../../../src/app/shared-components/contract-design/contract-design.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared-components/contract-design/contract-design.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContractDesignComponent);

//# sourceMappingURL=contract-design.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared-components/suit-img/suit-img.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".suit {\r\n  width: 15px;\r\n  height: 15px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared-components/suit-img/suit-img.component.html":
/***/ (function(module, exports) {

module.exports = "<img *ngIf=\"spades\" class=\"suit\" src=\"https://i.imgur.com/oYXF5go.png\">\n<img *ngIf=\"hearts\" class=\"suit\" src=\"https://i.imgur.com/hJtEt5l.png\">\n<img *ngIf=\"diamonds\" class=\"suit\" src=\"https://i.imgur.com/gYCXbWr.png\">\n<img *ngIf=\"clubs\" class=\"suit\" src=\"https://i.imgur.com/VdH8eYy.png\">\n<span *ngIf=\"nt\">NT</span>\n"

/***/ }),

/***/ "../../../../../src/app/shared-components/suit-img/suit-img.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuitImgComponent; });
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

var SuitImgComponent = (function () {
    function SuitImgComponent() {
        this.spades = false;
        this.hearts = false;
        this.clubs = false;
        this.diamonds = false;
        this.nt = false;
    }
    SuitImgComponent.prototype.ngOnInit = function () {
        if (this.suit === 'Spades') {
            this.spades = true;
        }
        else if (this.suit === 'Hearts') {
            this.hearts = true;
        }
        else if (this.suit === 'Diamonds') {
            this.diamonds = true;
        }
        else if (this.suit === 'Clubs') {
            this.clubs = true;
        }
        else if (this.suit === 'NoTrump') {
            this.nt = true;
        }
    };
    return SuitImgComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], SuitImgComponent.prototype, "suit", void 0);
SuitImgComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-suit-img',
        template: __webpack_require__("../../../../../src/app/shared-components/suit-img/suit-img.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared-components/suit-img/suit-img.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SuitImgComponent);

//# sourceMappingURL=suit-img.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared-directives/dropdown.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownDirective; });
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

var DropdownDirective = (function () {
    function DropdownDirective() {
        this.isOpen = false;
    }
    DropdownDirective.prototype.toggleOpen = function () {
        this.isOpen = !this.isOpen;
    };
    return DropdownDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('class.open'),
    __metadata("design:type", Object)
], DropdownDirective.prototype, "isOpen", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DropdownDirective.prototype, "toggleOpen", null);
DropdownDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[appDropdown]'
    })
], DropdownDirective);

//# sourceMappingURL=dropdown.directive.js.map

/***/ }),

/***/ "../../../../../src/app/testpage/testpage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/testpage/testpage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/testpage/testpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestpageComponent; });
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

var TestpageComponent = (function () {
    function TestpageComponent() {
    }
    TestpageComponent.prototype.ngOnInit = function () {
    };
    return TestpageComponent;
}());
TestpageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-testpage',
        template: __webpack_require__("../../../../../src/app/testpage/testpage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/testpage/testpage.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TestpageComponent);

//# sourceMappingURL=testpage.component.js.map

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