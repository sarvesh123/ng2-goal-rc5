import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { routing,
         appRoutingProviders } from './app.routing';


@NgModule({
    imports:      [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        SignupComponent,
        HomeComponent
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap:    [AppComponent],
})
export class AppModule {}