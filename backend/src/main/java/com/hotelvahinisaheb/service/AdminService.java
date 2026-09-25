package com.hotelvahinisaheb.service;

import com.hotelvahinisaheb.entity.Admin;
import com.hotelvahinisaheb.exception.ResourceNotFoundException;
import com.hotelvahinisaheb.repository.AdminRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class AdminService {

    private final AdminRepository adminRepository;

    public AdminService(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    @Transactional(readOnly = true)
    public List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Admin getAdminById(Long id) {
        return adminRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Admin not found with id: " + id));
    }

    @Transactional(readOnly = true)
    public Optional<Admin> findByUsername(String username) {
        return adminRepository.findByUsername(username);
    }

    public Admin createAdmin(Admin admin) {
        if (adminRepository.existsByUsername(admin.getUsername())) {
            throw new IllegalArgumentException("Username already exists: " + admin.getUsername());
        }
        return adminRepository.save(admin);
    }

    public Admin updateAdmin(Long id, Admin updatedAdmin) {
        Admin existing = getAdminById(id);

        if (updatedAdmin.getUsername() != null && !updatedAdmin.getUsername().equals(existing.getUsername())) {
            if (adminRepository.existsByUsername(updatedAdmin.getUsername())) {
                throw new IllegalArgumentException("Username already in use: " + updatedAdmin.getUsername());
            }
            existing.setUsername(updatedAdmin.getUsername());
        }

        if (updatedAdmin.getPassword() != null && !updatedAdmin.getPassword().isBlank()) {
            existing.setPassword(updatedAdmin.getPassword());
        }

        if (updatedAdmin.getRole() != null) {
            existing.setRole(updatedAdmin.getRole());
        }

        if (updatedAdmin.getActive() != null) {
            existing.setActive(updatedAdmin.getActive());
        }

        return adminRepository.save(existing);
    }
}
