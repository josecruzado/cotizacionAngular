import { NgModule } from '@angular/core';
import { WorkforceListComponent } from './workforce-list/workforce-list.component';
import { WorkforceFormComponent } from './workforce-form/workforce-form.component';
import { SharedModule } from '@shared/shared.module';
import { WorkforceRoutingModule } from './workforce-routing.module';



@NgModule({
  declarations: [
    WorkforceListComponent,
    WorkforceFormComponent
  ],
  imports: [
    SharedModule,
    WorkforceRoutingModule
  ]
})
export class WorkforceModule { }
