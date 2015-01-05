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
#####这种模块化的命名方式会很好地避免样式之间的冲突，特别推荐在团队中使用。参见 [网易前端框架NEC-分类方法](http://nec.netease.com/standard/css-sort.html)
1. 重置`reset`和默认`base``tags`：消除默认样式和浏览器差异，并设置部分标签的初始样式，以减少后面的重复劳动！你可以根据你的网站需求设置！
2. 统一处理：建议在这个位置统一调用背景图（这里指多个布局或模块或元件共用的图）和清除浮动（这里指通用性较高的布局、模块、元件内的清除）等统一设置处理的样式！
3. 布局 `grid` `.g-`：将页面分割为几个大块，通常有头部、主体、主栏、侧栏、尾部等！
4. 模块 `module` `.m-`：通常是一个语义化的可以重复使用的较大的整体！比如导航、登录、注册、各种列表、评论、搜索等！
5. 元件 `unit` `.u-`：通常是一个不可再分的较为小巧的个体，通常被重复用于各种模块中！比如按钮、输入框、loading、图标等！
6. 功能 `function` `.f-`：为方便一些常用样式的使用，我们将这些使用率较高的样式剥离出来，按需使用，通常这些选择器具有固定样式表现，比如清除浮动等！不可滥用！
7. 皮肤 `skin` `.s-`：如果你需要把皮肤型的样式抽离出来，通常为文字色、背景色（图）、边框色等，非换肤型网站通常只提取文字色！非换肤型网站不可滥用此类！
8. 状态 `.z-`：为状态类样式加入前缀，统一标识，方便识别，她只能组合使用或作为后代出现（.u-ipt.z-dis{}，.m-list li.z-sel{}），具体详见命名规则的扩展相关项。

#####框架现有功能

- `grid模块` 
```css
	.g-{}						/* 导航条 */
```

- `ui模块` 
```css
	/*常用系统组件 包括 */
	.ui-navbar{} 	 			/* 导航条 */
	.ui-header{} 	 			/* 页眉 */
	.ui-footer{} 	 			/* 页脚 */
	.ui-titbar{} 	 			/* 标题栏 */
	.ui-menu{} 	 				/* 菜单 */
	.ui-button{} 	 			/* 按钮 */
	.ui-tabs{} 					/* tab切换 */
	.ui-forms{} 				/* 表单 */
	.ui-alert{} 				/* 提示信息 */
	.ui-dropdown{} 				/* 下拉框 */
	.ui-slider{} 				/* 滑动内容 */
	.ui-select{} 				/* 选择器 */
	.ui-share{} 				/* 分享 */
	.ui-breadcrumb{} 			/* 面包屑 */
	.ui-close{} 				/* 关闭 */
	.ui-icon{} 					/* 图标 */
	.ui-list{} 					/* 列表 */
	.ui-pages{} 				/* 分页 */
	.ui-step{} 					/* 步进条 */
	.ui-table{} 				/* 表格 */
```
- `fn模块` 
```css
	.fn-clear{} 				/* 清除浮动 */
	.fn-hide{} 					/* 隐藏元素 */
	.fn-left{} 					/* 左浮动 */
	.fn-right{} 				/* 右浮动 */
	.fn-omit{} 					/* 单行移除省略 */
	.fn-clamp{} 				/* 多行移除省略 */
	.fn-rmb{} 					/* 金钱样式 */
	.fn-linear{} 				/* 简单渐变 */

	/*功能类的组件 包括 */
	.fn-variables{} 			/* less变量 */
	.fn-utility{} 				/* 公用 */
	.fn-grid{} 					/* 布局 */
	.fn-animation{} 			/* 动画 */
	.fn-mixins{} 				/* 混合函数 */
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
- 布局（.g-）
	- 文档 doc					`doc`
	- 头部 head				`hd`
	- 主体 body				`bd`
	- 尾部 foot				`ft`
	- 主栏 main				`mn`
	- 主栏子容器 mainc			`mnc`
	- 侧栏 side				`sd`
	- 侧栏子容器 sidec			`sdc`
	- 盒容器 wrap/box			`wrap/box`

- 模块（.m-）、元件（.u-）
	- 导航	nav	-			`nav`
	- 子导航	subnav			`snav`
	- 面包屑	crumb			`crm`
	- 菜单	menu			`menu`
	- 选项卡	tab				`tab`
	- 标题区	head/title		`hd/tt`
	- 内容区	body/content	`bd/ct`
	- 列表	list			`lst`
	- 表格	table			`tb`
	- 表单	form			`fm`
	- 热点	hot				`hot`
	- 排行	top				`top`
	- 登录	login			`log`
	- 标志	logo			`logo`
	- 广告	advertise		`ad`
	- 搜索	search			`sch`
	- 幻灯	slide			`sld`
	- 提示	tips			`tips`
	- 帮助	help			`help`
	- 新闻	news			`news`
	- 下载	download		`dld`
	- 注册	regist			`reg`
	- 投票	vote			`vote`
	- 版权	copyright		`cprt`
	- 结果	result			`rst`
	- 标题	title			`tt`
	- 按钮	button			`btn`
	- 输入	input			`ipt`
- 功能（.f-）
	- 浮动清除	clearboth	`cb`
	- 向左浮动	floatleft	`fl`
	- 向右浮动	floatright	`fr`
	- 内联块级	inlineblock	`ib`
	- 文本居中	textaligncenter	`tac`
	- 文本居右	textalignright	`tar`
	- 文本居左	textalignleft	`tal`
	- 垂直居中	verticalalignmiddle	`vam`
	- 溢出隐藏	overflowhidden	`oh`
	- 完全消失	displaynone	`dn`
	- 字体大小	fontsize	`fs`
	- 字体粗细	fontweight	`fw`

- 皮肤（.s-）
	- 字体颜色	fontcolor	`fc`
	- 背景	background	`bg`
	- 背景颜色	backgroundcolor	`bgc`
	- 背景图片	backgroundimage	`bgi`
	- 背景定位	backgroundposition	`bgp`
	- 边框颜色	bordercolor	`bdc`

- 状态（.z-）
	- 选中	selected	`sel`
	- 当前	current	`crt`
	- 显示	show	`show`
	- 隐藏	hide	`hide`
	- 打开	open	`open`
	- 关闭	close	`close`
	- 出错	error	`err`
	- 不可用	disabled	`dis`
	
## 移动端开发说明
#### 单位的使用
rem是否能替代px 作为基础单位  
- 推荐阅读 [webapp rem的变革](http://isux.tencent.com/web-app-rem.html)
- 最好有一套快速切换px ,rem 为单位的解决方案
