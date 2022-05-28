package com.nk22companies.nawarashop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.nk22companies.nawarashop.entity.Produit;

@CrossOrigin("http://localhost:4200/")
public interface ProduitRepository extends JpaRepository<Produit, String>{

}
