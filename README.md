<h1><a href="#" title="yep-ui 官网"></h1>


yep-ui 是基于公司内部项目构建的一个跨屏前端框架。
简单地说，就是一些事先写好的css，你只需要给你的html元素加上一些特定的类，就可以快速的得到一些想要的效果。


##CSS书写规范

1.多人开发,推荐竖版写法,方便修改维护
```
	.yp-title {
		position: relative;
		top: 100px;
		left: 100px;
		font-weight: bold;
	}
```

2.统一采用” - “对class中的字母分隔
```
	.yp-title {
		font-weight: bold;
	}
```
3.空格的使用：
```
	选择器与 { 之前（必须）要有空格
	属性名的 : 后（必须）要有空格
	属性名的 : 前（禁止）加空格
	.hotel-content {
    	font-weight: bold;
	}
```
4.多选择器规则之间（必须）换行
```
	a.btn,
	input.btn,
	input[type="button"] {
	     ......
	}
```
5. （禁止）向 0 后添加单位, 如：
```
.obj {
    left: 0px;
}
```









##CSS 大致分为四部分
	###基础（默认）样式
		使用 normalize.css 统一浏览器差异， 以及一些基础的元素样式。
	###布局样式




###图标使用
ui图标建议使用css sprites合并一起
	合并规则 ------todo-------
扁平化纯色图标建议使用 fontface 
	淘宝图标库[Iconfont](http://www.iconfont.cn/)

###命名建议
常用状态有：hover, current, selected, disabled, focus, blur, checked, success, error 等
	
###简写的建议
	title = tt	content = cnt
###	