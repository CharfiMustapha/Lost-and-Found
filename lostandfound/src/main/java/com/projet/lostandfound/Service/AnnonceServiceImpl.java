package com.projet.lostandfound.Service;

import com.projet.lostandfound.Entity.Annonce;
import com.projet.lostandfound.Repository.AnnonceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class AnnonceServiceImpl implements AnnonceService {
    @Autowired
    AnnonceRepository annonceRepository;

    @Override
    public Annonce ajouterAnnonce(Annonce annonce) {
        return annonceRepository.save(annonce);
    }

    @Override
    public Annonce modifierAnnonce(Annonce annonce) {
        return annonceRepository.save(annonce);    }

    @Override
    public void supprimerAnnonce(Long id) {
        annonceRepository.deleteById(id);
    }

    @Override
    public List<Annonce> afficherAnnonce() {
        return annonceRepository.findAll();
    }

    @Override
    public Optional<Annonce> afficherAnnonceById(Long id) {
        return annonceRepository.findById(id);
    }

    @Override
    public Annonce getById(Long id) {
        return annonceRepository.findById(id).get();
    }

}
