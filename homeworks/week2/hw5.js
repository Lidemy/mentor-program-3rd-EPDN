function join(arr, concatStr) {
  let r1 = '';
  for (let i = 0; i < arr.length; i += 1) {
    if (i === arr.length - 1) {
      r1 += arr[i];
    } else {
      r1 += arr[i] + concatStr;
    }
  }
  return r1;
}

console.log(join([1, 2, 3], ''));
console.log(join(['a', 'b', 'c'], '!'));

function repeat(str, times) {
  let r2 = '';
  for (let i = 1; i <= times; i += 1) {
    r2 += str;
  }

  return r2;
}


console.log(repeat('EP', 5));
console.log(repeat('yoyo', 2));
