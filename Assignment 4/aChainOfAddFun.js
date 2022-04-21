// We want to create a function that will add numbers together when called in succession.

// add(1)(2); // == 3
function add(n){
    var fn = function(x) {
      return add(n + x);
    };
    
    fn.valueOf = function() {
      return n;
    };
    
    return fn;
  }
  
  function add(n){
    var fn = function(x){ return add(n+x); }
    fn.toString = function(){ return n; }
    return fn;
  }