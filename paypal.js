 /*
.___  ___.      ___       __          ___       ______    __    __   __    __
|   \/   |     /   \     |  |        /   \     /  __  \  |  |  |  | |  |  |  |
|  \  /  |    /  ^  \    |  |       /  ^  \   |  |  |  | |  |__|  | |  |  |  |
|  |\/|  |   /  /_\  \   |  |      /  /_\  \  |  |  |  | |   __   | |  |  |  |
|  |  |  |  /  _____  \  |  `----./  _____  \ |  `--'  | |  |  |  | |  `--'  |
|__|  |__| /__/     \__\ |_______/__/     \__\ \______/  |__|  |__|  \______/
Github  	:   https://github.com/malaohu
Blog    	:   http://51.RUYO.net
Create Time	: 	2017-11-23
*/


var $$$paypal_email,$$$paypal_pwd;
chrome.runtime.sendMessage({method: "getLocalStorage", key: "paypal_email"}, function(response) {
   $$$paypal_email = response.data;
});
chrome.runtime.sendMessage({method: "getLocalStorage", key: "paypal_pwd"}, function(response) {
   $$$paypal_pwd = response.data;
});

function domy(){
	//保存优惠券
	if(window.location.href.indexOf("https://www.paypal.com/c2/webapps/mpp/offers")> -1){
		//点击保存优惠券按钮
		$(".details__btn")[0].click();
	}

	//登录Paypal
	if(window.location.href.indexOf("https://www.paypal.com/c2/signin") > -1){
		$("#email").val($$$paypal_email);
		$("#password").val($$$paypal_pwd);
		$("#btnLogin")[0].click();
		
	}
}

$(function(){window.setTimeout(domy,5000);});
