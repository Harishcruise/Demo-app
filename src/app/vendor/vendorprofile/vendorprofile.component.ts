import { Component, OnInit, Pipe } from '@angular/core';


@Component({
  selector: 'app-vendorprofile',
  templateUrl: './vendorprofile.component.html',
  styleUrls: ['./vendorprofile.component.css']
})

export class VendorprofileComponent implements OnInit {
  
  filterVendorData : string="";

  constructor() { }

  ngOnInit(): void {
  }
  
  VendorDetails : any[]=[
    {
      Id:14633,
      VendorName: 'GARY ROLLING STORE',
      FirstLicense:'6/7/2011',
      LastLicense:'7/1/2014',
      Address:'1132 ALBANY AV',
      City:'HARTFORD',
    },
    {
      Id:17998,
      VendorName: 'BROWN SMOKE LLC',
      FirstLicense:'7/1/2018',
      LastLicense:'7/1/2018',
      Address:'938 BLOOMFIELD AV',
      City:'WINDSOR',
    },
    {
      Id:18060,
      VendorName: 'GARY ROLLING STORE',
      FirstLicense:'6/7/2011',
      LastLicense:'7/1/2014',
      Address:'1132 ALBANY AV',
      City:'WINDSOR',
    },
    {
      Id:11191,
      VendorName: 'L.L.L. HOT DOGS',
      FirstLicense:'6/7/2011',
      LastLicense:'7/1/2014',
      Address:'71 FREEMAN ST',
      City:'HARTFORD',
    },
    {
      Id:14633,
      VendorName: 'GARY ROLLING STORE',
      FirstLicense:'6/7/2011',
      LastLicense:'7/1/2014',
      Address:'1132 ALBANY AV',
      City:'HARTFORD',
    },
    {
      Id:14633,
      VendorName: 'GARY ROLLING STORE',
      FirstLicense:'6/7/2011',
      LastLicense:'7/1/2014',
      Address:'1132 ALBANY AV',
      City:'HARTFORD',
    },
    {
      Id:14633,
      VendorName: 'GARY ROLLING STORE',
      FirstLicense:'6/7/2011',
      LastLicense:'7/1/2014',
      Address:'1132 ALBANY AV',
      City:'HARTFORD',
    },
    
  ]; 

}
