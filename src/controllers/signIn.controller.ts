import { Request, Response } from "express";
import { signInService } from "../services/signIn.service";

export const signInController = async (req: Request, res: Response) => {
  try {
    const { phone, email, password } = req.body;

    const tokens = await signInService(phone, email, password);

    if (!tokens) {
      return res.status(401).json({ error: "Credenciais inválidas" });
    }

    return res.json(tokens);
  } catch (error) {
    console.error("Erro ao tentar logar:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
};
