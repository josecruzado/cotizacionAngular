import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OtherFormComponent } from "./other-form/other-form.component";
import { OtherListComponent } from "./other-list/other-list.component";

const routes: Routes = [
    {path:'',component:OtherListComponent},
    {path:'form',component:OtherFormComponent}
  
    //{ path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
    //{ path: '**', component: PageNotFoundComponent }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class OtherRoutingModule { }