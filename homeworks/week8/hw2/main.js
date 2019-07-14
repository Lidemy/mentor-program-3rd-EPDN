const request = new XMLHttpRequest();
const requestPost = new XMLHttpRequest();
request.open('GET', 'https://lidemy-book-store.herokuapp.com/posts?_limit=20&_sort=id&_order=desc', true);
request.send();

function getmessage() {
  if (request.status >= 200 && request.status < 400) {
    const msgs = JSON.parse(request.responseText);
    const latest = document.querySelector('.latest_20');
    let result = '';
    latest.innerHTML = '';
    msgs.forEach((msg) => {
      result = `${msg.id} ${msg.content}`;
      latest.innerHTML
        += `<div>${result}</div>`;
    });
  } else {
    console.log('err');
  }
}

request.onload = getmessage;
request.onerror = function printError() {
  alert('系統不穩定，請再試一次');
};

const button = document.querySelector('button');
const input = document.querySelector('input');
button.addEventListener('click', () => {
  requestPost.open('POST', 'https://lidemy-book-store.herokuapp.com/posts', true);
  requestPost.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  const params = `content=${input.value}`;
  requestPost.send(params);
  request.open('GET', 'https://lidemy-book-store.herokuapp.com/posts?_limit=20&_sort=id&_order=desc', true);
  request.send();
  input.value = '';
});
