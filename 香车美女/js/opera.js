

// 戏曲&综艺
// 获取按钮
var operaBut = document.querySelectorAll('.operaBut li a');
// 获取内容
var operaMain = document.querySelectorAll('.operaMain');
// 给按钮添加点击事件
for (var i = 0; i < operaBut.length; i++ ) {
    operaBut[i].setAttribute('index',i);
    operaBut[i].onclick = function () {
        for (var j = 0; j < operaBut.length; j++) {
            operaBut[j].removeAttribute('id');
            operaMain[j].style.display = 'none';
        }
        this.id='right_picture_list_but_active';
        operaMain[this.getAttribute('index')].style.display = 'block';
    }
} 