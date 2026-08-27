const accountId = 1234567890;
let accountEmail = "mswain896@gmail.com";
var accountPassword = "myPassword123";
accountCity = "New York"; // This will create a global variable if not declared with var, let, or const
let accountState;

// accountId = 2 // not allowed

accountEmail = "babul896896@gmail.com"
accountPassword = "2446666"
accountCity = "London"

console.log(accountId);

/*
Prefer not to use var
because of issue in bloxk scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
