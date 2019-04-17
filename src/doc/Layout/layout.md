<link rel="stylesheet" href="http://10.32.87.35:8080/src/definitions/layout/layout/layout.min.css">
<style>
    .mo-layout-Left,
    .mo-layout-Right,
    .mo-layout {
      color: #fff;
      margin: 15px;
      text-align: center;
    }

    .mo-sider,
    .mo-sider-Right,
    .mo-sider-Left {
      line-height: 300px;
      background-color: #337ab7;
    }

    .mo-content-inner {
      line-height: 300px;
      background-color: #5c95c5;
    }
  </style>

# 常用布局

#### 预设常用的几种基础布局

### 左侧定宽，右侧自适应
<div class="example-prev">
        <a href="javascript:;" title="查看代码" class="example-prev-code"></a>
<div class="mo-layout-Left">
    <div class="mo-sider">左侧定宽</div>
    <div class="mo-content">
      <div class="mo-content-inner">右侧自适应</div>
    </div>
  </div>
</div>

  ```html
<div class="mo-layout-Left">
    <div class="mo-sider">左侧定宽</div>
    <div class="mo-content">
      <div class="mo-content-inner">右侧自适应</div>
    </div>
  </div>
```

### 右侧定宽，左侧自适应
<div class="example-prev">
        <a href="javascript:;" title="查看代码" class="example-prev-code"></a>
<div class="mo-layout-Right">
  <div class="mo-content">
    <div class="mo-content-inner">左侧自适应</div>
  </div>
  <div class="mo-sider">右侧定宽</div>
</div>
</div>

```html
<div class="mo-layout-Right">
  <div class="mo-content">
    <div class="mo-content-inner">左侧自适应</div>
  </div>
  <div class="mo-sider">右侧定宽</div>
</div>
```

### 左右侧定宽，中间自适应
<div class="example-prev">
<a href="javascript:;" title="查看代码" class="example-prev-code"></a>
<div class="mo-layout">
  <div class="mo-sider-Left">左侧定宽</div>
  <div class="mo-content">
    <div class="mo-content-inner">中间自适应</div>
  </div>
  <div class="mo-sider-Right">右侧自适应</div>
</div>
</div>

```html
<div class="mo-layout">
  <div class="mo-sider-Left">左侧定宽</div>
  <div class="mo-content">
    <div class="mo-content-inner">中间自适应</div>
  </div>
  <div class="mo-sider-Right">右侧自适应</div>
</div>
```