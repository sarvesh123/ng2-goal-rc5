import { RouterModule } from '@angular/router';

import { ChatComponent } from './chat.component';

export const routing = RouterModule.forChild([
    { path: '', component: ChatComponent }
]);