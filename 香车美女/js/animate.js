/**
 * 
 * @param {*} elem  元素 
 * @param {*} target 移动的距离
 */
function animate(elem, obj, fn) {
  // 清除定时器
  clearInterval(elem.timeId);
  // 声明定时器
  elem.timeId = setInterval(function () {
    var flag = true;
    for (var attr in obj) {
      // 如果是opacity
      // 如果是zIndex
      //  或其他
      if (attr == 'opacity') {
        var current = getStyle(elem, attr) * 100;
        var target = obj[attr] * 100
        var step = (target - current) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        current += step;
        elem.style[attr] = current / 100;
      } else if (attr == 'zIndex') {
        elem.style[attr] = obj[attr];
      } else {

        // 获取当前样式
        var current = parseInt(getStyle(elem, attr));
        // 获取目标样式
        var target = obj[attr];
        // 设置步进值
        var step = (target - current) / 10;
        // 判断步进值
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        // 累加
        current += step;
        // 赋值
        elem.style[attr] = current + 'px';

      }

      if (current != target) {
        flag = false;
      }
    }
    if (flag) {
      clearInterval(elem.timeId);
      if (fn) {
        fn();
      }
    }
  }, 15)

}

function getStyle(elem, attr) {
  return window.getComputedStyle ? window.getComputedStyle(elem, null)[attr] : elem.currentStyle[attr];
}