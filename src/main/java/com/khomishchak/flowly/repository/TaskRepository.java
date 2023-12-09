package com.khomishchak.flowly.repository;

import com.khomishchak.flowly.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {

}
