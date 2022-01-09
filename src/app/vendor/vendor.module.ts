import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorprofileComponent } from './vendorprofile/vendorprofile.component';
import { RouterModule, Routes } from '@angular/router';
import { FilterPipe } from '../pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LzeroPipe } from '../pipes/lzero.pipe';
import { FilterbyidPipe } from '../pipes/filterbyid.pipe';
import { ApiService } from '../services/api.service';

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
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[ApiService],
  exports: [RouterModule]
})
export class VendorModule { }
