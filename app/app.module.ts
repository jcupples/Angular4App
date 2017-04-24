import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { JustinsComponent } from './components/justinswebpage/justinswebpage';
import { JonathanComponent } from './components/jonsynth/jonsynth.component';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        JustinsComponent,
        JonathanComponent

    ],
    imports: [
        JsonpModule,
        FormsModule,
        HttpModule,
        BrowserModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: "full" },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'justinswebpage', component: JustinsComponent },
            { path: 'jonsynth', component: JonathanComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {
}
