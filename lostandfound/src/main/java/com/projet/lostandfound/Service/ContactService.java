package com.projet.lostandfound.Service;

import com.projet.lostandfound.Entity.Contact;

import java.util.List;
import java.util.Optional;

public interface ContactService {
    Contact ajouterContact (Contact contact);
    void supprimerContact (Long id);
    List<Contact> afficherContact();
}
