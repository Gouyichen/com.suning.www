

// 音乐&舞蹈

// 获取按钮
var musicBut = document.querySelectorAll('.musicBut li a');
// 获取内容
var musicMain = document.querySelectorAll('.musicMain');
// 给按钮添加点击事件
for (var i = 0; i < musicBut.length; i++ ) {
    musicBut[i].setAttribute('index',i);
    musicBut[i].onclick = function () {
        for (var j = 0; j < musicBut.length; j++) {
            musicBut[j].removeAttribute('id');
            musicMain[j].style.display = 'none';
        }
        this.id='right_picture_list_but_active';
        musicMain[this.getAttribute('index')].style.display = 'block';
    }
} 