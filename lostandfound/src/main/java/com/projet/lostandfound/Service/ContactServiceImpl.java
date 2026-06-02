package com.projet.lostandfound.Service;

import com.projet.lostandfound.Entity.Contact;
import com.projet.lostandfound.Repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service

public class ContactServiceImpl implements  ContactService{
    @Autowired
    ContactRepository contactRepository;
    @Override
    public Contact ajouterContact(Contact contact) {
        return contactRepository.save(contact);
    }

    @Override
    public void supprimerContact(Long id) {
        contactRepository.deleteById(id);
    }

    @Override
    public List<Contact> afficherContact() {
        return contactRepository.findAll();
    }
}
