import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewProductComponent {

  constructor(private api:ApiService)
  {
    api.fetchProduct().subscribe(
      (response)=>
      {
        this.view=response;
      }
    )
  }
  view:any=[]

}