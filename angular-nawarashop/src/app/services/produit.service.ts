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
  getproduits(): Observable<Produit[]>{
    return this.httpClient.get<GetResponseProduits>(this.baseUrl).pipe(
       map(response => response._embedded.produits)
    );
  }
}

interface GetResponseProduits{
  _embedded:{
    produits:Produit[];
  }
}
