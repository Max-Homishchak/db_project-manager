package com.khomishchak.flowly.service;

import com.khomishchak.flowly.model.User;
import org.springframework.stereotype.Service;

@Service
public class ValidatorServiceImpl implements ValidatorService {
    @Override
    public boolean validateOldUserPassword(User user, String newPassword) {
        String hashedPassword = newPassword;
        return hashedPassword.equals(user.getPassword());
    }
}
