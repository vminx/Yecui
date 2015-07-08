# header 更新记录

- 2015-01-07 15:36:29

	- 新增header模块


# 使用说明

- 基础结构

```html
<div class="ui-header ui-header-default ui-header-fixed">
	<div class="ui-header-left ui-header-nav"></div>
	<div class="ui-header-title"></div>
	<div class="ui-header-right ui-header-nav"></div>
</div>	
```

- 默认主题 `图标+标题`

```html
<!-- Header-default 图标+标题 -->
<header class="ui-header ui-header-default ui-header-fixed">
	<div class="ui-header-left ui-header-nav">
		<a href="#" class="">
			<i class="icons icons-home"></i>
		</a>
	</div>
	<h1 class="ui-header-title">
		图标
	</h1>
	<div class="ui-header-right ui-header-nav">
		<a href="#" class="">
			<i class="icons icons-down"></i>
		</a>
	</div>
</header>
```

- 默认主题 `图片图标`

```html
<!-- Header-default 图片图标 -->
<header class="ui-header ui-header-default ui-header-fixed">
	<div class="ui-header-left ui-header-nav">
		<a href="#" class="">
			<i class="icons icons-home"></i>
		</a>
	</div>
	<h1 class="ui-header-title">
		<img src="../logo-white.png" alt="">
	</h1>
	<div class="ui-header-right ui-header-nav">
		<a href="#" class="">
			<i class="icons icons-down"></i>
		</a>
	</div>
</header>
```

- 默认主题 `图标文字`

```html
<!-- Header-default 图标文字 -->
<header class="ui-header ui-header-default ui-header-fixed">
	<div class="ui-header-left ui-header-nav">
		<a href="#" class="">
			<span class="ui-header-nav-title">首页</span>
			<i class="icons icons-home"></i>
		</a>
	</div>
	<h1 class="ui-header-title">
		图标文字
	</h1>
	<div class="ui-header-right ui-header-nav">
		<a href="#" class="">
			<span class="ui-header-nav-title">更多</span>
			<i class="icons icons-down"></i>
		</a>
	</div>
</header>
```

- 默认主题 `多图标`

```html
<!-- Header-default 多图标 -->
<header class="ui-header ui-header-default ui-header-fixed">
	<div class="ui-header-left ui-header-nav">
		<a href="#" class="">
			<i class="icons icons-home"></i>
		</a>
		<a href="#" class="">
			<i class="icons icons-back"></i>
		</a>
	</div>
	<h1 class="ui-header-title">
		多图标
	</h1>
	<div class="ui-header-right ui-header-nav">
		<a href="#" class="">
			<i class="icons icons-down"></i>
		</a>
		<a href="#" class="">
			<i class="icons icons-more"></i>
		</a>
	</div>
</header>
```

```less
	//在yecui里引入该组件的less文件
	@import "widget/loading/header.default.less";
```
