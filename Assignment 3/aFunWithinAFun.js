// Given an input n, write a function always that returns a function which returns n.
// http://www.codewars.com/kata/a-function-within-a-function

function always (n) {
    var res = function (){
      return n;
    }
    return res;
  }