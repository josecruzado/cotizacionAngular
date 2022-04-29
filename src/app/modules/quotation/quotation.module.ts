import { NgModule } from '@angular/core';
import { QuotationFormComponent } from './quotation-form/quotation-form.component';
import { QuotationListComponent } from './quotation-list/quotation-list.component';
import { SharedModule } from '@shared/shared.module';
import {QuotationRoutingModule} from './quotation-routing.module';



@NgModule({
  declarations: [
    QuotationFormComponent,
    QuotationListComponent
  ],
  imports: [
    SharedModule,
    QuotationRoutingModule
  ]
})
export class QuotationModule { }
