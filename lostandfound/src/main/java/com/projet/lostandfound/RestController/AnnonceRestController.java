package com.projet.lostandfound.RestController;

import com.projet.lostandfound.Entity.Annonce;
import com.projet.lostandfound.Repository.AnnonceRepository;
import com.projet.lostandfound.Service.AnnonceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RestController
@CrossOrigin("*")
@RequestMapping(value ="/annonce")
public class AnnonceRestController {

    @Autowired
    AnnonceRepository annonceRepository;

    @Autowired
    AnnonceService annonceService;
    @RequestMapping(method = RequestMethod.POST )
    public Annonce AjouterAnnonce (@RequestBody Annonce annonce){
      return annonceService.ajouterAnnonce(annonce);
    }
    @RequestMapping(value = "/{id}" ,method = RequestMethod.PUT)
    public Annonce modifierannonce(@PathVariable("id")Long id, @RequestBody Annonce annonce){


        Annonce newAnnonce = annonceService.modifierAnnonce(annonce);
        return newAnnonce;
    }
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE )

    public void suppAnnonce(@PathVariable("id") Long id){
        annonceService.supprimerAnnonce(id);

    }
    @RequestMapping(method = RequestMethod.GET )
    public List<Annonce> afficherAnnonce(){
        return annonceService.afficherAnnonce();

    }
    @RequestMapping(value = "/{id}" , method = RequestMethod.GET)
    public Optional<Annonce> getAnnonceById(@PathVariable("id") Long id){
        Optional<Annonce> annonce = annonceService.afficherAnnonceById(id);
        return annonce;
    }
    @GetMapping("/get-id/{id}")
    public Annonce getById(@PathVariable Long id)
    {
        return annonceService.getById(id);
    }

}
