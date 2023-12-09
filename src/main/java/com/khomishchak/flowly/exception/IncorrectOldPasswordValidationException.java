package com.khomishchak.flowly.exception;

public class IncorrectOldPasswordValidationException extends RuntimeException {
    public IncorrectOldPasswordValidationException(String message) {
        super(message);
    }
}
