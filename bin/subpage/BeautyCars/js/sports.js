


// 体育赛事
// 获取按钮
var sportsBut = document.querySelectorAll('.sportsBut li a');
// 获取内容
var sportsMain = document.querySelectorAll('.sportsMain');
// 给按钮添加点击事件
for (var i = 0; i < sportsBut.length; i++ ) {
    sportsBut[i].setAttribute('index',i);
    sportsBut[i].onclick = function () {
        for (var j = 0; j < sportsBut.length; j++) {
            sportsBut[j].removeAttribute('id');
            sportsMain[j].style.display = 'none';
        }
        this.id='right_picture_list_but_active';
        sportsMain[this.getAttribute('index')].style.display = 'block';
    }
} 