package com.projet.lostandfound.Repository;

import com.projet.lostandfound.Entity.Admin;
import com.projet.lostandfound.Entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Long> {
    boolean existsByEmail(String email);

    Client findClientByEmail(String email);

    Client findByEmail(String email);
}
