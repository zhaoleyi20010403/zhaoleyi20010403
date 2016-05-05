;window.Eager=window.Eager||{};Eager.siteId="tWN6ZDRBUM";Eager.generation="20160505130135-6981";Eager.installs=Eager.installs||{};;(function(){var prevEls={};Eager.createElement=function(options,prevEl){try{if(prevEl&&prevEl.parentNode){var replacedEl;if(prevEl.eagerElementId){replacedEl=prevEls[prevEl.eagerElementId];}
if(replacedEl){prevEl.parentNode.replaceChild(replacedEl,prevEl);delete prevEls[prevEl.eagerElementId];}else{prevEl.parentNode.removeChild(prevEl);}}
var element=document.createElement('eager-app');var container;try{container=document.querySelector(options.selector);}catch(e){}
if(!container){return element;}
if(!container.parentNode&&(options.method=="after"||options.method=="before"||options.method=="replace")){return element;}
if(container==document.body){if(options.method=="after")
options.method="append";else if(options.method=="before")
options.method="prepend";}
switch(options.method){case"prepend":if(container.firstChild){container.insertBefore(element,container.firstChild);break;}
case"append":container.appendChild(element);break;case"after":if(container.nextSibling){container.parentNode.insertBefore(element,container.nextSibling);}else{container.parentNode.appendChild(element);}
break;case"before":container.parentNode.insertBefore(element,container);break;case"replace":try{id=element.eagerElementId=Math.random().toString(36);prevEls[id]=container;}catch(e){}
container.parentNode.replaceChild(element,container);}
return element;}catch(e){if(typeof console!=="undefined"&&typeof console.error!=="undefined"){console.error("Error creating Eager element",e);}}}})();;(function(){Eager.matchPage=function(patterns){if(!patterns||!patterns.length){return true;}
if(window.Eager&&Eager.proxy&&Eager.proxy.originalURL){var url=Eager.proxy.originalURL.parsed;var loc=url.host+url.path;}else{var loc=document.location.host+document.location.pathname;}
for(var i=0;i<patterns.length;i++){var re=new RegExp(patterns[i],'i');if(re.test(loc)){return true;}}
return false;}})();;window.Eager=window.Eager||{};Eager.loadAsync={"script":[],"style":[]};;(function(){var load=Eager.reloadBody=function(){try{var head=document.getElementsByTagName('head')[0];for(var i=Eager.loadAsync.script.length;i--;){var script=document.createElement('script');script.src=Eager.loadAsync.script[i];head.appendChild(script);}
for(var i=Eager.loadAsync.style.length;i--;){var link=document.createElement('link');link.rel='stylesheet';link.href=Eager.loadAsync.style[i];head.appendChild(link);}}catch(e){if(typeof console!=="undefined"&&typeof console.error!=="undefined")
console.error("Error loading Eager content",e);}};try{if(Eager.loadAsync){if(document.readyState!=='loading'){load();}else{if(document.addEventListener){document.addEventListener('DOMContentLoaded',load,false);}else{document.attachEvent('onreadystatechange',function(){if(document.readyState=='complete'){load();}});}}}}catch(e){if(typeof console!=="undefined"&&typeof console.error!=="undefined")
console.error("Error binding Eager load event",e);}})();
