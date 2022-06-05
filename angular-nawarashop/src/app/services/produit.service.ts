import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Produit } from '../common/produit';
@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private baseUrl = "http://localhost:8082/api/v1/produits";


  constructor(private httpClient: HttpClient) { }
  getproduits(theCategoryId: number): Observable<Produit[]>{
    const searchUrl =`${this.baseUrl}/search/categorieid?codecategorie=${theCategoryId}`;
    return this.httpClient.get<GetResponseProduits>(searchUrl).pipe(
       map(response => response._embedded.produits)
    );
  }
}

interface GetResponseProduits{
  _embedded:{
    produits:Produit[];
  }
}
