import { NgModule } from '@angular/core';
import { MaterialListComponent } from './material-list/material-list.component';
import { MaterialFormComponent } from './material-form/material-form.component';
import { SharedModule } from '@shared/shared.module';
import { MaterialRoutingModule } from './material-routing.module';



@NgModule({
  declarations: [
    MaterialListComponent,
    MaterialFormComponent
  ],
  imports: [
    SharedModule,
    MaterialRoutingModule
  ]
})
export class MaterialModule { }
