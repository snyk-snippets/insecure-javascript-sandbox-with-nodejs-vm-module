const vm = require("node:vm");

const productExpirationDays = 14;

// This works just fine - it is a custom code that manipulates
// the data in the context and only there.
const userInputCustomJavaScriptCode = "userCustomNickname = 'Johnny Mnemonic';";

// This code will throw an error because there's no such variable
// defined in the context as productExpirationMinutes.
// const userInputCustomJavaScriptCode = "userCustomNickname = 'Johnny Mnemonic'; productExpirationDays += 60";

const context = { userCustomNickname: "John Nash" };
vm.createContext(context);

vm.runInContext(userInputCustomJavaScriptCode, context);

console.log(context.userCustomNickname);
console.log(context.productExpirationDays);
console.log(productExpirationDays);
