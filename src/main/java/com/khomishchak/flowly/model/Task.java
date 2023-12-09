package com.khomishchak.flowly.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;

    @ManyToOne(cascade = CascadeType.PERSIST)
    private User reporter;

    @ManyToOne(cascade = CascadeType.PERSIST)
    private User assignees;

    @OneToMany
    private Set<TaskComment> comments;
}
