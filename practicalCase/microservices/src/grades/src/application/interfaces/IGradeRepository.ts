import { Grade } from "../../core/entities/Grade";
import { StudentsGrades } from "../../core/entities/StudentsGrades";

export interface IGradeRepository {
  getByStudentId(id: string): Promise<Grade[]|null>;
  getAll(): Promise<StudentsGrades>;
}