package wbdv.models;

import javax.persistence.*;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Faculty extends User {
	private String office;
	private Boolean tenure;
	@OneToMany(mappedBy="owner")
	@JsonIgnore
	private List<Course> ownedCourses;
	
	public Faculty() {
		office = "";
		tenure = false;
	}
	
	public String getOffice() {
		return office;
	}
	public void setOffice(String office) {
		this.office = office;
	}
	public Boolean getTenure() {
		return tenure;
	}
	public void setTenure(Boolean tenure) {
		this.tenure = tenure;
	}
	public List<Course> getOwnedCourses() {
		return ownedCourses;
	}
	public void addCourse(Course course) {
		this.ownedCourses.add(course);
		if (course.getOwner() != this) course.setOwner(this);
	}
}
