// https://www.codewars.com/kata/new-with-apply

function construct(Greeting, ...arg) {
    return new Greeting(...arg);
}