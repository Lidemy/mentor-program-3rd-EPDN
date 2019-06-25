## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。

+ `<summary>` 定義互動面板的標籤

+ `<details>` 定義互動面板的內容細節

+ `<u>` 文字下加底線

<details>
  <summary>這裡是標題，點一下可以看到細節</summary>
  <p> 細節內容在<u>這邊</u></p>
</details>


## 請問什麼是盒模型（box modal）

參考來源：Alphacamp 教材
每個 HTML 元素在瀏覽器裡都會被視為一個具有寬度和高度的方塊盒子，我們稱為「盒子模型 (box model) 」，有時候也稱為「容器」。
在 CSS box model 中，每個盒子會包含以下四種成份：

+ margin：邊框與周圍方塊之間的空間 (視為「外部」空間)
+ padding：從方塊的邊框位移內容的空間 (視為「內部」空間)
+ border：方塊的邊界 (無論是否可見)
+ content：方塊中包含的內容 (例如文字、圖像等)

除了 content 是內容的一部分，會根據內容的不同，而有不同的 HTML 標籤，其他部分如 margin (邊界) 、padding (邊距) 和 border (邊框) ，都有對應的屬性，可以使用 CSS 修改，我們統稱為「Box 屬性」。


## 請問 display: inline, block 跟 inline-block 的差別是什麼？

參考來源：Alphacamp 教材
+ Inline 元素會佔用顯示內容所需的空間，後面的元素會緊鄰在後。inline 元素的寬度和高度是由內容決定的，你無法隨意控制。

+ Block 元素會佔用整個瀏覽器視窗的寬度，使下一個元素被擠到下一行。

+ Inline-block 元素作用類似 block 元素，你對它的尺寸有絕對的掌控權，但是它不會佔用整個水平空間，可以彼此相鄰。



## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

參考來源：https://www.1keydata.com/css-tutorial/tw/position.php

+ 靜態定位 (static position)- (預設值)
這代表元素會被放在預設的地方。如果 position 的值是被設定為 statics 的話，那 top、bottom、left、和 right 的值就都沒有意義了。

+ 相對定位 (Relative Position)
這代表元素會被放在瀏覽器內的某個位置 (依 top、bottom、left、和 right 的值而定)。當使用者將網頁往下拉時，元素也會跟著改變位置。

+ 絕對定位 (Absolute Position)
這代表元素被放的地方將會與預設的地方有所不同。不同的程度是依照 top、bottom、left、和 right 的值而定

+ 固定定位 (Fixed Position)
 這代表元素會被放在瀏覽器內的某個位置 (依 top、bottom、left、和 right 的值而定)。當使用者將網頁往下拉時，元素的位置不會改變。