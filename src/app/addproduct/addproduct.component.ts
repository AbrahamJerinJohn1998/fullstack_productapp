import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  pcode=""
  pname=""
  mfgdate=""
  expdate=""
  branch=""
  price=""
  distributorname=""

  constructor(private api:ApiService){}

readValues=()=>
{

let data:any={"pcode":this.pcode,"pname":this.pname,"mfgdate":this.mfgdate,"expdate":this.expdate,"branch":this.branch,"price":this.price,"distributorname":this.distributorname}
console.log(data)
this.api.addProducts(data).subscribe(
  
    (response:any)=>{
      console.log(response)
      if (response.status=="success") {
        alert("Product added successfully")
        this.pcode=""
        this.pname=""
        this.mfgdate=""
        this.expdate=""
        this.branch=""
        this.price=""
        this.distributorname=""
      } else {
        alert("Something went wrong")
      }
    }
  
)
}
}
