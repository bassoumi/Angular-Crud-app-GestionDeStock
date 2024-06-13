import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../../../modele/Products';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductTsService } from '../../../services/product.ts.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule,HttpClientModule],
  providers: [ProductTsService],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent  implements OnInit {
productId!: number;
  product!: Product; 
  


   ngOnInit():void{
    this.route.params.subscribe(params => {
      this.productId=params['id'];
      this.productService.get(this.productId).subscribe(product =>{
        this.product=product;
      })
    })
  } 

  formgroup:FormGroup;

  constructor(private fb:FormBuilder,private productService: ProductTsService, private route: ActivatedRoute ,private router:Router){
    this.formgroup=this.fb.group({
   
      name:[(''),[Validators.required]],
      Price:[(''),Validators.required],
      
      subject: [''],
      description: ['unpublished'],
    })
  
  }
  back(){
    this.router.navigate(['home']);
  }
  OneDelete(){
    this.productService.delete(this.productId).subscribe({
      next:(res)=>{
        console.log('delete avec sucsess')
        this.router.navigate(['home']);
      },error:(err)=>{
        console.log(err)
      }
    })
  }
  OnUpdate(){
    const data:Product ={
     
      name:this.formgroup.value.name,
      email: this.product.email,
      price:this.formgroup.value.Price,
      description:this.formgroup.value.description,
      subject:this.formgroup.value.subject,

    }
    this.productService.update(this.productId,data).subscribe({
      next:(res)=>{
        console.log(res)
        this.router.navigate(['home']);
      },error:(e)=>{
console.log(e)
      }
    })
  }
  
}
