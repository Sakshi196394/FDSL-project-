package com.hotelvahinisaheb.controller;

import com.hotelvahinisaheb.entity.Admin;
import com.hotelvahinisaheb.service.AdminService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    private final AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @GetMapping
    public ResponseEntity<List<Admin>> getAllAdmins() {
        List<Admin> admins = adminService.getAllAdmins();
        admins.forEach(this::sanitizeAdminResponse);
        return ResponseEntity.ok(admins);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Admin> getAdminById(@PathVariable Long id) {
        Admin admin = adminService.getAdminById(id);
        sanitizeAdminResponse(admin);
        return ResponseEntity.ok(admin);
    }

    @PostMapping
    public ResponseEntity<Admin> createAdmin(@Valid @RequestBody Admin admin) {
        Admin created = adminService.createAdmin(admin);
        sanitizeAdminResponse(created);
        return new ResponseEntity<>(created, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Admin> updateAdmin(@PathVariable Long id, @RequestBody Admin admin) {
        Admin updated = adminService.updateAdmin(id, admin);
        sanitizeAdminResponse(updated);
        return ResponseEntity.ok(updated);
    }

    private void sanitizeAdminResponse(Admin admin) {
        if (admin != null) {
            admin.setPassword(null);
        }
    }
}
