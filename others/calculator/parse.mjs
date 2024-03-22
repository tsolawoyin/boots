
// I want to write the code in such a way that it will pass the code wars stupid kata...

// I think the first thing is to remove space this time around.
// this is not about skipping spaces, this is a about removing them completely to make the algorithm more straght forward...

// regular expression will never work for parenthesis, so I should find a way to work with parens


// helps to remove white spaces in the  expr.
// removing space to make the expr devoid of space and hopefully the code will be easy to develop from here onward.
function removeSpace(expr) {
  let newExpr = "";

  for (let e of expr) {
    if (e != " ") newExpr += e;
  }

  return newExpr;
}
// now let's write the real code...

// String -> Expression
// the function helps parse an String representing an expression into an expression object.
// ========== PLEASE NOTE =================
// Analysis of the string expression indicate we have to major types of entity
// 1. Numbers
// 2. Parenthesis (which has another set of expressions in it)
// I have taken care of spaces already with the removeSpace function above.
// The code architectuture will follow this model.
// Numbers will be represented as "n", while Parenthesis will be represented as "p".
// So
// Expression is one:
// - Number: n
// - Parenthesis: p
// where Number is any number including negatives such as 1, 2, 300, -4, -2.4, 9.99,
// and Parenthesis represents subexpressions such as (1+2), (3), (1--3), (1+(4)),
// ========================================
// return "n" or "p" depending on the next identity in the string
function identifyNext(expr) {
  // perhaps I will need to do two types of checking
  // one for Numbers
  // another for Parens
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

// TESTS
// console.log(identifyNext("-2()"))

// identifyNext("-340091.2")
// identifyNext("-31.29786")
// console.log(identifyNext("31.29"))
// identifyNext("4+5")
// console.log(identifyNext("-(2)"));
// console.log(identifyNext("(2)"));
// console.log(identifyNext("1+3"));
// console.log(identifyNext(removeSpace("         2+9")))
// alright. let's continue...
// for parens, you can even check for an ending because it is utterly useless. you shoud only check for the beginnig

// now this is
// still working on the parsing algorithm. if I am able to parse it correctly, I should be able to calculate it honestly

// it's very funny how recursion makes code really simplistic...
function parseExpr(expr) {
  if (!expr) return null; // return null just in case we are done...

  let curr = identifyNext(expr);

  if (curr == "n") {
    let number = parseNumber(expr);

    return {
      a: number.first,
      b: parseExpr(number.rest), //
      o: number.operator,
      t: "n"
    };
  } else if (curr == "p") {
    let paren = parseParen(expr);

    return {
      s: paren.sign,
      a: parseExpr(paren.first), // <= the inner of the parens is one expression on its own
      b: parseExpr(paren.rest), // <= and the rest is another expression
      o: paren.operator, // <= the operator after it...
      t: "p"
    };
  }
}
// console.log(parseExpr("40.89/5.76+0"))
// recursion makes code really simple
// how many recursion is enough? lol, as much as you want thanks.
// if the structure anticipated works correctly, the code will work really fine...
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

// the number parsing works really fine...
// now it's time to parse parenthesis....

// parsing parens is a mixture of everything, it's not so hard sha

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
  let { first, rest }= parseStructure(info[2]);
  // get operand here.. shey u get?

  if (rest) {
    op = rest[0]; // well sha...
    rest = rest.slice(1,) // removing the op...
  } else {
    op = null; // there is no operator
  }

  return {
    sign,
    first, // return the first
    operator: op, // return operator
    rest // return rest
  }
}

// parseParen("(3)")
// parseParen("(3+(5*7))+(34566)")


// => sample test for parseStructure => "3+(5*7))+(34566)"
// => parseStructure("3+(5*7))+(34566)")
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
      let rest = parseStructure(expr.slice(1,));

      first += rest.first + ")"; // adding close paren since it has been skipped in the recursion... omo. this is close...
      expr = rest.rest; 
    }
  }

  return {
    first,
    rest: expr.slice(1,),
  };

}

// let seriousTest = `(1+(((((((((((((((((((((((((2)+(3))))))))))))))))))))))))))/(2+9)+(8+10)`

// console.log(parseParen(seriousTest))

export { parseExpr, removeSpace }