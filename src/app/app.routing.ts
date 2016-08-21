import { Routes, RouterModule }   from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'signup', loadChildren: 'app/components/signup/signup.module' },
    { path: 'login', loadChildren: 'app/components/login/login.module' }
];

export const routing = RouterModule.forRoot(routes);
