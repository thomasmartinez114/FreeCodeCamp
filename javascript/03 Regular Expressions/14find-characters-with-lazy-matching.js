let text = '<h1>Winter is coming</h1>';
let myRegex = /<h1>?/; // it's the answer!
let result = text.match(myRegex);

console.log(result);
