/**
 *
 * @authors     Zoey Huang
 * @date        2020-06-11 11:02:10
 * @description 实现index.html页面导航栏的收起和展开，由于index.html文件的位置
 *              与其他html文件位置不同，因此此js单独书写
 */
 window.onload = function (ev) {
	// 获取导航标签和菜单按钮标签
	var nav = document.getElementsByTagName('nav')[0];
	var img = document.getElementsByTagName('img')[0];
	// 控制导航栏的展开
	var isChosen = false;
	// 菜单按钮的点击事件
	img.onclick = function (ev1) {
		// 更改展开状态
		isChosen = !isChosen;
		if (isChosen) {
			// 若展开，则显示导航栏，同时修改菜单按钮图标为“关闭”
			nav.style.display = 'block';
			img.setAttribute('src', "img/nav_chosen.png");
		}else{
			// 若收起，则不显示导航栏，同时将菜单按钮图标复原
			nav.style.display = 'none';
			img.setAttribute('src', "img/nav.png");
		}
	}
}

