// https://www.codewars.com/kata/santaclausable-interface

function isSantaClausable(obj) {
    return ["sayHoHoHo", "distributeGifts", "goDownTheChimney"].every(function(
      methodName
    ) {
      return typeof obj[methodName] == "function";
    });
  }