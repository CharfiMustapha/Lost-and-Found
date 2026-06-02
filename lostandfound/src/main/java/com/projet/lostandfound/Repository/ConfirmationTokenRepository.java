package com.projet.lostandfound.Repository;

import com.projet.lostandfound.Entity.Admin;
import com.projet.lostandfound.Entity.ConfirmationToken;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConfirmationTokenRepository extends JpaRepository<ConfirmationToken, Long> {
    ConfirmationToken findByConfirmationToken(String confirmationToken);
}
