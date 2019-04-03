<link rel="stylesheet" href="http://localhost:8080/src/definitions/layout/grid/grid.min.css">
<style>
    .mo-wrapper {color: #fff;}
  .mo-inner{text-align:center;font-size:12px;}
</style>

# 栅格系统

- 提供基础12列栅格布局
- 栅格通过浮动来实现(外层div以作清除浮动处理)
- 支持栅格嵌套
<div class="example-prev">
        <a href="javascript:;" title="查看代码" class="example-prev-code"></a>
        <div class="mo-wrapper">
    <div class="mo-outer mo-col-md-4">
      <div class="mo-inner">col-4</div>
    </div>
    <div class="mo-outer mo-col-md-4">
      <div class="mo-inner">col-4</div>
    </div>
    <div class="mo-outer mo-col-md-4">
      <div class="mo-inner">col-4</div>
    </div>
    <div class="mo-outer mo-col-md-3">
      <div class="mo-inner">col-3</div>
    </div>
    <div class="mo-outer mo-col-md-6">
      <div class="mo-inner">col-6</div>
    </div>
    <div class="mo-outer mo-col-md-3">
      <div class="mo-inner">col-3</div>
    </div>
    <div class="mo-outer mo-col-md-2">
      <div class="mo-inner">col-2</div>
    </div>
    <div class="mo-outer mo-col-md-1">
      <div class="mo-inner">col-1</div>
    </div>
    <div class="mo-outer mo-col-md-1">
      <div class="mo-inner">col-1</div>
    </div>
    <div class="mo-outer mo-col-md-2">
      <div class="mo-inner">col-2</div>
    </div>
    <div class="mo-outer mo-col-md-6">
      <div class="mo-inner">col-6</div>
    </div>
    <div class="mo-outer mo-col-md-6">
      <div class="mo-inner">
        <div class="mo-wrapper">
          <div class="mo-outer mo-col-md-6">
            <div class="mo-inner">col-6</div>
          </div>
          <div class="mo-outer mo-col-md-6">
            <div class="mo-inner">col-6</div>
          </div>
        </div>
      </div>
    </div>
    <div class="mo-outer mo-col-md-6">
      <div class="mo-inner">
        <div class="mo-wrapper">
          <div class="mo-outer mo-col-md-4">
            <div class="mo-inner">col-4</div>
          </div>
          <div class="mo-outer mo-col-md-2">
            <div class="mo-inner">col-2</div>
          </div>
          <div class="mo-outer mo-col-md-3">
            <div class="mo-inner">col-3</div>
          </div>
          <div class="mo-outer mo-col-md-3">
            <div class="mo-inner">col-3</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  ```html
<div class="mo-wrapper">
    <div class="mo-outer mo-col-md-4">
      <div class="mo-inner">col-4</div>
    </div>
    <div class="mo-outer mo-col-md-4">
      <div class="mo-inner">col-4</div>
    </div>
    <div class="mo-outer mo-col-md-4">
      <div class="mo-inner">col-4</div>
    </div>
    <div class="mo-outer mo-col-md-3">
      <div class="mo-inner">col-3</div>
    </div>
    <div class="mo-outer mo-col-md-6">
      <div class="mo-inner">col-6</div>
    </div>
    <div class="mo-outer mo-col-md-3">
      <div class="mo-inner">col-3</div>
    </div>
    <div class="mo-outer mo-col-md-2">
      <div class="mo-inner">col-2</div>
    </div>
    <div class="mo-outer mo-col-md-1">
      <div class="mo-inner">col-1</div>
    </div>
    <div class="mo-outer mo-col-md-1">
      <div class="mo-inner">col-1</div>
    </div>
    <div class="mo-outer mo-col-md-2">
      <div class="mo-inner">col-2</div>
    </div>
    <div class="mo-outer mo-col-md-6">
      <div class="mo-inner">col-6</div>
    </div>
    <div class="mo-outer mo-col-md-6">
      <div class="mo-inner">
        <div class="mo-wrapper">
          <div class="mo-outer mo-col-md-6">
            <div class="mo-inner">col-6</div>
          </div>
          <div class="mo-outer mo-col-md-6">
            <div class="mo-inner">col-6</div>
          </div>
        </div>
      </div>
    </div>
    <div class="mo-outer mo-col-md-6">
      <div class="mo-inner">
        <div class="mo-wrapper">
          <div class="mo-outer mo-col-md-4">
            <div class="mo-inner">col-4</div>
          </div>
          <div class="mo-outer mo-col-md-2">
            <div class="mo-inner">col-2</div>
          </div>
          <div class="mo-outer mo-col-md-3">
            <div class="mo-inner">col-3</div>
          </div>
          <div class="mo-outer mo-col-md-3">
            <div class="mo-inner">col-3</div>
          </div>
        </div>
      </div>
    </div>
  </div>
```