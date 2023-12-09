package com.khomishchak.flowly.service;

import com.khomishchak.flowly.exception.TaskNotFoundException;
import com.khomishchak.flowly.model.Task;
import com.khomishchak.flowly.model.User;
import com.khomishchak.flowly.model.request.TaskCreationRequest;
import com.khomishchak.flowly.model.request.TaskUpdateRequest;
import com.khomishchak.flowly.repository.TaskRepository;
import org.springframework.stereotype.Service;

@Service
public class TaskServiceImpl implements TaskService {

    private final TaskRepository taskRepository;
    private final UserService userService;

    public TaskServiceImpl(TaskRepository taskRepository, UserService userService) {
        this.taskRepository = taskRepository;
        this.userService    = userService;
    }

    @Override
    public Long createTask(TaskCreationRequest request) {
        User reporter = userService.getUserById(request.reporterId());
        User assignee = userService.getUserById(request.assigneeId());

        Task taskToBeCreated = Task.builder()
                .title(request.title())
                .description(request.description())
                .reporter(reporter)
                .assignees(assignee)
                .build();

        return taskRepository.save(taskToBeCreated).getId();
    }

    @Override
    public Long updateTask(TaskUpdateRequest request) {
        Task taskToBeUpdated = getTaskOrThrowException(request.taskId());
        User assignedUser = userService.getUserById(request.assigneeId());

        taskToBeUpdated.setDescription(request.description());
        taskToBeUpdated.setAssignees(assignedUser);
        taskToBeUpdated.setTitle(request.title());
        return taskRepository.save(taskToBeUpdated).getId();
    }

    @Override
    public void deleteTask(Long taskId) {
        taskRepository.deleteById(taskId);
    }

    private Task getTaskOrThrowException(Long taskId) {
        return taskRepository.findById(taskId).orElseThrow(
                () -> new TaskNotFoundException(String.format("Task with id:%d was not found", taskId)));
    }
}
