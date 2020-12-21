import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { DelonACLModule } from '@delon/acl';
// import { DelonFormModule } from '@delon/form';
// import { AlainThemeModule } from '@delon/theme';
// import { TranslateModule } from '@ngx-translate/core';
// import { GreetDirective } from '@utils/GreetDirective';
// import AddElementTableComponent from './add-element-table/add-element-table.component';
//
// import { SHARED_DELON_MODULES } from './shared-delon.module';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';

// #region third libs

const THIRDMODULES = [];
// #endregion

// #region your componets & directives
const COMPONENTS = [];
const DIRECTIVES = [];
// #endregion

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    ...SHARED_ZORRO_MODULES,
    // third libs
    ...THIRDMODULES,
  ],
  declarations: [
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ...SHARED_ZORRO_MODULES,
    // third libs
    ...THIRDMODULES,
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
})
export class SharedModule {}
