import { Component } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import './rxjs-operators';

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
