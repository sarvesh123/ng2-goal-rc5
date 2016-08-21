import { Component } from '@angular/core';
import './rxjs-operators';

import { NavComponent } from './components/nav/nav.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ NavComponent ]
})
export class AppComponent {
  title = 'app works!';
}
