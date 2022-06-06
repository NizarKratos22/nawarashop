import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {RouterModule , Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { ProduitListComponent } from './components/produit-list/produit-list.component';
import { ProduitService } from './services/produit.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProduitCategoryComponent } from './components/produit-category/produit-category.component';
import { SearchComponent } from './components/search/search.component';
import { ProduitDetailsComponent } from './components/produit-details/produit-details.component';


const routes: Routes =[
    {path:'produits/:id' ,component:ProduitDetailsComponent},
     {path:'produits' ,component:ProduitListComponent},
     {path:'search/:keyword' ,component:ProduitListComponent},
     {path:'categorie/:id' ,component:ProduitListComponent},
     {path:'' ,redirectTo:'/produits' ,pathMatch:'full'},
     {path:'**' ,component: PageNotFoundComponent},
     

];


@NgModule({
  declarations: [
    AppComponent,
    ProduitListComponent,
    PageNotFoundComponent,
    ProduitCategoryComponent,
    SearchComponent,
    ProduitDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ProduitService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
