# liveapp 更新记录

- 2015-01-07 15:08:46

	- 新增liveapp模块


# 使用说明

```html
	<section data-widget="liveapp" class="ui-liveapp">
		<article data-page="1" class="ui-liveapp-page ui-liveapp-page1 show">
			<div class="page-cont">
				<!-- 自定义内容  -->
				<div class="tt" ><h1>车挣盒子</h1></div> 
				<div class="goods"><img src="../../assets/img/project/p-page1.png" alt=""></div>
				<!-- 箭头 -->
				<div class="page-arrow page-arrow-deful"></div> 
			</div>
		</article>
		<article data-page="2" class="ui-liveapp-page ui-liveapp-page2 hide">
			<div class="page-cont">
				<!-- 背景图  -->
				<div class="page-bg"><img src="../../assets/img/project/rze.jpg" alt=""></div>
				<!-- 箭头 -->
				<div class="page-arrow page-arrow-deful"></div> 
			</div>
		</article>
	</section>
```

```less
	//在yecui里引入该组件的less文件
	@import "widget/loading/liveapp.less";
```

```html
	//页面里引入该组件的js文件
	<script type="text/javascript" src="js/ui.liveapp.js"></script>
```