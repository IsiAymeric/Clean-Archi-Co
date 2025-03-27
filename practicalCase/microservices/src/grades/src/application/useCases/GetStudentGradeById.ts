
import { Grade } from "../../core/entities/Grade";
import { IGradeRepository } from "../interfaces/IGradeRepository";

export class GetStudentGradeById {
  private gradeRepository: IGradeRepository;

  constructor(gradeRepository : IGradeRepository) {
    this. gradeRepository = gradeRepository;
  }

  async execute(id: string): Promise<Grade[] | null> {
   return await this.gradeRepository.getByStudentId(id);
  }
}