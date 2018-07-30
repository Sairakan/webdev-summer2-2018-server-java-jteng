package wbdv.models;

import javax.persistence.*;

@Entity
public class ListWidget extends Widget {
	
	public enum ListType {
		ORDERED, UNORDERED;
	}
	
	@Enumerated
	private ListType listType;
	
	public ListType getListType() {
		return listType;
	}
	public void setListType(ListType listType) {
		this.listType = listType;
	}
}
