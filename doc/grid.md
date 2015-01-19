##栅格系统
栅格系统借鉴 [bootstrap](http://v3.bootcss.com/css/#grid) ,下面引用它的文档说明

 > Bootstrap 需要为页面内容和栅格系统包裹一个 .container 容器。我们提供了两个作此用处的类。注意，由于 padding 等属性的原因，这两种 容器类不能互相嵌套。

`.container` 类用于固定宽度并支持响应式布局的容器。
```html
	<div class="container">
	  ...
	</div>
```

`.container-fluid` 类用于 100% 宽度，占据全部视口（viewport）的容器。
```html
	<div class="container-fluid">
  		...
	</div>
```
 > Bootstrap提供了一套响应式、移动设备优先的流式栅格系统，随着屏幕或视口（viewport）尺寸的增加，系统会自动分为最多12列。它包含了易于使用的预定义类，还有强大的mixin 用于生成更具语义的布局。

###简介
栅格系统用于通过一系列的行（row）与列（column）的组合来创建页面布局，你的内容就可以放入这些创建好的布局中。下面就介绍一下 Bootstrap 栅格系统的工作原理：

- “行（row）”必须包含在 .container （固定宽度）或 .container-fluid （100% 宽度）中，以便为其赋予合适的排列（aligment）和内补（padding）。
- 通过“行（row）”在水平方向创建一组“列（column）”。
- 你的内容应当放置于“列（column）”内，并且，只有“列（column）”可以作为行（row）”的直接子元素。
- 类似 .row 和 .col-xs-4 这种预定义的类，可以用来快速创建栅格布局。Bootstrap 源码中定义的 mixin 也可以用来创建语义化的布局。
- 通过为“列（column）”设置 padding 属性，从而创建列与列之间的间隔（gutter）。通过为 .row 元素设置负值 margin 从而抵消掉为 .container 元素设置的 padding，也就间接为“行（row）”所包含的“列（column）”抵消掉了padding。
- 如果一“行（row）”中包含了的“列（column）”大于 12，多余的“列（column）”所在的元素将被作为一个整体另起一行排列。

###基础布局
#####布局容器

保留 bootstrap `container`  `container-fluid` 命名 

#####.g-row 替代 .row

表示一行，用于包裹.g-col-{xs,sm,md,lg}-{number}。一行内的栅格数不要超过 12

#####.g-col-{xs,sm,md,lg}-{number} 替代 .col-{number}
- xs 超小屏幕 手机 (<768px)
- sm 小屏幕 平板 (≥768px)
- md 中等屏幕 桌面显示器 (≥992px)
- lg 大屏幕 大桌面显示器 (≥1200px)

- number 表示区域跨越了多少列。数字从 1 到 12，例如g-col-8。

```html
	<div class="g-row">
	    <div class="g-col-5">ui-grid-5</div>
	    <div class="g-col-15">ui-grid-15</div>
	    <div class="g-col-5">ui-grid-5</div>
	</div>
```

- 针对这四类屏幕设备定义各自的类,显示不同的效果

```html
<div class="g-row">
  <div class="g-col-xs-12 g-col-sm-6 col-md-8">.g-col-xs-12 .g-col-sm-6 .col-md-8</div>
  <div class="g-col-xs-6 g-col-md-4">.g-col-xs-6 .g-col-md-4</div>
</div>
<div class="g-row">
  <div class="g-col-xs-6 g-col-sm-4">.g-col-xs-6 .g-col-sm-4</div>
  <div class="g-col-xs-6 g-col-sm-4">.g-col-xs-6 .g-col-sm-4</div>
  <!-- Optional: clear the XS cols if their content doesn't match in height -->
  <div class="clearfix visible-xs-block"></div>
  <div class="g-col-xs-6 g-col-sm-4">.g-col-xs-6 .g-col-sm-4</div>
</div>
```
- 列偏移

```html
<div class="row">
    <div class="col-md-4">.col-md-4</div>
	<div class="col-md-4 col-md-offset-4">.col-md-4 .col-md-offset-4</div>
</div>
<div class="row">
	<div class="col-md-3 col-md-offset-3">.col-md-3 .col-md-offset-3</div>
	<div class="col-md-3 col-md-offset-3">.col-md-3 .col-md-offset-3</div>
</div>
<div class="row">
	<div class="col-md-6 col-md-offset-3">.col-md-6 .col-md-offset-3</div>
</div>
```
- Less mixin 和变量
#####变量
> 通过变量来定义列数、槽（gutter）宽、媒体查询阈值（用于确定合适让列浮动）。我们使用这些变量生成预定义的栅格类，如上所示，还有如下所示的定制 mixin。

```less
	@grid-columns:              12;
	@grid-gutter-width:         30px;
	@grid-float-breakpoint:     768px;
```

#####mixin 
> 用来和栅格变量一同使用，为每个列（column）生成语义化的 CSS 代码。指向 [mixin.less]()

```less
	// 部分代码
	.make-row(@gutter: @grid-gutter-width) {
	  // Then clear the floated columns
	  .clearfix();

	  @media (min-width: @screen-sm-min) {
	    margin-left:  (@gutter / -2);
	    margin-right: (@gutter / -2);
	  }

	  // Negative margin nested rows out to align the content of columns
	  .row {
	    margin-left:  (@gutter / -2);
	    margin-right: (@gutter / -2);
	  }
	}

```

###等分布局
	-  rowavg-sm-3 	子元素不用设定,父元素定义等分列
###辅助布局
