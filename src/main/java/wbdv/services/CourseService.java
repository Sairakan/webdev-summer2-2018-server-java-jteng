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
import wbdv.models.Faculty;
import wbdv.models.User;
import wbdv.repositories.CourseRepository;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
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
	
	@GetMapping("/api/course/cId}")
	public Course findCourseById(@PathVariable("cId") int cId) {
		Optional<Course> courseData = courseRepository.findById(cId);
		if (courseData.isPresent()) return courseData.get();
		else return null;
	}
	
	@PutMapping("/api/course/{id}")
	public Course updateCourse(@PathVariable("id") String id, @RequestBody Course course) {
		Optional<Course> courseData = courseRepository.findById(Integer.parseInt(id));
		if (courseData.isPresent()) {
			Course oldCourse = courseData.get();
			if (oldCourse.getId() == course.getId())
				return courseRepository.save(course);
		}
		return null;
	}
	
	@GetMapping("/api/course/{cId}/owner")
	public Faculty findCourseOwner(@PathVariable("cId") int cId) {
		Optional<Course> courseData = courseRepository.findById(cId);
		if (courseData.isPresent()) {
			Course course = courseData.get();
			return course.getOwner();
		} else return null;
	}
}
