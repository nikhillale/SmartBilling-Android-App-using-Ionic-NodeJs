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
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Injectable } from '@angular/core';
var DocumentViewer = /** @class */ (function (_super) {
    __extends(DocumentViewer, _super);
    function DocumentViewer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocumentViewer.prototype.getSupportInfo = function () { return cordova(this, "getSupportInfo", {}, arguments); };
    DocumentViewer.prototype.canViewDocument = function (url, contentType, options, onPossible, onMissingApp, onImpossible, onError) { return cordova(this, "canViewDocument", { "sync": true }, arguments); };
    DocumentViewer.prototype.viewDocument = function (url, contentType, options, onShow, onClose, onMissingApp, onError) { return cordova(this, "viewDocument", { "sync": true }, arguments); };
    DocumentViewer.pluginName = "Document Viewer";
    DocumentViewer.plugin = "cordova-plugin-document-viewer";
    DocumentViewer.pluginRef = "SitewaertsDocumentViewer";
    DocumentViewer.repo = "https://github.com/sitewaerts/cordova-plugin-document-viewer";
    DocumentViewer.platforms = ["Android", "iOS", "Windows"];
    DocumentViewer = __decorate([
        Injectable()
    ], DocumentViewer);
    return DocumentViewer;
}(IonicNativePlugin));
export { DocumentViewer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2RvY3VtZW50LXZpZXdlci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUE4RFAsa0NBQWlCOzs7O0lBUW5ELHVDQUFjO0lBZ0JkLHdDQUFlLGFBQUMsR0FBVyxFQUFFLFdBQW1CLEVBQUUsT0FBOEIsRUFBRSxVQUFxQixFQUFFLFlBQXVCLEVBQUUsWUFBdUIsRUFBRSxPQUFrQjtJQWU3SyxxQ0FBWSxhQUFDLEdBQVcsRUFBRSxXQUFtQixFQUFFLE9BQThCLEVBQUUsTUFBaUIsRUFBRSxPQUFrQixFQUFFLFlBQXVCLEVBQUUsT0FBa0I7Ozs7OztJQXZDdEosY0FBYztRQUQxQixVQUFVLEVBQUU7T0FDQSxjQUFjO3lCQS9EM0I7RUErRG9DLGlCQUFpQjtTQUF4QyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRG9jdW1lbnRWaWV3ZXJPcHRpb25zIHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGRvY3VtZW50Vmlldz86IHtcbiAgICBjbG9zZUxhYmVsOiBzdHJpbmc7XG4gIH07XG4gIG5hdmlnYXRpb25WaWV3Pzoge1xuICAgIGNsb3NlTGFiZWw6IHN0cmluZztcbiAgfTtcbiAgZW1haWw/OiB7XG4gICAgZW5hYmxlZDogYm9vbGVhbjtcbiAgfTtcbiAgcHJpbnQ/OiB7XG4gICAgZW5hYmxlZDogYm9vbGVhbjtcbiAgfTtcbiAgb3BlbldpdGg/OiB7XG4gICAgZW5hYmxlZDogYm9vbGVhbjtcbiAgfTtcbiAgYm9va21hcmtzPzoge1xuICAgIGVuYWJsZWQ6IGJvb2xlYW47XG4gIH07XG4gIHNlYXJjaD86IHtcbiAgICBlbmFibGVkOiBib29sZWFuO1xuICB9O1xuICBhdXRvQ2xvc2U/OiB7XG4gICAgb25QYXVzZTogYm9vbGVhbjtcbiAgfTtcbn1cblxuLyoqXG4gKiBAbmFtZSBEb2N1bWVudCBWaWV3ZXJcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gb2ZmZXJzIGEgc2xpbSBBUEkgdG8gdmlldyBQREYgZmlsZXMgd2hpY2ggYXJlIGVpdGhlciBzdG9yZWQgaW4gdGhlIGFwcHMgYXNzZXRzIGZvbGRlciAoL3d3dy8qKSBvciBpbiBhbnkgb3RoZXIgZmlsZSBzeXN0ZW0gZGlyZWN0b3J5IGF2YWlsYWJsZSB2aWEgdGhlIGNvcmRvdmEgZmlsZSBwbHVnaW4uXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBEb2N1bWVudFZpZXdlciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZG9jdW1lbnQtdmlld2VyL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZG9jdW1lbnQ6IERvY3VtZW50Vmlld2VyKSB7IH1cbiAqXG4gKiAuLi5cbiAqIGNvbnN0IG9wdGlvbnM6IERvY3VtZW50Vmlld2VyT3B0aW9ucyA9IHtcbiAqICAgdGl0bGU6ICdNeSBQREYnXG4gKiB9XG4gKlxuICogdGhpcy5kb2N1bWVudC52aWV3RG9jdW1lbnQoJ2Fzc2V0cy9teUZpbGUucGRmJywgJ2FwcGxpY2F0aW9uL3BkZicsIG9wdGlvbnMpXG4gKlxuICogYGBgXG4gKlxuICogQGludGVyZmFjZXNcbiAqIERvY3VtZW50Vmlld2VyT3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0RvY3VtZW50IFZpZXdlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWRvY3VtZW50LXZpZXdlcicsXG4gIHBsdWdpblJlZjogJ1NpdGV3YWVydHNEb2N1bWVudFZpZXdlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vc2l0ZXdhZXJ0cy9jb3Jkb3ZhLXBsdWdpbi1kb2N1bWVudC12aWV3ZXInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERvY3VtZW50Vmlld2VyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIC8qKlxuICAgKiBEaXNwbGF5cyB0aGUgZW1haWwgY29tcG9zZXIgcHJlLWZpbGxlZCB3aXRoIGRhdGEuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJlc29sdmVzIHByb21pc2Ugd2hlbiB0aGUgRW1haWxDb21wb3NlciBoYXMgYmVlbiBvcGVuZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0U3VwcG9ydEluZm8oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGRvY3VtZW50IGNhbiBiZSBzaG93blxuICAgKlxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFVybCB0byB0aGUgZmlsZVxuICAgKiBAcGFyYW0gY29udGVudFR5cGUge3N0cmluZ30gQ29udGVudCB0eXBlIG9mIHRoZSBmaWxlXG4gICAqIEBwYXJhbSBvcHRpb25zIHtEb2N1bWVudFZpZXdlck9wdGlvbnN9IG9wdGlvbnNcbiAgICogQHBhcmFtIFtvblBvc3NpYmxlXSB7RnVuY3Rpb259XG4gICAqIEBwYXJhbSBbb25NaXNzaW5nQXBwXSB7RnVuY3Rpb259XG4gICAqIEBwYXJhbSBbb25JbXBvc3NpYmxlXSB7RnVuY3Rpb259XG4gICAqIEBwYXJhbSBbb25FcnJvcl0ge0Z1bmN0aW9ufVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGNhblZpZXdEb2N1bWVudCh1cmw6IHN0cmluZywgY29udGVudFR5cGU6IHN0cmluZywgb3B0aW9uczogRG9jdW1lbnRWaWV3ZXJPcHRpb25zLCBvblBvc3NpYmxlPzogRnVuY3Rpb24sIG9uTWlzc2luZ0FwcD86IEZ1bmN0aW9uLCBvbkltcG9zc2libGU/OiBGdW5jdGlvbiwgb25FcnJvcj86IEZ1bmN0aW9uKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgdGhlIGZpbGVcbiAgICpcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBVcmwgdG8gdGhlIGZpbGVcbiAgICogQHBhcmFtIGNvbnRlbnRUeXBlIHtzdHJpbmd9IENvbnRlbnQgdHlwZSBvZiB0aGUgZmlsZVxuICAgKiBAcGFyYW0gb3B0aW9ucyB7RG9jdW1lbnRWaWV3ZXJPcHRpb25zfSBvcHRpb25zXG4gICAqIEBwYXJhbSBbb25TaG93XSB7RnVuY3Rpb259XG4gICAqIEBwYXJhbSBbb25DbG9zZV0ge0Z1bmN0aW9ufVxuICAgKiBAcGFyYW0gW29uTWlzc2luZ0FwcF0ge0Z1bmN0aW9ufVxuICAgKiBAcGFyYW0gW29uRXJyb3JdIHtGdW5jdGlvbn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICB2aWV3RG9jdW1lbnQodXJsOiBzdHJpbmcsIGNvbnRlbnRUeXBlOiBzdHJpbmcsIG9wdGlvbnM6IERvY3VtZW50Vmlld2VyT3B0aW9ucywgb25TaG93PzogRnVuY3Rpb24sIG9uQ2xvc2U/OiBGdW5jdGlvbiwgb25NaXNzaW5nQXBwPzogRnVuY3Rpb24sIG9uRXJyb3I/OiBGdW5jdGlvbik6IHZvaWQge1xuICB9XG5cbn1cbiJdfQ==