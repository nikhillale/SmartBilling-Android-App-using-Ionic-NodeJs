(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-register-register-module"],{

/***/ "./src/app/authentication/register/register.module.ts":
/*!************************************************************!*\
  !*** ./src/app/authentication/register/register.module.ts ***!
  \************************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/authentication/register/register.page.ts");







var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/authentication/register/register.page.html":
/*!************************************************************!*\
  !*** ./src/app/authentication/register/register.page.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=primary>\n      <ion-title >Smart Billing\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>  \n    <ion-card style=\"margin-top: 1cm\"> \n      <form [formGroup]=\"regForm\">\n          <ion-item>\n              <ion-card-title color=\"primary\" >{{login}}</ion-card-title>\n          </ion-item>\n          <div *ngIf=dis>\n              <ion-card>\n                  <ion-item>\n                      <ion-input type=\"text\" placeholder=\"Enter One Time Password\" formControlName=\"OTP\"></ion-input>\n                  </ion-item>\n                </ion-card>\n                <ion-button (click)=\"onVerify()\" size=\"small\"  color=\"tertiary\"  style=\"margin:auto; margin-bottom: 20px;margin-left:6cm\"  padding>Verify</ion-button>\n          </div> \n          <div *ngIf=dis2>\n              <ion-card>\n                  <ion-item>\n                      <ion-input type=\"text\" placeholder=\"Enter New Password\" formControlName=\"password\"></ion-input>\n                  </ion-item>\n                </ion-card>\n                <ion-card>\n                  <ion-item>\n                    <ion-input type=\"password\"  placeholder=\"Conformed Password\" formControlName=\"conformPass\"></ion-input>\n                  </ion-item>\n                </ion-card>\n                <ion-button (click)=\"onSubmit()\"  size=\"small\"  color=\"tertiary\"  style=\"margin:auto; margin-bottom: 20px;margin-left:6cm\"  padding>Submit</ion-button>\n          </div>  \n    </form>\n</ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/authentication/register/register.page.scss":
/*!************************************************************!*\
  !*** ./src/app/authentication/register/register.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/authentication/register/register.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/authentication/register/register.page.ts ***!
  \**********************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/http.service */ "./src/app/shared/http.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var RegisterPage = /** @class */ (function () {
    function RegisterPage(active, fb, http, router, toastController) {
        this.active = active;
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.toastController = toastController;
        this.dis = true;
        this.dis2 = false;
        this.login = 'Verify OTP';
    }
    RegisterPage.prototype.ngOnInit = function () {
        this.regForm = this.fb.group({
            conformPass: [''],
            password: [''],
            OTP: ['']
        });
    };
    RegisterPage.prototype.onVerify = function () {
        var otp = this.active.snapshot.paramMap.get('otp');
        console.log(otp);
        var checkOTP = this.regForm.get('OTP').value;
        if (checkOTP === otp) {
            this.login = 'Reset Password';
            this.dis = false;
            this.dis2 = true;
            this.verificationToast();
        }
        else {
            this.wrongOtpToast();
        }
    };
    RegisterPage.prototype.verificationToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alertcntrl;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Verified Successfully.Reset Password',
                            duration: 2000,
                            position: 'bottom',
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
    RegisterPage.prototype.wrongOtpToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alertcntrl;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Please enter Correct OTP.',
                            duration: 2000,
                            position: 'bottom',
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
    RegisterPage.prototype.onSubmit = function () {
        var _this = this;
        var password = this.regForm.get('password').value;
        var confPass = this.regForm.get('conformPass').value;
        if (password !== confPass) {
            this.wrongPassToast();
        }
        else {
            var email = localStorage.getItem('email');
            var inputdata = new FormData();
            inputdata.append('password', confPass);
            inputdata.append('email', email);
            this.http.resetPass(inputdata).subscribe(function (res) {
                localStorage.removeItem('email');
                _this.router.navigate(['../login']);
            });
        }
    };
    RegisterPage.prototype.paswordToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alertcntrl;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Password Reset Successfully.Please login',
                            duration: 2000,
                            position: 'bottom',
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
    RegisterPage.prototype.wrongPassToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alertcntrl;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Please Enter Correct password',
                            duration: 2000,
                            position: 'bottom',
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
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/authentication/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/authentication/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_shared_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=authentication-register-register-module.js.map