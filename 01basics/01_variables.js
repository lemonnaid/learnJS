const accountId = 984105 // const is used when you have to lock the value i.e value cannot be changed 
let accountEmail = "asdf@gmail.com"
var accountPassword = "asdf123"  // not recommended because of issue in block and functional scope
accountCity = "Kathmandu" // you can declare variable like this but DO NOT DO IT 
let accountCountry; // will print undefined as there is no value assigned to the variable

//accountId = 2 // not allowed

accountEmail = "hello@yahoo.com"
accountPassword ="987654321"
accountCity = "Lalitpur"

console.log(accountId);

console.table([accountId, accountEmail, accountCity, accountPassword, accountCountry])// allows you to print multiple variables in table 