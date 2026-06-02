package com.projet.lostandfound.Repository;

import com.projet.lostandfound.Entity.Commentaire;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentaireRepository extends JpaRepository <Commentaire, Long> {

    List<Commentaire> findTop5ByAnnonceIdOrderByIdDesc(Long id);
}
