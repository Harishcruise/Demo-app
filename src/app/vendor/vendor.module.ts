import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorprofileComponent } from './vendorprofile/vendorprofile.component';
import { RouterModule, Routes } from '@angular/router';
import { FilterPipe } from '../pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { LzeroPipe } from '../pipes/lzero.pipe';
import { FilterbyidPipe } from '../pipes/filterbyid.pipe';

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
    LzeroPipe,
    FilterbyidPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [RouterModule]
})
export class VendorModule { }
