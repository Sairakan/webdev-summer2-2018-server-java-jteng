package wbdv.models;

import javax.persistence.*;

@Entity
public class ImageWidget extends Widget {
	private String src;

	public String getSrc() {
		return src;
	}
	public void setSrc(String src) {
		this.src = src;
	}
}
