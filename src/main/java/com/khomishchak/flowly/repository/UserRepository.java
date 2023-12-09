package com.khomishchak.flowly.repository;

import com.khomishchak.flowly.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
