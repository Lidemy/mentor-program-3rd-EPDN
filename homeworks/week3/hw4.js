// 最後一個元素跑到第一個，跑完之後就一直加。
function reverse(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    newStr += str[i];
  }
  return newStr;
}

function isPalindromes(str) {
  return str === reverse(str);
}


module.exports = isPalindromes;
