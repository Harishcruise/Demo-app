import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
const routes: Routes = [
  {
    path:'home',
    component: BaseComponent
  },
  {
    path: 'vendor', loadChildren:()=>import('./vendor/vendor.module').then(m=>m.VendorModule)
  },

  {
    path:'',redirectTo: 'home',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
