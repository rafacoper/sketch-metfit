import { hashSync, genSaltSync, compareSync } from 'bcrypt';

export async function encrypt(rawText: string): Promise<string> {
  const salt = genSaltSync(10)
  return hashSync(rawText, salt);
}

export async function compare(
  rawText: string,
  encryptedText: string,
): Promise<boolean> {
  return compareSync(rawText, encryptedText);
}
