package com.nk22companies.nawarashop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.nk22companies.nawarashop.entity.Categorie;


@CrossOrigin("http://localhost:4200/")
@RepositoryRestResource(collectionResourceRel="categories", path="produits-categorie")
public interface CategoryRepository extends JpaRepository<Categorie, Long>{
	
	

	
}
