import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { TwitterComponent } from './twitter/twitter.component';

export const routing = RouterModule.forChild([
    { path: '', component: LoginComponent },
    { path: 'twitter', component: TwitterComponent }
]);