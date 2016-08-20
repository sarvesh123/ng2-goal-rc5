import { RouterModule } from '@angular/router';

import { SignupComponent } from './signup.component';

export const routing = RouterModule.forChild([
    { path: 'signup', component: SignupComponent }
]);