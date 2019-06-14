## 請以自己的話解釋 API 是什麼

API Application Programming Interface

API’s are interfaces for code/computers to talk to one another.
It defines how two pieces of software talk to each other.

假設我要去 ATM 提款機領錢，我向  ATM  machine 請求 200 元，當我按下 200 元確認之後，
銀行系統會收到我請求，然後跟機器說可以給 200 元 ，機器就會吐 200 元出來。我就成功領 200 元。那 ATM 機器面板就是 API 。


## 請找出三個課程沒教的 HTTP status code 並簡單介紹

參考來源：
https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81

403 Forbidden
伺服器已經理解請求，但是拒絕執行它。
可以簡單的理解爲沒有權限訪問此站。該狀態表示服務器理解了本次請求但是拒絕執行該任務，該請求不該重發給服務器。

429 Too Many Requests 
用戶在給定的時間內傳送了太多的請求。旨在用於網路限速。

502 Bad Gateway
作為閘道器或者代理工作的伺服器嘗試執行請求時，從上游伺服器接收到無效的回應。
主要會產生的原因是因為你的 Web Server 服務出現問題，因此回傳 502 Bad Gateway 錯誤。


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。


Base URL : https://www.epdnrestaurant.com 

(1)獲取所有餐廳數量
mathod : GET
path : /restaurants
參數 : _limit=限制回傳資料數字
範例 : https://www.epdnrestaurant.com/restaurants?_limit=20
說明 : 回傳 20 筆餐廳資料，若無 `?_limit=20` 將回傳全部的數目。

(2)獲取單一餐廳資料
mathod : GET
path : /restaurants/:id
參數 : 無
範例 : https://www.epdnrestaurant.com/restaurants?id=101
說明： 選出 id 為 101 的資料
```
{
    "data": [
        {
            "id": 101 
            "name": "Taipei cafe",
            "adress": "信義路"
        },
        ...
    ],
}
```
(3)新增餐廳
mathod : POST
path : /restaurants
參數 : name：餐廳名稱
說明 : id 數會根據系統自增，物件內需要包含名稱和地址 
```
{
    "data": [
        {
            "id": 90 
            "name": "Sweety drink",
            "adress": "南京東路二段"
        },
        ...
    ],
}
```
(4)更新餐廳資料 
mathod : PUT/PATCH
path : /restaurants/:id
參數 : name:餐廳名稱
範例 : 
```
{
    "data": [
        {
            "id": 90 
            "name": "Sweety drink",
            "adress": "南京東路五段"
        },
        ...
    ],
}
```
(5)刪除餐廳
mathod : DELETE
path : /restaurants/:id
參數 : 無
範例 : https://www.epdnrestaurant.com/restaurants?id=101
