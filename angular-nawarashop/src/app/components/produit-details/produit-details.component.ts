import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'src/app/common/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produit-details',
  templateUrl: './produit-details.component.html',
  styleUrls: ['./produit-details.component.css']
})
export class ProduitDetailsComponent implements OnInit {

 produit:Produit = new Produit();


  constructor(private _activatedRoute: ActivatedRoute,
    private _produitService: ProduitService) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(
    () =>{
      this.getProduitInfo();
    }
    )
  }

  getProduitInfo(){
     const n  = this._activatedRoute.snapshot.paramMap.get('id');
     if(n!=null){
     const id =''+n;
    this._produitService.get(id).subscribe(
      data => {
        this.produit=data;
      }
    )
  }

  }

}
