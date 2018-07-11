package com.example.webdevsummer22018serverjavajteng.services;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.webdevsummer22018serverjavajteng.models.User;
import com.example.webdevsummer22018serverjavajteng.repositories.UserRepository;

@RestController
public class UserService {
	
	@Autowired
	UserRepository userRepository;
	
	@PostMapping("/register")
	public User register(@RequestBody User user, HttpSession session) {
		User currentUser =  userRepository.save(user);
		
		session.setAttribute("currentUser", currentUser);
		
		return currentUser;
	}
	
	@GetMapping("/checkLogin")
	public User checkLogin(HttpSession session) {
		return (User) session.getAttribute("currentUser");
	}
	
	@PostMapping("/login")
	public User login(@RequestBody User user) {
		return userRepository.findUserByCredentials(user.getUsername(), user.getPassword());
	}
	
	@PutMapping("/api/user/{userId}")
	public User updateUser(
			@PathVariable("userId") int id,
			@RequestBody User newUser) {
		Optional<User> optional = userRepository.findById(id);
		if (optional.isPresent()) {
			User user = optional.get();
			user.setFirstName(newUser.getFirstName());user.setLastName(newUser.getLastName());
			return userRepository.save(user);
		} else
			return null;
	}
	
	@GetMapping("/api/user/{userId}")
	public Optional<User> findUserByUserId(@PathVariable("userId") String userId) {
		return userRepository.findById(Integer.parseInt(userId));

	@PostMapping("/api/user")
	public User addUser(@RequestBody User user) {
		System.out.println(user);
		User currentUser = userRepository.save(user);
		return currentUser;

	}
	
	@GetMapping("/api/user")
	public List<User> findAllUsers() {
		return (List<User>) userRepository.findAll();
	}
	
	@GetMapping("/api/user/{id}")
	public Optional<User> findUserById(@PathVariable("id") Integer id) {
		return userRepository.findById(id);
	}
	
	@PutMapping("/api/user/{id}")
	public User updateUser(@RequestBody User user) {
		User currentUser = userRepository.save(user);
		return currentUser;
	}
	
	@DeleteMapping("/api/user/{id}")
	public void delete(@PathVariable("id") Integer id) {
		userRepository.deleteById(id);
	}
}
