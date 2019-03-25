<link rel="stylesheet" href="http://localhost:8080/src/definitions/layout/card/card.min.css">
# TODO List
- [!]解决代码的折叠收起
- [!]增加效果的预览（双端浏览）
- [x]解决外部html/css 文件的引入显示成代码
- [x]去掉页头右侧链接及分享
- [x]增加代码的复制按钮
- [x]增加边栏当前文章章节锚点

## 代码折叠例子
<div class="example-prev">
        <a href="javascript:;" title="查看代码" class="example-prev-code"></a>
        <div class="mo-card">
            <div class="mo-card-body">card without header & footer</div>
        </div>
        <div class="mo-card">
            <div class="mo-card-header">card header title</div>
            <div class="mo-card-body">card with header</div>
        </div>
        <div class="mo-card">
            <div class="mo-card-header">card header title</div>
            <div class="mo-card-body">card with header & footer</div>
            <div class="mo-card-footer">card footer title</div>
        </div>
</div>

```html
<div class="mo-card">
    <div class="mo-card-header">card header title</div>
    <div class="mo-card-body">card with header</div>
    <div class="mo-card-footer">card footer title</div>
</div>
```

## 引用外部文件代码

## 引用外部文件『指定行数』代码
<div class="example-prev">
        <a href="javascript:;" title="查看代码" class="example-prev-code"></a>
        <div class="mo-card">
            <div class="mo-card-body">card without header & footer</div>
        </div>
</div>

[include:1-2, hello.css](../assets/mocha-book-style.css)


## 这是一个展示Demo + 代码的例子

<div class="iframe-wrap">
<div class="iframe-mobile-mark"></div>
<iframe src="http://mocha.oa.com/luban/index.html" width="375" height="710" frameborder="0" scrolling="auto" class="iframe-mobile"></iframe>
</div>

## 使用方法
[include:3-10, hello.css](../assets/mocha-book-style.css)
