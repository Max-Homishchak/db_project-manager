package com.khomishchak.flowly.service;

import com.khomishchak.flowly.model.User;

public interface ValidatorService {
    boolean validateOldUserPassword(User user, String newPassword);
}
