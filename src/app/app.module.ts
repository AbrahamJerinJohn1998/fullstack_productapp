import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { SearchproductComponent } from './searchproduct/searchproduct.component';
const myRoute:Routes=[
  {
    path:"",
    component:AddproductComponent
  },
  {
    path:"view",
    component:ViewproductComponent
  },
  {
    path:"search",
    component:SearchproductComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AddproductComponent,
    ViewproductComponent,
    SearchproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
