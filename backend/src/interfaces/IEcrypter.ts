export default interface IEncrypter {
  ecrypt(stringToHash: string): string;
  compare(hash: string, notHash: string): boolean;
}
