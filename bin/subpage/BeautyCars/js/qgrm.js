// 全国热门巡演


// 获取遮罩元素
var aMask = document.querySelectorAll('.mask');

// 获取被遮罩元素
var aMasked = document.querySelectorAll('#mask');
// 遍历所有被遮罩元素
for (var i = 0; i < aMasked.length; i++) {
    // 获取每个被遮罩元素的宽
    // var aMaskedWidth = aMasked[i].offsetWidth;
    // 添加自定义属性
    aMasked[i].setAttribute('mask', i);
    // 添加鼠标移入事件
    aMasked[i].onmouseover = function () {
        for (var j = 0; j < aMask.length; j++) {
            // 默认所有遮罩元素隐藏
            aMask[j].style.display = 'none';
        }
        // 让鼠标移入的那个显示
        aMask[this.getAttribute('mask')].style.display = 'block';
        animate(aMask[this.getAttribute('mask')], {
            'left': 0,
            'opacity': 0.9
        })
    }


    // 鼠标移出
    aMask[i].onmouseout = function () {
        for (var j = 0; j < aMask.length; j++) {
            aMask[j].style.display = 'none';
            aMask[j].style.left = -320 + 'px';
        }
    }
}

