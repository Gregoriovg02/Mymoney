package com.MyMoney.MyMoney.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.MyMoney.MyMoney.model.NegativeBallance;

@Repository
public interface NegativeBallanceRepository extends JpaRepository<NegativeBallance ,Long>{

}
