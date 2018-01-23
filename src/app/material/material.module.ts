import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MaterialConfig} from './material-config';

@NgModule({
  imports: [
    CommonModule,
    MaterialConfig.MODULES
  ],
  exports: [
    MaterialConfig.MODULES
  ],
  declarations: []
})
export class MaterialModule {
}
