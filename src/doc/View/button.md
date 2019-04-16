# 按钮

- 具有按钮常态、高亮态、禁用态三种效果
- 包含基础的 7 中情境颜色：default、primary、success、info、warning、danger

<link rel="stylesheet" href="http://10.32.87.35:8080/src/definitions/view/button/button.min.css">
<style>
  button{margin:10px 0;}
</style>

## 默认按钮
<div class="example-prev">
        <a href="javascript:;" title="查看代码" class="example-prev-code"></a>
<button class="mo-btn mo-btn-Default">Default</button>
<button class="mo-btn mo-btn-Default" disabled>Default Disable</button>
</div>

```html
<button class="mo-btn mo-btn-Default">Default</button>
<button class="mo-btn mo-btn-Default" disabled>Default Disable</button>
```

## 按钮场景色
<div class="example-prev">
  <a href="javascript:;" title="查看代码" class="example-prev-code"></a>
  <p>
    <button class="mo-btn mo-btn-Primary">Primary</button>
    <button class="mo-btn mo-btn-Primary" disabled>Primary Disable</button>
  </p>
  <p>
    <button class="mo-btn mo-btn-Success">Success</button>
    <button class="mo-btn mo-btn-Success" disabled>Success Disable</button>
  </p>
  <p>
    <button class="mo-btn mo-btn-Info">Info</button>
    <button class="mo-btn mo-btn-Info" disabled>Info Disable</button>
  </p>
  <p>
    <button class="mo-btn mo-btn-Warning">Warning</button>
    <button class="mo-btn mo-btn-Warning" disabled>Warning Disable</button>
  </p>
  <p>
    <button class="mo-btn mo-btn-Danger">Danger</button>
    <button class="mo-btn mo-btn-Danger" disabled>Danger Disable</button>
  </p>
</div>

```html
<!-- Primary -->
<button class="mo-btn mo-btn-Primary">Primary</button>
<button class="mo-btn mo-btn-Primary" disabled>Primary Disable</button>
<!-- Success -->
<button class="mo-btn mo-btn-Success">Success</button>
<button class="mo-btn mo-btn-Success" disabled>Success Disable</button>
<!-- Info -->
<button class="mo-btn mo-btn-Info">Info</button>
<button class="mo-btn mo-btn-Info" disabled>Info Disable</button>
<!-- Warning -->
<button class="mo-btn mo-btn-Warning">Warning</button>
<button class="mo-btn mo-btn-Warning" disabled>Warning Disable</button>
<!-- Danger -->
<button class="mo-btn mo-btn-Danger">Danger</button>
<button class="mo-btn mo-btn-Danger" disabled>Danger Disable</button>
```
