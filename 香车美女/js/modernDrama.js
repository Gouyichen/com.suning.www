

// 话剧舞台剧

// 获取按钮
var modernDramaBut = document.querySelectorAll('.modernDramaBut li a');
// 获取内容
var modernDramaMain = document.querySelectorAll('.modernDramaMain');
// 给按钮添加点击事件
for (var i = 0; i < modernDramaBut.length; i++ ) {
    modernDramaBut[i].setAttribute('index',i);
    modernDramaBut[i].onclick = function () {
        for (var j = 0; j < modernDramaBut.length; j++) {
            modernDramaBut[j].removeAttribute('id');
            modernDramaMain[j].style.display = 'none';
        }
        this.id='right_picture_list_but_active';
        modernDramaMain[this.getAttribute('index')].style.display = 'block';
    }
} 