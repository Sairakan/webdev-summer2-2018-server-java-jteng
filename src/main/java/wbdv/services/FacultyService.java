package wbdv.services;

import java.util.ArrayList;
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

import wbdv.models.Course;
import wbdv.models.Faculty;
import wbdv.repositories.CourseRepository;
import wbdv.repositories.FacultyRepository;

@RestController
public class FacultyService {
	
	@Autowired
	FacultyRepository facultyRepository;
	@Autowired
	CourseRepository courseRepository;
	
	@GetMapping("/api/faculty")
	public List<Faculty> findAllFaculty() {
		return (List<Faculty>) facultyRepository.findAll();
	}
	
	@PutMapping("/api/faculty/{fId}/owned/{cId}")
	public void addCourse(@PathVariable("fId") int fId, @PathVariable("cId") int cId) {
		Optional<Faculty> facultyData = facultyRepository.findById(fId);
		Optional<Course> courseData = courseRepository.findById(cId);
		if (facultyData.isPresent() && courseData.isPresent()) {
			Faculty faculty = facultyData.get();
			Course course = courseData.get();
			course.setOwner(faculty);
			courseRepository.save(course);
		}
	}
	
	@GetMapping("/api/faculty/{fId}/owned")
	public Iterable<Course> findOwnedCourses(@PathVariable("fId") int fId) {
		Optional<Faculty> facultyData = facultyRepository.findById(fId);
		if (facultyData.isPresent()) {
			Faculty faculty = facultyData.get();
			return faculty.getOwnedCourses();
		} else return new ArrayList<Course>();
	}
}
