import { Grade } from "../../core/entities/Grade";

export interface IGradeRepository {
  getByStudentId(id: string): Promise<Grade[]|null>;
}