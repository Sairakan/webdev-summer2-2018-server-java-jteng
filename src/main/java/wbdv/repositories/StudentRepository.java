package wbdv.repositories;

import org.springframework.data.repository.*;

import wbdv.models.Student;

public interface StudentRepository extends CrudRepository<Student, Integer> {

}
