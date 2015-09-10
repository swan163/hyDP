/*
* @description: 好用门户网站
* @version: 1.0 ### 20150720
* @author: lilh3@ucweb.com
* @update:
*/

define(function(require) {
var slip = require('../lib/slip');

	var doc = document;
	var bigChangeImg = function(){
		//初始化
		var oBigBanner = doc.querySelector('#bigGlide');

		//大banner 调用
		doSlip(oBigBanner, oBigBanner.querySelectorAll('li').length);
		var iLiWidth;
		var refreshSlip;
		function setWidth() {
			var $width;
			var oUl = oBigBanner.querySelector('ul');
			var aLi = oBigBanner.querySelectorAll('li');
			$width = document.body.clientWidth;

			for(var i =0;i< aLi.length;i++) {
				aLi[i].style.width = $width + 'px';
			}
			oUl.style.width = $width * aLi.length + 'px';
			refreshSlip.refresh();
			return $width;
		}
		iLiWidth = setWidth();

		$(window).resize(function() {
			iLiWidth = setWidth();
		});
		//相同banner模型
		function doSlip(obj, n){
			var oUl = obj.querySelector('ul');
			var aLi = obj.querySelectorAll('li');

			//var oP = obj.querySelectorAll('.glide-index-wrap')[0];
			var oP = obj.querySelectorAll('#bigIndex')[0];
			if(n <= 1){
				oP.innerHTML = "";
			}else{
				var oPhtml = "<i class='on'></i>";
				for(var i =1;i<n;i++)
				{
					oPhtml += "<i></i>";
				}
				oP.innerHTML = oPhtml;
			}
			var aBigI = obj.querySelectorAll('i');


			//结束执行回调
			function fnEnd(){
				for(var i=0; i < aBigI.length; i++)
				{
					if(i==this.page)
					{
						aBigI[i].className = 'on';
					}else{
						aBigI[i].className = '';
					}
				}
			}
			refreshSlip = slip('page',oUl,{
				change_time: 5000,
				num: n,
				endFun: fnEnd
			});
		}
	}

	if($("#bigGlide").length > 0) {
		bigChangeImg();
	};


	var shareBtn = $("#shareBtn");
	var shareBox = $("#shareBox");
	shareBtn.click(function() {
		if(shareBox.css("display") == "none") {
			shareBox.show();
		} else {
			shareBox.hide();
		}
	})

})