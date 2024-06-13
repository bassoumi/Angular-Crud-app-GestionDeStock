import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../../../modele/Products';
import { ProductTsService } from '../../../services/product.ts.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule,HttpClientModule],
  providers: [ProductTsService],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
formgroup:FormGroup; 
product!: Product;

constructor(private fb:FormBuilder,private service:ProductTsService,private router:Router){
  this.formgroup=this.fb.group({
    email:[(''),[Validators.required,Validators.email]],
    name:[(''),[Validators.required]],
    Price:[(''),Validators.required],
    query: [''] ,
    subject: ['Unpublished'],

  })

}

onSend(): void {
  
  if (this.formgroup.valid) {
    const addData = new Product(
      this.formgroup.value.email,
      this.formgroup.value.name,
      this.formgroup.value.Price,
      this.formgroup.value.description,
      this.formgroup.value.subject
    );
    this.service.create(addData).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(['']);
      },
      error: (e) => {
        console.log(e);
      },
    })
  } else {
    console.log('Erreur: le formulaire n\'est pas valide');
  }
}
}
