<h1><a href="#" title="yep-ui 官网"></h1>


yeps 是基于公司内部项目构建的一个跨屏前端框架和前端规范。
框架简单地说，就是一些事先写好的css，你只需要给你的html元素加上一些特定的类，就可以快速的得到一些想要的效果。
##项目开发
- 大中型项目,页面开发套PHP壳,公共页面维护方便
- 基本结构
```
	项目名称/
	├── src/
	|	├── assets/
	|	|	├── css/
	|	|	|	├── base.css		//css reset + function 通用解决方案
	|	|	|	├── yeps.css		//yeps 组件库
	|	|	|	└── solution.css	//基于各产品个性解决方案
	|	|	├── img/
	|	|	|	├──...				//基础ui图片
	|	|	|	└── project/		//项目专有图片
	|	|	├── js/
	|	|	|	├── app/			//各页面具体js
	|	|	|	├── lib/			//js框架
	|	|	|	└── common/			//通用js
	|	|	└── less/
	|	|		├── view/			//less编译文件
	|	|		└── widget/			//yeps 组件
	|	├── mock/
	|	├── page/
	|	|	├── layout/				//公共模块
	|	|	├── tmpl/				//模板文件
	|	|	├── view/				//主体页面
	|	|	└── widget/				//页面组件
	└── tool/
```
##模块组织规范

yeps 的样式模块组织方式追求扁平化的方式，分为三个层级：
- 基础框架（reset +  function + iconfont + 栅格）
- 通用模块（符合 yeps 规范的样式模块）
- 页面样式（继承通用模块,开发人员进一步开发）

##CSS书写规范 

	参考 [google的html\css代码规范](http://www.cnblogs.com/2050/archive/2012/04/26/2470947.html)

1. 多人开发,推荐竖版写法,方便修改维护
```
	.yp-title {
		position: relative;
		top: 100px;
		left: 100px;
		font-weight: bold;
	}
```

2. 统一采用” - “对class中的字母分隔
```
	.yp-title {
		font-weight: bold;
	}
```
3. 在紧跟属性名的冒号后,和属性名和{之间 使用一个空格
```
	.hotel-content {
    	font-weight: bold;
	}
```
4. 多选择器规则之间（必须）换行
```
	a.btn,
	input.btn,
	input[type="button"] {
	     ......
	}
```
5. 如果css属性的值为0,则后面不要带上单位。除非真的是需要。
```
	.obj {
	    left: 0;    
	}
```
6. 推荐使用css书写顺序,按照这样的顺序书写可见提升浏览器渲染dom的性能
```
	.hotel-content {
	     /* 定位 */
	     display: block;
	     position: absolute;
	     left: 0;
	     top: 0;
	     /* 盒模型 */
	     width: 50px;
	     height: 50px;
	     margin: 10px;
	     border: 1px solid black;
	     / *其他* /
	     color: #efefef;
	}
```
7. 小图片（必须）sprite 合并

8. IE Hack List
```
	selector {
	     property: value;     /* 所有浏览器 */ 
	     property: value\9;   /* 所有IE浏览器 */ 
	     property: value\0;   /* IE8 */
	     +property: value;    /* IE7 */
	     _property: value;    /* IE6 */
	     *property: value;    /* IE6-7 */
	}
```
9. 避免不必要的 CSS 选择符嵌套

10. ID和class的命名尽可能短，并符合语义。
```
	/* 不推荐 */
	.navigation {}
	.atr {}
	/* 推荐 */
	.nav {}
	.author {}
```









###图标使用
- ui 彩色图标建议使用雪碧图合并一起,减小请求数
- 扁平化纯色图标尽量使用 font-face 代替 雪碧图
	推荐使用 [淘宝图标库Iconfont](http://www.iconfont.cn/)

###命名建议
常用状态有：hover, current, selected, disabled, focus, blur, checked, success, error 等
	
###简写的建议
```
	title = tt	content = cnt
```
##移动端开发说明
###单位的使用
	rem是否能替代px 作为基础单位  [web-app子rem的变革](http://isux.tencent.com/web-app-rem.html)
	最还有一套快速切换px ,rem 为单位的解决烦啊
