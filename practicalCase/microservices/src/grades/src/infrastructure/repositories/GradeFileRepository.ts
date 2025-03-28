import { promises as fs } from 'fs';
import path from 'path';
import { Grade} from "../../core/entities/Grade";
import { IGradeRepository } from "../../application/interfaces/IGradeRepository";

const FILE_PATH = path.join(__dirname, '../../data/grades.json');

interface StudentsGrades {
  [studentId: string]: Grade[];
}

export class GradeFileRepository implements IGradeRepository {


    private async getDatas():Promise<StudentsGrades>{
      const data = await fs.readFile(FILE_PATH, 'utf-8');
      return JSON.parse(data);
    }
  
    // Récupérer un utilisateur par ID
    public async getByStudentId(id: string): Promise<Grade[] | null> {
      const result = await this.getDatas();
    
      return result[id];  
    }
}  