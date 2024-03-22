import { tests } from "./tests.mjs";
import { Expression } from "./Expression.mjs";

const math = new Expression("1+2*5-10/9+10");
math.show()
math.evaluate()
math.show()

// let's go
// Expression -> ??
// function infixToPostFix(expr) {

//   if (!expr.b) {
//     outputQueue.push(expr.a); // just push the digit... simple
//     return; // just return for no reason...
//   }

//   if (outputQueue.length == 0) {
//     // this happens at the beginning...
//     outputQueue.push(expr.a);
//     stack.push(expr.o); 
//     // alright, this is making some sense to some degree but it is confusing already...
//   } else {
//     // obviously the computer is doing what it is told...
//       let currentOp = stack[stack.length - 1];
//       let op = expr.o;
    
//       //   this will work
//       if (operators[op] > operators[currentOp]) {
//         stack.push(op);
//         outputQueue.push(expr.a);
//       } else if (operators[op] == operators[currentOp]) {
//         outputQueue.push(currentOp);
//         stack.pop();
//         stack.push(op);
//       } else if (operators[op] < operators[currentOp]) {
//         let stackCopy = [...stack].reverse();
//         for (let s of stackCopy) {
//           if (operators[op] < operators[s]) {
//             outputQueue.push(s);
//             stack.unshift();
//           } else {
//             stack.push(op);
//             break;
//           }
//         }
//       }
    
//     }
    
//     infixToPostFix(expr.b) // yeah, everything is working now
// }

// infixToPostFix(Expr.expr)
// helps convert infix expression to postfix expr
// examples 
// 1+2+3 -> 12+3+
// 2/2+3 -> 22/3+
// multiple tests incoming...
// infixToPost function expects a type n expression.
// let u = evaluator(infixToPostFix("1+2+3"))
// // console.log(infixToPostFix("1+2+3"))
// u = evaluator(infixToPostFix("1/2*3"))
// u = evaluator(infixToPostFix("1-3+4/2*5+2"))
// u = evaluator(infixToPostFix("1+2*3-5/4"))
// console.log(u)
// u = evaluator(infixToPostFix("1/2+3+4-5*6*7/6"))

// u = evaluator(infixToPostFix(tests[0]))
// u = evaluator(infixToPostFix(tests[1]))
// this function is concise and dope. neat and making sense. Honestly...
// it makes a lot of sense anyways.
// now let us evaluate the postfix notation...
function infixToPostFix(expr) {

  const exprObj = new Expression(expr); // this will return an expr object to work with.

  let operators = {
    "+": 0,
    "-": 0,
    "*": 5,
    "/": 5,
  };

  let outputQueue = [];
  let operatorStack = [];

  function infixToPostFixHelper({a, b, o}) { // destructuring in advance...
    // let me come and write an efficient algorithm jare... one that will work properly...
    if (!b) { // base case, if there is nothing left to work on
      outputQueue.push(a);
      return // returning nothing
    } 

    if (outputQueue.length == 0) { // just starting out
      // this side works perfectly
      outputQueue.push(a)
      operatorStack.push(o)
    } else {
      let lastOp = operatorStack[operatorStack.length - 1]; // get the last item in the queue
      if (operators[lastOp] < operators[o]) { // case where last op is less than current o
        outputQueue.push(a);
        operatorStack.push(o);
      } else { // greater than or equal to
        outputQueue.push(a) // push a first
        outputQueue.push(lastOp); // push last op
        operatorStack.pop(); // remove the last element
        operatorStack.push(o); // push in the new op
      }
    }
    // once all that is done
    // recurse on b
    infixToPostFixHelper(b) // the destructing will be done properly..
  }

  infixToPostFixHelper(exprObj.expr); 

  outputQueue = outputQueue.concat(operatorStack.reverse());

  return outputQueue

}

function evaluator(arr) {
  // given a postfix array, evaluate and return the value...
  while (arr.length > 1) {
    for (let [i, x] of arr.entries()) {
      if (typeof x == 'string') {

        let first = arr.slice(0, i);
        let second = arr.slice(i+1,);
        let result = performCalc(first, x);

        arr = result.concat(second)// oh ok

        break // break out and start over again...
      }
    }
  }
  return arr; // makes sense
}
// console.log(performCalc([1,2,6,9], "-"))
function performCalc(arr, sign) {
  // console.log(arr)
  let a = arr[arr.length - 2] // get the penultimate element
  let b = arr[arr.length - 1] // get the last element
  let res = null;

  if (sign == "+") {
    res = Math.round(a + b);
  } else if (sign == "-") {
    res = Math.round(a - b);
  } else if (sign == "*") {
    res = Math.round(a * b)
  } else {
    res = Math.round(a / b)
  }

  arr = arr.slice(0,arr.length - 2);

  arr.push(res);

  return arr
}

// it is working perfectly at the moment... lolxx

// this means I can actually do everything at once here... hmm... it will just be a long process.. that's all

// I am writing the rubbish.
// I can actually modify it to be better than this shey you get. It makes sense. Honestly. This is PROGRESS. It can be better obviosly...

// the evaluator algorithm is double pronged. 
// 1.first convert to infix, and evaluate everything