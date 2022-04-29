import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WorkforceFormComponent } from "./workforce-form/workforce-form.component";
import { WorkforceListComponent } from "./workforce-list/workforce-list.component";

const routes: Routes = [
    {path:'',component:WorkforceListComponent},
    {path:'form',component:WorkforceFormComponent}
  
    //{ path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
    //{ path: '**', component: PageNotFoundComponent }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class WorkforceRoutingModule { }