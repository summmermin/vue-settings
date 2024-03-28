import { AES } from "crypto-ts";

class CryPto {
  encrypt(values: any) {
    const encryptedMessage = AES.encrypt(
      values,
      import.meta.env.VITE_ENV_MI_CRYPT_KEY,
    );

    return encryptedMessage.toString();
  }
}

export default new CryPto();
