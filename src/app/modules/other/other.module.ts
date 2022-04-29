import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { OtherRoutingModule } from './other-routing.module';
import { OtherListComponent } from './other-list/other-list.component';
import { OtherFormComponent } from './other-form/other-form.component';



@NgModule({
  declarations: [
    OtherListComponent,
    OtherFormComponent
  ],
  imports: [
    SharedModule,
    OtherRoutingModule
  ]
})
export class OtherModule { }
