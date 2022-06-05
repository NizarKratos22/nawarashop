package com.nk22companies.nawarashop.entity;

import java.math.BigDecimal;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="produit")
@Setter
@Getter
@ToString
public class Produit {
public String getRef_pdt() {
		return ref_pdt;
	}


	public void setRef_pdt(String ref_pdt) {
		this.ref_pdt = ref_pdt;
	}


	public String getDesignation() {
		return designation;
	}


	public void setDesignation(String designation) {
		this.designation = designation;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public BigDecimal getPrix() {
		return prix;
	}


	public void setPrix(BigDecimal prix) {
		this.prix = prix;
	}


	public String getImage() {
		return image;
	}


	public void setImage(String image) {
		this.image = image;
	}


	public int getQte_stock() {
		return qte_stock;
	}


	public void setQte_stock(int qte_stock) {
		this.qte_stock = qte_stock;
	}


	public Categorie getCategorie() {
		return categorie;
	}


	public void setCategorie(Categorie categorie) {
		this.categorie = categorie;
	}


@Id private String ref_pdt ; 

@Column(name="designation")
private String designation ; 
@Column(name="description")
private String description ; 

@Column(name="prix")
private BigDecimal prix ; 

@Column(name="image")
private String image ; 

@Column(name="qte_stock")
private int qte_stock ; 


@ManyToOne
@JoinColumn(name="code_categorie",nullable=false)
private Categorie categorie ;





}
