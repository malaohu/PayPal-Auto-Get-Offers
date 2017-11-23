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
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == "getLocalStorage")
      sendResponse({data: localStorage[request.key]});
    else
      sendResponse({}); 
});

var new_offer_url = "";
var new_offer_id = "";
var reg = /(https:\/\/www.paypal.com[^"]+?offers\?view=details&offerId=([^" >]+))/i

$(function(){doit();})

function doit(){
 $.get((localStorage["offer_url"] || "https://www.paypal-biz.com/campaign/Nov/"),function(body){
    if(reg.test(body))
    {
      new_offer_url = RegExp.$1;
      new_offer_id = RegExp.$2;
      console.log(new_offer_url);
      if(new_offer_id != localStorage["last_offer_id"])
        chrome.tabs.create({ url: new_offer_url});
      window.setTimeout(doit,localStorage["paypal_inter"] || 60000);
    }else{
      alert("没有匹配到数据！请手动查看一下！重新加载扩展！");
    }
  });
}