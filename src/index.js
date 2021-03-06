const offset = require('zhf.offset');
const getDomArray = require('zhf.get-dom-array');

// 检测两个dom中心点之间的相对位置
function checkDomRelativePosition(element1, element2) {
    // dom1
    const one = getDomArray(element1)[0];
    let onePositionX = 'overlay'; // 重叠
    let onePositionY = 'overlay'; // 重叠
    const oneLeft = offset(one).left;
    const oneTop = offset(one).top;
    const oneWidth = one.offsetWidth;
    const oneHeight = one.offsetHeight;
    const oneCenterX = oneLeft + oneWidth / 2;
    const oneCenterY = oneTop + oneHeight / 2;
    // dom2
    const two = getDomArray(element2)[0];
    let twoPositionX = 'overlay'; // 重叠
    let twoPositionY = 'overlay'; // 重叠
    const twoLeft = offset(two).left;
    const twoTop = offset(two).top;
    const twoWidth = two.offsetWidth;
    const twoHeight = two.offsetHeight;
    const twoCenterX = twoLeft + twoWidth / 2;
    const twoCenterY = twoTop + twoHeight / 2;
    // 计算位置
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
    // 返回结果
    return {
        onePositionX: onePositionX,
        onePositionY: onePositionY,
        twoPositionX: twoPositionX,
        twoPositionY: twoPositionY,
    };
}

module.exports = checkDomRelativePosition;
