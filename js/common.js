// JavaScript Document

/**
* @name		:inputEmpty
* @author	:si
* @dependent:登陆清空
*/
function inputEmpty(ID,delVal){
    var inputID=document.getElementById(ID);
    //获得焦点
    inputID.onfocus=function(){
        if (inputID.value==delVal) {
            inputID.value="";
        }
        $(this).removeClass("inputError").addClass("inputEdit");
    };
    //失去焦点
    inputID.onblur=function(){
        if (inputID.value=="") {
            inputID.value=delVal;
        }
        $(this).removeClass("inputEdit");
//            $(this).removeClass("inputEdit").addClass("inputError");
    };
}
/* @end **/

/**
* @name		:passwordHint
* @author	:si
* @dependent:密码框提示
*/
function passwordHint(){
    var passwordInputID=document.getElementById("passwordInput");
    var passwordTextID=document.getElementById("passwordText");
    
    //passwordTextID获得焦点
    passwordTextID.onfocus=function(){
        $(this).hide();
        $(passwordInputID).show();
        $(passwordInputID).focus();
    };
    
    passwordInputID.onfocus=function(){
        $(this).removeClass("inputError").addClass("inputEdit");
    };
    
    //passwordInputID失去焦点
    passwordInputID.onblur=function(){
        if (this.value==""){
            $(this).hide(); 
            $(passwordTextID).show();  
            $(passwordTextID).val('密码');
        }
        $(this).removeClass("inputEdit");
    };
}
/* @end **/

/**
* @name		:inputCheck
* @author	:si
* @dependent:登陆验证
*/
function inputCheck(ID,delValText){
    var inputID=document.getElementById(ID);
//    if(inputID.value!=""&&inputID.value==delValText){
//        
//    }
    var userInputID=document.getElementById("userInput");
    var passwordInputID=document.getElementById("passwordInput");
    var passwordTextID=document.getElementById("passwordText");
    
//    passwordTextID.onblur=function(){
//        this.className="none";
//        passwordInputID.className="block";
//    }

}
/* @end **/

/**
* @name		:loginAjas
* @author	:si
* @dependent:Ajas 验证
*/
function loginAjax(){ 
    $.ajax({
        url:"admin.html",
        dataType: "html",
        //返回页面内容
        success: function(HTML) { 
            //“登录”按钮单击事件
            $("#submitBtn").click(function() {
                //获取用户名称
                var strTxtName = encodeURI($("#userInput").val());
                //获取输入密码
                var strTxtPass = encodeURI($("#passwordInput").val());
                //开始发送数据
                $.ajax({ 
                    //请求登录处理页
                    url: "admin_login.php",
                    //登录处理页
                    dataType: "html",
                    //传送请求数据
                    data: { userInput: strTxtName, passwordInput: strTxtPass },
                    //登录成功后返回的数据
                    success: function(strValue) { 
                        //根据返回值进行状态显示
                        if (strValue == "true") {                          
                            consoleDebug("登录成功");
                        }else{
                            consoleDebug("登录失败");
                            $("#loginHint").addClass("visible");
                        }
                    }
                })
            })
        }
    })

}
/* @end **/

/**
* @name		:listEdit
* @author	:si
* @relating	:jQuery
* @dependent:列表编辑
*/
function listEdit(el){
    var $pAll=$(el).parent().prevAll();
    var $allInput = $pAll.children("input:gt(0)");
    var $date = $pAll.children("input:eq(1)");
//    console.log($allInput);
    
    $allInput.prop("readonly", false);
    $allInput.addClass("edit_input");
    $(el).addClass('none');    
    $(el).next().removeClass('none');
    
    //调用 日历
//    $date.datepicker({
//        inline: true,
//        dateFormat: "yy-mm-dd",

//        yearRange:'2014:2020',
//        changeMonth:true,
//        changeYear:true,
        
//        showButtonPanel:true,
//        showMonthAfterYear: true,
        

//		showAnim:'fadeIn',
        
//		showOptions: {},
//		defaultDate: null,
//		appendText: "", // Display text following the input box, e.g. showing the format
//		buttonText: "...", // Text for trigger button
//		buttonImage: "", // URL for trigger button image
//		buttonImageOnly: false, // True if the image appears alone, false if it appears on a button
//		hideIfNoPrevNext: false, // True to hide next/previous month links
//			// if not applicable, false to just disable them
//		navigationAsDateFormat: false, // True if date formatting applied to prev/today/next links
//		gotoCurrent: false, // True if today link goes back to current selection instead
//		changeMonth: false, // True if month can be selected directly, false if only prev/next
//		changeYear: false, // True if year can be selected directly, false if only prev/next
//		yearRange: "c-10:c+10", // Range of years to display in drop-down,
//			// either relative to today's year (-nn:+nn), relative to currently displayed year
//			// (c-nn:c+nn), absolute (nnnn:nnnn), or a combination of the above (nnnn:-n)
//		showOtherMonths: false, // True to show dates in other months, false to leave blank
//		selectOtherMonths: false, // True to allow selection of dates in other months, false for unselectable
//		showWeek: false, // True to show week of the year, false to not show it
//		calculateWeek: this.iso8601Week, // How to calculate the week of the year,
//			// takes a Date and returns the number of the week for it
//		shortYearCutoff: "+10", // Short year values < this are in the current century,
//			// > this are in the previous century,
//			// string value starting with "+" for current year + value
//		minDate: null, // The earliest selectable date, or null for no limit
//		maxDate: null, // The latest selectable date, or null for no limit
//		duration: "fast", // Duration of display/closure
//		beforeShowDay: null, // Function that takes a date and returns an array with
//			// [0] = true if selectable, false if not, [1] = custom CSS class name(s) or "",
//			// [2] = cell title (optional), e.g. $.datepicker.noWeekends
//		beforeShow: null, // Function that takes an input field and
//			// returns a set of custom settings for the date picker
//		onSelect: null, // Define a callback function when a date is selected
//		onChangeMonthYear: null, // Define a callback function when the month or year is changed
//		onClose: null, // Define a callback function when the datepicker is closed
//		numberOfMonths: 1, // Number of months to show at a time
//		showCurrentAtPos: 0, // The position in multipe months at which to show the current month (starting at 0)
//		stepMonths: 1, // Number of months to step back/forward
//		stepBigMonths: 12, // Number of months to step back/forward for the big links
//		altField: "", // Selector for an alternate field to store selected dates into
//		altFormat: "", 
//		constrainInput: true, 
//		showButtonPanel: false, 
//		autoSize: false,
//		disabled: false
        
        
//    });
    
    $date.datetimepicker({
        language: 'zh-CN',
        format: 'yyyy-mm-dd',
        startDate:'2014-01-01',
        endDate:'2020-12-31',
        
        autoclose:true,
        startView: 2,
        minView:2,
        
        todayBtn:  1,
//        autoclose: 1,
        todayHighlight: 1,
        keyboardNavigation:true,
        
        forceParse: 0,
        showMeridian: 1
        
    });
    
//    console.log($allInput);
    
}
/* @end **/

/**
* @name		:listSave
* @author	:si
* @relating	:jQuery
* @dependent:列表保存
*/
function listSave(el){
    var $pAll=$(el).parent().prevAll();
    var $allInput =$pAll.children("input:gt(0)");
    
    $allInput.prop("readonly", true);
    $allInput.removeClass("edit_input"); 
    $(el).addClass('none');    
    $(el).prev().removeClass('none');

    console.log($allInput);
}
/* @end **/


/**
* @name		:listDel
* @author	:si
* @relating	:jQuery
* @dependent:列表删除
*/
function listDel(el){
    var $pAll=$(el).parent().prevAll();
    var $allInput =$pAll.children("input");
    
    $allInput.prop("readonly", true);
    $allInput.removeClass("edit_input"); 
    $(el).addClass('none');    
    $(el).prev().removeClass('none');

//    console.log(el);
}
/* @end **/

/**
* @name		:listDel
* @author	:si
* @relating	:jQuery
* @dependent:列表检验格式
*/
function listDel(el){
    var $pAll=$(el).parent().prevAll();
    var $allInput =$pAll.children("input");
    
    $allInput.prop("readonly", true);
    $allInput.removeClass("edit_input"); 
    $(el).addClass('none');    
    $(el).prev().removeClass('none');

//    console.log(el);
}
/* @end **/



/**
* @name		:toTop
* @author	:si
* @relating	:jQuery
* @dependent:返回顶部
*/
function toTop(){   
    //首先将#back-to-top隐藏 
    $("#back-to-top").hide();
    
    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $("#back-to-top").fadeIn(600);
            $("#goReturn").stop().animate({bottom:80},800);     
        } else {         
            $("#back-to-top").fadeOut(600);
            $("#goReturn").stop().animate({bottom:25},800);
        }
    });
   
    //当点击跳转链接后，回到页面顶部位置
    $("#back-to-top").click(function () {
        $("body,html").animate({
            scrollTop: 0
        }, 400);
        return false;
    });
    
};
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