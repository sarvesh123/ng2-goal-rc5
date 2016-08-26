import { Routes, RouterModule }   from '@angular/router';

export const routes: Routes = [
    { path: '', loadChildren: 'app/components/home/home.module' },
    { path: 'signup', loadChildren: 'app/components/signup/signup.module' },
    { path: 'login', loadChildren: 'app/components/login/login.module' },
    { path: 'logout', loadChildren: 'app/components/logout/logout.module' }
];

export const routing = RouterModule.forRoot(routes);
