import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from './login.component';
import { routing } from './login.routing';

@NgModule({
    imports: [ routing, SharedModule ],
    declarations: [ LoginComponent ]
})

export default class LoginModule {}