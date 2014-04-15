// JavaScript Document

/**
* @name		:addListClassW
* @author	:si
* @relating	:jQuery
* @dependent:添加列表样式
*/
function  addListClassW(){
    for(y=0;y<$('.list li').length;y++){
        $('.list li:eq('+y+') samp:eq(0)').addClass('note');
        $('.list li:eq('+y+') samp:eq(1)').addClass('user');
        $('.list li:eq('+y+') samp:eq(2)').addClass('psd');
        $('.list li:eq('+y+') samp:eq(3)').addClass('ip');
        $('.list li:eq('+y+') samp:eq(4)').addClass('port');
        $('.list li:eq('+y+') samp:eq(5)').addClass('expiration_time');
        $('.list li:eq('+y+') samp:eq(6)').addClass('backups');
        $('.list li:eq('+y+') samp:eq(7)').addClass('operation');
    }
}
/* @end **/

/**
* @name		:
* @author	:si
* @relating	:jQuery
* @dependent:
*/

(function(){
    $(".list li:even").addClass("li_nthchild_odd");
    $(".list li:first").addClass("first_li");
    $(".list li:last").addClass("last_li");
    
    
    addListClassW();
    
    //隐藏最后一个samp
    for(i=0; i<$('.list li:not(:first)').length;i++) {
        $('.list li:not(:first):eq('+i+') samp:last').addClass("last_samp");
    };

    //浮动效果
    $('.list li:not(:first)').hover(
        function(){
            $(this).addClass('li_hover');
            $(this).children().last().removeClass("last_samp");
        },
        function () {
            $(this).removeClass('li_hover');
            $(this).children().last().addClass("last_samp");
        }
    );
        
    
    
})();
/* @end **/





/**
* @name		:
* @author	:si
* @version	:
* @type		:基类
* @explain	:
* @relating	:jQuery
* @dependent:
*/


/* @end **/