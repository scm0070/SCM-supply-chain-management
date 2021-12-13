"use strict";
function GetHeightCss() {
    var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var css = "";
    var $window = $(window);
    var windowsize = $window.width();
    if (windowsize > 767) {
        var pad = 0;
    } else {
        var pad = 0;
    }
    var availableheight = h - pad;
    css = '.height-one{ height: ' + availableheight + 'px;}';
    var cssEle = document.getElementById('heightStyle');
    if (cssEle == null) {
        var head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');
        style.type = 'text/css';
        style.setAttribute("id", "heightStyle");
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        head.appendChild(style);
    } else {
        cssEle.innerHTML = css;
    }
}
GetHeightCss();
$(window).on("resize", function() {
    GetHeightCss();
	equalheight('.equal-height > div');
});