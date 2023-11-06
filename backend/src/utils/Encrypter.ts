import IEncrypter from '../interfaces/IEcrypter';
import * as bcrypt from 'bcryptjs';

export default class Encrypter implements IEncrypter {
  public encrypt(stringToHash: string): string {
    const hash = bcrypt.hashSync(stringToHash, 12);
    return hash;
  }

  public compare(hash: string, notHash: string): boolean {
    return bcrypt.compareSync(notHash, hash);
  }
}
