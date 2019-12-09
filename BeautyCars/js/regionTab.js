// 全国地区切换右边



// 获取按钮
var regionTabBut = document.querySelectorAll('.regionTab_right h3>ul>li i');
// 获取内容
var regionTabmain = document.querySelectorAll('.regionTab_right > ul');
// console.log(regionTabBut)

// 给按钮添加点击事件
for (var i = 0; i < regionTabBut.length; i++) {
    regionTabBut[0].id = 'regionTab_right_active';
    regionTabBut[i].setAttribute('index', i);
    regionTabBut[i].onclick = function () {
        // console.log(1);
        for (var j = 0; j < regionTabBut.length; j++) {
            regionTabBut[j].removeAttribute('id');
            regionTabmain[j].style.display = 'none';
        }
        this.id = 'regionTab_right_active';
        regionTabmain[this.getAttribute('index')].style.display = 'block';
    }
}





// 全国地区切换左边

// 获取地区切换按钮 

var TabBut = document.querySelectorAll('.regionTab_left ul li');

// 获取地区信息显示的a标签
var Tab_xians = document.querySelector('.regionTab_left_information a');

// 获取的按钮对应的内容
var TabMain = document.querySelectorAll('.regionTab_left_list');
// 给所有按钮添加点击事件(除了最后一个)

for (var i = 0; i < TabBut.length - 1; i++) {
    // 按钮添加一个自定义属性值为内容的索引值
    TabBut[i].setAttribute('TabMain', i);
    TabBut[i].onclick = function () {
        // 先让所有的li默认position为 63px -132px;   background-image = url(../image/sprite-button.png);
        for (var j = 0; j < TabBut.length - 1; j++) {
            TabBut[j].style.backgroundImage = ' url(./image/sprite-repeat-bg-8.png)';
            TabBut[j].style.backgroundPosition = '63px -132px';
            // 对应的内容也全部默认隐藏
            TabMain[j].style.display = 'none';
        }
        // 让当前被点击的按钮的position为 -91px -186px      background-image: url(../image/sprite-repeat-bg-8.png)
        this.style.backgroundImage = ' url(./image/sprite-button.png)';
        this.style.backgroundPosition = ' -91px -189px ';
        // 对应内容显示
        TabMain[this.getAttribute('TabMain')].style.display = 'block';
        // 获取当前按钮内容赋值给地区信息显示的a标签
        Tab_xians.innerHTML = '[' + this.innerHTML + '站]';
    }
}


