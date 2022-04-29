import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientRoutingModule } from './client-routing.module';
import { ClientFormComponent } from './client-form/client-form.component';
import {FormsModule} from '@angular/forms'



@NgModule({
  declarations: [
    ClientListComponent,
    ClientFormComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    ClientRoutingModule
    
  ]
})
export class ClientModule { }
