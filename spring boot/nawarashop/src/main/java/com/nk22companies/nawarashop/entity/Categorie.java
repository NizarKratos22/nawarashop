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
	
    
	@OneToMany(cascade = CascadeType.ALL,mappedBy="categorie")
	private Set<Produit> produit ;
	
	
	
}
