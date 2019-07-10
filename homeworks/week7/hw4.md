## 什麼是 DOM？

DOM 的全名為 文件物件模型 (Document Object Model)，他是一個由瀏覽器提供的 應用程式介面 (application programming interface)，目的是讓 JavaScript 能存取網頁元素。


## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？

事件傳遞的順序是從父元素一路往子元素傳遞，當到達子元素後再往父元素一路傳遞回去，而這個機制就是捕獲與冒泡。

由下而上的，稱為事件冒泡 (event bubbling) :當子元素的事件發生後，一路往父元素傳遞，父元素也會被觸發
由上而下的，稱為事件捕獲 (event capturing) :與冒泡相反，當子元素事件發生時，會由父元素一路往子元素傳遞

每一次事件發生的時候，捕獲與冒泡都會進行，先捕獲再冒泡。

## 什麼是 event delegation，為什麼我們需要它？

由父元素統一監聽，再分頭委派的實作技巧，稱為「事件委派 (event delegation)」，可以減少監聽器數目。

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？

event.preventDefault()：是把預設行為擋下來，但傳遞機制會持續

原本 <a> 會有超連結的效果，設 preventDefault() 之後就無法超連結
原本 <input type="submit"> 會有提交功能的按鈕，設 preventDefault() 之後就無法提交
設 preventDefault() 之後雖然預設行為被擋掉了，但其他的程式碼還是會繼續執行，一樣會有傳遞機制

event.stopPropagation()：預設行為不會被阻止，但可以停止事件的傳遞
外層有 outerBox，往內有 innerBox，若是在 outerBox 上設 click 監聽、第三個參數設 true 及設 stopPropagation()，則點擊 innerBox 時會發現 Capture Phase 在 outerBox 就停住不會往下傳到 innerBox
若 stopPropagation() 設在 innerBox 的 click 監聽，點擊 innerBox 之後會發現 Bubbling 不會向上傳遞到 outerBox，但會有 Capture Phase 的 outerBox 及 Target Phase 的 innerBox
