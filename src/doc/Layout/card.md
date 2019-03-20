# 卡片布局

- 提供基本的卡片布局，包括可选的卡片头部和尾部
- 卡片布局包含基础的 7 中情境颜色：default、primary、success、info、warning、danger

<link rel="stylesheet" href="http://tgideas.github.io/mocha-v2/definitions/layout/card/card.min.css">

## 基础的卡片用法

<div class="mo-card">
    <div class="mo-card-body">
        card without header & footer
    </div>
</div>
<div class="mo-card">
    <div class="mo-card-header">
      card header title
    </div>
    <div class="mo-card-body">
      card with header
    </div>
  </div>

  <div class="mo-card">
    <div class="mo-card-header">
      card header title
    </div>
    <div class="mo-card-body">
      card with header & footer
    </div>
    <div class="mo-card-footer">
      card footer title
    </div>
</div>

```html
<div class="mo-card">
  <div class="mo-card-header">
    card header title
  </div>
  <div class="mo-card-body">
    card with header
  </div>
  <div class="mo-card-footer">
    card footer title
  </div>
</div>
```

## 卡片配合色

<div class="mo-card mo-card-Primary">
    <div class="mo-card-header">
      Primary card header title
    </div>
    <div class="mo-card-body">
      Primary card with header & footer
    </div>
    <div class="mo-card-footer">
      Primary card footer title
    </div>
  </div>
  <div class="mo-card mo-card-Success">
    <div class="mo-card-header">
      Success card header title
    </div>
    <div class="mo-card-body">
      Success card with header & footer
    </div>
    <div class="mo-card-footer">
      Success card footer title
    </div>
  </div>
  <div class="mo-card mo-card-Info">
    <div class="mo-card-header">
      Info card header title
    </div>
    <div class="mo-card-body">
      Info card with header & footer
    </div>
    <div class="mo-card-footer">
      Info card footer title
    </div>
  </div>
  <div class="mo-card mo-card-Warning">
    <div class="mo-card-header">
      Warning card header title
    </div>
    <div class="mo-card-body">
      Warning card with header & footer
    </div>
    <div class="mo-card-footer">
      Warning card footer title
    </div>
  </div>
  <div class="mo-card mo-card-Danger">
    <div class="mo-card-header">
      Danger card header title
    </div>
    <div class="mo-card-body">
      Danger card with header & footer
    </div>
    <div class="mo-card-footer">
      Danger card footer title
    </div>
  </div>
