import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../modele/Products';
import { Observable, catchError, forkJoin, pipe, switchMap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductTsService {
 
  
  private ApiUrl = "http://localhost:3000";
  constructor(private http:HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.ApiUrl + "/products")
    .pipe(catchError(this.handleError));
}
  get(id:number):Observable<Product>{
    return this.http.get<Product>(`${this.ApiUrl}/products/${id}`)
    .pipe(catchError(this.handleError));
  }
  delete(id:number):Observable<Product>{
    return this.http.delete<Product>(`${this.ApiUrl}/products/${id}`).pipe(catchError(this.handleError));
  }
  create(data:Product):Observable<Product>{
    return this.http.post<Product>(`${this.ApiUrl}/products/`,data).pipe(catchError(this.handleError));
  }
  update(id:number,data:Product):Observable<Product>{
    return this.http.put<Product>(`${this.ApiUrl}/products/${id}`,data).pipe(catchError(this.handleError));
  }
  deleteAll(): Observable<void> {
    // Récupérer tous les produits
    return this.http.get<Product[]>(`${this.ApiUrl}/products`).pipe(
      switchMap(products => {
        // Créer un tableau d'observables de suppression pour chaque produit
        const deleteRequests = products.map(product => {
          return this.http.delete<void>(`${this.ApiUrl}/products/${product.id}`);
        });
        // Fusionner tous les observables de suppression en un seul
        return forkJoin(deleteRequests);
      }),
      catchError(this.handleError)
    );
  }
  
findByTitle(name:string):Observable<Product[]>{
  return this.http.get<Product[]>(`${this.ApiUrl}/products?name=${name}`).pipe(catchError(this.handleError));;
}



private handleError(error: any): Observable<any> {
  console.error('An error occurred:', error);
  return throwError(error);
}

}
