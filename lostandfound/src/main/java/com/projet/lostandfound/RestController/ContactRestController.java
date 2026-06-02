package com.projet.lostandfound.RestController;

import com.projet.lostandfound.Entity.Contact;
import com.projet.lostandfound.Repository.ContactRepository;
import com.projet.lostandfound.Service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RestController
@CrossOrigin("*")
@RequestMapping(value ="/contact")
public class ContactRestController {
    @Autowired
    ContactRepository contactRepository;

    @Autowired
    ContactService contactService;
    @RequestMapping(method = RequestMethod.POST )
    public Contact AjouterContact (@RequestBody Contact contact){
        return contactService.ajouterContact(contact);
    }
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE )

    public void suppContact(@PathVariable("id") Long id){
        contactService.supprimerContact(id);

    }
    @RequestMapping(method = RequestMethod.GET )
    public List<Contact> afficherContact(){
        return contactService.afficherContact();
    }

}
