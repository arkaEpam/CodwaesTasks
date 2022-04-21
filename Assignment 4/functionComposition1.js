// http://www.codewars.com/kata/function-composition-1

function compose(...fns){
    return function(arg){
       return fns.reduceRight((res, fn) => fn(res), arg);
    }}