# 基础规范


## 命名规范
- 基础前缀：mo
- 用”-“作为连字符号，不允许出现”_“
- “-”后面跟小写，表示父子关系：mo-tab、mo-tab-hd、mo-tab-bd
- “-”后面跟大写，表示扩展关系：mo-btn、mo-btn-Primary、mo-btn-Error
- class命名规则具体可以根据当前功能模块命名，但基础前缀不能缺省，比如：
```
.mo-btn
.mo-tab
.mo-pages
```

## html编码规范
- 使用utf-8的编码规范
- 省略图片、样式、脚本以及其他媒体文件的URL协议部分（http、https），好处是无论你是使用http还是https访问页面，浏览器都会以相同的协议请求页面中的资源，同时可以节省一部分字节，比如：
```
<script src="//ossweb-img.qq.com/images/js/test.js"></script>
.content{background:url("//ossweb-img.qq.com/images/test.png")}
```
- 语义化html，比如段落标记用p，列表用ul，根据用途选择标签

## css编码规范
- class的命名尽可能简短，并符合语义，基础命名前缀不要省略
- css中不允许出现驼峰命名法，比如：btnPrimary
- 使用组合属性。比如font，margin，padding等

```
/*不推荐*/
.box{
  margin-top:0;
  margin-bottom:0;
  margin-left:10px;
  margin-right:10px;
}

/*推荐*/
.box{
  margin:0 10px;
}
```

- 如果css属性值为0，后面不要带上单位，除非真的有必要
- 使用class来控制样式，避免在样式中id与class混用

## JavaScript编码规范
- 使用utf-8的编码规范
- 语义化变量命名，命名规范使用驼峰式命名

```
/*不推荐*/
var a = {};
var b = [];

/*推荐*/
var objInfo = {};
var trafficData = [];
```

- 尽量使用id来控制dom