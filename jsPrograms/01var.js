const accountId=144553
let accountEmail="satyam009@gmail.com"
var accountPassword="123"
accountCity="Jaunpur"

// accountId=2 //not allowed
accountEmail="saty22@gmail.com"
accountPassword="2222"
accountCity="Noida"

/*prefer not to use var
because of issue in block scope({this bracket}) and functional scope   
*/
console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity])