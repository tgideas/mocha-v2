# 样式特效

- 清除浮动

```css
@mixin clearfix {
  *zoom: 1;

  &:before,
  &:after {
    content: "";
    display: block;
  }

  &:after {
    clear: both;
    overflow: hidden;
  }
}

%clearfix {
  @include clearfix;
}
```

- 设置浮动  
$side 设置浮动的方向，默认：left

```css
@mixin float($side:left) {
  float: unquote($side);
}


@mixin pull-left {
  @include float(left);
}

%pull-left {
  @include float(left);
}

@mixin pull-right {
  @include float(right);
}

%pull-right {
  @include float(right);
}
```

- 重置浮动  
$display 重置浮动，设置元素的display，默认：block

```css
@mixin reset-float($display:block) {
  float: none;
  display: $display;
}

%reset-float {
  @include reset-float;
}
```

- 单行文本省略号  
$substract 需要截取的内容长度，单位：%，默认：0

```css
@mixin singleline-ellipsis($substract:0) {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100% - $substract;
}

%singleline-ellipsis {
  @include singleline-ellipsis;
}
```

- 多行文本省略号  
$line 文本行数，默认：3  
$lineHeight 文本行高，默认：1

```css
@mixin multiline-ellipsis ($line:3, $lineHeight:1) {
  line-height: $lineHeight;
  height: $line*$lineHeight;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: $line;
  -webkit-box-orient: vertical;
}

%multiline-ellipsis {
  @include multiline-ellipsis;
}
```

- 最小高度  
$height 最小高度值

```css
@mixin min-height($height) {
  min-height: $height;
  height: auto !important;
}
```

- 圆角  
$radius 圆角值

```css
@mixin border-radius($radius) {
  border-radius: $radius;
}
```

- 三角形   
$direction 三角形的方向，默认：left，可选：left/right/top/bottom  
$size 三角形的大小，默认：5px  
$borderColor 三角形的颜色，默认：#000  

```css
@mixin triangle($direction:left, $size:5px, $borderColor:#000) {
  content: "";
  height: 0;
  width: 0;

  @if $direction==top {
    border-bottom: $size solid $borderColor;
    border-left: $size dashed transparent;
    border-right: $size dashed transparent;
  }

  @else if $direction==right {
    border-left: $size solid $borderColor;
    border-top: $size dashed transparent;
    border-bottom: $size dashed transparent;
  }

  @else if $direction==bottom {
    border-top: $size solid $borderColor;
    border-left: $size dashed transparent;
    border-right: $size dashed transparent;
  }

  @else if $direction==left {
    border-right: $size solid $borderColor;
    border-top: $size dashed transparent;
    border-bottom: $size dashed transparent;
  }
}
```

- 小箭头  
$direction 小箭头的方向，默认：top，可选：left/right/top/bottom  
$size 小箭头的大小，默认：10px  
$borderColor 小箭头的颜色，默认：#000  

```css
@mixin arrow($direction:top, $size:10px, $borderColor:#000) {
  width: $size;
  height: $size;
  border: 1px solid transparent;
  border-top-color: $borderColor;
  border-left-color: $borderColor;

  @if $direction==top {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  @else if $direction==right {
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
  }

  @else if $direction==bottom {
    -webkit-transform: rotate(-135deg);
    transform: rotate(-135deg);
  }

  @else if $direction==left {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
}
```

- 小加号  
$color 小加号颜色，默认：#000

```css
@mixin cross($color:#000) {
  background: $color;
  height: 19px;
  position: relative;
  width: 4px;

  &:after {
    background: $color;
    content: "";
    height: 4px;
    left: -7px;
    position: absolute;
    top: 7px;
    width: 19px;
  }
}
```

- 关闭按钮  
$color 关闭按钮颜色，默认：#000

```css
@mixin close($color:#000) {
  background: $color;
  height: 19px;
  position: relative;
  width: 4px;

  &:after {
    background: $color;
    content: "";
    height: 4px;
    left: -7px;
    position: absolute;
    top: 7px;
    width: 19px;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
}
```

- 在移动设备上生成1px下边框  
$borderColor 边框颜色，默认：#000

```css
@mixin onePixelBorder($borderColor:#000) {
  box-shadow: inset 0px -1px 1px -1px $borderColor;
}
```

