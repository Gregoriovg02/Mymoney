package com.MyMoney.MyMoney.controller;

import com.MyMoney.MyMoney.model.NegativeBallance;
import com.MyMoney.MyMoney.repository.NegativeBallanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/negative-ballance")
public class NegativeBallanceController {

    @Autowired
    private NegativeBallanceRepository repository;

    @GetMapping
    public ResponseEntity<List<NegativeBallance>> getAll() {
        List<NegativeBallance> negativeBallances = repository.findAll();
        return ResponseEntity.ok(negativeBallances);
    }

    @GetMapping("/{id}")
    public ResponseEntity<NegativeBallance> getById(@PathVariable Long id) {
        NegativeBallance negativeBallance = repository.findById(id).orElseThrow();
        return ResponseEntity.ok(negativeBallance);
    }

    @PostMapping
    public ResponseEntity<NegativeBallance> create(@RequestBody NegativeBallance negativeBallance) {
        NegativeBallance createdNegativeBallance = repository.save(negativeBallance);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdNegativeBallance);
    }

    @PutMapping("/{id}")
    public ResponseEntity<NegativeBallance> update(@PathVariable Long id, @RequestBody NegativeBallance negativeBallance) {
        NegativeBallance existingNegativeBallance = repository.findById(id).orElseThrow();
        existingNegativeBallance.setWhatYouDo(negativeBallance.getWhatYouDo());
        existingNegativeBallance.setPrice(negativeBallance.getPrice());
        existingNegativeBallance.setData(negativeBallance.getData());
        NegativeBallance updatedNegativeBallance = repository.save(existingNegativeBallance);
        return ResponseEntity.ok(updatedNegativeBallance);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        repository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}