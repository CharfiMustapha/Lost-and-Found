package com.projet.lostandfound.Service;

import com.projet.lostandfound.Entity.Client;
import com.projet.lostandfound.Entity.ConfirmationToken;
import com.projet.lostandfound.Repository.ClientRepository;
import com.projet.lostandfound.Repository.ConfirmationTokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class ClientServiceImpl implements ClientService {
    private BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
    @Autowired
    EmailService emailService;
    @Autowired
    ClientRepository clientRepository;
    @Autowired
    ConfirmationTokenRepository confirmationTokenRepository;
    @Override
    public ResponseEntity<?> ajouterClient(Client client) {   //ResponseEntity<?> 1 ou plusieurs return
        Client existingUser = clientRepository.findByEmail(client.getEmail());
        if (existingUser!=null) {
            return ResponseEntity.badRequest().body("Error: Email is already in use!");
        }
        client.setMp(this.bCryptPasswordEncoder.encode(client.getMp()));
        clientRepository.save(client);
        ConfirmationToken confirmationToken = new ConfirmationToken(client);
        confirmationTokenRepository.save(confirmationToken);
        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(client.getEmail());
        mailMessage.setSubject("Complete Registration!");
        mailMessage.setText("To confirm your account, please click here : "
                +"http://localhost:8081/api/client/confirm-account?token="+confirmationToken.getConfirmationToken());
        emailService.sendEmail(mailMessage);

        System.out.println("Confirmation Token: " + confirmationToken.getConfirmationToken());

        return ResponseEntity.ok("Verify email by the link sent on your email address");
    }

    @Override
    public Client modifierClient(Client client) {
        return clientRepository.save(client);
    }

    @Override
    public void supprimerClient(Long id) {
        clientRepository.deleteById(id);
    }

    @Override
    public List<Client> afficherClient() {
        return clientRepository.findAll();
    }

    @Override
    public Optional<Client> afficherClientById(Long id) {
        return clientRepository.findById(id);
    }

    @Override
    public ResponseEntity<?> confirmEmail(String confirmationToken) {
        ConfirmationToken token = confirmationTokenRepository.findByConfirmationToken(confirmationToken);

        if(token != null)
        {

            Client client = clientRepository.findByEmail(token.getClient().getEmail());
            System.out.println("email from token " +token.getClient().getEmail());
            client.setEtat(true);
            clientRepository.save(client);
            return ResponseEntity.ok("Email verified successfully! "+"<a href='http://localhost:4200/client/login'>Login</a>");
        }
        return ResponseEntity.badRequest().body("Error: Couldn't verify email");
    }

}
