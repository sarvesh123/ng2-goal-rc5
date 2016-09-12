import { NgModule } from '@angular/core';
import { ChatComponent } from './chat.component';
import { routing } from './chat.routing';

@NgModule({
    imports: [ routing ],
    declarations: [ ChatComponent ]
})

export default class ChatModule {}