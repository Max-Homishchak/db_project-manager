package com.khomishchak.flowly.service;

import com.khomishchak.flowly.model.request.TaskCreationRequest;
import com.khomishchak.flowly.model.request.TaskUpdateRequest;

public interface TaskService {
    Long createTask(TaskCreationRequest request);
    Long updateTask(TaskUpdateRequest request);
    void deleteTask(Long taskId);
}
