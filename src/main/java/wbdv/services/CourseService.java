package wbdv.services;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import wbdv.models.Course;
import wbdv.models.User;
import wbdv.repositories.CourseRepository;

@CrossOrigin
public class CourseService {
	
	@Autowired
	CourseRepository courseRepository;
	
	@PostMapping("/api/course")
	public Course createCourse(@RequestBody Course course) {
		return courseRepository.save(course);
	}
	@DeleteMapping("/api/course/{id}")
	public void delete(@PathVariable("id") Integer id) {
		courseRepository.deleteById(id);
	}
	
	@GetMapping("/api/course")
	public List<Course> findAllCourses() {
		return (List<Course>) courseRepository.findAll();
	}
	
	@GetMapping("/api/user/{id}")
	public Optional<Course> findCourseByUserId(@PathVariable("id") String id) {
		return courseRepository.findById(Integer.parseInt(id));
	}
	
	@PutMapping("/api/course/{id}")
	public Course updateUser(@PathVariable("id") String id, @RequestBody Course course) {
		Optional<Course> opt = courseRepository.findById(Integer.parseInt(id));
		if (opt.isPresent()) {
			Course currentCourse = opt.get();
			currentCourse.setTitle(course.getTitle());
			currentCourse.setOwner(course.getOwner());
			currentCourse.setModified(course.getModified());
			currentCourse.setCreated(course.getCreated());
			
			return courseRepository.save(currentCourse);
		} else return null;
	}
}
