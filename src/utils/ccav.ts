import { createCipheriv, createDecipheriv } from "node:crypto";

function getAlgorithm(keyBase64: any) {
  var key = Buffer.from(keyBase64, "base64");
  switch (key.length) {
    case 16:
      return "aes-128-cbc";
    case 32:
      return "aes-256-cbc";
  }
  throw new Error("Invalid key length: " + key.length);
}

function encrypt(plainText: any, keyBase64: any, ivBase64: any) {
  const key = Buffer.from(keyBase64, "base64");
  const iv = Buffer.from(ivBase64, "base64");

  const cipher = createCipheriv(getAlgorithm(keyBase64), key, iv);
  let encrypted = cipher.update(plainText, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
}

function decrypt(messagebase64: any, keyBase64: any, ivBase64: any) {
  const key = Buffer.from(keyBase64, "base64");
  const iv = Buffer.from(ivBase64, "base64");

  const decipher = createDecipheriv(getAlgorithm(keyBase64), key, iv);
  let decrypted = decipher.update(messagebase64, "utf-8", "hex");
  decrypted += decipher.final("utf-8");
  return decrypted;
}

export { encrypt, decrypt };
