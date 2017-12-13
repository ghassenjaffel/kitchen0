webpackJsonp([5],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupPage = (function () {
    function SignupPage(navCtrl, userServ) {
        this.navCtrl = navCtrl;
        this.userServ = userServ;
        this.userCredentials = {
            username: '',
            email: '',
            password: '',
            passwordRepeat: ''
        };
    }
    SignupPage.prototype.signup = function () {
        if (this.userCredentials) {
            this.userServ.signup(this.userCredentials);
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"/home/skope/lab/ionic/kitchen0/src/pages/signup/signup.html"*/'<ion-content class="background">\n  <ion-card>\n    <ion-card-header>\n      Signup\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list no-line>\n        <ion-item>\n          <ion-input type="text" placeholder="Username" [(ngModel)]="userCredentials.username"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="email" placeholder="Email" [(ngModel)]="userCredentials.email"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="Password" placeholder="Password" [(ngModel)]="userCredentials.password"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="Password" placeholder="Confirm Password" [(ngModel)]="userCredentials.passwordRepeat"></ion-input>\n        </ion-item>\n        <button ion-button block outline color="light" (click)="signup()">Signup</button>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/skope/lab/ionic/kitchen0/src/pages/signup/signup.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/breakfast/breakfast.module": [
		272,
		3
	],
	"../pages/coffee/coffee.module": [
		273,
		2
	],
	"../pages/diner/diner.module": [
		274,
		1
	],
	"../pages/preview-recipe/preview-recipe.module": [
		275,
		4
	],
	"../pages/sweets/sweets.module": [
		276,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewRecipePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PreviewRecipePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PreviewRecipePage = (function () {
    function PreviewRecipePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PreviewRecipePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreviewRecipePage');
    };
    return PreviewRecipePage;
}());
PreviewRecipePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-preview-recipe',template:/*ion-inline-start:"/home/skope/lab/ionic/kitchen0/src/pages/preview-recipe/preview-recipe.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Recipe Preview</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar.png">\n      </ion-avatar>\n      <h2>Marty McFly</h2>\n      <p>November 5, 1955</p>\n    </ion-item>\n\n    <img src="assets/img/categories/diner.jpg">\n\n    <ion-card-content>\n      <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?!\n        Whoa. This is heavy.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-left clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>12 Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-left clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>4 Comments</div>\n        </button>\n      </ion-col>\n      <ion-col center text-center>\n        <ion-note>\n          11h ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/skope/lab/ionic/kitchen0/src/pages/preview-recipe/preview-recipe.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], PreviewRecipePage);

//# sourceMappingURL=preview-recipe.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateRecipPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__breakfast_breakfast__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateRecipPage = (function () {
    function CreateRecipPage(globalProv, navCtrl) {
        this.globalProv = globalProv;
        this.navCtrl = navCtrl;
        this.recipe = {
            name: '',
            imageURL: 'seed-toast.jpeg',
            author: '',
            description: '',
            ingredients: []
        };
        this.recipeCategory = '';
        this.newIngredient = '';
        this.user = JSON.parse(localStorage.getItem('user'));
    }
    CreateRecipPage.prototype.addRecipe = function () {
        this.recipe.author = this.user.username;
        this.globalProv.addRecipe(this.recipe, this.recipeCategory);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__breakfast_breakfast__["a" /* BreakfastPage */]);
    };
    CreateRecipPage.prototype.addIngredient = function () {
        this.recipe.ingredients.push(this.newIngredient);
        this.newIngredient = '';
    };
    CreateRecipPage.prototype.removeIng = function (index) {
        this.recipe.ingredients.splice(index, 1);
    };
    return CreateRecipPage;
}());
CreateRecipPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-createrecipes',template:/*ion-inline-start:"/home/skope/lab/ionic/kitchen0/src/pages/createrecipes/createrecipes.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Ajouter recette</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-list no-lines>\n    <p>Détails de la recette</p>\n    <ion-item>\n      <ion-input type="text" placeholder="Entrer le nom de la recette" [(ngModel)]="recipe.name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Categorie</ion-label>\n      <ion-select [(ngModel)]="recipeCategory">\n        <ion-option value="bf">Breakfast</ion-option>\n        <ion-option value="di">Dinner</ion-option>\n        <ion-option value="co">Coffee</ion-option>\n        <ion-option value="sw">Sweets</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-textarea placeholder="Entrer la description de la recette" [(ngModel)]="recipe.description"></ion-textarea>\n    </ion-item>\n    <p>Ingrédients de la recette</p>\n    <ion-item>\n      <ion-input type="text" placeholder="ajouter ingrédient .." [(ngModel)]="newIngredient"></ion-input>\n    </ion-item>\n    <ion-item text-right>\n      <button ion-button color="primary" (click)="addIngredient()">Ajouter +</button>\n    </ion-item>\n    <ion-item *ngFor="let ing of recipe.ingredients; let i = index" class="ingredient-item">\n      {{ ing }}\n      <ion-icon name="ios-trash-outline" class="ingredient-icon" (click)="removeIng(i)"></ion-icon>\n    </ion-item>\n    <button ion-button block class="add-btn" (click)="addRecipe()">Sauvegarder la recette</button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/skope/lab/ionic/kitchen0/src/pages/createrecipes/createrecipes.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _b || Object])
], CreateRecipPage);

var _a, _b;
//# sourceMappingURL=createrecipes.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(navCtrl, userServ) {
        this.navCtrl = navCtrl;
        this.userServ = userServ;
        this.loginCredentials = {
            username: '',
            password: ''
        };
    }
    LoginPage.prototype.signIn = function () {
        // this.userServ.login();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.goSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/home/skope/lab/ionic/kitchen0/src/pages/login/login.html"*/'<ion-content class="background">\n	<ion-card>\n		<ion-card-header>\n			LOGIN\n		</ion-card-header>\n		<ion-card-content>\n			<ion-list no-line>\n				<ion-item>\n					<ion-input type="text" placeholder="Username" [(ngModel)]="loginCredentials.username"></ion-input>\n				</ion-item>\n				<ion-item>\n					<ion-input type="password" placeholder="Password" [(ngModel)]="loginCredentials.password"></ion-input>\n				</ion-item>\n				<a>Forgot your login detail?</a>\n				<button ion-button block outline color="light" (click)="signIn()">Log in</button>\n				<p>OR</p>\n				\n					<button ion-button block color="facebook">\n						<ion-icon name="logo-facebook">Login with facebook</ion-icon> \n					</button>\n			</ion-list>\n		</ion-card-content>\n	</ion-card>\n	<button class="bottom" ion-button clear full (click)="goSignup()">Don\'t have an account? Sign up</button>\n</ion-content>\n  '/*ion-inline-end:"/home/skope/lab/ionic/kitchen0/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_createrecipes_createrecipes__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_recipes_recipes__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_global_global__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_navigation_navigation__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_user_user__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_preview_recipe_preview_recipe__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_recipes_recipes__["a" /* RecipesPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_preview_recipe_preview_recipe__["a" /* PreviewRecipePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_createrecipes_createrecipes__["a" /* CreateRecipPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/breakfast/breakfast.module#BreakfastPageModule', name: 'BreakfastPage', segment: 'breakfast', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/coffee/coffee.module#CoffeePageModule', name: 'CoffeePage', segment: 'coffee', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/diner/diner.module#DinerPageModule', name: 'DinerPage', segment: 'diner', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/preview-recipe/preview-recipe.module#PreviewRecipePageModule', name: 'PreviewRecipePage', segment: 'preview-recipe', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/sweets/sweets.module#SweetsPageModule', name: 'SweetsPage', segment: 'sweets', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_preview_recipe_preview_recipe__["a" /* PreviewRecipePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_createrecipes_createrecipes__["a" /* CreateRecipPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_recipes_recipes__["a" /* RecipesPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_10__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_navigation_navigation__["a" /* NavigationProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_14__providers_user_user__["a" /* UserProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, alertCtrl) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.startBreakfastRecipes = [{
                name: "Nut Butter, Banana, and Chia Seed Toast",
                imageURL: "seed-toast.jpeg",
                author: "John toast",
                description: "Very good recipe",
                ingredients: ['Oeuf', 'Banane', 'Fraise']
            },
            {
                name: "Berry and Yogurt Smoothie",
                imageURL: "smoothie.jpg",
                author: "Patrick ghost",
                description: "Very good recipe",
                ingredients: ['Oeuf', 'Banane', 'Fraise']
            },
            {
                name: "Savory Oatmeal With an Egg",
                imageURL: "oatmeal.jpg",
                author: "Jessy James",
                description: "Very good recipe",
                ingredients: ['Oeuf', 'Banane', 'Fraise']
            },
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.registerCategories();
        });
    }
    MyApp.prototype.registerCategories = function () {
        if (!localStorage['breakfastList']) {
            var __break = JSON.stringify(this.startBreakfastRecipes);
            localStorage.setItem('breakfastList', __break);
            var __diner = JSON.stringify(this.startBreakfastRecipes);
            localStorage.setItem('dinerList', __diner);
            var __coffee = JSON.stringify(this.startBreakfastRecipes);
            localStorage.setItem('coffeeList', __coffee);
            var __sweet = JSON.stringify(this.startBreakfastRecipes);
            localStorage.setItem('sweetList', __sweet);
        }
    };
    MyApp.prototype.showSignoutConfirm = function () {
        var confirm = this.alertCtrl.create({
            title: 'Alerte',
            message: 'Are you sure you want to disconnect ?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        confirm.dismiss();
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        localStorage.removeItem('user');
                        location.reload();
                    }
                }
            ]
        });
        confirm.present();
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('content'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */])
], MyApp.prototype, "content", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/skope/lab/ionic/kitchen0/src/app/app.html"*/'<ion-menu [content]="content" class="app-sidemenu">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n      <button ion-item class="signout-btn" (click)="showSignoutConfirm()">\n        Disconnect\n      </button>\n  </ion-content>\n</ion-menu>\n<ion-nav #content [root]="rootPage"></ion-nav>'/*ion-inline-end:"/home/skope/lab/ionic/kitchen0/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecipesPage = (function () {
    function RecipesPage(navCtrl, globalServ) {
        this.navCtrl = navCtrl;
        this.globalServ = globalServ;
    }
    return RecipesPage;
}());
RecipesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-recipes',template:/*ion-inline-start:"/home/skope/lab/ionic/kitchen0/src/pages/recipes/recipes.html"*/'<ion-header>\n        <ion-navbar>\n          <ion-title aligne =\'center\' >Recipes</ion-title>\n        </ion-navbar>\n      </ion-header>\n      \n      <ion-content class="cards-bg recipes-cards">\n      \n      <ion-card>\n      \n        <ion-item>\n          <ion-avatar item-start>\n            <img src="assets/img/marty-avatar.png">\n          </ion-avatar>\n          <h2>Jaffel Ghassen</h2>\n          <p>November 5, 1955</p>\n        </ion-item>\n      \n        <img src="assets/img/advance-card-bttf.png">\n      \n        <ion-card-content>\n          <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>\n        </ion-card-content>\n      \n        <ion-row>\n          <ion-col>\n            <button ion-button color="primary" clear small icon-start>\n              <ion-icon name=\'thumbs-up\'></ion-icon>\n              12 Likes\n            </button>\n          </ion-col>\n          <ion-col>\n            <button ion-button color="primary" clear small icon-start>\n              <ion-icon name=\'text\'></ion-icon>\n              4 Comments\n            </button>\n          </ion-col>\n          <ion-col align-self-center text-center>\n            <ion-note>\n              11h ago\n            </ion-note>\n          </ion-col>\n        </ion-row>\n      \n      </ion-card>\n      \n      \n      <ion-card>\n      \n        <ion-item>\n          <ion-avatar item-start>\n            <img src="assets/img/sarah-avatar.png.jpeg">\n          </ion-avatar>\n          <h2>Sarah Connor</h2>\n          <p>May 12, 1984</p>\n        </ion-item>\n      \n        <img src="assets/img/advance-card-tmntr.jpg">\n      \n        <ion-card-content>\n          <p>I face the unknown future, with a sense of hope. Because if a machine, a Terminator, can learn the value of human life, maybe we can too.</p>\n        </ion-card-content>\n      \n        <ion-row>\n          <ion-col>\n            <button ion-button color="primary" clear small icon-start>\n              <ion-icon name=\'thumbs-up\'></ion-icon>\n              30 Likes\n            </button>\n          </ion-col>\n          <ion-col>\n            <button ion-button color="primary" clear small icon-start>\n              <ion-icon name=\'text\'></ion-icon>\n              64 Comments\n            </button>\n          </ion-col>\n          <ion-col align-self-center text-center>\n            <ion-note>\n              30yr ago\n            </ion-note>\n          </ion-col>\n        </ion-row>\n      \n      </ion-card>\n      \n      \n      <ion-card>\n      \n        <ion-item>\n          <ion-avatar item-start>\n            <img src="assets/img/ian-avatar.png">\n          </ion-avatar>\n          <h2>Dr. Ian Malcolm</h2>\n          <p>June 28, 1990</p>\n        </ion-item>\n      \n        <img src="assets/img/advance-card-jp.jpg">\n      \n        <ion-card-content>\n          <p>Your scientists were so preoccupied with whether or not they could, that they didn\'t stop to think if they should.</p>\n        </ion-card-content>\n      \n        <ion-row>\n          <ion-col>\n            <button ion-button color="primary" clear small icon-start>\n              <ion-icon name=\'thumbs-up\'></ion-icon>\n              46 Likes\n            </button>\n          </ion-col>\n          <ion-col>\n            <button ion-button color="primary" clear small icon-start>\n              <ion-icon name=\'text\'></ion-icon>\n              66 Comments\n            </button>\n          </ion-col>\n          <ion-col align-self-center text-center>\n            <ion-note>\n              2d ago\n            </ion-note>\n          </ion-col>\n        </ion-row>\n      \n      </ion-card>\n      \n      \n      </ion-content>'/*ion-inline-end:"/home/skope/lab/ionic/kitchen0/src/pages/recipes/recipes.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
], RecipesPage);

//# sourceMappingURL=recipes.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the NavigationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var NavigationProvider = (function () {
    function NavigationProvider(http) {
        this.http = http;
        console.log('Hello NavigationProvider Provider');
    }
    return NavigationProvider;
}());
NavigationProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], NavigationProvider);

//# sourceMappingURL=navigation.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreakfastPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__preview_recipe_preview_recipe__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createrecipes_createrecipes__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BreakfastPage = (function () {
    function BreakfastPage(navCtrl, globalProvider) {
        this.navCtrl = navCtrl;
        this.globalProvider = globalProvider;
        this.assetsURL = "assets/img/recipes/breakfast/";
        this.recipes = this.globalProvider.getBreakFastRecipes();
    }
    BreakfastPage.prototype.ionViewDidLoad = function () {
        console.log(this.recipes, 'fucking recieeeeeeeeeeeeeeeeeeees');
        this.recipes = this.globalProvider.getBreakFastRecipes();
    };
    BreakfastPage.prototype.previewRecipe = function () {
        if (localStorage['user']) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__preview_recipe_preview_recipe__["a" /* PreviewRecipePage */]);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
        }
    };
    BreakfastPage.prototype.addRecipe = function () {
        if (localStorage['user']) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__createrecipes_createrecipes__["a" /* CreateRecipPage */]);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
        }
    };
    return BreakfastPage;
}());
BreakfastPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-breakfast',template:/*ion-inline-start:"/home/skope/lab/ionic/kitchen0/src/pages/breakfast/breakfast.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n        Breakfast Liste\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="card-background-page">\n  <ion-list>\n    <ion-item *ngFor="let recipe of recipes">\n      <ion-card>\n        <img src="{{assetsURL}}{{recipe.imageURL}}" />\n        <div class="card-title" text-wrap>{{recipe.name}}</div>\n        <div class="card-subtitle">By {{recipe.author}}</div>\n      </ion-card>\n    </ion-item>\n  </ion-list>\n  <ion-fab right bottom>\n    <button ion-fab color="danger" (click)="addRecipe()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/skope/lab/ionic/kitchen0/src/pages/breakfast/breakfast.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]) === "function" && _b || Object])
], BreakfastPage);

var _a, _b;
//# sourceMappingURL=breakfast.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GlobalProvider = (function () {
    function GlobalProvider(http) {
        this.http = http;
        this.categories = [{
                name: "BreakFast",
                imageURL: "breakfast.jpg",
                itemsNumber: "20",
                pageURL: "BreakfastPage"
            },
            {
                name: "Diner",
                imageURL: "diner.jpg",
                itemsNumber: "64",
                pageURL: "DinerPage"
            },
            {
                name: "Sweets",
                imageURL: "sweets.jpg",
                itemsNumber: "20",
                pageURL: "SweetsPage"
            },
            {
                name: "Coffee",
                imageURL: "coffee.jpg",
                itemsNumber: "28",
                pageURL: "CoffeePage"
            }];
        this.breakfastRecipes = JSON.parse(localStorage.getItem('breakfastList'));
        this.dinerRecipes = JSON.parse(localStorage.getItem('dinerList'));
        this.coffeeRecipes = JSON.parse(localStorage.getItem('coffeeList'));
        this.sweetRecipes = JSON.parse(localStorage.getItem('sweetList'));
    }
    GlobalProvider.prototype.getCategories = function () {
        return this.categories;
    };
    GlobalProvider.prototype.getBreakFastRecipes = function () {
        return this.breakfastRecipes;
    };
    GlobalProvider.prototype.getDinerRecipes = function () {
        return this.dinerRecipes;
    };
    GlobalProvider.prototype.getCoffeeRecipes = function () {
        return this.coffeeRecipes;
    };
    GlobalProvider.prototype.getSweetRecipes = function () {
        return this.sweetRecipes;
    };
    GlobalProvider.prototype.addRecipe = function (recipe, category) {
        switch (category) {
            case 'bf':
                this.breakfastRecipes.push(recipe);
                var __breakfastRecipesUpdate = JSON.stringify(this.breakfastRecipes);
                localStorage.setItem('breakfastList', __breakfastRecipesUpdate);
                break;
            case 'di':
                this.dinerRecipes.push(recipe);
                var __dinerUpdate = JSON.stringify(this.dinerRecipes);
                localStorage.setItem('dinerList', __dinerUpdate);
                break;
            case 'co':
                this.coffeeRecipes.push(recipe);
                var __coffeeRecipes = JSON.stringify(this.coffeeRecipes);
                localStorage.setItem('coffeeList', __coffeeRecipes);
                break;
            case 'sw':
                this.sweetRecipes.push(recipe);
                var __sweetRecipes = JSON.stringify(this.sweetRecipes);
                localStorage.setItem('sweetList', __sweetRecipes);
                break;
            default:
                break;
        }
    };
    return GlobalProvider;
}());
GlobalProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], GlobalProvider);

var _a;
//# sourceMappingURL=global.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, globalServ, menu) {
        this.navCtrl = navCtrl;
        this.globalServ = globalServ;
        this.assetsURL = "assets/img/";
        // get categories list
        menu.enable(true);
        this.categories = this.globalServ.getCategories();
    }
    HomePage.prototype.goTo = function (Page) {
        this.navCtrl.push(Page);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/skope/lab/ionic/kitchen0/src/pages/home/home.html"*/'<ion-header>\n  <ion-toolbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    <ion-title>\n      Categories\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class="card-background-page">\n  <ion-list>\n    <ion-item *ngFor="let category of categories">\n      <ion-card (click)="goTo(category.pageURL)">\n        <img src="{{assetsURL}}categories/{{category.imageURL}}" />\n        <div class="card-title">{{category.name}}</div>\n        <div class="card-subtitle">{{category.itemsNumber}} Items</div>\n      </ion-card>\n    </ion-item>\n  </ion-list>\n<ion-content>\n'/*ion-inline-end:"/home/skope/lab/ionic/kitchen0/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserProvider = (function () {
    function UserProvider(http) {
        this.http = http;
    }
    UserProvider.prototype.signup = function (userCred) {
        localStorage['user'] = JSON.stringify(userCred);
    };
    UserProvider.prototype.login = function () {
        console.log("logged in !");
    };
    return UserProvider;
}());
UserProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], UserProvider);

//# sourceMappingURL=user.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map