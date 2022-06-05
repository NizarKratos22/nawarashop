import { Component, OnInit } from '@angular/core';
import { ProduitCategory } from 'src/app/common/produit-category';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produit-category',
  templateUrl: './produit-category.component.html',
  styleUrls: ['./produit-category.component.css']
})
export class ProduitCategoryComponent implements OnInit {

  produitCategories!: ProduitCategory[] ;

  constructor(private _produitService:ProduitService) { }

  ngOnInit(): void {
    this.listProduitCategories();
  }

listProduitCategories(){
this._produitService.getProduitCategories().subscribe(
  data=>this.produitCategories =data
);
}


}
