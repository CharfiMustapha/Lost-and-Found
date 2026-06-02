package com.projet.lostandfound.RestController;

import com.projet.lostandfound.Entity.Commentaire;
import com.projet.lostandfound.Entity.CommentaireRq;
import com.projet.lostandfound.Service.CommentaireService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping(value ="/commentaire")
public class CommentaireRestController {
    @Autowired
    CommentaireService commentaireService;
    @RequestMapping(method = RequestMethod.POST)
    public Commentaire ajoutcommentaire(@RequestBody CommentaireRq commentaire){
        return commentaireService.ajouterCommentaire(commentaire);
    }
    @RequestMapping(method = RequestMethod.GET )
    public List<Commentaire> afficherCommentaire(){
        return commentaireService.listeCommentaire();

    }
    @GetMapping("get-top-3-by-offre/{id}")
    public  List<Commentaire> getTop3(@PathVariable Long id)
    {
        return commentaireService.listTop3commentaire(id);
    }
}
