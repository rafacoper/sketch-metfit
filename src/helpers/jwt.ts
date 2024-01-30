import jwt, { SignOptions } from 'jsonwebtoken';
import { env } from '../config/env';

const jwtPrivateKey = process.env.JWT_PRIVATE_KEY
const config = env.JWT_CONFIG

export const encode = (data: Record<string, unknown>): Promise<string> => {
  return new Promise((resolve, reject) => {
    const options: SignOptions = JSON.parse(config);
    jwt.sign(data, jwtPrivateKey, options, (err, token) => {
      if (err) {
        reject(err);
      } else {
        resolve(token);
      }
    });
  });
}

export const decode = (token: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, jwtPrivateKey, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

