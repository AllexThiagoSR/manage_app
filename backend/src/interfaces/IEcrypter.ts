export default interface IEncrypter {
  encrypt(stringToHash: string): string;
  compare(hash: string, notHash: string): boolean;
}
