import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchproduct',
  templateUrl: './searchproduct.component.html',
  styleUrls: ['./searchproduct.component.css']
})
export class SearchproductComponent {

  pcode=""
  constructor(private api:ApiService){}
  searchData:any=[]
  readValue=()=>
  {
    let data:any={"pcode":this.pcode}
    console.log(data)
    this.api.searchProducts(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.length==0) {
          alert("Invalid coursetitle")
          
        } else {
          this.searchData=response
          
        }
      }
    )
    
  }
}
