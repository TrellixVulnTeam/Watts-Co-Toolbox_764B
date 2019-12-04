(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/invoice/invoice.component */ "./src/app/components/invoice/invoice.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'invoice', component: _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_2__["InvoiceComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"toolbar\">\n    <nav>\n      <a routerLink=\"/invoice\" routerLinkActive=\"active\"><button class=\"menu-button\" mat-button>Generate an Invoice</button></a>\n    </nav>\n  </div>\n\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin: auto;\n  height: 60px;\n  background-color: #7F2733; }\n\n.toolbar {\n  max-width: 70%;\n  margin: auto; }\n\n.menu-button {\n  position: relative;\n  top: 10px;\n  color: white;\n  background-color: #7F2733; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J5YW4vR2l0aHViIFByb2plY3RzL1BoaWxzUHJvcGVydHlNYWludGVuYW5jZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVk7RUFDWixhQUFZO0VBQ1osMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksZUFBYztFQUNkLGFBQVksRUFDZjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQixVQUFTO0VBQ1QsYUFBWTtFQUNaLDBCQUF5QixFQUM1QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdGMjczMztcbn1cblxuLnRvb2xiYXIge1xuICAgIG1heC13aWR0aDogNzAlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLm1lbnUtYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0YyNzMzO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: wattsRed, AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wattsRed", function() { return wattsRed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// Global Exports
var wattsRed = '#7F2733';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/invoice/invoice.component */ "./src/app/components/invoice/invoice.component.ts");
/* harmony import */ var _components_invoice_components_item_form_item_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/invoice/components/item-form/item-form.component */ "./src/app/components/invoice/components/item-form/item-form.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm5/swimlane-ngx-datatable.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//Angular Material










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_4__["InvoiceComponent"],
                _components_invoice_components_item_form_item_form_component__WEBPACK_IMPORTED_MODULE_5__["ItemFormComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_14__["NgxDatatableModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"],
            ],
            providers: [
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"logo-container\">\n    <img class=\"logo\" src=\"../../../assets/logo.jpeg\"/>\n  </div>\n  <div class=\"text-container\">\n    <div class=\"header\">\n      Watts & Co. Property Maintenance\n    </div>\n    <div class=\"subheader\">\n      <span>24/7 Emergency Service</span>\n    </div>\n    <div class=\"tagline\">\n      <span>Over 30 years industry experience</span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  text-align: center; }\n\n.logo-container {\n  position: relative;\n  padding-top: 8%; }\n\n.logo {\n  width: 500px;\n  height: 375px; }\n\n.text-container {\n  position: relative;\n  padding-top: 3%; }\n\n.header {\n  margin-top: 48px;\n  font-size: 36px; }\n\n.subheader {\n  margin-top: 12px;\n  font-size: 24px; }\n\n.tagline {\n  margin-top: 12px;\n  font-style: italic; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J5YW4vR2l0aHViIFByb2plY3RzL1BoaWxzUHJvcGVydHlNYWludGVuYW5jZS9zcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksYUFBWTtFQUNaLGNBQWEsRUFDaEI7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsbUJBQWtCLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dvLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctdG9wOiA4JTtcbn1cblxuLmxvZ28ge1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBoZWlnaHQ6IDM3NXB4O1xufVxuXG4udGV4dC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLXRvcDogMyU7XG59XG5cbi5oZWFkZXIge1xuICAgIG1hcmdpbi10b3A6IDQ4cHg7XG4gICAgZm9udC1zaXplOiAzNnB4O1xufVxuXG4uc3ViaGVhZGVyIHtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLnRhZ2xpbmUge1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/invoice/components/item-form/item-form.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/invoice/components/item-form/item-form.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"header\">\n    <span style=\"top: 5px; position: relative\">Items</span>\n    <div style=\"float: right;\">\n      <button mat-button (click)=\"addRow()\">(+) Add Item</button>\n    </div>\n  </div>\n  <ngx-datatable class=\"material\" rowHeight=\"auto\" headerHeight=\"50\" [rows]=\"rows\" [columns]=\"columns\" \n    [columnMode]=\"ColumnMode.force\" [summaryRow]=\"true\" [summaryPosition]=\"'bottom'\">\n\n    <ngx-datatable-column name=\"Description\">\n      <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n        <span title=\"Double click to edit\" (dblclick)=\"editing[rowIndex + '-name'] = true\"\n          *ngIf=\"!editing[rowIndex + '-name']\">\n          {{ value }}\n        </span>\n        <input autofocus (blur)=\"updateValue($event, 'name', rowIndex)\" *ngIf=\"editing[rowIndex + '-name']\" type=\"text\"\n          [value]=\"value\" />\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column name=\"Amount\">\n      <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n        <span title=\"Double click to edit\" (dblclick)=\"editing[rowIndex + '-name'] = true\"\n          *ngIf=\"!editing[rowIndex + '-name']\">\n          {{ value }}\n        </span>\n        <input autofocus (blur)=\"updateValue($event, 'name', rowIndex)\" *ngIf=\"editing[rowIndex + '-name']\" type=\"text\"\n          [value]=\"value\" />\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column name=\"Actions\">\n      <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n        <button mat-button (click)=\"editRow()\"><mat-icon>edit</mat-icon></button>\n      </ng-template>\n    </ngx-datatable-column>\n  </ngx-datatable>\n</div>"

/***/ }),

/***/ "./src/app/components/invoice/components/item-form/item-form.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/components/invoice/components/item-form/item-form.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ngx-datatable {\n  display: block;\n  overflow: hidden;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: relative;\n  -webkit-transform: translate3d(0, 0, 0);\n  /**\n   * Vertical Scrolling Adjustments\n   */\n  /**\n   * Horizontal Scrolling Adjustments\n   */\n  /**\n   * Fixed Header Height Adjustments\n   */\n  /**\n   * Fixed row height adjustments\n   */\n  /**\n   * Shared Styles\n   */\n  /**\n   * Header Styles\n   */\n  /**\n   * Body Styles\n   */\n  /**\n   * Footer Styles\n   */ }\n  .ngx-datatable [hidden] {\n    display: none !important; }\n  .ngx-datatable *,\n  .ngx-datatable *:before,\n  .ngx-datatable *:after {\n    box-sizing: border-box; }\n  .ngx-datatable.scroll-vertical .datatable-body {\n    overflow-y: auto; }\n  .ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper {\n    position: absolute; }\n  .ngx-datatable.scroll-horz .datatable-body {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }\n  .ngx-datatable.fixed-header .datatable-header .datatable-header-inner {\n    white-space: nowrap; }\n  .ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n  .ngx-datatable.fixed-row .datatable-scroll {\n    white-space: nowrap; }\n  .ngx-datatable.fixed-row .datatable-scroll .datatable-body-row {\n      white-space: nowrap; }\n  .ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }\n  .ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }\n  .ngx-datatable .datatable-body-row,\n  .ngx-datatable .datatable-row-center,\n  .ngx-datatable .datatable-header-inner {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    -o-flex-flow: row;\n    flex-flow: row; }\n  .ngx-datatable .datatable-body-cell,\n  .ngx-datatable .datatable-header-cell {\n    overflow-x: hidden;\n    vertical-align: top;\n    display: inline-block;\n    line-height: 1.625; }\n  .ngx-datatable .datatable-body-cell:focus,\n    .ngx-datatable .datatable-header-cell:focus {\n      outline: none; }\n  .ngx-datatable .datatable-row-left,\n  .ngx-datatable .datatable-row-right {\n    z-index: 9; }\n  .ngx-datatable .datatable-row-left,\n  .ngx-datatable .datatable-row-center,\n  .ngx-datatable .datatable-row-group,\n  .ngx-datatable .datatable-row-right {\n    position: relative; }\n  .ngx-datatable .datatable-header {\n    display: block;\n    overflow: hidden; }\n  .ngx-datatable .datatable-header .datatable-header-inner {\n      -webkit-box-align: stretch;\n              align-items: stretch;\n      -webkit-align-items: stretch; }\n  .ngx-datatable .datatable-header .datatable-header-cell {\n      position: relative;\n      display: inline-block; }\n  .ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper {\n        cursor: pointer; }\n  .ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper {\n        cursor: move; }\n  .ngx-datatable .datatable-header .datatable-header-cell .sort-btn {\n        line-height: 100%;\n        vertical-align: middle;\n        display: inline-block;\n        cursor: pointer; }\n  .ngx-datatable .datatable-header .datatable-header-cell .resize-handle,\n      .ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable {\n        display: inline-block;\n        position: absolute;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        width: 5px;\n        padding: 0 4px;\n        visibility: hidden; }\n  .ngx-datatable .datatable-header .datatable-header-cell .resize-handle {\n        cursor: ew-resize; }\n  .ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle {\n        visibility: visible; }\n  .ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable {\n        visibility: visible; }\n  .ngx-datatable .datatable-header .datatable-header-cell .targetMarker {\n        position: absolute;\n        top: 0;\n        bottom: 0; }\n  .ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft {\n          right: 0; }\n  .ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight {\n          left: 0; }\n  .ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap {\n        height: inherit; }\n  .ngx-datatable .datatable-body {\n    position: relative;\n    z-index: 10;\n    display: block; }\n  .ngx-datatable .datatable-body .datatable-scroll {\n      display: inline-block; }\n  .ngx-datatable .datatable-body .datatable-row-detail {\n      overflow-y: hidden; }\n  .ngx-datatable .datatable-body .datatable-row-wrapper {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n      flex-direction: column; }\n  .ngx-datatable .datatable-body .datatable-body-row {\n      outline: none; }\n  .ngx-datatable .datatable-body .datatable-body-row > div {\n        display: -webkit-box;\n        display: flex; }\n  .ngx-datatable .datatable-footer {\n    display: block;\n    width: 100%;\n    overflow: auto; }\n  .ngx-datatable .datatable-footer .datatable-footer-inner {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-align: center;\n              align-items: center;\n      width: 100%; }\n  .ngx-datatable .datatable-footer .selected-count .page-count {\n      -webkit-box-flex: 1;\n              flex: 1 1 40%; }\n  .ngx-datatable .datatable-footer .selected-count .datatable-pager {\n      -webkit-box-flex: 1;\n              flex: 1 1 60%; }\n  .ngx-datatable .datatable-footer .page-count {\n      -webkit-box-flex: 1;\n              flex: 1 1 20%; }\n  .ngx-datatable .datatable-footer .datatable-pager {\n      -webkit-box-flex: 1;\n              flex: 1 1 80%;\n      text-align: right; }\n  .ngx-datatable .datatable-footer .datatable-pager .pager,\n      .ngx-datatable .datatable-footer .datatable-pager .pager li {\n        padding: 0;\n        margin: 0;\n        display: inline-block;\n        list-style: none; }\n  .ngx-datatable .datatable-footer .datatable-pager .pager li,\n      .ngx-datatable .datatable-footer .datatable-pager .pager li a {\n        outline: none; }\n  .ngx-datatable .datatable-footer .datatable-pager .pager li a {\n        cursor: pointer;\n        display: inline-block; }\n  .ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a {\n        cursor: not-allowed; }\n  /*\n  This stylesheet uses scss valiables for most of the colors / background-colors of the table\n  to enable the customization of the displayed table without cloning the stylesheet into the\n  own application.\n\n  To modify table colors, add the following lines to the scss file of your application\n  (this example modifies the color of the selected row - selectionType = single, multi or multiClick):\n\n  $ngx-datatable-selected-active-background: yellow;\n  $ngx-datatable-selected-active-background-hover: rgba(yellow, 0.2);\n\n  @import '~@swimlane/ngx-datatable/index.css';\n  @import '~@swimlane/ngx-datatable/themes/material.scss';\n  @import '~@swimlane/ngx-datatable/assets/icons.css';\n\nThat's all.\n*/\n  @charset \"UTF-8\";\n  @font-face {\n  font-family: 'data-table';\n  src: url('data-table.eot');\n  src: url('data-table.eot?#iefix') format('embedded-opentype'), url('data-table.woff') format('woff'),\n    url('data-table.ttf') format('truetype'), url('data-table.svg#data-table') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n  [data-icon]:before {\n  font-family: 'data-table' !important;\n  content: attr(data-icon);\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n  [class^='datatable-icon-']:before,\n[class*=' datatable-icon-']:before {\n  font-family: 'data-table' !important;\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n  .datatable-icon-filter:before {\n  content: '\\62';\n}\n  .datatable-icon-collapse:before {\n  content: '\\61';\n}\n  .datatable-icon-expand:before {\n  content: '\\63';\n}\n  .datatable-icon-close:before {\n  content: '\\64';\n}\n  .datatable-icon-up:before {\n  content: '\\65';\n}\n  .datatable-icon-down:before {\n  content: '\\66';\n}\n  .datatable-icon-sort:before {\n  content: '\\67';\n}\n  .datatable-icon-done:before {\n  content: '\\68';\n}\n  .datatable-icon-done-all:before {\n  content: '\\69';\n}\n  .datatable-icon-search:before {\n  content: '\\6a';\n}\n  .datatable-icon-pin:before {\n  content: '\\6b';\n}\n  .datatable-icon-add:before {\n  content: '\\6d';\n}\n  .datatable-icon-left:before {\n  content: '\\6f';\n}\n  .datatable-icon-right:before {\n  content: '\\70';\n}\n  .datatable-icon-skip:before {\n  content: '\\71';\n}\n  .datatable-icon-prev:before {\n  content: '\\72';\n}\n  .ngx-datatable.material {\n  background: #fff;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  /**\n\t * Shared Styles\n\t */\n  /**\n\t * Global Row Styles\n\t */\n  /**\n\t * Header Styles\n\t */\n  /**\n\t * Body Styles\n\t */\n  /**\n\t * Footer Styles\n\t */ }\n  .ngx-datatable.material.striped .datatable-row-odd {\n    background: #eee; }\n  .ngx-datatable.material.single-selection .datatable-body-row.active,\n  .ngx-datatable.material.single-selection .datatable-body-row.active .datatable-row-group, .ngx-datatable.material.multi-selection .datatable-body-row.active,\n  .ngx-datatable.material.multi-selection .datatable-body-row.active .datatable-row-group, .ngx-datatable.material.multi-click-selection .datatable-body-row.active,\n  .ngx-datatable.material.multi-click-selection .datatable-body-row.active .datatable-row-group {\n    background-color: #304ffe;\n    color: #fff; }\n  .ngx-datatable.material.single-selection .datatable-body-row.active:hover,\n  .ngx-datatable.material.single-selection .datatable-body-row.active:hover .datatable-row-group, .ngx-datatable.material.multi-selection .datatable-body-row.active:hover,\n  .ngx-datatable.material.multi-selection .datatable-body-row.active:hover .datatable-row-group, .ngx-datatable.material.multi-click-selection .datatable-body-row.active:hover,\n  .ngx-datatable.material.multi-click-selection .datatable-body-row.active:hover .datatable-row-group {\n    background-color: #193ae4;\n    color: #fff; }\n  .ngx-datatable.material.single-selection .datatable-body-row.active:focus,\n  .ngx-datatable.material.single-selection .datatable-body-row.active:focus .datatable-row-group, .ngx-datatable.material.multi-selection .datatable-body-row.active:focus,\n  .ngx-datatable.material.multi-selection .datatable-body-row.active:focus .datatable-row-group, .ngx-datatable.material.multi-click-selection .datatable-body-row.active:focus,\n  .ngx-datatable.material.multi-click-selection .datatable-body-row.active:focus .datatable-row-group {\n    background-color: #2041ef;\n    color: #fff; }\n  .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover,\n  .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-group {\n    background-color: #eee;\n    -webkit-transition-property: background;\n    transition-property: background;\n    -webkit-transition-duration: 0.3s;\n            transition-duration: 0.3s;\n    -webkit-transition-timing-function: linear;\n            transition-timing-function: linear; }\n  .ngx-datatable.material:not(.cell-selection) .datatable-body-row:focus,\n  .ngx-datatable.material:not(.cell-selection) .datatable-body-row:focus .datatable-row-group {\n    background-color: #ddd; }\n  .ngx-datatable.material.cell-selection .datatable-body-cell:hover,\n  .ngx-datatable.material.cell-selection .datatable-body-cell:hover .datatable-row-group {\n    background-color: #eee;\n    -webkit-transition-property: background;\n    transition-property: background;\n    -webkit-transition-duration: 0.3s;\n            transition-duration: 0.3s;\n    -webkit-transition-timing-function: linear;\n            transition-timing-function: linear; }\n  .ngx-datatable.material.cell-selection .datatable-body-cell:focus,\n  .ngx-datatable.material.cell-selection .datatable-body-cell:focus .datatable-row-group {\n    background-color: #ddd; }\n  .ngx-datatable.material.cell-selection .datatable-body-cell.active,\n  .ngx-datatable.material.cell-selection .datatable-body-cell.active .datatable-row-group {\n    background-color: #304ffe;\n    color: #fff; }\n  .ngx-datatable.material.cell-selection .datatable-body-cell.active:hover,\n  .ngx-datatable.material.cell-selection .datatable-body-cell.active:hover .datatable-row-group {\n    background-color: #193ae4;\n    color: #fff; }\n  .ngx-datatable.material.cell-selection .datatable-body-cell.active:focus,\n  .ngx-datatable.material.cell-selection .datatable-body-cell.active:focus .datatable-row-group {\n    background-color: #2041ef;\n    color: #fff; }\n  .ngx-datatable.material .empty-row {\n    height: 50px;\n    text-align: left;\n    padding: 0.5rem 1.2rem;\n    vertical-align: top;\n    border-top: 0; }\n  .ngx-datatable.material .loading-row {\n    text-align: left;\n    padding: 0.5rem 1.2rem;\n    vertical-align: top;\n    border-top: 0; }\n  .ngx-datatable.material .datatable-header .datatable-row-left,\n  .ngx-datatable.material .datatable-body .datatable-row-left {\n    background-color: #fff;\n    background-position: 100% 0;\n    background-repeat: repeat-y;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==); }\n  .ngx-datatable.material .datatable-header .datatable-row-right,\n  .ngx-datatable.material .datatable-body .datatable-row-right {\n    background-position: 0 0;\n    background-color: #fff;\n    background-repeat: repeat-y;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQI12PQkNdi1VTQ5gbSwkAsDQARLAIGtOSFUAAAAABJRU5ErkJggg==); }\n  .ngx-datatable.material .datatable-header {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n  .ngx-datatable.material .datatable-header .datatable-header-cell {\n      text-align: left;\n      padding: 0.9rem 1.2rem;\n      font-weight: 400;\n      background-color: #fff;\n      color: rgba(0, 0, 0, 0.54);\n      vertical-align: bottom;\n      font-size: 12px;\n      font-weight: 500; }\n  .ngx-datatable.material .datatable-header .datatable-header-cell .datatable-header-cell-wrapper {\n        position: relative; }\n  .ngx-datatable.material .datatable-header .datatable-header-cell.longpress .draggable::after {\n        -webkit-transition: opacity 400ms ease, -webkit-transform 400ms ease;\n        transition: opacity 400ms ease, -webkit-transform 400ms ease;\n        transition: transform 400ms ease, opacity 400ms ease;\n        transition: transform 400ms ease, opacity 400ms ease, -webkit-transform 400ms ease;\n        opacity: 0.5;\n        -webkit-transform: scale(1);\n                transform: scale(1); }\n  .ngx-datatable.material .datatable-header .datatable-header-cell .draggable::after {\n        content: ' ';\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin: -30px 0 0 -30px;\n        height: 60px;\n        width: 60px;\n        background: #eee;\n        border-radius: 100%;\n        opacity: 1;\n        -webkit-filter: none;\n                filter: none;\n        -webkit-transform: scale(0);\n                transform: scale(0);\n        z-index: 9999;\n        pointer-events: none; }\n  .ngx-datatable.material .datatable-header .datatable-header-cell.dragging .resize-handle {\n        border-right: none; }\n  .ngx-datatable.material .datatable-header .resize-handle {\n      border-right: solid 1px #eee; }\n  .ngx-datatable.material .datatable-body .datatable-row-detail {\n    background: #f5f5f5;\n    padding: 10px; }\n  .ngx-datatable.material .datatable-body .datatable-group-header {\n    background: #f5f5f5;\n    border-bottom: solid 1px #d9d8d9;\n    border-top: solid 1px #d9d8d9; }\n  .ngx-datatable.material .datatable-body .datatable-body-row .datatable-body-cell {\n    text-align: left;\n    padding: 0.9rem 1.2rem;\n    vertical-align: top;\n    border-top: 0;\n    color: rgba(0, 0, 0, 0.87);\n    -webkit-transition: width 0.3s ease;\n    transition: width 0.3s ease;\n    font-size: 14px;\n    font-weight: 400; }\n  .ngx-datatable.material .datatable-body .datatable-body-row .datatable-body-group-cell {\n    text-align: left;\n    padding: 0.9rem 1.2rem;\n    vertical-align: top;\n    border-top: 0;\n    color: rgba(0, 0, 0, 0.87);\n    -webkit-transition: width 0.3s ease;\n    transition: width 0.3s ease;\n    font-size: 14px;\n    font-weight: 400; }\n  .ngx-datatable.material .datatable-body .progress-linear {\n    display: block;\n    position: relative;\n    width: 100%;\n    height: 5px;\n    padding: 0;\n    margin: 0;\n    position: absolute; }\n  .ngx-datatable.material .datatable-body .progress-linear .container {\n      display: block;\n      position: relative;\n      overflow: hidden;\n      width: 100%;\n      height: 5px;\n      -webkit-transform: translate(0, 0) scale(1, 1);\n      transform: translate(0, 0) scale(1, 1);\n      background-color: #aad1f9; }\n  .ngx-datatable.material .datatable-body .progress-linear .container .bar {\n        -webkit-transition: all 0.2s linear;\n        transition: all 0.2s linear;\n        -webkit-animation: query 0.8s infinite cubic-bezier(0.39, 0.575, 0.565, 1);\n        animation: query 0.8s infinite cubic-bezier(0.39, 0.575, 0.565, 1);\n        transition: -webkit-transform 0.2s linear;\n        -webkit-transition: -webkit-transform 0.2s linear;\n        transition: transform 0.2s linear;\n        transition: transform 0.2s linear, -webkit-transform 0.2s linear;\n        background-color: #106cc8;\n        position: absolute;\n        left: 0;\n        top: 0;\n        bottom: 0;\n        width: 100%;\n        height: 5px; }\n  .ngx-datatable.material .datatable-footer {\n    border-top: 1px solid rgba(0, 0, 0, 0.12);\n    font-size: 12px;\n    font-weight: 400;\n    color: rgba(0, 0, 0, 0.54); }\n  .ngx-datatable.material .datatable-footer .page-count {\n      line-height: 50px;\n      height: 50px;\n      padding: 0 1.2rem; }\n  .ngx-datatable.material .datatable-footer .datatable-pager {\n      margin: 0 10px; }\n  .ngx-datatable.material .datatable-footer .datatable-pager li {\n        vertical-align: middle; }\n  .ngx-datatable.material .datatable-footer .datatable-pager li.disabled a {\n          color: rgba(0, 0, 0, 0.26) !important;\n          background-color: transparent !important; }\n  .ngx-datatable.material .datatable-footer .datatable-pager li.active a {\n          background-color: rgba(158, 158, 158, 0.2);\n          font-weight: bold; }\n  .ngx-datatable.material .datatable-footer .datatable-pager a {\n        height: 22px;\n        min-width: 24px;\n        line-height: 22px;\n        padding: 0 6px;\n        border-radius: 3px;\n        margin: 6px 3px;\n        text-align: center;\n        vertical-align: top;\n        color: rgba(0, 0, 0, 0.54);\n        text-decoration: none;\n        vertical-align: bottom; }\n  .ngx-datatable.material .datatable-footer .datatable-pager a:hover {\n          color: rgba(0, 0, 0, 0.75);\n          background-color: rgba(158, 158, 158, 0.2); }\n  .ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-left,\n      .ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-skip,\n      .ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-right,\n      .ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-prev {\n        font-size: 20px;\n        line-height: 20px;\n        padding: 0 3px; }\n  .ngx-datatable.material .datatable-summary-row .datatable-body-row {\n    background-color: #ddd; }\n  .ngx-datatable.material .datatable-summary-row .datatable-body-row:hover {\n      background-color: #ddd; }\n  .ngx-datatable.material .datatable-summary-row .datatable-body-row .datatable-body-cell {\n      font-weight: bold; }\n  /**\n * Checkboxes\n**/\n  .datatable-checkbox {\n  position: relative;\n  margin: 0;\n  cursor: pointer;\n  vertical-align: middle;\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 0; }\n  .datatable-checkbox input[type='checkbox'] {\n    position: relative;\n    margin: 0 1rem 0 0;\n    cursor: pointer;\n    outline: none; }\n  .datatable-checkbox input[type='checkbox']:before {\n      -webkit-transition: all 0.3s ease-in-out;\n      transition: all 0.3s ease-in-out;\n      content: '';\n      position: absolute;\n      left: 0;\n      z-index: 1;\n      width: 1rem;\n      height: 1rem;\n      border: 2px solid #f2f2f2; }\n  .datatable-checkbox input[type='checkbox']:checked:before {\n      -webkit-transform: rotate(-45deg);\n      transform: rotate(-45deg);\n      height: 0.5rem;\n      border-color: #009688;\n      border-top-style: none;\n      border-right-style: none; }\n  .datatable-checkbox input[type='checkbox']:after {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 1rem;\n      height: 1rem;\n      background: #fff;\n      cursor: pointer; }\n  /**\n * Progress bar animations\n */\n  @-webkit-keyframes query {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(35%) scale(0.3, 1);\n            transform: translateX(35%) scale(0.3, 1); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-50%) scale(0, 1);\n            transform: translateX(-50%) scale(0, 1); } }\n  @keyframes query {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(35%) scale(0.3, 1);\n            transform: translateX(35%) scale(0.3, 1); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-50%) scale(0, 1);\n            transform: translateX(-50%) scale(0, 1); } }\n  .ngx-datatable {\n  height: 100%;\n  width: 100%;\n  background-color: white;\n  color: black; }\n  .container {\n  border-width: thin;\n  border-color: #EEE;\n  border-style: solid;\n  padding: 5px;\n  margin: 5px; }\n  .datatable-summary-row .datatable-body-row {\n  background-color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9pbmRleC5jc3MiLCIvaG9tZS9yeWFuL0dpdGh1YiBQcm9qZWN0cy9QaGlsc1Byb3BlcnR5TWFpbnRlbmFuY2Uvbm9kZV9tb2R1bGVzL0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL3RoZW1lcy9tYXRlcmlhbC5zY3NzIiwibm9kZV9tb2R1bGVzL0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2Fzc2V0cy9pY29ucy5jc3MiLCIvaG9tZS9yeWFuL0dpdGh1YiBQcm9qZWN0cy9QaGlsc1Byb3BlcnR5TWFpbnRlbmFuY2Uvc3JjL2FwcC9jb21wb25lbnRzL2ludm9pY2UvY29tcG9uZW50cy9pdGVtLWZvcm0vaXRlbS1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix5QkFBd0I7VUFBeEIsd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQix3Q0FBd0M7RUFDeEM7O0tBRUc7RUFDSDs7S0FFRztFQUNIOztLQUVHO0VBQ0g7O0tBRUc7RUFDSDs7S0FFRztFQUNIOztLQUVHO0VBQ0g7O0tBRUc7RUFDSDs7S0FFRyxFQUFFO0VBQ0w7SUFDRSx5QkFBeUIsRUFBRTtFQUM3Qjs7O0lBS0UsdUJBQXVCLEVBQUU7RUFDM0I7SUFDRSxpQkFBaUIsRUFBRTtFQUNyQjtJQUNFLG1CQUFtQixFQUFFO0VBQ3ZCO0lBQ0UsaUJBQWlCO0lBQ2pCLGtDQUFrQyxFQUFFO0VBQ3RDO0lBQ0Usb0JBQW9CLEVBQUU7RUFDdEI7TUFDRSxvQkFBb0I7TUFDcEIsaUJBQWlCO01BQ2pCLHdCQUF3QixFQUFFO0VBQzlCO0lBQ0Usb0JBQW9CLEVBQUU7RUFDdEI7TUFDRSxvQkFBb0IsRUFBRTtFQUN0QjtRQUNFLGlCQUFpQjtRQUNqQixvQkFBb0I7UUFDcEIsd0JBQXdCLEVBQUU7RUFDNUI7UUFDRSxpQkFBaUI7UUFDakIsb0JBQW9CO1FBQ3BCLHdC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QUF3QyxFQUFBO0VBRzFDO0lBQ0UsV0FBVTtJQUNWLGdEQUF1QztZQUF2Qyx3Q0FBdUMsRUFBQSxFQUFBO0VFdmQzQztFQUNJLGFBQVk7RUFDWixZQUFXO0VBQ1gsd0JBQXVCO0VBQ3ZCLGFBQVksRUFDZjtFQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQixvQkFBbUI7RUFDbkIsYUFBWTtFQUNaLFlBQVcsRUFDZDtFQUVEO0VBQ0ksc0JBQXFCLEVBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbnZvaWNlL2NvbXBvbmVudHMvaXRlbS1mb3JtL2l0ZW0tZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZ3gtZGF0YXRhYmxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgLyoqXG4gICAqIFZlcnRpY2FsIFNjcm9sbGluZyBBZGp1c3RtZW50c1xuICAgKi9cbiAgLyoqXG4gICAqIEhvcml6b250YWwgU2Nyb2xsaW5nIEFkanVzdG1lbnRzXG4gICAqL1xuICAvKipcbiAgICogRml4ZWQgSGVhZGVyIEhlaWdodCBBZGp1c3RtZW50c1xuICAgKi9cbiAgLyoqXG4gICAqIEZpeGVkIHJvdyBoZWlnaHQgYWRqdXN0bWVudHNcbiAgICovXG4gIC8qKlxuICAgKiBTaGFyZWQgU3R5bGVzXG4gICAqL1xuICAvKipcbiAgICogSGVhZGVyIFN0eWxlc1xuICAgKi9cbiAgLyoqXG4gICAqIEJvZHkgU3R5bGVzXG4gICAqL1xuICAvKipcbiAgICogRm9vdGVyIFN0eWxlc1xuICAgKi8gfVxuICAubmd4LWRhdGF0YWJsZSBbaGlkZGVuXSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG4gIC5uZ3gtZGF0YXRhYmxlICosXG4gIC5uZ3gtZGF0YXRhYmxlICo6YmVmb3JlLFxuICAubmd4LWRhdGF0YWJsZSAqOmFmdGVyIHtcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cbiAgLm5neC1kYXRhdGFibGUuc2Nyb2xsLXZlcnRpY2FsIC5kYXRhdGFibGUtYm9keSB7XG4gICAgb3ZlcmZsb3cteTogYXV0bzsgfVxuICAubmd4LWRhdGF0YWJsZS5zY3JvbGwtdmVydGljYWwudmlydHVhbGl6ZWQgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtcm93LXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxuICAubmd4LWRhdGF0YWJsZS5zY3JvbGwtaG9yeiAuZGF0YXRhYmxlLWJvZHkge1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1pbm5lciB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1pbm5lciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIHtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cbiAgLm5neC1kYXRhdGFibGUuZml4ZWQtcm93IC5kYXRhdGFibGUtc2Nyb2xsIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gICAgLm5neC1kYXRhdGFibGUuZml4ZWQtcm93IC5kYXRhdGFibGUtc2Nyb2xsIC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuICAgICAgLm5neC1kYXRhdGFibGUuZml4ZWQtcm93IC5kYXRhdGFibGUtc2Nyb2xsIC5kYXRhdGFibGUtYm9keS1yb3cgLmRhdGF0YWJsZS1ib2R5LWNlbGwge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuICAgICAgLm5neC1kYXRhdGFibGUuZml4ZWQtcm93IC5kYXRhdGFibGUtc2Nyb2xsIC5kYXRhdGFibGUtYm9keS1yb3cgLmRhdGF0YWJsZS1ib2R5LWdyb3VwLWNlbGwge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHktcm93LFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1jZW50ZXIsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyLWlubmVyIHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIC13ZWJraXQtZmxleC1mbG93OiByb3c7XG4gICAgLW1vei1mbGV4LWZsb3c6IHJvdztcbiAgICAtbXMtZmxleC1mbG93OiByb3c7XG4gICAgLW8tZmxleC1mbG93OiByb3c7XG4gICAgZmxleC1mbG93OiByb3c7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5LWNlbGwsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwge1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogMS42MjU7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHktY2VsbDpmb2N1cyxcbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlci1jZWxsOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctbGVmdCxcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctcmlnaHQge1xuICAgIHotaW5kZXg6IDk7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctbGVmdCxcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctY2VudGVyLFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1ncm91cCxcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctcmlnaHQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWlubmVyIHtcbiAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogc3RyZXRjaDsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLnNvcnRhYmxlIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwtd3JhcHBlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC5sb25ncHJlc3MgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC13cmFwcGVyIHtcbiAgICAgICAgY3Vyc29yOiBtb3ZlOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC5zb3J0LWJ0biB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAucmVzaXplLWhhbmRsZSxcbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnJlc2l6ZS1oYW5kbGUtLW5vdC1yZXNpemFibGUge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB3aWR0aDogNXB4O1xuICAgICAgICBwYWRkaW5nOiAwIDRweDtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC5yZXNpemUtaGFuZGxlIHtcbiAgICAgICAgY3Vyc29yOiBldy1yZXNpemU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwucmVzaXplYWJsZTpob3ZlciAucmVzaXplLWhhbmRsZSB7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGw6aG92ZXIgLnJlc2l6ZS1oYW5kbGUtLW5vdC1yZXNpemFibGUge1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC50YXJnZXRNYXJrZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwOyB9XG4gICAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnRhcmdldE1hcmtlci5kcmFnRnJvbUxlZnQge1xuICAgICAgICAgIHJpZ2h0OiAwOyB9XG4gICAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnRhcmdldE1hcmtlci5kcmFnRnJvbVJpZ2h0IHtcbiAgICAgICAgICBsZWZ0OiAwOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwtdGVtcGxhdGUtd3JhcCB7XG4gICAgICAgIGhlaWdodDogaW5oZXJpdDsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBkaXNwbGF5OiBibG9jazsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLXNjcm9sbCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1yb3ctZGV0YWlsIHtcbiAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLXJvdy13cmFwcGVyIHtcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAtbW96LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgLW1vei1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gICAgICBvdXRsaW5lOiBub25lOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1ib2R5LXJvdyA+IGRpdiB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLWZvb3Rlci1pbm5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLnNlbGVjdGVkLWNvdW50IC5wYWdlLWNvdW50IHtcbiAgICAgIGZsZXg6IDEgMSA0MCU7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuc2VsZWN0ZWQtY291bnQgLmRhdGF0YWJsZS1wYWdlciB7XG4gICAgICBmbGV4OiAxIDEgNjAlOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLnBhZ2UtY291bnQge1xuICAgICAgZmxleDogMSAxIDIwJTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIge1xuICAgICAgZmxleDogMSAxIDgwJTtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlcixcbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyIGxpIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyIGxpLFxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGkgYSB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyIGxpIGEge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGkuZGlzYWJsZWQgYSB7XG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cbiIsIi8qXG4gIFRoaXMgc3R5bGVzaGVldCB1c2VzIHNjc3MgdmFsaWFibGVzIGZvciBtb3N0IG9mIHRoZSBjb2xvcnMgLyBiYWNrZ3JvdW5kLWNvbG9ycyBvZiB0aGUgdGFibGVcbiAgdG8gZW5hYmxlIHRoZSBjdXN0b21pemF0aW9uIG9mIHRoZSBkaXNwbGF5ZWQgdGFibGUgd2l0aG91dCBjbG9uaW5nIHRoZSBzdHlsZXNoZWV0IGludG8gdGhlXG4gIG93biBhcHBsaWNhdGlvbi5cblxuICBUbyBtb2RpZnkgdGFibGUgY29sb3JzLCBhZGQgdGhlIGZvbGxvd2luZyBsaW5lcyB0byB0aGUgc2NzcyBmaWxlIG9mIHlvdXIgYXBwbGljYXRpb25cbiAgKHRoaXMgZXhhbXBsZSBtb2RpZmllcyB0aGUgY29sb3Igb2YgdGhlIHNlbGVjdGVkIHJvdyAtIHNlbGVjdGlvblR5cGUgPSBzaW5nbGUsIG11bHRpIG9yIG11bHRpQ2xpY2spOlxuXG4gICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kOiB5ZWxsb3c7XG4gICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kLWhvdmVyOiByZ2JhKHllbGxvdywgMC4yKTtcblxuICBAaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvaW5kZXguY3NzJztcbiAgQGltcG9ydCAnfkBzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL3RoZW1lcy9tYXRlcmlhbC5zY3NzJztcbiAgQGltcG9ydCAnfkBzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2Fzc2V0cy9pY29ucy5jc3MnO1xuXG5UaGF0J3MgYWxsLlxuKi9cblxuLy8gY29tbW9uIGRhdGF0YWJsZSBjb2xvcnNcbiRuZ3gtZGF0YXRhYmxlLWJhY2tncm91bmQ6ICNmZmYgIWRlZmF1bHQ7XG4kbmd4LWRhdGF0YWJsZS1ib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMikgIWRlZmF1bHQ7XG4kbmd4LWRhdGF0YWJsZS1yb3ctb2RkLWJhY2tncm91bmQ6ICNlZWUgIWRlZmF1bHQ7XG5cbi8vIGRlZmF1bHQgcm93IGFuZCBjZWxsIGJhY2tncm91bmQgY29sb3JzXG4kbmd4LWRhdGF0YWJsZS1kZWZhdWx0LWJhY2tncm91bmQ6ICNmZmYgIWRlZmF1bHQ7XG4kbmd4LWRhdGF0YWJsZS1kZWZhdWx0LWJhY2tncm91bmQtaG92ZXI6ICNlZWUgIWRlZmF1bHQ7XG4kbmd4LWRhdGF0YWJsZS1kZWZhdWx0LWJhY2tncm91bmQtZm9jdXM6ICNkZGQgIWRlZmF1bHQ7XG5cbi8vIGRlZmF1bHQgYmFja2dyb3VuZCBjb2xvcnMgZm9yIGNlbGwgc2VsZWN0aW9uIHN0eWxlXG4kbmd4LWRhdGF0YWJsZS1jZWxsc2VsZWN0aW9uLWJhY2tncm91bmQtaG92ZXI6ICNlZWUgIWRlZmF1bHQ7XG4kbmd4LWRhdGF0YWJsZS1jZWxsc2VsZWN0aW9uLWJhY2tncm91bmQtZm9jdXM6ICNkZGQgIWRlZmF1bHQ7XG5cbi8vIGJhY2tncm91bmQgYW5kIHRleHQgY29sb3JzIGZvciBzZWxlY3RlZCBjZWxsIC8gcm93XG4kbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZDogIzMwNGZmZSAhZGVmYXVsdDtcbiRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1jb2xvcjogI2ZmZiAhZGVmYXVsdDtcbiRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kLWhvdmVyOiAjMTkzYWU0ICFkZWZhdWx0O1xuJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWNvbG9yLWhvdmVyOiAjZmZmICFkZWZhdWx0O1xuJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQtZm9jdXM6ICMyMDQxZWYgIWRlZmF1bHQ7XG4kbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtY29sb3ItZm9jdXM6ICNmZmYgIWRlZmF1bHQ7XG5cbi8vIGNvbG9ycyBmb3IgaGVhZGVyIGVsZW1lbnRzXG4kZGF0YXRhYmxlLWhlYWRlci1jZWxsLWJhY2tncm91bmQ6ICNmZmYgIWRlZmF1bHQ7XG4kZGF0YXRhYmxlLWhlYWRlci1jZWxsLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpICFkZWZhdWx0O1xuJGRhdGF0YWJsZS1oZWFkZXItYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKSAhZGVmYXVsdDtcbiRkYXRhdGFibGUtaGVhZGVyLXJlc2l6ZS1oYW5kbGUtY29sb3I6ICNlZWUgIWRlZmF1bHQ7XG5cbi8vIGNvbG9ycyBmb3IgdGFibGUgYm9keSBlbGVtZW50c1xuJGRhdGF0YWJsZS1yb3ctZGV0YWlsLWJhY2tncm91bmQ6ICNmNWY1ZjUgIWRlZmF1bHQ7XG4kZGF0YXRhYmxlLWJvZHktY2VsbC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KSAhZGVmYXVsdDtcbiRkYXRhdGFibGUtZ3JvdXAtaGVhZGVyLWJhY2tncm91bmQ6ICNmNWY1ZjUgIWRlZmF1bHQ7XG4kZGF0YXRhYmxlLWdyb3VwLWhlYWRlci1ib3JkZXItdG9wLWNvbG9yOiAjZDlkOGQ5ICFkZWZhdWx0O1xuJGRhdGF0YWJsZS1ncm91cC1oZWFkZXItYm9yZGVyLWJvdHRvbS1jb2xvcjogI2Q5ZDhkOSAhZGVmYXVsdDtcblxuLy8gY29sb3JzIGZvciBmb290ZXIgZWxlbWVudHNcbiRkYXRhdGFibGUtZm9vdGVyLWNlbGwtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCkgIWRlZmF1bHQ7XG4kZGF0YXRhYmxlLWZvb3Rlci1ib3JkZXItdG9wLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpICFkZWZhdWx0O1xuJGRhdGF0YWJsZS1wYWdlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KSAhZGVmYXVsdDtcbiRkYXRhdGFibGUtcGFnZXItY29sb3ItaG92ZXI6IHJnYmEoMCwgMCwgMCwgMC43NSkgIWRlZmF1bHQ7XG4kZGF0YXRhYmxlLXBhZ2VyLWJhY2tncm91bmQtaG92ZXI6IHJnYmEoMTU4LCAxNTgsIDE1OCwgMC4yKSAhZGVmYXVsdDtcbiRkYXRhdGFibGUtcGFnZXItZGlzYWJsZWQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNikgIWRlZmF1bHQ7XG4kZGF0YXRhYmxlLXBhZ2VyLWRpc2FibGVkLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuJGRhdGF0YWJsZS1wYWdlci1hY3RpdmUtYmFja2dyb3VuZDogcmdiYSgxNTgsIDE1OCwgMTU4LCAwLjIpICFkZWZhdWx0O1xuXG4vLyBjb2xvcnMgZm9yIHN1bW1hcnkgcm93IGVsZW1lbnRzXG4kZGF0YXRhYmxlLXN1bW1hcnktcm93LWJhY2tncm91bmQ6ICNkZGQgIWRlZmF1bHQ7XG4kZGF0YXRhYmxlLXN1bW1hcnktcm93LWJhY2tncm91bmQtaG92ZXI6ICNkZGQgIWRlZmF1bHQ7XG5cbi5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIHtcbiAgYmFja2dyb3VuZDogJG5neC1kYXRhdGFibGUtYmFja2dyb3VuZDtcbiAgYm94LXNoYWRvdzogJG5neC1kYXRhdGFibGUtYm94LXNoYWRvdztcblxuICAmLnN0cmlwZWQge1xuICAgIC5kYXRhdGFibGUtcm93LW9kZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAkbmd4LWRhdGF0YWJsZS1yb3ctb2RkLWJhY2tncm91bmQ7XG4gICAgfVxuICB9XG5cbiAgJi5zaW5nbGUtc2VsZWN0aW9uLFxuICAmLm11bHRpLXNlbGVjdGlvbixcbiAgJi5tdWx0aS1jbGljay1zZWxlY3Rpb24ge1xuICAgIC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgJi5hY3RpdmUsXG4gICAgICAmLmFjdGl2ZSAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kO1xuICAgICAgICBjb2xvcjogJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWNvbG9yO1xuICAgICAgfVxuXG4gICAgICAmLmFjdGl2ZTpob3ZlcixcbiAgICAgICYuYWN0aXZlOmhvdmVyIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQtaG92ZXI7XG4gICAgICAgIGNvbG9yOiAkbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtY29sb3ItaG92ZXI7XG4gICAgICB9XG5cbiAgICAgICYuYWN0aXZlOmZvY3VzLFxuICAgICAgJi5hY3RpdmU6Zm9jdXMgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZC1mb2N1cztcbiAgICAgICAgY29sb3I6ICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1jb2xvci1mb2N1cztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmOm5vdCguY2VsbC1zZWxlY3Rpb24pIHtcbiAgICAuZGF0YXRhYmxlLWJvZHktcm93IHtcbiAgICAgICY6aG92ZXIsXG4gICAgICAmOmhvdmVyIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5neC1kYXRhdGFibGUtZGVmYXVsdC1iYWNrZ3JvdW5kLWhvdmVyO1xuICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kO1xuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgICAgfVxuXG4gICAgICAmOmZvY3VzLFxuICAgICAgJjpmb2N1cyAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuZ3gtZGF0YXRhYmxlLWRlZmF1bHQtYmFja2dyb3VuZC1mb2N1cztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLmNlbGwtc2VsZWN0aW9uIHtcbiAgICAuZGF0YXRhYmxlLWJvZHktY2VsbCB7XG4gICAgICAmOmhvdmVyLFxuICAgICAgJjpob3ZlciAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuZ3gtZGF0YXRhYmxlLWNlbGxzZWxlY3Rpb24tYmFja2dyb3VuZC1ob3ZlcjtcbiAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZDtcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICAgIH1cblxuICAgICAgJjpmb2N1cyxcbiAgICAgICY6Zm9jdXMgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmd4LWRhdGF0YWJsZS1jZWxsc2VsZWN0aW9uLWJhY2tncm91bmQtZm9jdXM7XG4gICAgICB9XG5cbiAgICAgICYuYWN0aXZlLFxuICAgICAgJi5hY3RpdmUgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZDtcbiAgICAgICAgY29sb3I6ICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgJi5hY3RpdmU6aG92ZXIsXG4gICAgICAmLmFjdGl2ZTpob3ZlciAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kLWhvdmVyO1xuICAgICAgICBjb2xvcjogJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWNvbG9yLWhvdmVyO1xuICAgICAgfVxuXG4gICAgICAmLmFjdGl2ZTpmb2N1cyxcbiAgICAgICYuYWN0aXZlOmZvY3VzIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQtZm9jdXM7XG4gICAgICAgIGNvbG9yOiAkbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtY29sb3ItZm9jdXM7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG5cdCAqIFNoYXJlZCBTdHlsZXNcblx0ICovXG4gIC5lbXB0eS1yb3cge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBib3JkZXItdG9wOiAwO1xuICB9XG5cbiAgLmxvYWRpbmctcm93IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBib3JkZXItdG9wOiAwO1xuICB9XG5cbiAgLyoqXG5cdCAqIEdsb2JhbCBSb3cgU3R5bGVzXG5cdCAqL1xuICAuZGF0YXRhYmxlLWhlYWRlcixcbiAgLmRhdGF0YWJsZS1ib2R5IHtcbiAgICAuZGF0YXRhYmxlLXJvdy1sZWZ0IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuZ3gtZGF0YXRhYmxlLWJhY2tncm91bmQ7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBUUFBQUFCQ0FZQUFBRDVQQS9OQUFBQUZrbEVRVlFJSFdQU2tOZVNCbUpoVFFWdGJpRE5DZ0FTYWdJSXVKWDhPZ0FBQUFCSlJVNUVya0pnZ2c9PSk7XG4gICAgfVxuXG4gICAgLmRhdGF0YWJsZS1yb3ctcmlnaHQge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5neC1kYXRhdGFibGUtYmFja2dyb3VuZDtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFRQUFBQUJDQVlBQUFENVBBL05BQUFBRmtsRVFWUUkxMlBRa05kaTFWVFE1Z2JTd2tBc0RRQVJMQUlHdE9TRlVBQUFBQUJKUlU1RXJrSmdnZz09KTtcbiAgICB9XG4gIH1cblxuICAvKipcblx0ICogSGVhZGVyIFN0eWxlc1xuXHQgKi9cbiAgLmRhdGF0YWJsZS1oZWFkZXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZGF0YXRhYmxlLWhlYWRlci1ib3JkZXItYm90dG9tLWNvbG9yO1xuXG4gICAgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZzogMC45cmVtIDEuMnJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGF0YXRhYmxlLWhlYWRlci1jZWxsLWJhY2tncm91bmQ7XG4gICAgICBjb2xvcjogJGRhdGF0YWJsZS1oZWFkZXItY2VsbC1jb2xvcjtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuXG4gICAgICAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLXdyYXBwZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgICYubG9uZ3ByZXNzIHtcbiAgICAgICAgLmRyYWdnYWJsZTo6YWZ0ZXIge1xuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA0MDBtcyBlYXNlLCBvcGFjaXR5IDQwMG1zIGVhc2U7XG4gICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRyYWdnYWJsZTo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnICc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgbWFyZ2luOiAtMzBweCAwIDAgLTMwcHg7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIGZpbHRlcjogbm9uZTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgei1pbmRleDogOTk5OTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICYuZHJhZ2dpbmcge1xuICAgICAgICAucmVzaXplLWhhbmRsZSB7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnJlc2l6ZS1oYW5kbGUge1xuICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggJGRhdGF0YWJsZS1oZWFkZXItcmVzaXplLWhhbmRsZS1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAvKipcblx0ICogQm9keSBTdHlsZXNcblx0ICovXG4gIC5kYXRhdGFibGUtYm9keSB7XG4gICAgLmRhdGF0YWJsZS1yb3ctZGV0YWlsIHtcbiAgICAgIGJhY2tncm91bmQ6ICRkYXRhdGFibGUtcm93LWRldGFpbC1iYWNrZ3JvdW5kO1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG5cbiAgICAuZGF0YXRhYmxlLWdyb3VwLWhlYWRlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAkZGF0YXRhYmxlLWdyb3VwLWhlYWRlci1iYWNrZ3JvdW5kO1xuICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICRkYXRhdGFibGUtZ3JvdXAtaGVhZGVyLWJvcmRlci1ib3R0b20tY29sb3I7XG4gICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggJGRhdGF0YWJsZS1ncm91cC1oZWFkZXItYm9yZGVyLXRvcC1jb2xvcjtcbiAgICB9XG5cbiAgICAuZGF0YXRhYmxlLWJvZHktcm93IHtcbiAgICAgIC5kYXRhdGFibGUtYm9keS1jZWxsIHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZzogMC45cmVtIDEuMnJlbTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICAgICAgY29sb3I6ICRkYXRhdGFibGUtYm9keS1jZWxsLWNvbG9yO1xuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcblxuICAgICAgICAvLyBjZWxsIGFjdGl2ZSBjbGFzc1xuICAgICAgICAvLyAmLmFjdGl2ZSB7XG4gICAgICAgIC8vICBiYWNrZ3JvdW5kOiAjMDgyOWUwXG4gICAgICAgIC8vIH1cbiAgICAgIH1cbiAgICAgIC5kYXRhdGFibGUtYm9keS1ncm91cC1jZWxsIHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZzogMC45cmVtIDEuMnJlbTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICAgICAgY29sb3I6ICRkYXRhdGFibGUtYm9keS1jZWxsLWNvbG9yO1xuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucHJvZ3Jlc3MtbGluZWFyIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDVweDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAgIC5jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSwgMSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEsIDEpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcwLCAyMDksIDI0OSk7XG5cbiAgICAgICAgLmJhciB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBxdWVyeSAwLjhzIGluZmluaXRlIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpO1xuICAgICAgICAgIGFuaW1hdGlvbjogcXVlcnkgMC44cyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKTtcblxuICAgICAgICAgIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMnMgbGluZWFyO1xuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGxpbmVhcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYsIDEwOCwgMjAwKTtcblxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcblx0ICogRm9vdGVyIFN0eWxlc1xuXHQgKi9cbiAgLmRhdGF0YWJsZS1mb290ZXIge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkZGF0YXRhYmxlLWZvb3Rlci1ib3JkZXItdG9wLWNvbG9yO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAkZGF0YXRhYmxlLWZvb3Rlci1jZWxsLWNvbG9yO1xuXG4gICAgLnBhZ2UtY291bnQge1xuICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBwYWRkaW5nOiAwIDEuMnJlbTtcbiAgICB9XG5cbiAgICAuZGF0YXRhYmxlLXBhZ2VyIHtcbiAgICAgIG1hcmdpbjogMCAxMHB4O1xuXG4gICAgICBsaSB7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cbiAgICAgICAgJi5kaXNhYmxlZCBhIHtcbiAgICAgICAgICBjb2xvcjogJGRhdGF0YWJsZS1wYWdlci1kaXNhYmxlZC1jb2xvciAhaW1wb3J0YW50O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXRhdGFibGUtcGFnZXItZGlzYWJsZWQtYmFja2dyb3VuZCAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJi5hY3RpdmUgYSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhdGF0YWJsZS1wYWdlci1hY3RpdmUtYmFja2dyb3VuZDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgICBtaW4td2lkdGg6IDI0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICBwYWRkaW5nOiAwIDZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBtYXJnaW46IDZweCAzcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgY29sb3I6ICRkYXRhdGFibGUtcGFnZXItY29sb3I7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogJGRhdGF0YWJsZS1wYWdlci1jb2xvci1ob3ZlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGF0YXRhYmxlLXBhZ2VyLWJhY2tncm91bmQtaG92ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRhdGF0YWJsZS1pY29uLWxlZnQsXG4gICAgICAuZGF0YXRhYmxlLWljb24tc2tpcCxcbiAgICAgIC5kYXRhdGFibGUtaWNvbi1yaWdodCxcbiAgICAgIC5kYXRhdGFibGUtaWNvbi1wcmV2IHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgcGFkZGluZzogMCAzcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gU3VtbWFyeSByb3cgc3R5bGVzXG4gIC5kYXRhdGFibGUtc3VtbWFyeS1yb3cge1xuICAgIC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhdGF0YWJsZS1zdW1tYXJ5LXJvdy1iYWNrZ3JvdW5kO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhdGF0YWJsZS1zdW1tYXJ5LXJvdy1iYWNrZ3JvdW5kLWhvdmVyO1xuICAgICAgfVxuXG4gICAgICAuZGF0YXRhYmxlLWJvZHktY2VsbCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENoZWNrYm94ZXNcbioqL1xuLmRhdGF0YWJsZS1jaGVja2JveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMDtcblxuICBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAwIDFyZW0gMCAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xuXG4gICAgJjpiZWZvcmUge1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICB3aWR0aDogMXJlbTtcbiAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmMmYyZjI7XG4gICAgfVxuXG4gICAgJjpjaGVja2VkOmJlZm9yZSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICBoZWlnaHQ6IDAuNXJlbTtcbiAgICAgIGJvcmRlci1jb2xvcjogIzAwOTY4ODtcbiAgICAgIGJvcmRlci10b3Atc3R5bGU6IG5vbmU7XG4gICAgICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7XG4gICAgfVxuXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMXJlbTtcbiAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUHJvZ3Jlc3MgYmFyIGFuaW1hdGlvbnNcbiAqL1xuQGtleWZyYW1lcyBxdWVyeSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzNSUpIHNjYWxlKDAuMywgMSk7XG4gIH1cblxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSBzY2FsZSgwLCAxKTtcbiAgfVxufVxuIiwiQGNoYXJzZXQgXCJVVEYtOFwiO1xuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdkYXRhLXRhYmxlJztcbiAgc3JjOiB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUuZW90Jyk7XG4gIHNyYzogdXJsKCdmb250cy9kYXRhLXRhYmxlLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksIHVybCgnZm9udHMvZGF0YS10YWJsZS53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXG4gICAgdXJsKCdmb250cy9kYXRhLXRhYmxlLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgdXJsKCdmb250cy9kYXRhLXRhYmxlLnN2ZyNkYXRhLXRhYmxlJykgZm9ybWF0KCdzdmcnKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5bZGF0YS1pY29uXTpiZWZvcmUge1xuICBmb250LWZhbWlseTogJ2RhdGEtdGFibGUnICFpbXBvcnRhbnQ7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1pY29uKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC12YXJpYW50OiBub3JtYWwgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgc3BlYWs6IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuW2NsYXNzXj0nZGF0YXRhYmxlLWljb24tJ106YmVmb3JlLFxuW2NsYXNzKj0nIGRhdGF0YWJsZS1pY29uLSddOmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiAnZGF0YS10YWJsZScgIWltcG9ydGFudDtcbiAgZm9udC1zdHlsZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC12YXJpYW50OiBub3JtYWwgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgc3BlYWs6IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuLmRhdGF0YWJsZS1pY29uLWZpbHRlcjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Mic7XG59XG4uZGF0YXRhYmxlLWljb24tY29sbGFwc2U6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjEnO1xufVxuLmRhdGF0YWJsZS1pY29uLWV4cGFuZDpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Myc7XG59XG4uZGF0YXRhYmxlLWljb24tY2xvc2U6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjQnO1xufVxuLmRhdGF0YWJsZS1pY29uLXVwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY1Jztcbn1cbi5kYXRhdGFibGUtaWNvbi1kb3duOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY2Jztcbn1cbi5kYXRhdGFibGUtaWNvbi1zb3J0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY3Jztcbn1cbi5kYXRhdGFibGUtaWNvbi1kb25lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY4Jztcbn1cbi5kYXRhdGFibGUtaWNvbi1kb25lLWFsbDpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2OSc7XG59XG4uZGF0YXRhYmxlLWljb24tc2VhcmNoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDZhJztcbn1cbi5kYXRhdGFibGUtaWNvbi1waW46YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNmInO1xufVxuLmRhdGF0YWJsZS1pY29uLWFkZDpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2ZCc7XG59XG4uZGF0YXRhYmxlLWljb24tbGVmdDpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Zic7XG59XG4uZGF0YXRhYmxlLWljb24tcmlnaHQ6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNzAnO1xufVxuLmRhdGF0YWJsZS1pY29uLXNraXA6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNzEnO1xufVxuLmRhdGF0YWJsZS1pY29uLXByZXY6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNzInO1xufVxuIiwiQGltcG9ydCAnfkBzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2luZGV4LmNzcyc7XG5AaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvdGhlbWVzL21hdGVyaWFsLnNjc3MnO1xuQGltcG9ydCAnfkBzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2Fzc2V0cy9pY29ucy5jc3MnO1xuXG4ubmd4LWRhdGF0YWJsZSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xuICAgIGJvcmRlci1jb2xvcjogI0VFRTtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtYXJnaW46IDVweDtcbn1cblxuLmRhdGF0YWJsZS1zdW1tYXJ5LXJvdyAuZGF0YXRhYmxlLWJvZHktcm93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/invoice/components/item-form/item-form.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/invoice/components/item-form/item-form.component.ts ***!
  \********************************************************************************/
/*! exports provided: ItemFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemFormComponent", function() { return ItemFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm5/swimlane-ngx-datatable.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var blankRow = { description: 'asd', amount: null };
var ItemFormComponent = /** @class */ (function () {
    // columns: any[] = [
    //   {name: 'Description'},
    //   {name: 'Unit'},
    //   {name: 'Amount'},
    //   {name: 'Total'}];
    function ItemFormComponent() {
        this.editing = {};
        this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["ColumnMode"];
        this.rows = [
            { description: 'Timber Planks', amount: 4.80 },
            { description: 'Lawnmowing', amount: 70 },
            { description: 'Edging', amount: 30 }
        ];
    }
    ItemFormComponent.prototype.ngOnInit = function () {
    };
    ItemFormComponent.prototype.addRow = function () {
        this.rows = [blankRow].concat(this.rows);
        this.editing = '0-name: true';
    };
    ItemFormComponent.prototype.editRow = function () {
        console.log('Editing: ', this.editing);
    };
    ItemFormComponent.prototype.updateValue = function (event, cell, rowIndex) {
        console.log('inline editing rowIndex', rowIndex);
        this.editing[rowIndex + '-' + cell] = false;
        this.rows[rowIndex][cell] = event.target.value;
        this.rows = this.rows.slice();
        console.log('UPDATED!', this.rows[rowIndex][cell]);
    };
    ItemFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item-form',
            template: __webpack_require__(/*! ./item-form.component.html */ "./src/app/components/invoice/components/item-form/item-form.component.html"),
            styles: [__webpack_require__(/*! ./item-form.component.scss */ "./src/app/components/invoice/components/item-form/item-form.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ItemFormComponent);
    return ItemFormComponent;
}());



/***/ }),

/***/ "./src/app/components/invoice/invoice.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/invoice/invoice.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card\">\n  <!-- Header -->\n  <span class=\"header-text\">INVOICE</span>\n  <br />\n  <mat-form-field class=\"form\">\n    <input matInput placeholder=\"Invoice No.\" [(ngModel)]=\"invoiceNumber\">\n  </mat-form-field>\n  <br />\n  <!-- Dates -->\n  <mat-form-field>\n    <input matInput [matDatepicker]=\"picker1\" placeholder=\"Invoice Date\" [(ngModel)]=\"invoiceDate\">\n    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n    <mat-datepicker #picker1></mat-datepicker>\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput [matDatepicker]=\"picker2\" placeholder=\"Due Date\" [(ngModel)]=\"dueDate\">\n    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n    <mat-datepicker #picker2></mat-datepicker>\n  </mat-form-field>\n  <hr>\n  <br />\n  <!-- Client Details -->\n  <span class=\"subheader\">Client Details</span>\n  <br />\n  <mat-form-field class=\"form\">\n    <input matInput placeholder=\"Name\" [(ngModel)]=\"name\">\n  </mat-form-field>\n  <br />\n  <mat-form-field class=\"form\">\n    <input matInput placeholder=\"Street Address\" [(ngModel)]=\"address\">\n  </mat-form-field>\n  <mat-form-field class=\"form\">\n    <input matInput placeholder=\"City/Town\" [(ngModel)]=\"city\">\n  </mat-form-field>\n  <mat-form-field class=\"form\">\n    <input matInput placeholder=\"Postcode\" [(ngModel)]=\"postcode\">\n  </mat-form-field>\n  <hr>\n  <br />\n  <!-- Item List -->\n  <app-item-form></app-item-form>\n  <!-- Notes -->\n  <mat-form-field class=\"form\" style=\"width: 95%\">\n    <input matInput placeholder=\"Notes\" [(ngModel)]=\"notes\">\n  </mat-form-field>\n  <!-- Client Email -->\n  <mat-form-field class=\"form\" style=\"width: 95%\">\n    <input matInput placeholder=\"Client Email Address\" [(ngModel)]=\"clientEmail\">\n  </mat-form-field>\n  <!-- Controls -->\n  <div class=\"controls\">\n    <button mat-button (click)=\"createInvoice()\">Create Invoice</button>\n  </div>\n</mat-card>"

/***/ }),

/***/ "./src/app/components/invoice/invoice.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/invoice/invoice.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  position: relative;\n  top: 50px;\n  margin: auto;\n  padding: 24px;\n  max-width: 70%; }\n\n.subheader {\n  margin-top: 8px; }\n\n.mat-form-field {\n  padding-left: 16px !important; }\n\n.controls {\n  margin-top: 16px;\n  width: 100%;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J5YW4vR2l0aHViIFByb2plY3RzL1BoaWxzUHJvcGVydHlNYWludGVuYW5jZS9zcmMvYXBwL2NvbXBvbmVudHMvaW52b2ljZS9pbnZvaWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQWtCO0VBQ2xCLFVBQVM7RUFDVCxhQUFZO0VBQ1osY0FBYTtFQUNiLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLDhCQUE2QixFQUNoQzs7QUFFRDtFQUNJLGlCQUFnQjtFQUNoQixZQUFXO0VBQ1gsbUJBQWtCLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbnZvaWNlL2ludm9pY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNTBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzogMjRweDtcbiAgICBtYXgtd2lkdGg6IDcwJTtcbn1cblxuLnN1YmhlYWRlciB7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICAgIHBhZGRpbmctbGVmdDogMTZweCAhaW1wb3J0YW50O1xufVxuXG4uY29udHJvbHMge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/invoice/invoice.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/invoice/invoice.component.ts ***!
  \*********************************************************/
/*! exports provided: InvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceComponent", function() { return InvoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InvoiceComponent = /** @class */ (function () {
    function InvoiceComponent() {
        this.dueDate = Date.now;
        this.invoiceDate = Date.now;
    }
    InvoiceComponent.prototype.ngOnInit = function () {
    };
    InvoiceComponent.prototype.createInvoice = function () {
        console.log("--Create Invoice--");
        console.log('Invoice No. -> ' + this.invoiceNumber);
        console.log('Invoice Date -> ' + this.invoiceDate);
        console.log('Due Date -> ' + this.dueDate);
        console.log('-----------------------------');
        console.log('Name -> ' + this.name);
        console.log('Address -> ' + this.address);
        console.log('City -> ' + this.city);
        console.log('Postcode -> ' + this.postcode);
        console.log('-----------------------------');
        console.log('Notes -> ' + this.notes);
        console.log('Client Email -> ' + this.email);
    };
    InvoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invoice',
            template: __webpack_require__(/*! ./invoice.component.html */ "./src/app/components/invoice/invoice.component.html"),
            styles: [__webpack_require__(/*! ./invoice.component.scss */ "./src/app/components/invoice/invoice.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InvoiceComponent);
    return InvoiceComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ryan/Github Projects/PhilsPropertyMaintenance/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map