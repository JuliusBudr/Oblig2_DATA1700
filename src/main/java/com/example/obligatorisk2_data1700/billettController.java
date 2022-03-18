package com.example.obligatorisk2_data1700;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class billettController {
    private final List<billett> alleBilletter = new ArrayList<>();

    @PostMapping({"/lagre"})
    public void lagreBillett(billett innBillett) {
        alleBilletter.add(innBillett);
    }

    @GetMapping({"/hentAlle"})
    public List<billett> hentAlle() {
        return alleBilletter;
    }

    @GetMapping({"/slettAlle"})
    public void slettAlle() {
        alleBilletter.clear();
    }
}