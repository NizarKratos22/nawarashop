package com.nk22companies.nawarashop.entity;

import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="categorie")
@Setter
@Getter
@ToString
public class Categorie {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long code_categorie ;
	
	@Column(name="nom_categorie")
	private String nom_categorie ; 
	
	@Column(name="famille")
	private String famille ;
	
	public Long getCode_categorie() {
		return code_categorie;
	}


	public void setCode_categorie(Long code_categorie) {
		this.code_categorie = code_categorie;
	}


	public String getNom_categorie() {
		return nom_categorie;
	}


	public void setNom_categorie(String nom_categorie) {
		this.nom_categorie = nom_categorie;
	}


	public String getFamille() {
		return famille;
	}


	public void setFamille(String famille) {
		this.famille = famille;
	}


	public Set<Produit> getProduit() {
		return produit;
	}


	public void setProduit(Set<Produit> produit) {
		this.produit = produit;
	}


	
    
	@OneToMany(cascade = CascadeType.ALL,mappedBy="categorie")
	private Set<Produit> produit ;
	
	
	
}
