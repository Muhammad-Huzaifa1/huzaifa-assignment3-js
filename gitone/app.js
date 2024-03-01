// Table code
let userInp1 = +prompt("enter the number for which you want a table for ");
let userInp2 = +prompt("from where should the table start");
let userInp3 = +prompt("where should the table end");

for (let i = userInp2; i <= userInp3; i++) {
  document.write(userInp1 + "x" + i + "=" + userInp1 * i + "<br>");
}

let cricketers = [
  "babar",
  "kohli",
  "williamson",
  "stevesmith",
  "ms dhoni",
  "shaheen",
  "bumrah",
  "rizwan",
  "rohit",
  "pandya",
];

console.log(cricketers);

cricketers.push("naseem shah");

cricketers.push("haris rauf");

cricketers.pop();

cricketers.unshift("pat cummins");

cricketers.shift();

console.log(cricketers.slice(2, 6));

let cricketers2 = cricketers.splice(2,6,"shadabkhan")
console.log(cricketers2)
