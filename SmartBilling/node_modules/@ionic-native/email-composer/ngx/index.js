var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { IonicNativePlugin, checkAvailability, cordova, getPromise } from '@ionic-native/core';
var EmailComposer = /** @class */ (function (_super) {
    __extends(EmailComposer, _super);
    function EmailComposer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmailComposer.prototype.hasPermission = function () { return cordova(this, "hasPermission", { "successIndex": 0, "errorIndex": 2 }, arguments); };
    EmailComposer.prototype.requestPermission = function () { return cordova(this, "requestPermission", { "successIndex": 0, "errorIndex": 2 }, arguments); };
    EmailComposer.prototype.isAvailable = function (app) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (resolve, reject) {
                    if (app) {
                        EmailComposer.getPlugin().isAvailable(app, function (isAvailable) {
                            if (isAvailable) {
                                resolve();
                            }
                            else {
                                reject();
                            }
                        });
                    }
                    else {
                        EmailComposer.getPlugin().isAvailable(function (isAvailable) {
                            if (isAvailable) {
                                resolve();
                            }
                            else {
                                reject();
                            }
                        });
                    }
                });
            }
        })();
    };
    EmailComposer.prototype.open = function (options, scope) { return cordova(this, "open", { "successIndex": 1, "errorIndex": 3 }, arguments); };
    EmailComposer.prototype.addAlias = function (alias, packageName) { return cordova(this, "addAlias", {}, arguments); };
    EmailComposer.pluginName = "EmailComposer";
    EmailComposer.plugin = "cordova-plugin-email-composer";
    EmailComposer.pluginRef = "cordova.plugins.email";
    EmailComposer.repo = "https://github.com/katzer/cordova-plugin-email-composer";
    EmailComposer.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Windows", "macOS"];
    EmailComposer = __decorate([
        Injectable()
    ], EmailComposer);
    return EmailComposer;
}(IonicNativePlugin));
export { EmailComposer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2VtYWlsLWNvbXBvc2VyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLGlEQUtMLFVBQVUsRUFDWCxNQUFNLG9CQUFvQixDQUFDOztJQWdITyxpQ0FBaUI7Ozs7SUFTbEQscUNBQWE7SUFZYix5Q0FBaUI7SUFXakIsbUNBQVcsYUFBQyxHQUFZOzs7bURBQWdCO2dCQUN0QyxPQUFPLFVBQVUsQ0FBVSxVQUFDLE9BQU8sRUFBRSxNQUFNO29CQUN6QyxJQUFJLEdBQUcsRUFBRTt3QkFDUCxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxVQUFDLFdBQW9COzRCQUM5RCxJQUFJLFdBQVcsRUFBRTtnQ0FDZixPQUFPLEVBQUUsQ0FBQzs2QkFDWDtpQ0FBTTtnQ0FDTCxNQUFNLEVBQUUsQ0FBQzs2QkFDVjt3QkFDSCxDQUFDLENBQUMsQ0FBQztxQkFDSjt5QkFBTTt3QkFDTCxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQUMsV0FBb0I7NEJBQ3pELElBQUksV0FBVyxFQUFFO2dDQUNmLE9BQU8sRUFBRSxDQUFDOzZCQUNYO2lDQUFNO2dDQUNMLE1BQU0sRUFBRSxDQUFDOzZCQUNWO3dCQUNILENBQUMsQ0FBQyxDQUFDO3FCQUNKO2dCQUNILENBQUMsQ0FBQyxDQUFDO2FBQ0o7OztJQWFELDRCQUFJLGFBQUMsT0FBNkIsRUFBRSxLQUFXO0lBVy9DLGdDQUFRLGFBQUMsS0FBYSxFQUFFLFdBQW1COzs7Ozs7SUE1RWhDLGFBQWE7UUFEekIsVUFBVSxFQUFFO09BQ0EsYUFBYTt3QkF2SDFCO0VBdUhtQyxpQkFBaUI7U0FBdkMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvcmRvdmEsXG4gIENvcmRvdmFDaGVjayxcbiAgSW9uaWNOYXRpdmVQbHVnaW4sXG4gIFBsdWdpbixcbiAgZ2V0UHJvbWlzZVxufSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVtYWlsQ29tcG9zZXJPcHRpb25zIHtcbiAgLyoqXG4gICAqIEFwcCB0byBzZW5kIHRoZSBlbWFpbCB3aXRoXG4gICAqL1xuICBhcHA/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEVtYWlsIGFkZHJlc3MoZXMpIGZvciBUbyBmaWVsZFxuICAgKi9cbiAgdG8/OiBzdHJpbmcgfCBzdHJpbmdbXTtcblxuICAvKipcbiAgICogRW1haWwgYWRkcmVzcyhlcykgZm9yIENDIGZpZWxkXG4gICAqL1xuICBjYz86IHN0cmluZyB8IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBFbWFpbCBhZGRyZXNzKGVzKSBmb3IgQkNDIGZpZWxkXG4gICAqL1xuICBiY2M/OiBzdHJpbmcgfCBzdHJpbmdbXTtcblxuICAvKipcbiAgICogRmlsZSBwYXRocyBvciBiYXNlNjQgZGF0YSBzdHJlYW1zXG4gICAqL1xuICBhdHRhY2htZW50cz86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBTdWJqZWN0IG9mIHRoZSBlbWFpbFxuICAgKi9cbiAgc3ViamVjdD86IHN0cmluZztcblxuICAvKipcbiAgICogRW1haWwgYm9keSAoZm9yIEhUTUwsIHNldCBpc0h0bWwgdG8gdHJ1ZSlcbiAgICovXG4gIGJvZHk/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyBpZiB0aGUgYm9keSBpcyBIVE1MIG9yIHBsYWluIHRleHRcbiAgICovXG4gIGlzSHRtbD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqICBDb250ZW50IHR5cGUgb2YgdGhlIGVtYWlsIChBbmRyb2lkIG9ubHkpXG4gICAqL1xuICB0eXBlPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBuYW1lIEVtYWlsIENvbXBvc2VyXG4gKiBAZGVzY3JpcHRpb25cbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogY29yZG92YS1wbHVnaW4tZW1haWwtY29tcG9zZXIuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtFbWFpbCBDb21wb3NlciBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2h5cGVyeTJrL2NvcmRvdmEtZW1haWwtcGx1Z2luKS5cbiAqXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBFbWFpbENvbXBvc2VyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9lbWFpbC1jb21wb3Nlci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZW1haWxDb21wb3NlcjogRW1haWxDb21wb3NlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuZW1haWxDb21wb3Nlci5pc0F2YWlsYWJsZSgpLnRoZW4oKGF2YWlsYWJsZTogYm9vbGVhbikgPT57XG4gKiAgaWYoYXZhaWxhYmxlKSB7XG4gKiAgICAvL05vdyB3ZSBrbm93IHdlIGNhbiBzZW5kXG4gKiAgfVxuICogfSk7XG4gKlxuICogbGV0IGVtYWlsID0ge1xuICogICB0bzogJ21heEBtdXN0ZXJtYW5uLmRlJyxcbiAqICAgY2M6ICdlcmlrYUBtdXN0ZXJtYW5uLmRlJyxcbiAqICAgYmNjOiBbJ2pvaG5AZG9lLmNvbScsICdqYW5lQGRvZS5jb20nXSxcbiAqICAgYXR0YWNobWVudHM6IFtcbiAqICAgICAnZmlsZTovL2ltZy9sb2dvLnBuZycsXG4gKiAgICAgJ3JlczovL2ljb24ucG5nJyxcbiAqICAgICAnYmFzZTY0Omljb24ucG5nLy9pVkJPUncwS0dnb0FBQUFOU1VoRVVnLi4uJyxcbiAqICAgICAnZmlsZTovL1JFQURNRS5wZGYnXG4gKiAgIF0sXG4gKiAgIHN1YmplY3Q6ICdDb3Jkb3ZhIEljb25zJyxcbiAqICAgYm9keTogJ0hvdyBhcmUgeW91PyBOaWNlIGdyZWV0aW5ncyBmcm9tIExlaXB6aWcnLFxuICogICBpc0h0bWw6IHRydWVcbiAqIH1cbiAqXG4gKiAvLyBTZW5kIGEgdGV4dCBtZXNzYWdlIHVzaW5nIGRlZmF1bHQgb3B0aW9uc1xuICogdGhpcy5lbWFpbENvbXBvc2VyLm9wZW4oZW1haWwpO1xuICogYGBgXG4gKlxuICogWW91IGNhbiBhbHNvIGFzc2lnbiBhbGlhc2VzIHRvIGVtYWlsIGFwcHNcbiAqIGBgYHRzXG4gKiAvLyBhZGQgYWxpYXNcbiAqIHRoaXMuZW1haWwuYWRkQWxpYXMoJ2dtYWlsJywgJ2NvbS5nb29nbGUuYW5kcm9pZC5nbScpO1xuICpcbiAqIC8vIHRoZW4gdXNlIGFsaWFzIHdoZW4gc2VuZGluZyBlbWFpbFxuICogdGhpcy5lbWFpbC5vcGVuKHtcbiAqICAgYXBwOiAnZ21haWwnLFxuICogICAuLi5cbiAqIH0pO1xuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogRW1haWxDb21wb3Nlck9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdFbWFpbENvbXBvc2VyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZW1haWwtY29tcG9zZXInLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuZW1haWwnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2thdHplci9jb3Jkb3ZhLXBsdWdpbi1lbWFpbC1jb21wb3NlcicsXG4gIHBsYXRmb3JtczogWydBbWF6b24gRmlyZSBPUycsICdBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ1dpbmRvd3MnLCAnbWFjT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFbWFpbENvbXBvc2VyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSBhcHAgaGFzIGEgcGVybWlzc2lvbiB0byBhY2Nlc3MgZW1haWwgYWNjb3VudHMgaW5mb3JtYXRpb25cbiAgICogQHJldHVybiB7UHJvbWlzZTxib29sZWFuPn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgYm9vbGVhbiB0aGF0IGluZGljYXRlcyBpZiB0aGUgcGVybWlzc2lvbiB3YXMgZ3JhbnRlZFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMCxcbiAgICBlcnJvckluZGV4OiAyXG4gIH0pXG4gIGhhc1Blcm1pc3Npb24oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3QgcGVybWlzc2lvbiB0byBhY2Nlc3MgZW1haWwgYWNjb3VudHMgaW5mb3JtYXRpb25cbiAgICogQHJldHVybiB7UHJvbWlzZTxib29sZWFuPn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgYm9vbGVhbiB0aGF0IGluZGljYXRlcyBpZiB0aGUgcGVybWlzc2lvbiB3YXMgZ3JhbnRlZFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMCxcbiAgICBlcnJvckluZGV4OiAyXG4gIH0pXG4gIHJlcXVlc3RQZXJtaXNzaW9uKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZmllcyBpZiBzZW5kaW5nIGVtYWlscyBpcyBzdXBwb3J0ZWQgb24gdGhlIGRldmljZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFthcHBdIEFwcCBpZCBvciB1cmkgc2NoZW1lLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXNvbHZlcyBpZiBhdmFpbGFibGUsIHJlamVjdHMgaWYgbm90IGF2YWlsYWJsZVxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIGlzQXZhaWxhYmxlKGFwcD86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKGFwcCkge1xuICAgICAgICBFbWFpbENvbXBvc2VyLmdldFBsdWdpbigpLmlzQXZhaWxhYmxlKGFwcCwgKGlzQXZhaWxhYmxlOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgaWYgKGlzQXZhaWxhYmxlKSB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBFbWFpbENvbXBvc2VyLmdldFBsdWdpbigpLmlzQXZhaWxhYmxlKChpc0F2YWlsYWJsZTogYm9vbGVhbikgPT4ge1xuICAgICAgICAgIGlmIChpc0F2YWlsYWJsZSkge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BsYXlzIHRoZSBlbWFpbCBjb21wb3NlciBwcmUtZmlsbGVkIHdpdGggZGF0YS5cbiAgICpcbiAgICogQHBhcmFtIHtFbWFpbENvbXBvc2VyT3B0aW9uc30gb3B0aW9ucyBFbWFpbFxuICAgKiBAcGFyYW0ge2FueX0gW3Njb3BlXSBTY29wZSBmb3IgdGhlIHByb21pc2VcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmVzb2x2ZXMgcHJvbWlzZSB3aGVuIHRoZSBFbWFpbENvbXBvc2VyIGhhcyBiZWVuIG9wZW5lZFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMSxcbiAgICBlcnJvckluZGV4OiAzXG4gIH0pXG4gIG9wZW4ob3B0aW9uczogRW1haWxDb21wb3Nlck9wdGlvbnMsIHNjb3BlPzogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIG5ldyBtYWlsIGFwcCBhbGlhcy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGFsaWFzIFRoZSBhbGlhcyBuYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYWNrYWdlTmFtZSBUaGUgcGFja2FnZSBuYW1lXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGFkZEFsaWFzKGFsaWFzOiBzdHJpbmcsIHBhY2thZ2VOYW1lOiBzdHJpbmcpOiB2b2lkIHt9XG59XG4iXX0=