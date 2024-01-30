import { createUser, getUserByEmailOrPhone } from "../models/user";
import { encode } from "../helpers/jwt";
import { UserRoles } from "../shared/roles/userRoles";
import { encrypt } from "../helpers/bcrypt";

export const signUpService = async (
  userName: string,
  phone: string,
  email: string,
  password: string
): Promise<any> => {
  
  const existingPhone = await getUserByEmailOrPhone(phone);
  
  const existingEmail = await getUserByEmailOrPhone(email);

  if (existingPhone) {
    throw new Error("Já existe um usuário cadastrado com este telefone.")
  }
  
  if (existingEmail) {
    throw new Error("Já existe um usuário cadastrado com este email.")
  }

  const encryptPass: string = await encrypt(password)

  const user = await createUser({
    userName,
    email,
    phone,
    password: encryptPass,
  })

  const access_token = await encode({
    userId: user._id,
    role: UserRoles.ADMIN,
  });

  const refresh_token = await encode({
    role: UserRoles.ADMIN,
    userId: user._id,
  });

  return { access_token, refresh_token };
};
