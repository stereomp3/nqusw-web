function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    // 取得input id
    input = document.getElementById("myInput");
    // 讓input大小寫不影響搜索
    filter = input.value.toUpperCase();
    // 取得被搜索的數據
    ul = document.getElementById("content");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        // 取得每個li裡面的第一個a裡面的資料
        a = li[i].getElementsByTagName("h2")[0];
        console.log(a.textContent)
        txtValue = a.textContent || a.innerText;
        // indexOf(??) 是判斷前面物件有沒有??，如果有，傳的值 >= 0
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}