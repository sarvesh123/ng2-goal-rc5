import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { routing } from './home.routing';
import { UserService } from '../../services/user.service';

@NgModule({
    imports: [ routing ],
    declarations: [ HomeComponent ],
    providers: [ UserService ]
})
export class HomeModule {}