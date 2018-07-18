package wbdv.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;

import wbdv.models.Course;
import wbdv.models.Lesson;
import wbdv.models.Module;
import wbdv.repositories.CourseRepository;
import wbdv.repositories.ModuleRepository;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class ModuleService {
	@Autowired
	CourseRepository courseRepository;
	@Autowired
	ModuleRepository moduleRepository;
	
	@PostMapping("/api/course/{courseId}/module")
	public Module createModule(
			@PathVariable("courseId") int courseId,
			@RequestBody Module newModule) {
		Optional<Course> data = courseRepository.findById(courseId);
		if(data.isPresent()) {
			Course course = data.get();
			newModule.setCourse(course);
			return moduleRepository.save(newModule);
		} else return null;
	}
	@DeleteMapping("/api/module/{moduleId}")
	public void deleteModule(@PathVariable("moduleId") int moduleId) {
		moduleRepository.deleteById(moduleId);
	}
	@GetMapping("/api/module")
	public List<Module> findAllModules() {
		return (List<Module>) moduleRepository.findAll();
	}
	@GetMapping("/api/module/{mId}")
	public Module findModuleById(@PathVariable("mId") int mId) {
		Optional<Module> moduleData = moduleRepository.findById(mId);
		if (moduleData.isPresent()) return moduleData.get();
		else return null;
	}
	@GetMapping("/api/course/{courseId}/module")
	public List<Module> findAllModulesForCourse(@PathVariable("courseId") int courseId) {
		Optional<Course> data = courseRepository.findById(courseId);
		if (data.isPresent()) {
			Course course = data.get();
			return course.getModules();
		} else return new ArrayList<Module>();
	}
	@PutMapping("/api/module/{mId}")
	public Module updateModule(@PathVariable("mId") int mId, @RequestBody Module module) {
		Optional<Module> moduleData = moduleRepository.findById(mId);
		if (moduleData.isPresent()) {
			Module oldModule = moduleData.get();
			if (module.getId() == oldModule.getId()) 
				return moduleRepository.save(module);
		} 
		return null;
	}
}
