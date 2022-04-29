import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { QuotationFormComponent } from "./quotation-form/quotation-form.component";
import { QuotationListComponent } from "./quotation-list/quotation-list.component";

const routes: Routes = [
    {path:'',component:QuotationListComponent},
    {path:'form',component:QuotationFormComponent}
    
    //{ path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
    //{ path: '**', component: PageNotFoundComponent }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class QuotationRoutingModule { }