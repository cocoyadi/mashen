window.onload=function  () {
		// 百度地图API功能	
	map = new BMap.Map("map");
	map.enableScrollWheelZoom(true);
	map.centerAndZoom(new BMap.Point(113.393061,23.198716), 12);
	var data_info = [
					 [113.351084,23.146234,"地址：广州天河北路906号高科大厦A座13A07-1501室"],
					 [113.393061,23.198716,"地址：广东省广州市天河区广汕一路715号点动星宇创意园四栋三楼"]]
	var opts = {
				width : 300,     // 信息窗口宽度
				height: 30,     // 信息窗口高度
				enableMessage:true//设置允许信息窗发送短息
			   };
	for(var i=0;i<data_info.length;i++){
		var marker = new BMap.Marker(new BMap.Point(data_info[i][0],data_info[i][1]));  // 创建标注
		map.openInfoWindow(new BMap.InfoWindow(data_info[i][2]),new BMap.Point(data_info[i][0],data_info[i][1]));
		var content = data_info[i][2];
		map.addOverlay(marker);  
		// 将标注添加到地图中
		addClickHandler(content,marker);
		marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
	}
	function addClickHandler(content,marker){
		marker.addEventListener("click",function(e){
			openInfo(content,e)}
		);
	}
	function openInfo(content,e){
		var p = e.target;
		var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
		var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象 
		map.openInfoWindow(infoWindow,point); //开启信息窗口
	var marker = new BMap.Marker(point);  // 创建标注

	}
}
