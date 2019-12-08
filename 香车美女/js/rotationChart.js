
// 轮播图部分


function getStyle(elem, attr) {
    return getComputedStyle(elem, true)[attr];
}


// 获取元素
// 获取左右按钮
var leftBut = document.querySelector('#lb_left');
var rightBut = document.querySelector('#lb_right');
// 获取轮播图窗口
var lb_Div = document.querySelector('#lb_window');
// 获取窗口宽度
var lb_DivWidth = lb_Div.offsetWidth;
// console.log(lb_DivWidth);
// 获取ul
var lb_ul = document.querySelector('#lb_window ul');

// 添加小点

// 添加ol标签
var lb_ol = document.createElement('ol');
// 放到#lb_window里
lb_Div.appendChild(lb_ol);
// for 循环里添加li
for (var i = 0; i < lb_ul.children.length; i++) {
    var lb_OlLi = document.createElement('li');
    // 添加内容
    lb_OlLi.innerHTML = i + 1;
    // 插到ol里
    lb_ol.appendChild(lb_OlLi);
}

// 获取ul里的第一个li
var lb_firstLi = document.querySelector('#lb_window ul li:first-child');
// console.log(lb_firstLi);
// 把他插到ul列表的后面
lb_ul.appendChild(lb_firstLi.cloneNode(true));
// 获取所有li
var lb_Ali = document.querySelectorAll('#lb_window ul li');

// 设置一个变量
var num = 0;
// 先让第一个ol 的 li被选中 
lb_ol.children[0].className = 'lb_active';
// 点击左按钮
leftBut.onclick = function () {
    // 判断是不是点到了第零个图片是就瞬间跳到最后一张图片
    if (num == 0) {
        num = lb_Ali.length - 1;
        lb_ul.style.left = -num * lb_DivWidth + 'px';
    }
    // 变量自减
    num--;
    // 图片跟着i移动
    animate(lb_ul, {
        'left': -num * lb_DivWidth
    });


    // 让图片移动小点也移动
    for (var j = 0; j < lb_ol.children.length - 1; j++) {
        // 让所有的小点默认全部不选中
        lb_ol.children[j].removeAttribute('class');
        // 给索引为num的被选中
        lb_ol.children[num].className = 'lb_active';
    }
}


// 点击右按钮
rightBut.onclick = lb_fn;

function lb_fn() {
    // 判断是不是点到了第零个图片是就瞬间跳到最后一张图片
    if (num == lb_Ali.length - 1) {
        // console.log(lb_Ali.length - 1);
        num = 0;
        lb_ul.style.left = '0px';
    }
    // 变量自减
    num++;
    // 图片跟着i移动
    animate(lb_ul, {
        'left': -num * lb_DivWidth
    });
    // 让图片移动小点也移动
    // 判断一下索引是不是ol的索引-1
    if (num == lb_ol.children.length) {
        // 如果是让ol最后一个li的class属性移除
        lb_ol.children[lb_ol.children.length - 1].removeAttribute('class');
        // 让第一个li的class值为lb_active
        lb_ol.children[0].className = 'lb_active';
    } else {
        for (var j = 0; j < lb_ol.children.length - 1; j++) {
            // 让所有的小点默认全部不选中
            lb_ol.children[j].removeAttribute('class');
            // 给索引为num的被选中
            lb_ol.children[num].className = 'lb_active';
            // console.log(num);
        }
    }
}



// 设置自动轮播

var lb_timer = setInterval(lb_fn, 1500);
lb_Div.onmouseover = function () {
    clearInterval(lb_timer);
}

lb_Div.onmouseout = function () {
    clearInterval(lb_timer);
    lb_timer = setInterval(lb_fn, 1500);
}

// 点击小点跳到对应的图片
// for (var l = 0; l < lb_ol.children.length; l++) {
//     // console.log(  lb_ol.children[l]);
//     lb_ol.children[l].onclick = function () {
//         for (var k = 0; k < lb_ol.children.length - 1; k++) {
//             lb_ol.children[k].removeAttribute('class');
//             lb_ul.style.left = -(this.innerHTML - 1) * lb_DivWidth + 'px';
//             // console.log(this.innerHTML - 1);
//         }
//         this.className = "lb_active";
//         console.log(this)
//     }
// }