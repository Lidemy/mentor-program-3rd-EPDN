function add(a, b) {
  const arrA = a.split('').reverse(); // 先換成陣列，再倒過來。
  const arrB = b.split('').reverse();
  const ans = [''];
  const length = Math.max(arrA.length, arrB.length); // 位數不一樣問題，先取最大位數。

  let carry = 0; // 處理進位問題。
  for (let i = 0; i < length; i += i) {
    const n = Number(arrA[i] || 0) + Number(arrB[i] || 0) + carry; // 轉成數字，加預設值，加上一個進位累積。
    ans[i] = n % 10;
    carry = Math.floor(n / 10); // 無條件捨去。
  }
  if (carry) {
    ans.push(carry); // 處理 2 位數問題。
  }
  return ans.reverse().join(''); // 倒過來陣列轉字串。
}


module.exports = add;
