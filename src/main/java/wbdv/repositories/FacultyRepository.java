package wbdv.repositories;

import org.springframework.data.repository.*;
import wbdv.models.Faculty;

public interface FacultyRepository extends CrudRepository<Faculty, Integer> {
	
}
