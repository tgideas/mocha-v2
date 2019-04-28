# 轮播
## Slider + 分页 + 左右箭头
<div class="example-prev">
    <a href="javascript:;" title="查看代码" class="example-prev-code"></a>
    <iframe src="http://mocha.oa.com/v2/examples/pc/slider/slider1.html" width="400" height="220" frameborder="0" scrolling="auto" ></iframe>
</div>

[include:47-80, slider.css](../../examples/pc/slider/slider1.html)

## Slider + 左右箭头
<div class="example-prev">
    <a href="javascript:;" title="查看代码" class="example-prev-code"></a>
    <iframe src="http://mocha.oa.com/v2/examples/pc/slider/slider2.html" width="400" height="210" frameborder="0" scrolling="auto" ></iframe>
</div>

[include:47-73, slider.css](../../examples/pc/slider/slider2.html)

## Slider + 分页
<div class="example-prev">
    <a href="javascript:;" title="查看代码" class="example-prev-code"></a>
    <iframe src="http://mocha.oa.com/v2/examples/pc/slider/slider3.html" width="400" height="210" frameborder="0" scrolling="auto" ></iframe>
</div>

[include:47-78, slider.css](../../examples/pc/slider/slider3.html)

## 单Slider
<div class="example-prev">
    <a href="javascript:;" title="查看代码" class="example-prev-code"></a>
    <iframe src="http://mocha.oa.com/v2/examples/pc/slider/slider4.html" width="400" height="210" frameborder="0" scrolling="auto" ></iframe>
</div>

[include:47-71, slider.css](../../examples/pc/slider/slider4.html)


## API
| 参数 | 说明 | 类型 | 默认值 |
| ------ | ------ | ------ | ------ |
| selector | Slider选项器 | string | 无 |
| moConfig.index | 初始化时，处于第几个面板 | number | 0 |
| moConfig.effect | 动画效果函数 | string | linear |
| moConfig.direction | 面板切换时的方向 | string | x |
| moConfig.autoplay | 自动播放的间隔 | number | 0 |
| moConfig.speed | 面板动画时长 | number | 500 |
| moConfig.ease | 动画效果 | string | linear |

## 方法
| 名称 | 描述 |
| ------ | ------ |
| to() | 切换到指定面板 |
| prev() | 切换到上一面板 |
| next() | 切换到下一面板 |