/**
 *
 * @authors     Zoey Huang
 * @date        2020-06-14 14:02:23
 * @description 实现university.html页面的时间轴切换
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
			img.setAttribute('src', "../img/nav_chosen.png");
		}else{
			// 若收起，则不显示导航栏，同时将菜单按钮图标复原
			nav.style.display = 'none';
			img.setAttribute('src', "../img/nav.png");
		}
	}
	// 获取导航栏标签和显示的时间轴标签
	var time = document.getElementsByClassName('time');
	var term = document.getElementsByClassName('term');
	// 分别给导航栏标签增加点击事件，更改时间轴的显示情况和其自身的样式
	time[0].onclick = function(ev){
		term[0].style.display = 'block';
		term[1].style.display = 'none';
		term[2].style.display = 'none';
		time[0].style.fontWeight="Bold";//粗体
		time[0].style.textDecoration = "Underline";
		time[1].style.fontWeight="Normal";
		time[1].style.textDecoration = "None";
		time[2].style.fontWeight="Normal";
		time[2].style.textDecoration = "None";
	}
	time[1].onclick = function(ev){
		term[0].style.display = 'none';
		term[1].style.display = 'block';
		term[2].style.display = 'none';
		time[0].style.fontWeight="Normal";//粗体
		time[0].style.textDecoration = "None";
		time[1].style.fontWeight="Bold";
		time[1].style.textDecoration = "Underline";
		time[2].style.fontWeight="Normal";
		time[2].style.textDecoration = "None";
	}
	time[2].onclick = function(ev){
		term[0].style.display = 'none';
		term[1].style.display = 'none';
		term[2].style.display = 'block';
		time[0].style.fontWeight="Normal";//粗体
		time[0].style.textDecoration = "None";
		time[1].style.fontWeight="Normal";
		time[1].style.textDecoration = "None";
		time[2].style.fontWeight="Bold";
		time[2].style.textDecoration = "Underline";
	}
}
