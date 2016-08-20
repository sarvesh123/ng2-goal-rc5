import { Routes, RouterModule }   from '@angular/router';

export const routes: Routes = [
    { path: 'signup', loadChildren: 'app/components/signup/signup.module' },
    { path: '', loadChildren: 'app/components/home/home.module' }
];

export const routing = RouterModule.forRoot(routes);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/