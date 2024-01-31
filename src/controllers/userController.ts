import { Request, Response } from "express";
import { User, UserWithoutPassword } from "../models/user";
import { encrypt } from "../helpers/bcrypt";
import {
  findUsers,
  createUser,
  deleteUser,
  findUserById,
  updateUser,
  findUserByAttribute,
} from "../services/user.service";

const getAllUsers = async (_req: Request, res: Response): Promise<void> => {
  try {
    const users = await findUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    res.status(500).send("Erro interno do servidor");
  }
};

const getUserById = async (req: Request, res: Response): Promise<void> => {
  const userId = req.params.id;

  try {
    const user = await findUserById(userId);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).send("Usuário não encontrado");
    }
  } catch (error) {
    console.error("Erro ao buscar usuário por ID:", error);
    res.status(500).send("Erro interno do servidor");
  }
};

const getUserByAttribute = async (
  req: Request,
  res: Response
): Promise<void> => {
  const data: any = req.query.phone

  try {
    const user = await findUserByAttribute(data);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).send("Usuário não encontrado");
    }
  } catch (error) {
    console.error("Erro ao buscar usuário por atributo:", error);
    res.status(500).send("Erro interno do servidor");
  }
};

const addUser = async (req: Request, res: Response): Promise<void> => {
  const userData: User = req.body;

  try {
    const { password } = userData;

    const hashPass = await encrypt(password);

    const newUser = await createUser({
      userName: userData.userName,
      phone: userData.phone,
      email: userData.email,
      password: hashPass,
      role: userData.role,
    });
    const userWithoutPassword: UserWithoutPassword = newUser;

    res.status(201).json(userWithoutPassword);
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    res.status(500).send("Erro interno do servidor");
  }
};

const updateUserById = async (req: Request, res: Response): Promise<void> => {
  const userId = req.params.id;
  const updatedValues: Record<string, any> = req.body;

  try {
    const updatedUser = await updateUser(userId, updatedValues);
    if (updatedUser) {
      const userWithoutPassword: UserWithoutPassword = updatedUser;
      res.status(200).json(userWithoutPassword);
    } else {
      res.status(404).send("Usuário não encontrado");
    }
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    res.status(500).send("Erro interno do servidor");
  }
};

const deleteUserById = async (req: Request, res: Response): Promise<void> => {
  const userId = req.params.id;

  try {
    await deleteUser(userId);
    res.status(204).send("Usuário deletado");
  } catch (error) {
    console.error("Erro ao excluir usuário:", error);
    res.status(500).send("Erro interno do servidor");
  }
};

export {
  getAllUsers,
  getUserById,
  getUserByAttribute,
  addUser,
  updateUserById,
  deleteUserById,
};
