(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activity-delete-delete-module"],{

/***/ "./src/app/activity/delete/delete.module.ts":
/*!**************************************************!*\
  !*** ./src/app/activity/delete/delete.module.ts ***!
  \**************************************************/
/*! exports provided: DeletePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletePageModule", function() { return DeletePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _delete_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./delete.page */ "./src/app/activity/delete/delete.page.ts");







var routes = [
    {
        path: '',
        component: _delete_page__WEBPACK_IMPORTED_MODULE_6__["DeletePage"]
    }
];
var DeletePageModule = /** @class */ (function () {
    function DeletePageModule() {
    }
    DeletePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_delete_page__WEBPACK_IMPORTED_MODULE_6__["DeletePage"]]
        })
    ], DeletePageModule);
    return DeletePageModule;
}());



/***/ }),

/***/ "./src/app/activity/delete/delete.page.html":
/*!**************************************************!*\
  !*** ./src/app/activity/delete/delete.page.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>\n        Delete\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-list>\n      <ion-item *ngFor=\"let item of product; index as i\">\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"2\" align-self-start>{{i+1}}</ion-col>\n              <ion-col>{{item.brand}}</ion-col>\n              <ion-col>{{item.name}}</ion-col>\n              <ion-col>{{item.price}} &nbsp;&#8377;</ion-col>\n              <ion-col><ion-icon name=\"trash\" color='danger' size='large' (click)=\"onClick(item._id)\"></ion-icon></ion-col>\n            </ion-row>\n          </ion-grid>\n      </ion-item>\n    </ion-list>\n   \n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/activity/delete/delete.page.scss":
/*!**************************************************!*\
  !*** ./src/app/activity/delete/delete.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjdGl2aXR5L2RlbGV0ZS9kZWxldGUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/activity/delete/delete.page.ts":
/*!************************************************!*\
  !*** ./src/app/activity/delete/delete.page.ts ***!
  \************************************************/
/*! exports provided: DeletePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletePage", function() { return DeletePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/http.service */ "./src/app/shared/http.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var DeletePage = /** @class */ (function () {
    // tslint:disable-next-line: max-line-length
    function DeletePage(router, toastController, menuCtrl, alert, http) {
        this.router = router;
        this.toastController = toastController;
        this.menuCtrl = menuCtrl;
        this.alert = alert;
        this.http = http;
        this.product = [];
    }
    DeletePage.prototype.ngOnInit = function () {
        var _this = this;
        var email = localStorage.getItem('email');
        this.http.getProduct(email).subscribe(function (response) {
            _this.product = response[0].product;
        });
    };
    DeletePage.prototype.onClick = function (deleteId) {
        var _this = this;
        this.http.deleteProduct(deleteId).subscribe(function (response) {
            if (response) {
                _this.presentAlertMultipleButtons();
            }
        }, function (error) {
            _this.presentAlert();
        });
    };
    DeletePage.prototype.presentAlertMultipleButtons = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alertcntrl;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            mode: 'ios',
                            header: 'Delete.',
                            message: 'Are you sure...! ',
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
    DeletePage.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alertcntrl;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Delete Failed.',
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
    DeletePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete',
            template: __webpack_require__(/*! ./delete.page.html */ "./src/app/activity/delete/delete.page.html"),
            styles: [__webpack_require__(/*! ./delete.page.scss */ "./src/app/activity/delete/delete.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], src_app_shared_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], DeletePage);
    return DeletePage;
}());



/***/ })

}]);
//# sourceMappingURL=activity-delete-delete-module.js.map