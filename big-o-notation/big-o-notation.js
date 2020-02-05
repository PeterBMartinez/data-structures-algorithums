/**
BIG O
-----
- It allows us to talk formally about how the runtime of an algorithum grows as the inputs grow

BIG O DEFINITION
----------------
We say that an algorithm is O(f(n)) if number of simple operations the computer 
has to do is eventually less than a constant times f(n), as n increases

f(n) could be linear (f(n) = n)
f(n) could be quadratic (f(n) = n^2)
f(n) could be constant (f(n) = 1)

WHY IS IT IMPORTANT?
--------------------
- It's important to have a precise vocabulary to talk about how our code preforms
- Useful for discussing trade-offs between different approaches
- When your code slows down or crashes, identifying parts of the code that are inefficient
  can help us find pain points in our applications

EXAMPLES
-------
Suppose we want to write a function that calculates 
the sum of all numbers from 1 up to (and including) some number n
**/

/** 
ANALYSIS
--------
- operations: n opperations, n assignments, n comparisions
- operations total: n
- Big O: O(n)
**/
function addUpToFirst(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

/** 
ANALYSIS
--------
- operations: multiplication, addition, division
- operations total: 3
- Big O complexity: O(1)
**/
function addUpToSecond(n) {
  return (n * (n + 1)) / 2;
}

/** 
  ANALYSIS
  --------
  - operations: n comparision
  - operations total: n
  - Big O complexity: O(n^2)
**/
function printAllPairs(n) {
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
      console.log(i, j);
    }
  }
}
