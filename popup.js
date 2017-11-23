 /*
.___  ___.      ___       __          ___       ______    __    __   __    __
|   \/   |     /   \     |  |        /   \     /  __  \  |  |  |  | |  |  |  |
|  \  /  |    /  ^  \    |  |       /  ^  \   |  |  |  | |  |__|  | |  |  |  |
|  |\/|  |   /  /_\  \   |  |      /  /_\  \  |  |  |  | |   __   | |  |  |  |
|  |  |  |  /  _____  \  |  `----./  _____  \ |  `--'  | |  |  |  | |  `--'  |
|__|  |__| /__/     \__\ |_______/__/     \__\ \______/  |__|  |__|  \______/
Github  	:   https://github.com/malaohu
Blog    	:   http://51.RUYO.net
Create Time	: 	2017-9-18
*/

$(function(){
		var offer_url = localStorage.getItem("offer_url");
		var last_offer_id = localStorage.getItem("last_offer_id");
		var paypal_email = localStorage.getItem("paypal_email");
		var paypal_pwd = localStorage.getItem("paypal_pwd");
		var paypal_inter = localStorage.getItem("paypal_inter");
		
		if(offer_url && offer_url.length > 1){
			$("#paypal_offer_url").val(offer_url);
		}
		if(last_offer_id && last_offer_id.length > 1){
			$("#paypal_last_offer_id").val(last_offer_id);
		}
		if(paypal_email && paypal_email.length > 1){
			$("#paypal_email").val(paypal_email);
		}
		if(paypal_pwd && paypal_pwd.length > 1){
			$("#paypal_pwd").val(paypal_pwd);
		}
		if(paypal_inter && paypal_inter.length > 1){
			$("#paypal_inter").val(paypal_inter);
		}
});

function doit(){
	localStorage.setItem("offer_url",$("#paypal_offer_url").val());
	localStorage.setItem("last_offer_id",$("#paypal_last_offer_id").val());
	localStorage.setItem("paypal_email",$("#paypal_email").val());
	localStorage.setItem("paypal_pwd",$("#paypal_pwd").val());
	localStorage.setItem("paypal_inter",$("#paypal_inter").val());
	alert('保存成功~');
}

$("#doit").click(doit);