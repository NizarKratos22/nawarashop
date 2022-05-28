import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/common/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {

   
  produits:Produit[]=[];
  constructor(private _produitService: ProduitService) { }

  ngOnInit(): void {
    this.listproduits();
  }
  
  listproduits(){
    this._produitService.getproduits().subscribe(
      data=> this.produits = data
    )
  }
}
