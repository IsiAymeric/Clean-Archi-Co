import { Request, Response } from "express";
import { GradeFileRepository } from "../../infrastructure/repositories/GradeFileRpository";
import { GetStudentGradeById } from "../../application/useCases/GetStudentGradeById";
import { GetStudentAverageById } from "../../application/useCases/GetStudentAverageById";

// Création du repository et des cas d'utilisation
const gradeRepository = new GradeFileRepository();
const getStudentGradeById = new GetStudentGradeById(gradeRepository);
const getStudentAverageById = new GetStudentAverageById(gradeRepository);

// Contrôleur pour récupérer la liste des notes d'un élève
export const getStudentGradeController = async (req: Request, res: Response): Promise<any> => {
    const { id } = req.params;
    const grades = await getStudentGradeById.execute(id);
    if (grades) {
        return res.json(grades); 
    }
    return res.status(404).json({ message: "Student not found" });
};

// Contrôleur pour récupérer la moyenne d'un élève
export const getStudentAverageByIdController = async (req: Request, res: Response): Promise<any> => {
    const { id } = req.params;
    const average = await getStudentAverageById.execute(id);
    return res.json(average); 

};
