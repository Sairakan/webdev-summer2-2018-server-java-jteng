package wbdv.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;

import wbdv.models.Lesson;
import wbdv.models.Topic;
import wbdv.repositories.LessonRepository;
import wbdv.repositories.TopicRepository;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class TopicService {
	@Autowired
	LessonRepository lessonRepository;
	@Autowired
	TopicRepository topicRepository;

	@PostMapping("/api/course/{cId}/module/{mId}/lesson/{lId}/topic")
	public Topic createTopic(
			@PathVariable("cId") int cId,
			@PathVariable("mId") int mId,
			@PathVariable("lId") int lId,
			@RequestBody Topic newTopic) {
		Optional<Lesson> lessonData = lessonRepository.findById(lId);
		if(lessonData.isPresent()) {
			Lesson lesson = lessonData.get();
			newTopic.setLesson(lesson);
			return topicRepository.save(newTopic);
		} else return null;
	}
	@DeleteMapping("/api/topic/{tId}")
	public void deleteTopic(@PathVariable("tId") int tId) {
		topicRepository.deleteById(tId);
	}
	@GetMapping("/api/topic")
	public List<Topic> findAllTopics() {
		return (List<Topic>) topicRepository.findAll();
	}
	@GetMapping("/api/topic/{tId}")
	public Topic findTopicById(@PathVariable("tId") int tId) {
		Optional<Topic> topicData = topicRepository.findById(tId);
		if (topicData.isPresent()) return topicData.get();
		else return null;
	}
	@GetMapping("/api/course/{cId}/module/{mId}/lesson/{lId}/topic")
	public List<Topic> findAllTopicsForLesson(
			@PathVariable("cId") int cId,
			@PathVariable("mId") int mId,
			@PathVariable("lId") int lId) {
		Optional<Lesson> lessonData = lessonRepository.findById(lId);
		if(lessonData.isPresent()) {
			Lesson lesson = lessonData.get();
			return lesson.getTopics();
		} else return new ArrayList<Topic>();
	}
	@PutMapping("/api/topic/{tId}")
	public Topic updateTopic(@PathVariable("tId") int tId, @RequestBody Topic topic) {
		Optional<Topic> topicData = topicRepository.findById(tId);
		if (topicData.isPresent()) {
			Topic oldTopic = topicData.get();
			if (topic.getId() == oldTopic.getId()) 
				return topicRepository.save(topic);
		}
		return null;
	}
}