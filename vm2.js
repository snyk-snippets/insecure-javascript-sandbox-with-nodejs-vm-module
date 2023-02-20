const vm = require("node:vm");

const productExpirationDays = 14;

// This could will result in a denial of service attack
// for the running Node.js application due to the
// infinite loop executed within the virtual machine context
// that is supplied by the user:
const userInputCustomJavaScriptCode =
  "userCustomNickname = 'Johnny Mnemonic'; while(true) {}";

const context = { userCustomNickname: "John Nash" };
vm.createContext(context);

vm.runInContext(userInputCustomJavaScriptCode, context);

console.log("Never fear, I is here");
