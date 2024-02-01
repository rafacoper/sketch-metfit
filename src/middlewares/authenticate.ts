import { Response, NextFunction } from 'express';
import { decode } from '../helpers/jwt';
import { findUserById } from '../services/user.service';

export const isAuthenticated = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { cookies } = req;
    const { 'authorization': sessionToken } = cookies;

    if (!sessionToken) {
      return res.sendStatus(403);
    }

    const decodedToken = await decode(sessionToken);
    const userId = decodedToken.userId;

    const existingUser = await findUserById(userId);

    if (!existingUser) {
      return res.sendStatus(403);
    }

    req.identity = existingUser;

    return next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

