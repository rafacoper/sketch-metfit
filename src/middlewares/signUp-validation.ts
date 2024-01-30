import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

export const validateSignUpRequest = [
  body("userName")
    .isLength({ min: 4 })
    .withMessage("Nome inválido"),
  body("email")
    .isEmail()
    .withMessage("Email inválido"),
  body("phone")
    .isMobilePhone("any")
    .withMessage("Número de telefone inválido"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("A senha deve ter pelo menos 8 caracteres"),

  async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    next();
  },
];
