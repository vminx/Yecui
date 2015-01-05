<h1><a href="#" title="yep-ui html常用标签"></h1>

- head标签
	- <title>	文档标题	只用于head	 
	- <script />	引用脚本	不可嵌套任何元素	type,src
	- <style>	引用样式	不可嵌套任何元素	type,media
	- <link />	引用样式或icon	不可嵌套任何元素	type,rel,href
	- <iframe>	内嵌一个网页	 	frameborder,width,height,src,scrolling,name
	- <meta />	文档信息	只用于head	content,http-equiv,name

- 常用标签 
	- <a>	超链接/锚	a不可嵌套a	href,name,title,rel,target
	- <br />	换行	 	 
	- <button>	按钮	不可嵌套表单元素	type,disabled
	- <del>	文本删除	 	 
	- <div>	块级容器	 	 
	- <em>	强调文本	 	 
	- <h1>	标题	从h1到h6，不可嵌套块级元素	 
	- <img />	图像	 	alt,src,width,height
	- <p>	段落	不能嵌套块级元素	 
	- <span>	内联容器	 	 
	- <strong>	强调文本	 	 
	- <sub>	下标	 	 
	- <sup>	上标	 

- table	 
	- <table>	表格	只可嵌套表格元素	width,align,background,cellpadding,cellspacing,summary,border
	- <thead	表格表头	只用于table
	- <th>	表格中的标题单元格	只用于tr	colspan,rowspan
	- <tbody> 表格主体	只用于table	 
	- <tr>	表格行	嵌套于table或thead、tbody、tfoot	
	- <td>	表格中的单元格	只用于tr	colspan,rowspan
	- <tfoot>	表格表尾	只用于table	 

- form
	- <form>	表单	 	action,target,method,name
	- <input />	各种表单控件	 	type,name,value,checked,disabled,maxlength,readonly,accesskey
	- <label>	标签为input元素定义标注	 	for
	- <select>	列表框或下拉框	只能嵌套option或optgroup	name,disabled,multiple
	- <textarea> 多行文本输入控件	 	name,accesskey,disabled,readonly,rows,cols
	- <option>	select中的一个选项	仅用于select	value,selected,disabled

- 列表
	- <ul>	无序列表	只能嵌套li	 
	- <ol>	有序列表	只能嵌套li	 
	- <li>	列表项	只能以ul或ol为父容器	 
	- <dl>	定义列表	只能嵌套dt和dd	 
	- <dt>	定义列表中的定义术语	只能以dl为父容器，对应多个dd		
	- <dd>	定义列表中的定义（描述内容）	只能以dl为父容器，对应一个dt
