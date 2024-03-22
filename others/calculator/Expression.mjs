class Expression {
  constructor(expr) {
    function removeSpace(expr) {
      let newExpr = "";

      for (let e of expr) {
        if (e != " ") newExpr += e;
      }

      return newExpr;
    }

    function identifyNext(expr) {
      let numberReg = /^[-]?\d+[.]?\d*/; // this should return for the number
      let parensReg = /^[-]?\d*\(/; // the parens may have a negative in front...
      if (parensReg.test(expr)) {
        // test for parens
        return "p";
      }

      if (numberReg.test(expr)) {
        // test for numbers
        return "n";
      }
    }

    function parseExpr(expr) {
      if (!expr) return null; // return null just in case we are done...

      let curr = identifyNext(expr);

      if (curr == "n") {
        let number = parseNumber(expr);

        return {
          a: number.first,
          b: parseExpr(number.rest), //
          o: number.operator,
          t: "n",
        };
      } else if (curr == "p") {
        let paren = parseParen(expr);

        return {
          s: paren.sign,
          a: parseExpr(paren.first), // <= the inner of the parens is one expression on its own
          b: parseExpr(paren.rest), // <= and the rest is another expression
          o: paren.operator, // <= the operator after it...
          t: "p",
        };
      }
    }

    function parseNumber(expr) {
      // returning
      let match = extract(expr, "n");

      return {
        first: Number(match[1]),
        rest: match[3] ? match[3] : null,
        operator: match[2] ? match[2] : null,
      };
    }

    function extract(expr, t) {
      if (t == "n") {
        let regex = /^([-]?\d+[.]?\d*)([+-/*]?)(.*)/;
        return expr.match(regex);
      } else {
        let regex = /^([-]?\d*)\((.*)/; // hmm.. you don't even know anything
        return expr.match(regex);
      }
    }

    function parseParen(expr) {
      // we don't have to use regex here... let's just use a while loop to solve this bullshit problem.
      let info = extract(expr, "p");
      // sign may be
      let sign = null;

      let op = null;

      // assigning proper sign in case of multiplication
      if (!info[1]) {
        sign = 1;
      } else if (info[1] == "-") {
        sign = -1;
      } else {
        sign = Number(info[1]); // -2, -4, 2, etc...
      }
      // sign assigned so let's continue
      let { first, rest } = parseStructure(info[2]);
      // get operand here.. shey u get?

      if (rest) {
        op = rest[0]; // well sha...
        rest = rest.slice(1); // removing the op...
      } else {
        op = null; // there is no operator
      }

      return {
        sign,
        first, // return the first
        operator: op, // return operator
        rest, // return rest
      };
    }

    function parseStructure(expr) {
      // return { first, rest, op }
      let first = "";

      while (expr[0] != ")") {
        // sorry, no vex joh
        // keep choping off until we get to the end
        if (expr[0] != "(") {
          first += expr[0];
          expr = expr.slice(1); // return the rest
        } else {
          first += expr[0]; // making sense... // just add the string to first
          let rest = parseStructure(expr.slice(1));

          first += rest.first + ")"; // adding close paren since it has been skipped in the recursion... omo. this is close...
          expr = rest.rest;
        }
      }

      return {
        first,
        rest: expr.slice(1),
      };
    }

    this.expr = parseExpr(removeSpace(expr))
    this.exprString = expr;
    this.value = null;
  }

  evaluate() {
    function infixToPostFix(exprObj) {

       // this will return an expr object to work with.
    
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
        res = Number((a + b).toFixed(2));
      } else if (sign == "-") {
        res = Number((a - b).toFixed(2));
      } else if (sign == "*") {
        res = Number((a * b).toFixed(2))
      } else {
        res = Number((a / b).toFixed(2))
      }
    
      arr = arr.slice(0,arr.length - 2);
    
      arr.push(res);
    
      return arr
    }

    this.value = evaluator(infixToPostFix(this));
  }

  show() {
    console.log(this.value);
  }
}

export { Expression }