package com.khomishchak.flowly.controller;

import com.khomishchak.flowly.model.request.TaskCreationRequest;
import com.khomishchak.flowly.model.request.TaskUpdateRequest;
import com.khomishchak.flowly.service.TaskService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/tasks")
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @PostMapping
    public Long createTask(@RequestBody TaskCreationRequest request) {
        return taskService.createTask(request);
    }

    @PutMapping
    public Long updateTask(@RequestBody TaskUpdateRequest request) {
        return taskService.updateTask(request);
    }

    @DeleteMapping("/{taskId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteTask(@PathVariable Long taskId) {
        taskService.deleteTask(taskId);
    }
}
