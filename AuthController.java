package com.example.demo.controller;

import com.example.demo.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin
public class AuthController {

    private final AuthenticationService authenticationService;

    @PostMapping("/login")
    public String login(@RequestParam String username, @RequestParam String password) {
        return authenticationService.login(username, password);
    }
}
