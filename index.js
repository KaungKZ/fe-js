// kaungkhantzaw

function caesar(string, key) {
  let cipher;

  if (key < 0 || !key) {
    return string;
  }

  cipher = `${string}`
    .toLowerCase()
    .split("")
    .map((s, i) => {
      let code = s.charCodeAt() + key;

      if (code > 122) {
        code = 96 + (code - 122);
      }

      let final = String.fromCharCode(code);

      if (string[i] == string[i].toUpperCase()) {
        return final.toUpperCase();
      } else if (string[i] == string[i].toLowerCase()) {
        return final.toLowerCase();
      }

      return final;
    })
    .join("");

  return cipher;
}

console.log(caesar("HELLO", 1));
console.log(caesar("HELLO", 2));
console.log(caesar("HELLO", 13));
console.log(caesar("Implement a program that encrypts messages using Caesars cipher,", 13));
