package wbdv.models;

import javax.persistence.*;

@Entity
public class LinkWidget extends Widget {
	private String href;

	public String getHref() {
		return href;
	}
	public void setHref(String href) {
		this.href = href;
	}
}
