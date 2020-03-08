function getBinaryCode(charCode) {
  let inTwoSystem = charCode.toString(2);
  let code = inTwoSystem;
  if (inTwoSystem.length < 8) {
    let delta = 8 - inTwoSystem.length;
    let zeros = new Array(delta);
    code = zeros.fill(0, 0, delta).join("") + inTwoSystem;
  }
  return code;
}

function getBinaryKey(key) {
  const binaryKey = [];
  for (let i = 0; i < key.length; i = i + 1) {
    let symbol = key.charCodeAt(i);
    binaryKey.push(getBinaryCode(symbol));
  }
  return binaryKey;
}

const binaryKey = getBinaryKey(key);

function BitXOR(crypted, key) {
  // предполагается, что оба символа в двоичной системе
  // с длиной === 8
  let result = "";
  for (let i = 0; i < 8; i = i + 1) {
    if (crypted[i] === key[i]) {
      result = result + "0";
    } else {
      result = result + "1";
    }
  }
  return result;
}

/*
function decoder(data, binaryKey) {
  let charCode = getBinaryCode(Number(data)); // Узнали бинарный ACII код
  let cryptedChar = charCode; // Тут будет зашифрованная буква
  for (let i = 0; i < binaryKey.length; i = i + 1) {
    const keyCharCode = binaryKey[i]; //Узнаем ASCII код символа из ключа
    cryptedChar = BitXOR(cryptedChar, keyCharCode)  // Выполняем операцию XOR
  }
  return cryptedChar;
}
*/

function decoder(data, binaryKey) {
  let charCode = getBinaryCode(Number(data)); // Узнали бинарный ACII код
  let cryptedChar = charCode; // Тут будет зашифрованная буква
  for (let i = 0; i < binaryKey.length; i = i + 1) {
    const keyCharCode = binaryKey[i]; //Узнаем ASCII код символа из ключа
    cryptedChar = BitXOR(cryptedChar, keyCharCode)  // Выполняем операцию XOR
  }
  const r = cryptedChar.slice(0,2);
  const g = cryptedChar.slice(2,5);
  const b = cryptedChar.slice(5,8);

  const nR = parseInt(r,2)+2;
  const nG = parseInt(g,2)+3;
  const nB = parseInt(b,2)+3;

  return cryptedChar;
}