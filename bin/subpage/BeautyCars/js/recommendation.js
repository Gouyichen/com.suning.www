// 热门推荐



// 获取按钮
var recommdBut = document.querySelectorAll('.tab li i');

// 获取内容
var recmmdmain = document.querySelectorAll('.recommendation_left_list');

// 给按钮添加点击事件
for (var i = 0; i < recommdBut.length; i++) {
    recommdBut[0].id = 'recommendation_active';
    recommdBut[i].setAttribute('index', i);
    recommdBut[i].onclick = function () {
        // console.log(1);
        for (var j = 0; j < recommdBut.length; j++) {
            recommdBut[j].removeAttribute('id');
            recmmdmain[j].style.display = 'none';
        }
        this.id = 'recommendation_active';
        recmmdmain[this.getAttribute('index')].style.display = 'block';
    }
}

// 自动轮播
// var recommendation_timer = setInterval(function () {
// var num = 0;
//     clearInterval(recommendation_timer);
//     for (var i = 0; i < recommdBut.length; i++) {
//         for (var j = 0; j < recommdBut.length; j++) {
//         recommdBut[j].id = '';
//             if (num == recommdBut.length) {
//                 num = 0;
//                 recommdBut[j].id = '';
//                 recommdBut[0].id = 'recommendation_active';
//             }
//             num++;
//             recommdBut[num].id = 'recommendation_active';
//         }
//     }
// }, 2500)