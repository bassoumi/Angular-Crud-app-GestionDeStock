import { Component } from '@angular/core';
import { DetailsComponent } from '../details/details.component';
import { ProductTsService } from '../../../services/product.ts.service';
import { title } from 'process';
import { Product } from '../../../modele/Products';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DetailsComponent,CommonModule,FormsModule,HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
title="";
produits:Product[]=[]
  constructor(private service:ProductTsService){}
  
  OnSerach(){
this.service.findByTitle(this.title).subscribe({
next:(data)=>{
  if (data && data.length > 0) {
    this.produits = data;
    
  }else{
    console.log('rien n a trouver')
  }
}
})
  }




}
