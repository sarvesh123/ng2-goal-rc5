import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { SignupComponent } from './signup.component';
import { routing } from './signup.routing';

@NgModule({
    imports: [ routing, SharedModule ],
    declarations: [ SignupComponent ],
    providers: []
})

export default class SignupModule {}