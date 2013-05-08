/*
  textfill
 @name      jquery.textfill.js
 @author    Russ Painter
 @author    Yu-Jie Lin
 @version   0.3.5
 @date      2013-05-08
 @copyright (c) 2012-2013 Yu-Jie Lin
 @copyright (c) 2009 Russ Painter
 @license   MIT License
 @homepage  https://github.com/jquery-textfill/jquery-textfill
 @example   http://jquery-textfill.github.io/jquery-textfill/index.html
*/
(function(e){e.fn.textfill=function(p){function l(){a.debug&&!("undefined"==typeof console||"undefined"==typeof console.debug)&&console.debug.apply(console,arguments)}function m(c,b,a,h,f,j){function d(b,a){var c=" / ";b>a?c=" > ":b==a&&(c=" = ");return c}l(c+"font: "+b.css("font-size")+", H: "+b.height()+d(b.height(),a)+a+", W: "+b.width()+d(b.width(),h)+h+", minFontPixels: "+f+", maxFontPixels: "+j)}function n(a,b,g,h,f,j,d,k){for(m(a+": ",b,f,j,d,k);d<k-1;){var e=Math.floor((d+k)/2);b.css("font-size",
e);if(g.call(b)<=h){if(d=e,g.call(b)==h)break}else k=e;m(a+": ",b,f,j,d,k)}b.css("font-size",k);g.call(b)<=h&&(d=k,m(a+"* ",b,f,j,d,k));return d}var a=e.extend({debug:!1,maxFontPixels:40,minFontPixels:4,innerTag:"span",widthOnly:!1,callback:null,complete:null,explicitWidth:null,explicitHeight:null},p);this.each(function(){var c=e(a.innerTag+":visible:first",this),b=a.explicitHeight||e(this).height(),g=a.explicitWidth||e(this).width(),h=c.css("font-size");l("Opts: ",a);l("Vars: maxHeight: "+b+", maxWidth: "+
g);var f=a.minFontPixels,j=0>=a.maxFontPixels?b:a.maxFontPixels,d=void 0;a.widthOnly||(d=n("H",c,e.fn.height,b,b,g,f,j));f=n("W",c,e.fn.width,g,b,g,f,j);a.widthOnly?c.css("font-size",f):c.css("font-size",Math.min(d,f));l("Final: "+c.css("font-size"));(c.width()>g||c.height()>b)&&c.css("font-size",h);a.callback&&a.callback(this)});a.complete&&a.complete(this);return this}})(window.jQuery);
