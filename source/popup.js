var x = function(){
	if(chrome.tabs && chrome.tabs.executeScript){
		chrome.tabs.executeScript({file: "page.js"});
	}
};

onload = function(){
document.body.firstElementChild.onclick = x;
};
