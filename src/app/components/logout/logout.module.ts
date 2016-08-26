import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LogoutComponent } from './logout.component';
import { routing } from './logout.routing';

@NgModule({
    imports: [ routing, SharedModule ],
    declarations: [ LogoutComponent ]
})

export default class LogoutModule {}