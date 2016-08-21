import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';

import { HomeModule } from './components/home/home.module';
import { SharedModule } from './shared/shared.module';
import { routing } from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        routing,
        HomeModule,
        SharedModule.forRoot()
    ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ],
})
export class AppModule {}