import { Component } from '@angular/core';

@Component({
    selector: 'counter',
    templateUrl: './app/components/counter/counter.component.html'
})
export class CounterComponent {
    public currentCount = 0;

    public incrementCounter() {
        this.currentCount++;
    }
}
