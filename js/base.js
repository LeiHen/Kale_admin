// JavaScript Document

/**
* @name		:
* @author	:si
* @dependent:全局变量的命名函数
*  GLOBAL.namespace("A.BOOK");GLOBAL.A.BOOK.name="b";
*/
var GLOBAL={};
GLOBAL.namespace=function(str){
    var arr=str.split("."),o=GLOBAL;
    for(i=(arr[0]=="GLOBAL")?1:0;i<ar.length;i++){
        o[arr[i]] = o[arr[i]] || {};
        o = o[arr[i]];
    }
}
/* @end **/

/**
* @name		:get_previousSibling
* @author	:si
* @dependent:获得当前节点的上一个兄弟（除空节点）
*/
function getPreviousSibling(node) {
    var x=node.previousSibling;
    while (x.nodeType!=1){
        x=x.previousSibling;
    }
    return x;
}
/* @end **/

/**
* @name		:get_nextSibling
* @author	:si
* @dependent:获得当前节点的下一个兄弟（除空节点）
*/
function getNextSibling(node){
    var y=node.nextSibling;
    while (y.nodeType!=1){
        y=y.nextSibling;
    }
    return y;
}
/* @end **/

/**
* @name		:searchDefault(btnID为元素ID,scopeID为作用域ID)
* @author	:si
* @dependent:Enter绑定 作用域可为空 默认window
*/
function btnBindEnter(btnID,scopeID) {
    var button = document.getElementById(btnID);
    var scope = document.getElementById(scopeID);
    var temporary;

    function bindEnter(event){      
        if(event.keyCode == 13){
            console.log("ENTER");
            button.click();
            event.returnValue = false;
        }
    }

    temporary=scope?scope:window;
    temporary.onkeydown=function bindEnter(event){
        if(event.keyCode == 13){
            console.log("ENTER");
            button.click();
            event.returnValue = false;
        }
    };
}
/* @end **/


/**
* @author	:si
* @dependent:Google 分析代码;
*/
//(function(i, s, o, g, r, a, m) {
//    i['GoogleAnalyticsObject'] = r;
//    i[r] = i[r] || function() {
//        (i[r].q = i[r].q || []).push(arguments)
//    }, i[r].l = 1 * new Date();
//    a = s.createElement(o),
//    m = s.getElementsByTagName(o)[0];
//    a.async = 1;
//    a.src = g;
//    m.parentNode.insertBefore(a, m)
//})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
//
//ga('create', 'UA-46800861-1', 'liurisi.net');
//ga('send', 'pageview');
/* @end **/

/**
* @name		:consoleDebug
* @author	:si
* @dependent:调试函数
*/
function consoleDebug(x) {
    console.log(x);
}
/* @end **/

/**
* @name		:
* @author	:si
* @version	:
* @type		:基类
* @explain	:
* @relating	:
* @dependent:
*/

/* @end **/