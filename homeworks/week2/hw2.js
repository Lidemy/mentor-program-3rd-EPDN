function capitalize(str) {
  const newStr = str[0].toUpperCase() + str.slice(1);
  return newStr;
}
console.log(capitalize('estella'));
console.log(capitalize('54estella'));
