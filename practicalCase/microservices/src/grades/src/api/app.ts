import express from "express";
import cors from "cors";
import { getStudentAverageByIdController, getStudentGradeController } from "./controllers/GradeStudentController";

const app = express();
const port = 3011;
const hostname = 'localhost';

app.use(cors({
  origin: [`http://${hostname}`,"http://127.0.0.1:8080"]
 }));

// Définition des routes de l'API
app.get("/api/grades/student/:id", getStudentGradeController);
app.get("/api/grades/student/:id/average",  getStudentAverageByIdController);
// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
