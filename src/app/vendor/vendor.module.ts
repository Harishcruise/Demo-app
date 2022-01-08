import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorprofileComponent } from './vendorprofile/vendorprofile.component';
import { RouterModule, Routes } from '@angular/router';
import { FilterPipe } from '../pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
{
  path:'profile',
  component: VendorprofileComponent
},
{
  path:'',redirectTo: 'profile',pathMatch:'full'
}
];

@NgModule({
  declarations: [
    VendorprofileComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [RouterModule]
})
export class VendorModule { }
