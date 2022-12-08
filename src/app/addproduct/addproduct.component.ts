import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddProductComponent {

  image=""
  productCode=""
  productName=""
  manufacturingDate=""
  expiryDate=""
  brand=""
  price=""
  sellerName=""
  distributorName=""
 
  constructor(private api:ApiService){}
  

  readValue=()=>
  {
    let data:any =
    {"image":this.image ,"productCode":this.productCode,"productName":this.productName,"manufacturingDate":this.manufacturingDate,
    "expiryDate":this.expiryDate,"brand":this.brand,
    "price":this.price,
    "sellerName":this.sellerName,"distributorName":this.distributorName}
    console.log(data)
    this.api.addProduct(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status=="success") {
          alert("success")
          this.productName=""
          this.productCode=""
          this.distributorName=""
          this.brand=""
          this.expiryDate=""
          this.manufacturingDate=""
          this.price=""
          this.sellerName=""
          this.image=""
        } else {
          alert("wrong")
        }
      }
    )
  }
 
  
}
