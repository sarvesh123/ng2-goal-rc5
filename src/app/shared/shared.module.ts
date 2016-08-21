import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UserService } from './user.service';

@NgModule({
    imports: [ CommonModule, HttpModule ],
    exports: [ CommonModule, FormsModule ]
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [ UserService ]
        }
    }
}

@NgModule({
  exports:   [ SharedModule ],
  providers: [ UserService ]
})
export class SharedRootModule { }