package com.khomishchak.flowly.controller;

import com.khomishchak.flowly.model.request.RegisterRequest;
import com.khomishchak.flowly.model.request.UserUpdateRequest;
import com.khomishchak.flowly.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<Long> registerUser(@RequestBody RegisterRequest request) {
        return new ResponseEntity<>(userService.registerUser(request), HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<Long> updateUser(@RequestBody UserUpdateRequest request) {
        return new ResponseEntity<>(userService.updateUser(request), HttpStatus.OK);
    }

    @DeleteMapping("/{userId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteUser(@PathVariable Long userId) {
        userService.deleteUser(userId);
    }
}
