import { UserModel, User, UserWithoutPassword } from "../models/user";

const findUsers = async (): Promise<UserWithoutPassword[]> => {
  try {
    return await UserModel.find();
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    throw error;
  }
};

const findUserByAttribute = async (data: string | number): Promise<any> => {
  try {
    return await UserModel.findOne({
      $or: [{ email: data }, { phone: data }],
    });
  } catch (error) {
    console.error('Erro ao buscar usuário por atributo:', error);
    throw error;
  }
};

const findUserById = async (id: string): Promise<UserWithoutPassword | null> => {
  try {
    return await UserModel.findById(id);
  } catch (error) {
    console.error('Erro ao buscar usuário por ID:', error);
    throw error;
  }
};

const createUser = async (userModel: User): Promise<UserWithoutPassword> => {
  try {
    const user = new UserModel(userModel);
    await user.save();
    return user.toObject();
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    throw error;
  }
};

const updateUser = async (id: string, values: Record<string, any>): Promise<UserWithoutPassword | null> => {
  try {
    return await UserModel.findByIdAndUpdate(id, values, { new: true });
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    throw error;
  }
};

const deleteUser = async (id: string): Promise<void> => {
  try {
    await UserModel.deleteOne({"_id": id})
  } catch (error) {
    console.error('Erro ao deletar usuário:', error);
    throw error;
  }
};

export {
  UserModel,
  findUsers,
  findUserByAttribute,
  findUserById,
  createUser,
  updateUser,
  deleteUser
};