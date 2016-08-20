import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { SignupComponent } from './signup.component';
import { routing } from './signup.routing';

@NgModule({
    imports: [ routing, FormsModule ],
    declarations: [ SignupComponent ],
    providers: []
})

export class SignupModule {}