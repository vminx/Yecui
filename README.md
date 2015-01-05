<h1><a href="#" title="yep-ui 官网"></h1>


yecui 是基于公司内部项目构建的一个跨屏前端框架和前端规范。`现阶段移动优先`
	
框架-简单地说，就是一些事先写好的css，你只需要给你的html元素加上一些特定的类，就可以快速的得到一些想要的效果。

## 项目开发
- 大中型项目,页面开发套PHP壳,公共页面维护方便
- 基本结构
```
	项目名称/
	├── src/
	|	├── assets/
	|	|	├── css/
	|	|	|	├── base.css		//css reset + function 通用解决方案
	|	|	|	├── yeps.css		//yecui 组件文件
	|	|	|	└── solution.css	//基于各产品个性解决方案
	|	|	├── img/
	|	|	|	├── ...			//基础ui图片
	|	|	|	├── fonts/		//字体文件
	|	|	|	├── design/		//设计源文件
	|	|	|	└── project/		//项目专有图片
	|	|	├── js/
	|	|	|	├── app/			//各页面具体js
	|	|	|	├── lib/			//js框架
	|	|	|	└── common/		//通用js
	|	|	└── less/
	|	|		├── view/			//less编译文件
	|	|		└── widget/		//yecui 组件库
	|	├── mock/
	|	├── page/
	|	|	├── layout/			//公共模块
	|	|	├── tmpl/				//模板文件
	|	|	├── view/				//主体页面
	|	|	└── widget/			//页面组件
	└── tool/
```
## 模块组织规范

yecui 的样式模块组织方式追求扁平化的方式，分为三个层级：
- 基础框架（reset +  function + iconfont + 栅格）
- 通用模块（符合 yeps 规范的样式模块）
- 页面样式（继承通用模块,开发人员进一步开发）

##关于命名空间

建议使用 - 来做命名空间上的区隔，最小化两个模块之间的命名冲突。
这种模块化的命名方式会很好地避免样式之间的冲突，特别推荐在团队中使用。参见 [网易前端框架NEC-分类方法](http://nec.netease.com/standard/css-sort.html)

#####现有功能

- css reset
	为了增强跨浏览器表现的一致性，我们使用了 [Normalize.css](https://github.com/necolas/normalize.css)

- 布局 `grid`：借鉴了 Bootstrap的栅格系统 
	具体使用参见 [bootstrap栅格系统](http://v3.bootcss.com/css/#grid)
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
	###辅助布局

- 模块 `module`：通常是一个语义化的可以重复使用的较大的整体！比如导航、登录、注册、各种列表、评论、搜索等！
```css
	.m-navbar{}					/* 导航条 */
	.m-header{} 	 			/* 页眉 */
	.m-footer{} 	 			/* 页脚 */
	.m-titbar{} 	 			/* 标题栏 */
	.m-menu{} 	 				/* 菜单 */
	.m-tabs{} 					/* tab切换 */
	.m-forms{} 					/* 表单 */
	.m-alert{} 					/* 提示信息 */
	.m-dropdown{} 				/* 下拉框 */
	.m-slider{} 				/* 滑动内容 */
	.m-share{} 					/* 分享 */
	.m-breadcrumb{} 			/* 面包屑 */
	.m-list{} 					/* 列表 */
	.m-step{} 					/* 步进条 */
	.m-table{} 					/* 表格 */
```

- 元件 `unit`：通常是一个不可再分的较为小巧的个体，通常被重复用于各种模块中！比如按钮、输入框、loading、图标等！
```css
	.u-button{} 	 			/* 按钮 */
	.u-select{} 				/* 选择器 */
	.u-close{} 					/* 关闭 */
	.u-icon{} 					/* 图标 */
	.u-pages{} 					/* 分页 */
	
```
- 功能 `function`：为方便一些常用样式的使用，我们将这些使用率较高的样式剥离出来，按需使用，通常这些选择器具有固定样式表现，比如清除浮动等！不可滥用！
```css
	.fn-clear{} 				/* 清除浮动 */
	.fn-hide{} 					/* 隐藏元素 */
	.fn-left{} 					/* 左浮动 */
	.fn-right{} 				/* 右浮动 */
	.fn-omit{} 					/* 单行移除省略 */
	.fn-clamp{} 				/* 多行移除省略 */
	.fn-rmb{} 					/* 金钱样式 */
	.fn-linear{} 				/* 简单渐变 */
```

- 皮肤 `skin`：如果你需要把皮肤型的样式抽离出来，通常为文字色、背景色（图）、边框色等，非换肤型网站通常只提取文字色！非换肤型网站不可滥用此类！
```css
	.s-{}  /* 1.0 版本不支持皮肤 */
```
- 状态 `zhuangtai`：为状态类样式加入前缀，统一标识，方便识别，她只能组合使用或作为后代出现（.u-ipt.z-dis{}，.m-list li.z-sel{}），具体详见命名规则的扩展相关项。
```css
	.z-{}
```
#### 最佳选择器写法（模块）
```css
	/* 这是某个模块 */
	.m-nav{}/* 模块容器 */
	.m-nav li,.m-nav a{}/* 先共性  优化组合 */
	.m-nav li{}/* 后个性  语义化标签选择器 */
	.m-nav a{}/* 后个性中的共性 按结构顺序 */
	.m-nav a.a1{}/* 后个性中的个性 */
	.m-nav a.a2{}/* 后个性中的个性 */
	.m-nav .z-crt a{}/* 交互状态变化 */
	.m-nav .z-crt a.a1{}
	.m-nav .z-crt a.a2{}
	.m-nav .btn{}/* 典型后代选择器 */
	.m-nav .btn-1{}/* 典型后代选择器扩展 */
	.m-nav .btn-dis{}/* 典型后代选择器扩展（状态） */
	.m-nav .btn.z-dis{}/* 作用同上，请二选一（如果可以不兼容IE6时使用） */
	.m-nav .m-sch{}/* 控制内部其他模块位置 */
	.m-nav .u-sel{}/* 控制内部其他元件位置 */
	.m-nav-1{}/* 模块扩展 */
	.m-nav-1 li{}
	.m-nav-dis{}/* 模块扩展（状态） */
	.m-nav.z-dis{}/* 作用同上，请二选一（如果可以不兼容IE6时使用） */
```

## CSS书写规范 

参考 [google的html、css代码规范](http://www.cnblogs.com/2050/archive/2012/04/26/2470947.html)

1.多人开发,推荐竖版写法,方便修改维护
```css
	.yp-title {
		position: relative;
		top: 100px;
		left: 100px;
		font-weight: bold;
	}
```
2.统一采用” - “对class中的字母分隔
```css
	.yp-title {
		font-weight: bold;
	}
```
3.在紧跟属性名的冒号后,和属性名和{之间 使用一个空格
```css
	.hotel-content {
    	font-weight: bold;
	}
```
4.多选择器规则之间（必须）换行
```css
	a.btn,
	input.btn,
	input[type="button"] {
	     ......
	}
```
5.如果css属性的值为0,则后面不要带上单位。除非真的是需要。
```css
	.obj {
	    left: 0;    
	}
```
6.推荐使用css书写顺序,按照这样的顺序书写可见提升浏览器渲染dom的性能
```css
	.hotel-content {
	     /* 定位 */
	     display
	     position
	     float
	     top
	     /* 盒模型 */
	     width
	     height
	     margin
	     padding
	     border
	     overflow
	     / *其他* /
	     font
	     text-align
	     color
	     background
	}
```
7.小图片（必须）sprite 合并

8.IE Hack List ,原则上不允许使用Hack
```css
	selector {
	     property: value;     /* 所有浏览器 */ 
	     property: value\9;   /* 所有IE浏览器 */ 
	     property: value\0;   /* IE8 */
	     +property: value;    /* IE7 */
	     _property: value;    /* IE6 */
	     *property: value;    /* IE6-7 */
	}
```
9.避免不必要的 CSS 选择符嵌套,选择符嵌套在必要的情况下一般不超过三层；选择符叠加一般不多于两个。
```css
	/* 不推荐 */
	.ui.form.input .fields.error .field .ui.selection.dropdown .menu .item:hover {
	    ...
	}
```
10.ID和class的命名尽可能短，并符合语义。
```css
	/* 不推荐 */
	.navigation {}
	.atr {}
	/* 推荐 */
	.nav {}
	.author {}
```

11.使用单引号,省略url引用中的引号，其他需要引号的地方使用单引号。
```css
	.m-box{background:url(bg.png);}
	.m-box:after{content:'.';}
```






### 图标使用
- ui 彩色图标建议使用雪碧图合并一起,减小请求数
- 扁平化纯色图标尽量使用 font-face 代替 雪碧图,推荐使用> [淘宝图标库Iconfont](http://www.iconfont.cn/)

### 命名建议
- 常用状态有：hover, current, selected, disabled, focus, blur, checked, success, error 等
- 相同语义的不同类命名
	方法：直接加数字或字母区分即可（如：.m-list、.m-list2、.m-list3等，都是列表模块，但是是完全不一样的模块）。
	其他举例：.f-fw0、.f-fw1、.s-fc0、.s-fc1、.m-logo2、.m-logo3、u-btn、u-btn2等等。

### 统一语义理解和命名
- 参见 [常用命名,简写](className.md)
- 参见 [html标签](htmlTag.md)

## 移动端开发说明
#### 单位的使用
rem是否能替代px 作为基础单位  
- 参见 [webapp rem的变革](http://isux.tencent.com/web-app-rem.html)
- 最好有一套快速切换px ,rem 为单位的解决方案

#参考、使用的项目

[amazeui](https://github.com/allmobilize/amazeui)

[Bootstrap](http://www.bootcss.com/)

[aliceui](https://github.com/aliceui/aliceui.org)

[nec](http://nec.netease.com/)
