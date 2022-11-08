var title = document.querySelectorAll('li.tabs');
var content = document.querySelectorAll('ol li');

title.forEach(function (item,key) {
    item.onmouseover = function () {
        title.forEach(function (i,k) {
            i.className = '';
            content[k].className = '';
        });
        item.className = 'active';
        content[key].className = 'active';
        //设置选项卡选中时候显示的样式
        var x = document.querySelectorAll("li.tabs");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.backgroundColor = "#dc7c00";
        }
    }
})
