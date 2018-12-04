webpackJsonp([7],{

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelinePageModule", function() { return TimelinePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timeline__ = __webpack_require__(699);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TimelinePageModule = /** @class */ (function () {
    function TimelinePageModule() {
    }
    TimelinePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__timeline__["a" /* TimelinePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__timeline__["a" /* TimelinePage */]),
            ],
        })
    ], TimelinePageModule);
    return TimelinePageModule;
}());

//# sourceMappingURL=timeline.module.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_timeline_service__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimelinePage = /** @class */ (function () {
    function TimelinePage(navCtrl, navParams, postsService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.postsService = postsService;
        this.posts = [];
        this.postsService.getPosts()
            .subscribe(function (response) {
            console.log(response);
            _this.posts = response;
        });
    }
    TimelinePage.prototype.detalheNoticia = function (id) {
        this.navCtrl.push('DetalheNoticiaPage', { 'id': id });
    };
    TimelinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-post',template:/*ion-inline-start:"c:\app-rede-social\src\pages\timeline\timeline.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Página Inicial</ion-title>\n    <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor=\'let n of posts\'>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="{{n.foto}}">\n      </ion-avatar>\n      <h2>{{n.name}}</h2>\n      <p>November 5, 2018</p>\n    </ion-item>\n    <p>{{n.titulo}}</p>\n   <img src="{{n.image}}">\n\n    <ion-card-content>\n      <p>{{n.texto}}</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col text-center>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>Curtir</div>\n        </button>\n      </ion-col>\n      <ion-col text-center>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>Comentários</div>\n        </button>\n      </ion-col>\n      <ion-col text-center>\n        <button ion-button icon-start clear small >\n          <ion-icon name="share-alt"></ion-icon>\n          <div>Compartilhar</div>\n        </button>\n      </ion-col>  \n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n          <ion-list>\n              <ion-item>\n                <ion-avatar item-start>\n                  <img src="https://www.ziglar.com/wp-content/uploads/2016/09/michelle-prince-profile-img.png">\n                </ion-avatar>\n                <ion-input type="text" placeholder="Digite seu comentário"></ion-input>\n              </ion-item>\n          </ion-list>\n      </ion-col>\n    </ion-row>  \n\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"c:\app-rede-social\src\pages\timeline\timeline.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_timeline_service__["a" /* TimelineService */]])
    ], TimelinePage);
    return TimelinePage;
}());

//# sourceMappingURL=timeline.js.map

/***/ })

});
//# sourceMappingURL=7.js.map