const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  isDirect = true;

  constructor(isDirect) {
    if (isDirect === false) {
      this.isDirect = false;
    }
  }

  // done
  encrypt(str, key) {
    if (str === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    if (!this.isDirect) {
      str = str.split("").reverse().join("");
    }
    key = key.toUpperCase();
    const base = "A".charCodeAt();
    let res = "";
    let k = 0;

    for (let i = 0; i < str.length; i++) {
      if (k >= key.length) {
        k = 0;
      }

      const charCode = str[i].toUpperCase().charCodeAt();
      if (charCode < base || charCode > base + 26) {
        res += str[i];
        // k++;
        continue;
      }

      // Ei = (Pi + Ki) mod 26
      const code = (charCode + key[k].charCodeAt()) % 26;
      res += String.fromCharCode(base + code);
      k++;
    }
    return res;
  }

  decrypt(str, key) {
    if (str === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    if (!this.isDirect) {
      str = str.split("").reverse().join("");
    }
    key = key.toUpperCase();
    const base = "A".charCodeAt();
    let res = "";
    let k = 0;

    for (let i = 0; i < str.length; i++) {
      if (k >= key.length) {
        k = 0;
      }

      const charCode = str[i].toUpperCase().charCodeAt();
      if (charCode < base || charCode > base + 26) {
        res += str[i];
        // k++;
        continue;
      }

      // Di = (Ei - Ki) mod 26
      const code = (charCode - key[k].charCodeAt() + 26) % 26;
      res += String.fromCharCode(base + code);
      k++;
    }
    return res;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
