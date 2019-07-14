## 什麼是 Ajax？
Asychronous JavaScript And XML，非同步 JavaScript 及 XML，非同步和伺服器交換資料之 JavaScript 的一種統稱，與先前以 form 的方式的差別為，不需要重新載入網頁，就可以拿到請求的回應，此法是透過瀏覽器上的 JavaScript 來對伺服器發送請求。

## 用 Ajax 與我們用表單送出資料的差別在哪？
最明顯的差別為 Ajax 是透過 JavaScript 來發送請求，form 則是瀏覽器本身，Ajax 不需要重新載入網頁，就可以拿到請求的回應，form 會刷新頁面。

表單送出資料會整個跑出一個新的畫面並將程式碼整個重新跑過
Ajax 不會換頁，只會有部分畫面更動成新的

## JSONP 是什麼？

JSONP 是一種交換資料的方式
由於受到同源政策的影響，存取資料時會受到阻礙，但 HTML 標籤中的 ```<script>``` 並不受到同源政策阻饒，因此可以透過 javascript動態產生的 JSON 資料來讓其他人存取資料 



## 要如何存取跨網域的 API？
利用跨來源資源共用（CORS，Cross-Origin Resource Sharing)的機制，在 response 裡面加上一個 header，Access-Control-Allow-Origin 的這個 header 就會加入可以存取 API 回應的使用者。

## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？
因為跨網域的問題是只會出現在瀏覽器上面，現在是利用瀏覽器對伺服器發送請求，所以會有網域問題，而第四週是透過 node 在後端對伺服器發送請求，並沒有透過瀏覽器。
