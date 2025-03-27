import { Grade } from "./Grade";

export interface StudentsGrades {
    [studentId: string]: Grade[];
  }