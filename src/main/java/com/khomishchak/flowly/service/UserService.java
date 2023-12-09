package com.khomishchak.flowly.service;

import com.khomishchak.flowly.model.User;
import com.khomishchak.flowly.model.request.RegisterRequest;
import com.khomishchak.flowly.model.request.UserUpdateRequest;

public interface UserService {
    User getUserById(Long userId);
    Long registerUser(RegisterRequest request);
    Long updateUser(UserUpdateRequest request);
    void deleteUser(Long userId);
}
