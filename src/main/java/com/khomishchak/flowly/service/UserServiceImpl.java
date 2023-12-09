package com.khomishchak.flowly.service;

import com.khomishchak.flowly.exception.IncorrectOldPasswordValidationException;
import com.khomishchak.flowly.exception.UserNotFoundException;
import com.khomishchak.flowly.model.User;
import com.khomishchak.flowly.model.request.RegisterRequest;
import com.khomishchak.flowly.model.request.UserUpdateRequest;
import com.khomishchak.flowly.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final ValidatorService validatorService;

    public UserServiceImpl(UserRepository userRepository, ValidatorService validatorService) {
        this.userRepository = userRepository;
        this.validatorService = validatorService;
    }

    @Override
    public User getUserById(Long userId) {
        return getUserOrThrowException(userId);
    }

    @Override
    public Long registerUser(RegisterRequest request) {
        User user = User.builder()
                .username(request.username())
                .password(request.password()) // should be encrypted
                .build();

        return userRepository.save(user).getId();
    }

    @Override
    public Long updateUser(UserUpdateRequest request) {
        User userToBeUpdated = getUserOrThrowException(request.userId());

        if (validatorService.validateOldUserPassword(userToBeUpdated, request.newPassword())) {
            throw new IncorrectOldPasswordValidationException("You have entered incorrect old password");
        }

        userToBeUpdated.setUsername(request.username());
        userToBeUpdated.setPassword(request.newPassword());
        return userRepository.save(userToBeUpdated).getId();
    }

    @Override
    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }

    private User getUserOrThrowException(Long userId) {
        return userRepository.findById(userId).orElseThrow(
                () -> new UserNotFoundException(String.format("User with id:%d was not found", userId)));
    }
}
