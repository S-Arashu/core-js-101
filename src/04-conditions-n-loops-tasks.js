/* eslint-disable no-param-reassign */
/* eslint-disable brace-style */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable comma-dangle */
/* eslint-disable operator-linebreak */
/* *************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */

/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz';
  }
  if (num % 3 === 0) {
    return 'Fizz';
  }
  if (num % 5 === 0) {
    return 'Buzz';
  }

  return num;
}

/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  let factorial = 1;

  for (let i = 1; i <= n; i += 1) {
    factorial *= i;
  }

  return factorial;
}

/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  let sum = 0;

  for (let i = n1; i <= n2; i += 1) {
    sum += i;
  }

  return sum;
}

/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
  const isLeft = rect1.left + rect1.width <= rect2.left;
  const isAbove = rect1.top + rect1.height <= rect2.top;

  return !(isLeft || isAbove);
}

/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  const distance = Math.sqrt(
    (point.x - circle.center.x) ** 2 + (point.y - circle.center.y) ** 2
  );

  return distance < circle.radius;
}

/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  const newArr = str.split('');
  const charCount = {};

  newArr.forEach((char) => {
    charCount[char] = (charCount[char] || 0) + 1;
  });

  for (let i = 0; i <= newArr.length; i += 1) {
    if (charCount[newArr[i]] === 1) {
      return newArr[i];
    }
  }
  return null;
}

/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  let start;
  let end;

  if (isStartIncluded) {
    start = '[';
  } else {
    start = '(';
  }

  if (isEndIncluded) {
    end = ']';
  } else {
    end = ')';
  }

  return `${start}${min}, ${max}${end}`;
}

/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}

/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  const newNum = String(num).split('').reverse().join('');
  return +newNum;
}

/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
  const str = ccn.toString();
  let sum = 0;
  let alt = false;

  for (let i = str.length - 1; i >= 0; i -= 1) {
    let digit = parseInt(str.charAt(i), 10);

    if (alt) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
    alt = !alt;
  }
  return sum % 10 === 0;
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  let finalSum;
  const arr = String(num).split('');
  const sum = arr.reduce((current, number) => +current + +number, 0);

  if (sum > 9) {
    finalSum = getDigitalRoot(sum);
  } else {
    finalSum = sum;
  }

  return finalSum;
}

/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  // if (str.length === 0) {
  //   return true;
  // }
  // if (
  //   str.startsWith(']') ||
  //   str.startsWith(')') ||
  //   str.startsWith('}') ||
  //   str.startsWith('>')
  // ) {
  //   return false;
  // }

  // const arr = str.split('');
  // const obj = {};
  // arr.forEach((elem) => {
  //   obj[elem] = (obj[elem] || 0) + 1;
  // });

  // if (
  //   obj['['] !== obj[']'] ||
  //   obj['('] !== obj[')'] ||
  //   obj['{'] !== obj['}'] ||
  //   obj['<'] !== obj['>']
  // ) {
  //   return false;
  // }
  // return true;
  const stack = [];
  // Map of matching brackets
  const bracketMap = {
    '(': ')',
    '[': ']',
    '{': '}',
    '<': '>',
  };

  // Use forEach to iterate over each character in the string
  let isBalanced = true; // Flag to track if brackets are balanced
  str.split('').forEach((char) => {
    // If the character is an opening bracket, push it onto the stack
    if (bracketMap[char]) {
      stack.push(char);
    }
    // If it's a closing bracket, check if it matches the last opening bracket
    else if (Object.values(bracketMap).includes(char)) {
      // If the stack is empty or brackets don't match, set isBalanced to false
      if (stack.length === 0 || bracketMap[stack.pop()] !== char) {
        isBalanced = false; // Flag indicating imbalance
      }
    }
  });

  // Final check: if the stack is empty and isBalanced is still true, then it's balanced
  return isBalanced && stack.length === 0;
}

/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  if (n < 2 || n > 10) {
    throw new Error('Base n must be between 2 and 10.');
  }

  if (num === 0) {
    // Handle the edge case for zero
    return '0';
  }

  let result = ''; // Initialize the result string

  // Use a loop to calculate the representation in base-n
  while (num > 0) {
    const remainder = num % n; // Get the remainder
    result = remainder.toString() + result; // Prepend the remainder to the result
    num = Math.floor(num / n); // Divide num by n and round down
  }

  return result; // Return the resulting string
}

/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/verbalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
  let initialArr = pathes[0].split('/');
  let common = '';
  for (let i = 1; i < pathes.length; i += 1) {
    const arr = pathes[i].split('/');
    common = '';
    for (let k = 0; k < arr.length; k += 1) {
      if (arr[k] === initialArr[k]) {
        common += `${arr[k]}/`;
      } else {
        initialArr = common.split('/');
        break;
      }
    }
  }
  return common;
}

/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  const m1LengthRows = m1.length;
  const m1LengthCol = m1[0].length;
  const m2LengthRows = m2.length;
  const m2LengthCol = m2[0].length;

  if (m1LengthCol !== m2LengthRows) {
    throw new Error('Matrices don`t match');
  }

  const resultArr = [];

  for (let i = 0; i < m1LengthRows; i += 1) {
    const newArr = [];
    for (let k = 0; k < m2LengthCol; k += 1) {
      let sum = 0;
      for (let j = 0; j < m2LengthRows; j += 1) {
        sum += m1[i][j] * m2[j][k];
      }

      newArr.push(sum);
    }
    resultArr.push(newArr);
  }
  return resultArr;
}

/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
  const center = position[1][1];
  const ticTacArrWidthAndHeigh = 3;

  for (let p = 0; p < position.length; p += 1) {
    if (position[p].length !== 3) {
      const diff = 3 - position[p].length;

      for (let o = 1; o <= diff; o += 1) {
        position[p].push(undefined);
      }
    }
  }

  let winner;

  for (
    let i = 0, k = ticTacArrWidthAndHeigh - 1;
    i < ticTacArrWidthAndHeigh;
    i += 1, k -= 1
  ) {
    for (
      let j = 0, l = ticTacArrWidthAndHeigh - 1;
      j < ticTacArrWidthAndHeigh;
      j += 1, l -= 1
    ) {
      if (
        position[i][j] === position[i][j + 1] &&
        position[i][j] === position[i][j + 2] &&
        position[i][j] !== undefined
      ) {
        return position[i][j];
      }
      if (
        i === 0 &&
        position[i][j] === position[i + 1][j] &&
        position[i][j] === position[i + 2][j] &&
        position[i][j] !== undefined
      ) {
        return position[i][j];
      }
      if (i === 0 || i === 2) {
        if (center === position[i][j] && center === position[k][l]) {
          winner = center;
        }
      }
    }
  }
  if (winner) {
    return winner;
  }
  return undefined;
}

module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
