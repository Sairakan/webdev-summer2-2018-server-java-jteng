package wbdv.models;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonRootName;

@Entity
public class Student extends User {
	private float gpa;
	private int graduationYear;
	
	public Student() {
		gpa = 0;
		graduationYear = 0;
	}
	
	public float getGpa() {
		return gpa;
	}
	public void setGpa(float gpa) {
		this.gpa = gpa;
	}
	public int getGraduationYear() {
		return graduationYear;
	}
	public void setGraduationYear(int graduationYear) {
		this.graduationYear = graduationYear;
	}
}
