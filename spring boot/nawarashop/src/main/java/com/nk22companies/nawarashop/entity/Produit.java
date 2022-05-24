package com.nk22companies.nawarashop.entity;

import java.math.BigDecimal;
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
