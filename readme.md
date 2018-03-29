# 检测两个dom中心点之间的相对位置
```
const checkDomRelativePosition = require('zhf.check-dom-relative-position');

const result = checkDomRelativePosition(domOne, domTwo);
```
* 返回值result是一个对象，对象上有四个属性：
    - onePositionX：domOne水平方向相对于domTwo的位置
    - onePositionY：domOne垂直方向相对于domTwo的位置
    - twoPositionX：domTwo水平方向相对于domOne的位置
    - twoPositionY：domTwo垂直方向相对于domOne的位置
* 四个属性，对应的值有：
    - 'overlay'：重叠
    - 'top'：垂直方向居上
    - 'right'：水平方向居右
    - 'bottom'：垂直方向居下
    - 'left'：水平方向居左边
