import { Component, OnInit } from '@angular/core';
import { Product } from '../../../modele/Products';
import { ProductTsService } from '../../../services/product.ts.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from '../details/details.component';
import { routes } from '../../../app.routes';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hoome',
  standalone: true,
  imports: [DetailsComponent, CommonModule, FormsModule, HttpClientModule,  ReactiveFormsModule,RouterModule],
  providers: [ProductTsService],
  templateUrl: './hoome.component.html',
  styleUrl: './hoome.component.css'
})
export class HoomeComponent implements OnInit {
    name="";

produits:Product[]=[]
constructor(private service:ProductTsService,private router: Router){}
  ngOnInit(): void {
   this.service.getAllProducts().subscribe({
    next:(data)=>{
      if (data && data.length > 0) {
        this.produits = data;
      }else{
        console.log('rien n a trouver')
      }
    }
 
   })
  }

OnSearch(){
  this.service.findByTitle(this.name).subscribe({
  next:(data)=>{
    console.log(data)
    if (data && data.length > 0){
      this.produits = data;
      
    }else{
      console.log('rien n a trouver')
      
    }
  }
  })
    }


    deleteAll() {
      this.service.deleteAll().subscribe({
        next: (res) => {
          console.log(res);
          window.location.reload();
          // Logique à exécuter lorsque la requête réussit
        },
        error: (error) => {
          console.error('Une erreur est survenue :', error);
          // Logique à exécuter en cas d'erreur
        }
      });
    }
    
      navigateToDetails(id?:number){
     
        
         
          this.router.navigate(['/details/', id]);
        
       }
      }
      
 
      


