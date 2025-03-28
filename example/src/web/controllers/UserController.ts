import { Request, Response } from "express";
import { GetUserById } from "../../application/useCases/GetUserById";
import { GetAllUsers } from "../../application/useCases/GetAllUsers";
import { UserRepository } from "../../infrastructure/repositories/UserRepository";
import { UserFileRepository } from "../../infrastructure/repositories/UserFileRepository";

// Création du repository et des cas d'utilisation
const userRepository = new UserFileRepository();
const getUserById = new GetUserById(userRepository);
const getAllUsers = new GetAllUsers(userRepository);

// Contrôleur pour récupérer un utilisateur par son ID
export const getUserController = async (req: Request, res: Response): Promise<any> => {
   const { id } = req.params; const person = await getUserById.execute(parseInt(id, 10));
if (person) {
 return res.json(person); 
 }
 return res.status(404).json({ message: "Person not found" });
};

// Contrôleur pour récupérer tous les utilisateurs
export const getAllUsersController = async (req: Request, res: Response): Promise<any> => {
 const persons = await getAllUsers.execute();
 return res.json(persons);
};
