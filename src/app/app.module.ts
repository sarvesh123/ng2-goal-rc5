import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { HomeModule } from './components/home/home.module';
import { SignupModule } from './components/signup/signup.module';
import { routing } from './app.routing';
import { UserService } from './services/user.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        HomeModule,
        SignupModule
    ],
    declarations: [ AppComponent ],
    providers: [ UserService ],
    bootstrap: [ AppComponent ],
})
export class AppModule {}