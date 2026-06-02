package com.projet.lostandfound.Service;

import com.projet.lostandfound.Entity.Commentaire;
import com.projet.lostandfound.Entity.CommentaireRq;

import java.util.List;

public interface CommentaireService {
    Commentaire ajouterCommentaire(CommentaireRq commentaireRq);
    List<Commentaire> listeCommentaire();
    List<Commentaire> listTop3commentaire(Long id);
}
