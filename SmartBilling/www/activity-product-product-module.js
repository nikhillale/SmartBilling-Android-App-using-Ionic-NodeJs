(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activity-product-product-module"],{

/***/ "./src/app/activity/product/product.module.ts":
/*!****************************************************!*\
  !*** ./src/app/activity/product/product.module.ts ***!
  \****************************************************/
/*! exports provided: ProductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPageModule", function() { return ProductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product.page */ "./src/app/activity/product/product.page.ts");







var routes = [
    {
        path: '',
        component: _product_page__WEBPACK_IMPORTED_MODULE_6__["ProductPage"]
    }
];
var ProductPageModule = /** @class */ (function () {
    function ProductPageModule() {
    }
    ProductPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_product_page__WEBPACK_IMPORTED_MODULE_6__["ProductPage"]]
        })
    ], ProductPageModule);
    return ProductPageModule;
}());



/***/ }),

/***/ "./src/app/activity/product/product.page.html":
/*!****************************************************!*\
  !*** ./src/app/activity/product/product.page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-card>\n  <ion-toolbar>\n    <ion-buttons>\n      <ion-menu-button></ion-menu-button>\n      <ion-title>\n        Product\n      </ion-title>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-card>\n</ion-header>\n\n<ion-content >\n    <ion-card *ngFor=\"let item of product\">\n    <ion-item-sliding>\n      <ion-item *ngIf='item.brand !== name' >\n        <ion-icon size=\"18\" style=\"color: #A4C639\" name=\"logo-android\" slot='start' (click)=\"onClick(item)\"></ion-icon>\n        <ion-label (click)=\"onClick(item)\">{{item.brand}}</ion-label>\n        <ion-label (click)=\"onClick(item)\">{{item.name}}</ion-label>\n        <ion-label><ion-icon name=\"options\" (click)=\"onOptions(item)\" style=\"margin-left:1cm\"></ion-icon></ion-label>\n        <ion-icon name=\"switch\"></ion-icon>\n      </ion-item>\n  \n      <ion-item *ngIf='item.brand === name'>\n        <ion-icon size=\"18\" style=\"color:#A3AAAE\" name=\"logo-apple\" slot='start' (click)=\"onClick(item)\"></ion-icon>\n        <ion-label (click)=\"onClick(item)\">{{item.brand}}</ion-label>\n        <ion-label (click)=\"onClick(item)\">{{item.name}}</ion-label>\n        <ion-label><ion-icon name=\"options\" (click)=\"onOptions(item)\" style=\"margin-left:1cm\"></ion-icon></ion-label>\n        <ion-icon name=\"switch\"></ion-icon>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"tertiary\" expandable (click)=\"onEdit(item._id)\">\n          Edit\n        </ion-item-option>\n      </ion-item-options>\n    \n    </ion-item-sliding>  \n  </ion-card>  \n  </ion-content>"

/***/ }),

/***/ "./src/app/activity/product/product.page.scss":
/*!****************************************************!*\
  !*** ./src/app/activity/product/product.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjdGl2aXR5L3Byb2R1Y3QvcHJvZHVjdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/activity/product/product.page.ts":
/*!**************************************************!*\
  !*** ./src/app/activity/product/product.page.ts ***!
  \**************************************************/
/*! exports provided: ProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPage", function() { return ProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/http.service */ "./src/app/shared/http.service.ts");






var ProductPage = /** @class */ (function () {
    function ProductPage(actionSheetController, active, http, modal, router) {
        this.actionSheetController = actionSheetController;
        this.active = active;
        this.http = http;
        this.modal = modal;
        this.router = router;
        this.product = [];
        this.pro = [];
        this.name = 'Apple';
    }
    ProductPage.prototype.ngOnInit = function () {
        var _this = this;
        var item = this.active.snapshot.paramMap.get('item');
        var email = localStorage.getItem('email');
        this.http.getProduct(email).subscribe(function (response) {
            _this.pro = response[0].product;
            // tslint:disable-next-line: prefer-for-of
            _this.pro.map(function (res) {
                if (res.brand === item) {
                    _this.product.push(res);
                }
            });
        });
    };
    ProductPage.prototype.onClick = function (item) {
        console.log(item);
        var navigationExtras = {
            state: {
                name: item.name,
                brand: item.brand,
                price: item.price,
            }
        };
        this.router.navigate(['../generate/'], navigationExtras);
    };
    ProductPage.prototype.onEdit = function (updateId) {
        console.log(updateId);
        this.router.navigate(['../update/' + updateId]);
    };
    ProductPage.prototype.onOptions = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Product Details',
                            buttons: [{
                                    text: 'Brand : ' + item.brand,
                                    icon: 'logo-apple'
                                }, {
                                    text: 'Modal : ' + item.name,
                                    icon: 'tablet-portrait'
                                }, {
                                    text: 'RAM : ' + item.ram + ' GB',
                                    icon: 'save'
                                }, {
                                    text: 'ROM : ' + item.rom + ' GB',
                                    icon: 'disc'
                                }, {
                                    text: 'Price : ' + item.price,
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
    ProductPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.page.html */ "./src/app/activity/product/product.page.html"),
            styles: [__webpack_require__(/*! ./product.page.scss */ "./src/app/activity/product/product.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_shared_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProductPage);
    return ProductPage;
}());



/***/ })

}]);
//# sourceMappingURL=activity-product-product-module.js.map