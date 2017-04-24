"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var JonathanComponent = (function () {
    function JonathanComponent() {
        this.noun = ' Angular/TypeScript ';
        this.age = 28;
        this.colorChange = 'blue';
        this.numClicks = 0;
        this.nameCreated = false;
        this.userInput = [];
    }
    JonathanComponent.prototype.getPageTitle = function () {
        return this.noun;
    };
    JonathanComponent.prototype.coderObject = function () {
        this.fName = 'Jonathan';
        this.lName = 'Cupples';
        return this.fName + ' ' + this.lName;
    };
    JonathanComponent.prototype.addName = function () {
        this.nameCreated = true;
        this.userInput.push(this.userName);
        this.userName = '';
    };
    JonathanComponent.prototype.onButtonClick = function () {
        this.numClicks++;
    };
    return JonathanComponent;
}());
JonathanComponent = __decorate([
    core_1.Component({
        selector: 'app-jonathan',
        templateUrl: './app/components/jonsynth/jonsynth.component.html',
        styleUrls: ['./app/components/jonsynth/jonsynth.component.css']
    })
], JonathanComponent);
exports.JonathanComponent = JonathanComponent;
