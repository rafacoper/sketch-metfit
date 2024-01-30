import { Request, Response } from "express";
import { signUpService } from "../services/signup.service";

export const signUpController = async (req: Request, res: Response) => {
  try {
    const { userName, phone, email, password } = req.body;

    const tokens = await signUpService(userName, phone, email, password);

    if (!tokens) {
      return res.status(401).json({ error: "Credenciais inválidas" });
    }

    return res.json(tokens);
  } catch (error) {
    console.error("Erro durante o cadastro:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
};
