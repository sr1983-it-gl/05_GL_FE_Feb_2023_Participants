
function operation(a, b, operator){

  if (operator == "+"){
    return (a+b);
  }else if (operator == "-"){
    return (a-b);
  }else if (operator == "*"){
    return (a*b);
  }else if (operator == "/"){
    return (a/b);
  }
}

const a = 10;
const b = 30;
const operator = "*"
const result = operation(a, b, operator);

// ' - Single Quote 
// ` - Backtick Operator/Symbol [Before the number-1 key [~ / `]] 
console.log(`Result of ${a} and ${b} - operator is ${operator} is ${result}`);