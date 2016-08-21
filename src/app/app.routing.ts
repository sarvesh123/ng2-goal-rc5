import { Routes, RouterModule }   from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'signup', loadChildren: 'app/components/signup/signup.module' }
];

export const routing = RouterModule.forRoot(routes);
