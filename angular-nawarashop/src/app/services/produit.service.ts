import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Produit } from '../common/produit';
import { ProduitCategory } from '../common/produit-category';
@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private baseUrl = "http://localhost:8082/api/v1/produits";
  private categoryUrl = "http://localhost:8082/api/v1/produits-categorie";

  constructor(private httpClient: HttpClient) { }
  getproduits(theCategoryId: number): Observable<Produit[]>{
    const searchUrl =`${this.baseUrl}/search/categorieid?codecategorie=${theCategoryId}`;
    return this.httpClient.get<GetResponseProduits>(searchUrl).pipe(
       map(response => response._embedded.produits)
    );
  }

  getProduitCategories(): Observable<ProduitCategory[]>{
    return this.httpClient.get<GetResponseProduitCategory>(this.categoryUrl).pipe(
      map(response => response._embedded.categories)
    );
  }


}

interface GetResponseProduits{
  _embedded:{
    produits:Produit[];
  }
}

interface GetResponseProduitCategory{
  _embedded:{
    categories:ProduitCategory[];
  }
}

