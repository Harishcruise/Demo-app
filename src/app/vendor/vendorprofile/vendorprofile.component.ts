import { Component, OnInit, Pipe } from '@angular/core';


@Component({
  selector: 'app-vendorprofile',
  templateUrl: './vendorprofile.component.html',
  styleUrls: ['./vendorprofile.component.css']
})

export class VendorprofileComponent implements OnInit {
  
  filterVendorData : string="";

  filterByName : boolean=true;

  filterById : boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  
  VendorDetails : any[]=[
    {
      Id:'00014633',
      VendorName: 'GARY ROLLING STORE',
      FirstLicense:'6/7/2011',
      LastLicense:'7/1/2014',
      Address:'1132 ALBANY AV',
      City:'HARTFORD',
    },
    {
      Id:'00017998',
      VendorName: 'BROWN SMOKE LLC',
      FirstLicense:'7/1/2018',
      LastLicense:'7/1/2018',
      Address:'938 BLOOMFIELD AV',
      City:'WINDSOR',
    },
    {
      Id:'00018060',
      VendorName: 'AJ HOT DOG LLC',
      FirstLicense:'6/7/2011',
      LastLicense:'7/1/2014',
      Address:'1132 ALBANY AV',
      City:'WINDSOR',
    },
    {
      Id:'00011191',
      VendorName: 'L.L.L. HOT DOGS',
      FirstLicense:'6/7/2011',
      LastLicense:'7/1/2014',
      Address:'71 FREEMAN ST',
      City:'HARTFORD',
    },
    {
      Id:'00014623',
      VendorName: 'CRISTINA FOOD WAGON',
      FirstLicense:'6/7/2011',
      LastLicense:'7/1/2014',
      Address:'1132 ALBANY AV',
      City:'HARTFORD',
    },
    {
      Id:'00043414',
      VendorName: 'BEARS SMOKEHOUSE BBQ',
      FirstLicense:'6/7/2011',
      LastLicense:'7/1/2014',
      Address:'1132 ALBANY AV',
      City:'HARTFORD',
    },
    {
      Id:'00074523',
      VendorName: 'HIGH WATER KITCHEN LLC',
      FirstLicense:'6/7/2011',
      LastLicense:'7/1/2014',
      Address:'1132 ALBANY AV',
      City:'HARTFORD',
    },
    
  ]; 

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

}
