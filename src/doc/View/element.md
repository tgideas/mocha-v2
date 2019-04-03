# 其他视图元件


## 翻页
<link rel="stylesheet" href="http://localhost:8080/src/definitions/view/other/pages.min.css">

### 提供三种尺寸翻页布局
<div class="example-prev">
  <a href="javascript:;" title="查看代码" class="example-prev-code"></a>
  <p>默认</p>
  <ul class="mo-pages-Default">
    <li><a href="#">上一页</a></li>
    <li><a href="#">下一页</a></li>
  </ul>
  <p>尺寸</p>
  <ul class="mo-pages">
    <li><a href="#">上一页</a></li>
    <li class="mo-pages-cur"><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
    <li><a href="#">下一页</a></li>
  </ul>
  <p>尺寸二</p>
  <ul class="mo-pages mo-pages-Lg">
    <li><a href="#">上一页</a></li>
    <li class="mo-pages-cur"><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
    <li><a href="#">下一页</a></li>
  </ul>
  <p>尺寸三</p>
  <ul class="mo-pages mo-pages-Sm">
    <li><a href="#">上一页</a></li>
    <li class="mo-pages-cur"><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
    <li><a href="#">下一页</a></li>
  </ul>
</div>

```html
  <!-- 默认 -->
  <ul class="mo-pages-Default">
    <li><a href="#">上一页</a></li>
    <li><a href="#">下一页</a></li>
  </ul>
  <!-- 尺寸一 -->
  <ul class="mo-pages">
    <li><a href="#">上一页</a></li>
    <li class="mo-pages-cur"><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
    <li><a href="#">下一页</a></li>
  </ul>
   <!-- 尺寸二 -->
  <ul class="mo-pages mo-pages-Lg">
    <li><a href="#">上一页</a></li>
    <li class="mo-pages-cur"><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
    <li><a href="#">下一页</a></li>
  </ul>
  <!-- 尺寸三 -->
  <ul class="mo-pages mo-pages-Sm">
    <li><a href="#">上一页</a></li>
    <li class="mo-pages-cur"><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
    <li><a href="#">下一页</a></li>
  </ul>
```