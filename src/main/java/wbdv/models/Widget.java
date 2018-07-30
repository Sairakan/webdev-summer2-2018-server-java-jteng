package wbdv.models;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

@Entity
@JsonTypeInfo(use=JsonTypeInfo.Id.NAME, include=JsonTypeInfo.As.PROPERTY, property="type", visible=true)
@JsonSubTypes({@JsonSubTypes.Type(value=HeadingWidget.class, name="HEADING"),
	@JsonSubTypes.Type(value=ParagraphWidget.class, name="PARAGRAPH"),
	@JsonSubTypes.Type(value=ListWidget.class, name="LIST"),
	@JsonSubTypes.Type(value=LinkWidget.class, name="LINK"),
	@JsonSubTypes.Type(value=ImageWidget.class, name="IMAGE")
})
public class Widget {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String widgetName;
	@ManyToOne
	@JsonIgnore
	private Topic topic;
	private int widgetIndex;
	private String text;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getWidgetName() {
		return widgetName;
	}
	public void setWidgetName(String widgetName) {
		this.widgetName = widgetName;
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
}
