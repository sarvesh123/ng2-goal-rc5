import { NgModule } from '@angular/core';
import { ChatComponent } from './chat.component';
import { routing } from './chat.routing';
import { SharedModule } from '../../shared/shared.module';
import { ChatService } from '../../services/chat.service';

@NgModule({
    imports: [ routing, SharedModule ],
    declarations: [ ChatComponent ],
    providers: [ ChatService ]
})

export default class ChatModule {}