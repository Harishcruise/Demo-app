import { Component, OnInit, Pipe } from '@angular/core';
import { FormGroup, FormBuilder, Validators, PatternValidator } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-vendorprofile',
  templateUrl: './vendorprofile.component.html',
  styleUrls: ['./vendorprofile.component.css']
})

export class VendorprofileComponent implements OnInit {
  
  filterVendorData : string="";

  filterByName : boolean=true;

  filterById : boolean=false;

  Data : FormGroup;

  email : string ="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/";

  constructor(private api: ApiService, private formBuilder:FormBuilder ) { 
    // this.api.getData().subscribe((res)=>{
    //   this.VendorDetails=res;
    //   console.log(res);
    // })
    this.api.getData().subscribe((res)=>{
      console.log(Object.keys(res).length);
      for (let index = 1; index < Object.keys(res).length+1; index++) {
        this.VendorDetails.push(res[index]);
        console.log(this.VendorDetails);
      }
    })

    this.Data=this.formBuilder.group({
      UserName:["",Validators.required],
      EmailId:["",Validators.required],
      Password:["",Validators.required],

    })
  }

  ngOnInit(): void {
  }
  
  VendorDetails : any[]=[];

  filterByNameEvent() {
    this.filterVendorData="";
    this.filterById=false;
    this.filterByName=true;
  }
  filterByIdEvent(){
    this.filterVendorData="";
    this.filterByName=false;
    this.filterById=true;
  }
  postData(data:any){
    console.log("hi");
    this.api.postData(data).subscribe((res)=>{
      console.log(res);
      if(res.UserName == "" || res.EmailId == "" || res.Password ==""){
        console.log('yes');
        alert("Please Enter the data in Forms")
      }
      if(res.UserName !="" && res.EmailId != "" && res.Password !=""){
        alert("Your Data has been sent successfully")
      }
    });
  }

}
