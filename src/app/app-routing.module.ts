import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from '@layout/skeleton/skeleton.component';
import { LoginFormComponent } from '@modules/auth/login/login-form/login-form.component';

const routes: Routes = [
  {path:'',component:SkeletonComponent,
  children:[
    {
      path: 'clientes',
      loadChildren:()=>
        import('@modules/client/client.module').then((m)=>m.ClientModule)
    },
    {
      path: 'productos',
      loadChildren:()=>
        import('@modules/product/product.module').then((m)=>m.ProductModule)
    },
    {
      path: 'materiales',
      loadChildren:()=>
        import('@modules/material/material.module').then((m)=>m.MaterialModule)
    },
    {
      path: 'otros',
      loadChildren:()=>
        import('@modules/other/other.module').then((m)=>m.OtherModule)
    },
    {
      path: 'manodeobra',
      loadChildren:()=>
        import('@modules/workforce/workforce.module').then((m)=>m.WorkforceModule)
    },
    {
      path: 'cotizaciones',
      loadChildren:()=>
        import('@modules/quotation/quotation.module').then((m)=>m.QuotationModule)
    }    
  ]},
  {path:'login',component:LoginFormComponent,
  children:[
    {
      path: '',
      loadChildren:()=>
        import('@modules/auth/auth.module').then((m)=>m.AuthModule)
    }
  ]}
  /*,
    {
      path: 'materiales',
      loadChildren:()=>
        import('@modules/material/material.module').then((m)=>m.MaterialModule)
    } 
  */
  //{ path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
