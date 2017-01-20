var all = document.querySelectorAll('.div[id^="google_ads_iframe"],\
iframe[id^="google_ads_iframe"],\
iframe[src*= "xd_arbiter"],\
#fb-root,.trc_rbox_container,\
.ad-container,\
.google_ads_frame,\
.adsbygoogle,\
.OUTBRAIN,\
iframe[src*="dianomi.com/smartads.epl"],\
a[href*="//www.nextadvisor.com"],\
iframe[src*="googlesyndication.com"],\
iframe *[id*="google_ads"],\
.ad-frame,*[name*="aswift"],\
*[name*="aswift"],\
*[src*="ads.pubmatic.com"],\
iframe[src*="adfront.org"],\
a[href*="srv.buysellads.com"],\
iframe[src*="disqusads.com/ads-iframe"],\
.rc-wc,\
.beacon-pxl,\
.beacon-one,\
.beacon\
');
if(all.length > 0){
	var index;
	for(index=0; index < all.length; index++ ) {
		all[index].remove();
	}
	alert("Ads Removed!");
}else{
	alert("No ads found.");
}