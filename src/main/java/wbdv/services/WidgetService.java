package wbdv.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;

import wbdv.models.Topic;
import wbdv.models.Widget;
import wbdv.repositories.HeadingWidgetRepository;
import wbdv.repositories.ImageWidgetRepository;
import wbdv.repositories.LinkWidgetRepository;
import wbdv.repositories.ListWidgetRepository;
import wbdv.repositories.ParagraphWidgetRepository;
import wbdv.repositories.TopicRepository;
import wbdv.repositories.WidgetRepository;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class WidgetService {
	@Autowired
	TopicRepository topicRepository;
	@Autowired
	WidgetRepository<Widget> widgetRepository;
	
	@GetMapping("/api/widget")
	public List<Widget> findAllWidgets() {
		return (List<Widget>) widgetRepository.findAll();
	}
	@GetMapping("/api/widget/{wId}")
	public Widget findWidgetById(@PathVariable("wId") int wId) {
		Optional<Widget> widgetData = widgetRepository.findById(wId);
		if (widgetData.isPresent()) return widgetData.get();
		else return null;
	}
	@GetMapping("/api/topic/{tId}/widget")
	public List<Widget> findAllWidgetsForTopic(@PathVariable("tId") int tId) {
		Optional<Topic> topicData = topicRepository.findById(tId);
		if(topicData.isPresent()) {
			return topicData.get().getWidgets();
		} else return new ArrayList<Widget>();
	}
	@PostMapping("/api/topic/{tId}/widget")
	public Widget createWidget(@PathVariable("tId") int tId, 
			@RequestBody Widget newWidget) {
		Optional<Topic> topicData = topicRepository.findById(tId);
		if(topicData.isPresent()) {
			Topic topic= topicData.get();
			newWidget.setTopic(topic);
			return widgetRepository.save(newWidget);
		} else return null;
	}
	@PutMapping("/api/widget/{wId}")
	public Widget updateWidget(@PathVariable("wId") int wId, 
			@RequestBody Widget widget) {
		Optional<Widget> widgetData = widgetRepository.findById(wId);
		if (widgetData.isPresent()) {
			Widget oldWidget = widgetData.get();
			if (widget.getId() == oldWidget.getId()) 
				return widgetRepository.save(widget);
		}
		return null;
	}
	@DeleteMapping("/api/widget/{wId}")
	public void deleteWidget(@PathVariable("wId") int wId) {
		widgetRepository.deleteById(wId);
	}
	@PutMapping("/api/topic/{tId}/widget")
	public List<Widget> saveWidgets(@PathVariable("tId") int tId,
			@RequestBody List<Widget> widgets) {
		List<Widget> savedWidgets = new ArrayList<Widget>();
		Optional<Topic> topicData = topicRepository.findById(tId);
		if(topicData.isPresent()) {
			Topic topic= topicData.get();
			for (Widget w: widgets) {
				w.setTopic(topic);
				savedWidgets.add(widgetRepository.save(w));
			}
		}
		return savedWidgets;
	}
}
