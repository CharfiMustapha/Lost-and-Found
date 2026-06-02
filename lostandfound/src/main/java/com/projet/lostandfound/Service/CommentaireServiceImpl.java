package com.projet.lostandfound.Service;

import com.projet.lostandfound.Entity.Annonce;
import com.projet.lostandfound.Entity.Client;
import com.projet.lostandfound.Entity.Commentaire;
import com.projet.lostandfound.Entity.CommentaireRq;
import com.projet.lostandfound.Repository.CommentaireRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CommentaireServiceImpl implements  CommentaireService{
    @Autowired
    AnnonceService annonceService;
    @Autowired
    ClientService clientService;
    @Autowired
    CommentaireRepository commentaireRepository;
    @Override
    public Commentaire ajouterCommentaire(CommentaireRq commentaireRq) {
        Optional<Annonce> annonce = annonceService.afficherAnnonceById(commentaireRq.getIdAnnonce());

        System.out.println("help ann"+annonce.get());
        Optional<Client> client = clientService.afficherClientById(commentaireRq.getIdClient());
        System.out.println("help"+client.get());
        if(annonce.isPresent() && client.isPresent())
        {
            return commentaireRepository.save(new Commentaire(client.get(),annonce.get(),commentaireRq.getCom()));

        }
        else
            return commentaireRepository.save(new Commentaire(client.get(),annonce.get(),commentaireRq.getCom()));
    }

    @Override
    public List<Commentaire> listeCommentaire() {
        return commentaireRepository.findAll();
    }

    @Override
    public List<Commentaire> listTop3commentaire(Long id) {
        return commentaireRepository.findTop5ByAnnonceIdOrderByIdDesc(id);
    }

}
