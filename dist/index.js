'use strict';

var offset = require('zhf.offset');
var getDomArray = require('zhf.get-dom-array');

// 检测两个dom中心点之间的相对位置
function checkDomRelativePosition(element1, element2) {
    // dom1
    var one = getDomArray(element1)[0];
    var onePositionX = 'overlay'; // 重叠
    var onePositionY = 'overlay'; // 重叠
    var oneLeft = offset(one).left;
    var oneTop = offset(one).top;
    var oneWidth = one.offsetWidth;
    var oneHeight = one.offsetHeight;
    var oneCenterX = oneLeft + oneWidth / 2;
    var oneCenterY = oneTop + oneHeight / 2;
    // dom2
    var two = getDomArray(element2)[0];
    var twoPositionX = 'overlay'; // 重叠
    var twoPositionY = 'overlay'; // 重叠
    var twoLeft = offset(two).left;
    var twoTop = offset(two).top;
    var twoWidth = two.offsetWidth;
    var twoHeight = two.offsetHeight;
    var twoCenterX = twoLeft + twoWidth / 2;
    var twoCenterY = twoTop + twoHeight / 2;
    if (oneCenterX - twoCenterX > 0) {
        onePositionX = 'right';
        twoPositionX = 'left';
    } else if (oneCenterX - twoCenterX < 0) {
        onePositionX = 'left';
        twoPositionX = 'right';
    }
    if (oneCenterY - twoCenterY > 0) {
        onePositionY = 'bottom';
        twoPositionY = 'top';
    } else if (oneCenterY - twoCenterY < 0) {
        onePositionY = 'top';
        twoPositionY = 'bottom';
    }
    return {
        onePositionX: onePositionX,
        onePositionY: onePositionY,
        twoPositionX: twoPositionX,
        twoPositionY: twoPositionY
    };
}

module.exports = checkDomRelativePosition;