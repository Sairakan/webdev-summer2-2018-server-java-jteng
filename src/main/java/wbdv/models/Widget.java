package wbdv.models;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Widget {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String name;
	@ManyToOne
	@JsonIgnore
	private Topic topic;
	private int widgetIndex;
	private String text;
	private WidgetType widgetType;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Topic getTopic() {
		return topic;
	}
	public void setTopic(Topic topic) {
		this.topic = topic;
	}
	public int getWidgetIndex() {
		return widgetIndex;
	}
	public void setWidgetIndex(int widgetIndex) {
		this.widgetIndex = widgetIndex;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public WidgetType getWidgetType() {
		return widgetType;
	}
	public void setWidgetType(WidgetType widgetType) {
		this.widgetType = widgetType;
	}
}
