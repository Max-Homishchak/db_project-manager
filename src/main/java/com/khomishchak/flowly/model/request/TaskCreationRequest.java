package com.khomishchak.flowly.model.request;

import java.util.Set;

public record TaskCreationRequest(String title, String description, Long reporterId, Long assigneeId) {
}
