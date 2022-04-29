import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialFormComponent } from './material-form/material-form.component';
import { MaterialListComponent } from './material-list/material-list.component';

const routes: Routes = [
  {path:'',component:MaterialListComponent},
  {path:'form',component:MaterialFormComponent}

  //{ path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule { }
