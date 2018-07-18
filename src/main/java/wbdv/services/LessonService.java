package wbdv.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;

import wbdv.models.Module;
import wbdv.models.User;
import wbdv.models.Course;
import wbdv.models.Lesson;
import wbdv.repositories.ModuleRepository;
import wbdv.repositories.CourseRepository;
import wbdv.repositories.LessonRepository;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class LessonService {
	@Autowired
	CourseRepository courseRepository;
	@Autowired
	ModuleRepository moduleRepository;
	@Autowired
	LessonRepository lessonRepository;

	@PostMapping("/api/course/{cId}/module/{mId}/lesson")
	public Lesson createLesson(
			@PathVariable("cId") int cId,
			@PathVariable("mId") int mId,
			@RequestBody Lesson newLesson) {
		Optional<Module> moduleData = moduleRepository.findById(mId);
		if(moduleData.isPresent()) {
			Module module = moduleData.get();
			newLesson.setModule(module);
			return lessonRepository.save(newLesson);
		} else return null;
	}
	@DeleteMapping("/api/lesson/{lId}")
	public void deleteLesson(@PathVariable("lId") int lId) {
		lessonRepository.deleteById(lId);
	}
	@GetMapping("/api/lesson")
	public List<Lesson> findAllLessons() {
		return (List<Lesson>) lessonRepository.findAll();
	}
	@GetMapping("/api/lesson/lId")
	public Lesson findLessonById(@PathVariable("lId") int lId) {
		Optional<Lesson> lessonData = lessonRepository.findById(lId);
		if (lessonData.isPresent()) return lessonData.get();
		else return null;
	}
	@GetMapping("/api/course/{cId}/module/{mId}/lesson")
	public List<Lesson> findAllLessonsForModule(
			@PathVariable("cId") int cId,
			@PathVariable("mId") int mId) {
		Optional<Module> moduleData = moduleRepository.findById(mId);
		if(moduleData.isPresent()) {
			Module module = moduleData.get();
			return module.getLessons();
		} else return new ArrayList<Lesson>();
	}
	@PutMapping("/api/lesson/{lId}")
	public Lesson updateLesson(@PathVariable("lId") int lId, @RequestBody Lesson lesson) {
		Optional<Lesson> lessonData = lessonRepository.findById(lId);
		if (lessonData.isPresent()) {
			Lesson oldLesson = lessonData.get();
			if (lesson.getId() == oldLesson.getId()) {
				return lessonRepository.save(lesson);
			} else {
				return null;
			}
		} else return null;
	}
}
