package com.nk22companies.nawarashop.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.nk22companies.nawarashop.entity.Produit;

@CrossOrigin("http://localhost:4200/")
public interface ProduitRepository extends JpaRepository<Produit, String>{
    
	
	@RestResource(path="categorieid")
	@Query(value = "select * from produit p where p.code_categorie = :codecategorie" , nativeQuery = true)
   Page<Produit> findBycodecategorie(@Param("codecategorie") Long codecategorie ,Pageable pageable);
	
	
	@RestResource(path="searchbykeyword")
	 Page<Produit> findByDesignationContaining(@Param("designation") String keyword ,Pageable pageable);
	
	
}
