import { Component } from '@angular/core';

@Component({
    selector: 'app-jonathan',
    templateUrl: './app/components/jonsynth/jonsynth.component.html',
    styleUrls: ['./app/components/jonsynth/jonsynth.component.css']
})

export class JonathanComponent {

    noun: string = ' Angular/TypeScript ';
    age: number = 28;
    fName;
    lName;


    colorChange = 'blue';
    userName;
    numClicks = 0;

    nameCreated = false;
    userInput = [];

    getPageTitle() {
        return this.noun;
    }

    coderObject() {
        this.fName = 'Jonathan';
        this.lName = 'Cupples';
        return this.fName + ' ' + this.lName;
    }

    addName() {
        this.nameCreated = true;
        this.userInput.push(this.userName);
        this.userName = '';
    }

    onButtonClick() {
        this.numClicks++;
    }

}