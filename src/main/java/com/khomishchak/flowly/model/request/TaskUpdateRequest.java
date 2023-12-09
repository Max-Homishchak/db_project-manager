package com.khomishchak.flowly.model.request;

public record TaskUpdateRequest(Long taskId, String title, String description, Long assigneeId) {
}
