package com.projet.lostandfound.Repository;

import com.projet.lostandfound.Entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contact, Long> {
}
