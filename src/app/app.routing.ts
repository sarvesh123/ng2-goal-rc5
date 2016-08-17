import { Routes, RouterModule }   from '@angular/router';

import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: '',
        component: HomeComponent
    }
];

export const appRoutingProviders: any[] = [
];

export const routing = RouterModule.forRoot(appRoutes);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/