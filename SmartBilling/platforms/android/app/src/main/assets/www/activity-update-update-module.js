(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activity-update-update-module"],{

/***/ "./src/app/activity/update/update.module.ts":
/*!**************************************************!*\
  !*** ./src/app/activity/update/update.module.ts ***!
  \**************************************************/
/*! exports provided: UpdatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePageModule", function() { return UpdatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _update_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update.page */ "./src/app/activity/update/update.page.ts");







var routes = [
    {
        path: '',
        component: _update_page__WEBPACK_IMPORTED_MODULE_6__["UpdatePage"]
    }
];
var UpdatePageModule = /** @class */ (function () {
    function UpdatePageModule() {
    }
    UpdatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_update_page__WEBPACK_IMPORTED_MODULE_6__["UpdatePage"]]
        })
    ], UpdatePageModule);
    return UpdatePageModule;
}());



/***/ }),

/***/ "./src/app/activity/update/update.page.html":
/*!**************************************************!*\
  !*** ./src/app/activity/update/update.page.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n    <ion-toolbar >\n      <ion-title>UpdateProduct</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n  <form [formGroup]=\"updateForm\">\n    <ion-card>\n      <ion-item >\n        <ion-input formControlName=\"name\" placeholder=\"Product Name *\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input formControlName=\"brand\" placeholder=\"Product Brand *\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input formControlName=\"price\" placeholder=\"Product Price  *\"></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label>RAM</ion-label>\n          <ion-select formControlName=\"ram\" placeholder=\"Select One\">\n            <ion-select-option value=\"4\">4 GB</ion-select-option>\n            <ion-select-option value=\"8\">8 GB</ion-select-option>\n            <ion-select-option value=\"12\">12 GB</ion-select-option>\n          </ion-select>\n      </ion-item>\n      <ion-item>\n          <ion-label>ROM</ion-label>\n          <ion-select formControlName=\"rom\" placeholder=\"Select One\">\n            <ion-select-option value=\"16\">16 GB</ion-select-option>\n            <ion-select-option value=\"32\">32 GB</ion-select-option>\n            <ion-select-option value=\"64\">64 GB</ion-select-option>\n            <ion-select-option value=\"128\">128 GB</ion-select-option>\n            <ion-select-option value=\"256\">256 GB</ion-select-option>\n          </ion-select>\n      </ion-item>\n      <ion-button (click)=\"onUpdate()\" type=\"submit\"  size=\"medium\" expand=\"block\" color=\"tertiary\">Update</ion-button>\n    </ion-card>\n  </form>\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/activity/update/update.page.scss":
/*!**************************************************!*\
  !*** ./src/app/activity/update/update.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjdGl2aXR5L3VwZGF0ZS91cGRhdGUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/activity/update/update.page.ts":
/*!************************************************!*\
  !*** ./src/app/activity/update/update.page.ts ***!
  \************************************************/
/*! exports provided: UpdatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePage", function() { return UpdatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/http.service */ "./src/app/shared/http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var UpdatePage = /** @class */ (function () {
    function UpdatePage(alert, toastController, active, http, fb, router) {
        this.alert = alert;
        this.toastController = toastController;
        this.active = active;
        this.http = http;
        this.fb = fb;
        this.router = router;
    }
    UpdatePage.prototype.ngOnInit = function () {
        this.updateForm = this.fb.group({
            name: [''],
            brand: [''],
            price: [''],
            ram: [''],
            rom: [''],
        });
        this.patchDataToFields();
    };
    UpdatePage.prototype.patchDataToFields = function () {
        var _this = this;
        var id = this.active.snapshot.paramMap.get('id');
        this.http.getDataById(id).subscribe(function (response) {
            _this.patchData = response;
            console.log(_this.patchData);
            _this.updateForm.patchValue({
                name: _this.patchData.name,
                brand: _this.patchData.brand,
                price: _this.patchData.price,
                ram: _this.patchData.ram,
                rom: _this.patchData.rom
            });
        });
    };
    UpdatePage.prototype.onUpdate = function () {
        var _this = this;
        var name = this.updateForm.get('name').value;
        var brand = this.updateForm.get('brand').value;
        var price = this.updateForm.get('price').value;
        var ram = this.updateForm.get('ram').value;
        var rom = this.updateForm.get('rom').value;
        var inputdata = new FormData();
        inputdata.append('name', name);
        inputdata.append('brand', brand);
        inputdata.append('price', price);
        inputdata.append('ram', ram);
        inputdata.append('rom', rom);
        this.http.updateData(inputdata, this.patchData._id).subscribe(function (response) {
            _this.presentAlertMultipleButtons();
        });
    };
    UpdatePage.prototype.presentAlertMultipleButtons = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alertcntrl;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            header: 'Update.',
                            message: 'Are you sure...! ',
                            buttons: [{
                                    text: 'Yes',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        _this.router.navigate(['../home']);
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
    UpdatePage.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alertcntrl;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
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
    UpdatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update',
            template: __webpack_require__(/*! ./update.page.html */ "./src/app/activity/update/update.page.html"),
            styles: [__webpack_require__(/*! ./update.page.scss */ "./src/app/activity/update/update.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_shared_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UpdatePage);
    return UpdatePage;
}());



/***/ })

}]);
//# sourceMappingURL=activity-update-update-module.js.map