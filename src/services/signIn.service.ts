import { compare } from "bcrypt";
import { encode } from "../helpers/jwt";
import { UserRoles } from "../shared/roles/userRoles";
import { findUserByAttribute } from "./user.service";

export const signInService = async (
  phone: string,
  email: string,
  password: string
): Promise<any> => {
  const data = phone ? phone : email;
  
  const user = await findUserByAttribute(data);

  if (!user) {
    return null;
  }

  const isPasswordMatch = await compare(password, user.password);

  if (!isPasswordMatch) {
    return null;
  }

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
