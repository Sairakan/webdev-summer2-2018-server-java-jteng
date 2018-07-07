package com.example.webdevsummer22018serverjavajteng.repositories;

import org.springframework.data.repository.CrudRepository;

import com.example.webdevsummer22018serverjavajteng.model.User;

public interface UserRepository 
	extends CrudRepository<User, Integer> {
	
}
