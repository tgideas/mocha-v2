<style>
  .colorlist {
  zoom: 1
}

.colorlist:after {
  clear: both;
}

.colorlist:after,
.colorlist:before {
  content: '';
  display: table;
}

.colorlist li {
  position: relative;
  display: block;
  float: left;
  width: 200px;
  height: 75px;
  margin: 10px;
  border-radius: 4px;
}

.colorlist li p {
  position: absolute;
  left: 15px;
  color: #fff;
}
.colorlist.grey li p {
  color: #303133;
}

.colorlist li p:nth-child(1) {
  top: 10px;
}

.colorlist li p:nth-child(2) {
  top: 40px;
}
  </style>

# 基础颜色

## 预设基础颜色
<ul class="colorlist">
<li style="background-color:#337ab7">
<p>主题色</p>
<p>#337ab7</p>
</li>
<li style="background-color:#5c95c5">
<p>主题色(Light)</p>
<p>#5c95c5</p>
</li>
<li style="background-color:#85afd4">
<p>主题色(Lighter)</p>
<p>#85afd4</p>
</li>
</ul>

<ul class="colorlist">
<li style="background-color:#5cb85c">
<p>Success</p>
<p>#5cb85c</p>
</li>
<li style="background-color:#7dc67d">
<p>Success(Light)</p>
<p>#7dc67d</p>
</li>
<li style="background-color:#9dd49d">
<p>Success(Lighter)</p>
<p>#9dd49d</p>
</li>
</ul>

<ul class="colorlist">
<li style="background-color:#5bc0de">
<p>Info</p>
<p>#5bc0de</p>
</li>
<li style="background-color:#7ccde5">
<p>Info(Light)</p>
<p>#7ccde5</p>
</li>
<li style="background-color:#9dd9eb">
<p>Info(Lighter)</p>
<p>#9dd9eb</p>
</li>
</ul>

<ul class="colorlist">
<li style="background-color:#f0ad4e">
<p>Warning</p>
<p>#f0ad4e</p>
</li>
<li style="background-color:#f3bd71">
<p>Warning(Light)</p>
<p>#f3bd71</p>
</li>
<li style="background-color:#f6ce95">
<p>Warning(Lighter)</p>
<p>#f6ce95</p>
</li>
</ul>

<ul class="colorlist">
<li style="background-color:#d9534f">
<p>Danger</p>
<p>#d9534f</p>
</li>
<li style="background-color:#e17572">
<p>Danger(Light)</p>
<p>#e17572</p>
</li>
<li style="background-color:#e89895">
<p>Danger(Lighter)</p>
<p>#e89895</p>
</li>
</ul>

<ul class="colorlist">
<li style="background-color:#303133">
<p>主要文字</p>
<p>#303133</p>
</li>
<li style="background-color:#595a5c">
<p>常规文字</p>
<p>#595a5c</p>
</li>
<li style="background-color:#838385">
<p>次要文字</p>
<p>#838385</p>
</li>
</ul>

<ul class="colorlist grey">
<li style="background-color:#cccccc">
<p>基础灰色</p>
<p>#cccccc</p>
</li>
<li style="background-color:#e0e0e0">
<p>基础灰色(Light)</p>
<p>#e0e0e0</p>
</li>
<li style="background-color:#e9e9e9">
<p>基础灰色(Lighter)</p>
<p>#e9e9e9</p>
</li>
</ul>

## 预设颜色调用类
<table>
<tbody>
<tr><td>颜色名称</td><td>类名</td><td>举例</td></tr>
<tr><td>default</td><td>mo-color-default</td><td style="color: #337ab7;">.mo-color-default</td></tr>
<tr><td>success</td><td>mo-color-success</td><td style="color: #5cb85c;">.mo-color-success</td></tr>
<tr><td>info</td><td>mo-color-info</td><td style="color: #5bc0de;">.mo-color-info</td></tr>
<tr><td>warning</td><td>mo-color-warning</td><td style="color: #f0ad4e;">.mo-color-warning</td></tr>
<tr><td>danger</td><td>mo-color-danger</td><td style="color: #d9534f;">.mo-color-danger</td></tr>
<tr><td>dark</td><td>mo-color-dark</td><td style="color: #595a5c;">.mo-color-dark</td></tr>
<tr><td>grey</td><td>mo-color-grey</td><td style="color: #cccccc;">.mo-color-grey</td></tr>
</tbody>
</table>
