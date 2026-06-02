package com.projet.lostandfound.Service;

import com.projet.lostandfound.Entity.Client;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

public interface ClientService {
    ResponseEntity<?> ajouterClient (Client client);
    Client modifierClient (Client client);
    void supprimerClient (Long id);
    List<Client> afficherClient();
    Optional<Client> afficherClientById(Long id);

    ResponseEntity<?> confirmEmail(String confirmationToken);

}
