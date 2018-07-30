package wbdv.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import wbdv.models.Widget;

public interface WidgetRepository<T extends Widget> extends CrudRepository<Widget, Integer> {

}
