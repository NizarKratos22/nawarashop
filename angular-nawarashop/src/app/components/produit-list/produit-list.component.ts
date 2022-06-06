import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'src/app/common/produit';
import { ProduitService } from 'src/app/services/produit.service';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-produit-list',
  //templateUrl: './produit-list.component.html',
  templateUrl: './produit-grid.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {

   
  produits:Produit[]=[];
  currentcategoryid: number = 0; 
  searchMode!: boolean;



  constructor(private _produitService: ProduitService,
         private _activatedRoute:ActivatedRoute) {
    
   }

  ngOnInit(): void {
    /*this.listproduits();*/
    this._activatedRoute.paramMap.subscribe(()=>{
      this.listproduits();
    })
  }
  
  listproduits(){
 this.searchMode = this._activatedRoute.snapshot.paramMap.has('keyword');

 if(this.searchMode){
   //do search work
   this.handleSearchProduit();
 }
 else{
   //display produits base on categories 
   this.handleListProduits();
 }

  }


    handleListProduits(){
      const hascategoryid : boolean = this._activatedRoute.snapshot.paramMap.has('id');
      if(hascategoryid){
       const n = this._activatedRoute.snapshot.paramMap.get('id') ;
          if(n!=null){
        this.currentcategoryid= +n ;
         }
      }
      else{
        this.currentcategoryid=1;
      }
   
       this._produitService.getproduits(this.currentcategoryid).subscribe(
         data=> this.produits = data
       )
    }

    handleSearchProduit(){
    const keyword:string='' + this._activatedRoute.snapshot.paramMap.get('keyword');
   this._produitService.searchProduits(keyword).subscribe(
     data =>{
      this.produits =data ;
     }
   )
    }
   
}