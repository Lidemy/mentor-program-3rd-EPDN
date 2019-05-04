// 一個數字如果除了１和自己之外，沒有其他正因數時，稱為質數。
// 質數是指大於1(所以1不是)的整數中，只能被自己和1整除(被非正整數整除不算)的數，如2,3,5,7,11

function isPrime(n) {
  if (n === 1) return false; // 1 不是質數。
  for (let i = 2; i < n; i += 1) { // 最小質數是 2。
    if (n % i === 0) {
      return false;
    }
  }
  return true; // 只能被自己和 1 整除。
}

module.exports = isPrime;
