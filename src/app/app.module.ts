import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';

import { SharedModule } from './shared/shared.module';
import { routing } from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        routing,
        SharedModule.forRoot()
    ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ],
})
export class AppModule {}