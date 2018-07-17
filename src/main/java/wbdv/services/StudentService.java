package wbdv.services;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

import wbdv.models.Student;
import wbdv.repositories.StudentRepository;

@RestController
public class StudentService {
	
	@Autowired
	StudentRepository studentRepository;
	
	@GetMapping("/api/student")
	public Iterable<Student> findAllStudents() {
		return studentRepository.findAll();
	}	
}
