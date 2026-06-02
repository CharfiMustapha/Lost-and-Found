package com.projet.lostandfound.Repository;

import com.projet.lostandfound.Entity.Annonce;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnnonceRepository extends JpaRepository <Annonce, Long> {
}
