
import { IGradeRepository } from "../interfaces/IGradeRepository";

export class GetStudentAverageById {
  private gradeRepository: IGradeRepository;

  constructor(gradeRepository : IGradeRepository) {
    this. gradeRepository = gradeRepository;
  }

  async execute(id: string): Promise<number> {
   const grades = await this.gradeRepository.getByStudentId(id);
    let average = 0;
   if (grades){
      grades.forEach((grade)=>{
        average = average + grade.value;
      });
      return average /grades.length;
   }else{
    return 0
   }
  }
}