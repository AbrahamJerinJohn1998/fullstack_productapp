import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchproduct',
  templateUrl: './searchproduct.component.html',
  styleUrls: ['./searchproduct.component.css']
})
export class SearchproductComponent {

  productCode=""
  constructor(private api:ApiService){}
  searchData:any=[]
  readValue=()=>
  {
    let data:any={"productCode":this.productCode}
    console.log(data)
    this.api.searchProduct(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.length==0) {
          alert("Invalid product code")
          
        } else {
          this.searchData=response
          
        }
      }
    )
    
  }
}
