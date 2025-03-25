package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HelloControler {  // Було "HelloControler", виправлено назву класу

    @GetMapping("/hello")
    public String sayHello() {
        return "Привіт від Spring Bootч!";
    }
}
