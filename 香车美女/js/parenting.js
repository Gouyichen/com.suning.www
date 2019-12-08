

// 儿童亲子
// 获取按钮
var parentingBut = document.querySelectorAll('.parentingBut li a');
// 获取内容
var parentingMain = document.querySelectorAll('.parentingMain');
// 给按钮添加点击事件
for (var i = 0; i < parentingBut.length; i++ ) {
    parentingBut[i].setAttribute('index',i);
    parentingBut[i].onclick = function () {
        for (var j = 0; j < parentingBut.length; j++) {
            parentingBut[j].removeAttribute('id');
            parentingMain[j].style.display = 'none';
        }
        this.id='right_picture_list_but_active';
        parentingMain[this.getAttribute('index')].style.display = 'block';
    }
} 