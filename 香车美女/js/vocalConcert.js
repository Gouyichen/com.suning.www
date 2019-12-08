

// 演唱会
   
// 获取按钮
var vocalConcertBut = document.querySelectorAll('.vocalConcertBut li a');
// 获取内容
var vocalConcertMain = document.querySelectorAll('.vocalConcertMain');
// 给按钮添加点击事件
for (var i = 0; i < vocalConcertBut.length; i++ ) {
    vocalConcertBut[i].setAttribute('index',i);
    vocalConcertBut[i].onclick = function () {
        for (var j = 0; j < vocalConcertBut.length; j++) {
            vocalConcertBut[j].removeAttribute('id');
            vocalConcertMain[j].style.display = 'none';
        }
        this.id='right_picture_list_but_active';
        vocalConcertMain[this.getAttribute('index')].style.display = 'block';
    }
} 