package com.khomishchak.flowly.model.request;

public record UserUpdateRequest(Long userId, String username, String newPassword) {
}
