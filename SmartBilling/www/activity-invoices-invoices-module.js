(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activity-invoices-invoices-module"],{

/***/ "./src/app/activity/invoices/invoices.module.ts":
/*!******************************************************!*\
  !*** ./src/app/activity/invoices/invoices.module.ts ***!
  \******************************************************/
/*! exports provided: InvoicesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesPageModule", function() { return InvoicesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _invoices_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./invoices.page */ "./src/app/activity/invoices/invoices.page.ts");







var routes = [
    {
        path: '',
        component: _invoices_page__WEBPACK_IMPORTED_MODULE_6__["InvoicesPage"]
    }
];
var InvoicesPageModule = /** @class */ (function () {
    function InvoicesPageModule() {
    }
    InvoicesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_invoices_page__WEBPACK_IMPORTED_MODULE_6__["InvoicesPage"]]
        })
    ], InvoicesPageModule);
    return InvoicesPageModule;
}());



/***/ }),

/***/ "./src/app/activity/invoices/invoices.page.html":
/*!******************************************************!*\
  !*** ./src/app/activity/invoices/invoices.page.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-card>\n<ion-toolbar>\n  <ion-buttons>\n    <ion-menu-button></ion-menu-button>\n    <ion-title>\n      Invoice\n    </ion-title>\n  </ion-buttons>\n</ion-toolbar>\n</ion-card>\n</ion-header>\n\n<ion-content >\n  <ion-card *ngFor=\"let invNO of invoiceNo; index as i\" >\n    <ion-item>\n      <ion-icon size=\"18\"  name=\"clipboard\"  slot='start'></ion-icon>\n      <ion-label>{{invNO}}</ion-label>\n      <ion-icon name=\"options\" (click)=\"onOptions(i)\" slot=\"end\"></ion-icon>\n    </ion-item> \n</ion-card>  \n</ion-content>"

/***/ }),

/***/ "./src/app/activity/invoices/invoices.page.scss":
/*!******************************************************!*\
  !*** ./src/app/activity/invoices/invoices.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjdGl2aXR5L2ludm9pY2VzL2ludm9pY2VzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/activity/invoices/invoices.page.ts":
/*!****************************************************!*\
  !*** ./src/app/activity/invoices/invoices.page.ts ***!
  \****************************************************/
/*! exports provided: InvoicesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesPage", function() { return InvoicesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/http.service */ "./src/app/shared/http.service.ts");






var InvoicesPage = /** @class */ (function () {
    function InvoicesPage(actionSheetController, active, http, modal, router) {
        this.actionSheetController = actionSheetController;
        this.active = active;
        this.http = http;
        this.modal = modal;
        this.router = router;
        this.invoices = [];
        this.product = [];
        this.customer = [];
        this.invoiceNo = [];
        this.name = 'Apple';
    }
    InvoicesPage.prototype.ngOnInit = function () {
        var _this = this;
        var email = localStorage.getItem('email');
        this.http.allInvoice(email).subscribe(function (res) {
            _this.invoices = res.invoice;
            console.log(_this.invoices);
            for (var i = 0; i < _this.invoices.length; i++) {
                _this.customer.push(JSON.parse(_this.invoices[i].customer));
                _this.product.push(JSON.parse(_this.invoices[i].productDetails));
                _this.invoiceNo.push(_this.invoices[i].invoiceNo);
            }
            console.log(_this.customer);
            console.log(_this.product);
            console.log(_this.invoiceNo);
        });
    };
    InvoicesPage.prototype.onOptions = function (i) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Invoice Details',
                            buttons: [{
                                    text: 'Customer Name : ' + this.customer[i].name,
                                    icon: 'person'
                                }, {
                                    text: 'Contact :' + this.customer[i].contact,
                                    icon: 'contact'
                                }, {
                                    text: 'Brand : ' + this.product[i].brand,
                                    icon: 'tablet-portrait'
                                }, {
                                    text: 'Modal : ' + this.product[i].name,
                                    icon: 'save'
                                }, {
                                    text: 'Price : ' + this.product[i].price,
                                    icon: 'wallet'
                                }, {
                                    text: 'Close',
                                    icon: 'close',
                                    role: 'cancel',
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    InvoicesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invoices',
            template: __webpack_require__(/*! ./invoices.page.html */ "./src/app/activity/invoices/invoices.page.html"),
            styles: [__webpack_require__(/*! ./invoices.page.scss */ "./src/app/activity/invoices/invoices.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _shared_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], InvoicesPage);
    return InvoicesPage;
}());



/***/ })

}]);
//# sourceMappingURL=activity-invoices-invoices-module.js.map