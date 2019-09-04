(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activity-add-add-module"],{

/***/ "./src/app/activity/add/add.module.ts":
/*!********************************************!*\
  !*** ./src/app/activity/add/add.module.ts ***!
  \********************************************/
/*! exports provided: AddPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPageModule", function() { return AddPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add.page */ "./src/app/activity/add/add.page.ts");







var routes = [
    {
        path: '',
        component: _add_page__WEBPACK_IMPORTED_MODULE_6__["AddPage"]
    }
];
var AddPageModule = /** @class */ (function () {
    function AddPageModule() {
    }
    AddPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_add_page__WEBPACK_IMPORTED_MODULE_6__["AddPage"]]
        })
    ], AddPageModule);
    return AddPageModule;
}());



/***/ }),

/***/ "./src/app/activity/add/add.page.html":
/*!********************************************!*\
  !*** ./src/app/activity/add/add.page.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>\n        Add roduct\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n<form [formGroup]=\"productForm\">\n    <ion-card>\n      <ion-item >\n        <ion-input formControlName=\"name\" placeholder=\"Product Name *\"></ion-input>\n      </ion-item>\n    </ion-card>\n    <ion-card>\n      <ion-item>\n        <ion-input formControlName=\"brand\" placeholder=\"Product Brand *\"></ion-input>\n      </ion-item>\n   </ion-card>  \n   <ion-card>\n      <ion-item>\n        <ion-input formControlName=\"price\" placeholder=\"Product Price  *\"></ion-input>\n      </ion-item>\n  </ion-card> \n  <ion-card>\n    <ion-item>\n        <ion-label>RAM</ion-label>\n        <ion-select formControlName=\"ram\" placeholder=\"Select One\">\n          <ion-select-option value=\"4\">4 GB</ion-select-option>\n          <ion-select-option value=\"8\">8 GB</ion-select-option>\n          <ion-select-option value=\"12\">12 GB</ion-select-option>\n        </ion-select>\n    </ion-item>\n  </ion-card>  \n  <ion-card>\n    <ion-item>\n        <ion-label>ROM</ion-label>\n        <ion-select formControlName=\"rom\" placeholder=\"Select One\">\n          <ion-select-option value=\"16\">16 GB</ion-select-option>\n          <ion-select-option value=\"32\">32 GB</ion-select-option>\n          <ion-select-option value=\"64\">64 GB</ion-select-option>\n          <ion-select-option value=\"128\">128 GB</ion-select-option>\n          <ion-select-option value=\"256\">256 GB</ion-select-option>\n        </ion-select>\n    </ion-item>\n  </ion-card>  \n  <ion-card>\n    <ion-button (click)=\"onSubmit()\" type=\"submit\"  size=\"medium\" expand=\"block\" color=\"tertiary\">Submit</ion-button>\n  </ion-card>\n</form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/activity/add/add.page.scss":
/*!********************************************!*\
  !*** ./src/app/activity/add/add.page.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  background-color: black;\n  box-shadow: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FtLW4yL0lvbmljL1NtYXJ0QmlsbGluZy9zcmMvYXBwL2FjdGl2aXR5L2FkZC9hZGQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksdUJBQXVCO0VBQ3ZCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWN0aXZpdHkvYWRkL2FkZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLmNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2sgOyAvLyBibGFja1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/activity/add/add.page.ts":
/*!******************************************!*\
  !*** ./src/app/activity/add/add.page.ts ***!
  \******************************************/
/*! exports provided: AddPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPage", function() { return AddPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/http.service */ "./src/app/shared/http.service.ts");







var AddPage = /** @class */ (function () {
    // tslint:disable-next-line: max-line-length
    function AddPage(menuCtrl, alert, fb, http, router, toastController) {
        this.menuCtrl = menuCtrl;
        this.alert = alert;
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.toastController = toastController;
    }
    AddPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(true);
    };
    AddPage.prototype.ngOnInit = function () {
        this.productForm = this.fb.group({
            name: [''],
            brand: [''],
            price: [''],
            ram: [''],
            rom: ['']
        });
    };
    AddPage.prototype.onSubmit = function () {
        var _this = this;
        var email = localStorage.getItem('email');
        var name = this.productForm.get('name').value;
        var brand = this.productForm.get('brand').value;
        var price = this.productForm.get('price').value;
        var ram = this.productForm.get('ram').value;
        var rom = this.productForm.get('rom').value;
        var inputdata = new FormData();
        inputdata.append('name', name);
        inputdata.append('brand', brand);
        inputdata.append('price', price);
        inputdata.append('ram', ram);
        inputdata.append('rom', rom);
        inputdata.append('email', email);
        this.http.addProduct(inputdata).subscribe(function (res) {
            _this.presentAlertMultipleButtons();
        }, function (error) {
            console.log(error);
            _this.presentAlert();
        });
    };
    AddPage.prototype.presentAlertMultipleButtons = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alertcntrl;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            mode: 'ios',
                            header: 'Added success.',
                            message: 'Do you want to add more',
                            buttons: [{
                                    text: 'Yes',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        _this.ngOnInit();
                                    }
                                }, {
                                    text: 'No',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        _this.router.navigate(['../home']);
                                    }
                                }]
                        })];
                    case 1:
                        alertcntrl = _a.sent();
                        return [4 /*yield*/, alertcntrl.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AddPage.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alertcntrl;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            mode: 'ios',
                            message: 'Added Failed.',
                            duration: 2000,
                            position: 'middle',
                        })];
                    case 1:
                        alertcntrl = _a.sent();
                        return [4 /*yield*/, alertcntrl.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! ./add.page.html */ "./src/app/activity/add/add.page.html"),
            styles: [__webpack_require__(/*! ./add.page.scss */ "./src/app/activity/add/add.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_shared_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], AddPage);
    return AddPage;
}());



/***/ })

}]);
//# sourceMappingURL=activity-add-add-module.js.map