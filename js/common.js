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
* @name		:toTop
* @author	:si
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
* @relating	:
* @dependent:
*/

/* @end **/