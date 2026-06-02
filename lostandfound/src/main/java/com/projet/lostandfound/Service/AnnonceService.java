package com.projet.lostandfound.Service;

import com.projet.lostandfound.Entity.Annonce;

import java.util.List;
import java.util.Optional;

public interface AnnonceService {
    Annonce ajouterAnnonce (Annonce annonce);
    Annonce modifierAnnonce (Annonce annonce);
    void supprimerAnnonce (Long id);
    List<Annonce> afficherAnnonce();
    Optional<Annonce> afficherAnnonceById(Long id);
    Annonce getById(Long id);

}
