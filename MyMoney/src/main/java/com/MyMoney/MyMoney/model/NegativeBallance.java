package com.MyMoney.MyMoney.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "Money")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class NegativeBallance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    String WhatYouDo;

    Long price;

    LocalDate data;
}
