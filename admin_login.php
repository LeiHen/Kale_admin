<?php
    string strName = System.Web.HttpUtility.UrlDecode(Request["userInput"]);
    string strPass = System.Web.HttpUtility.UrlDecode(Request["passwordInput"]);
    bool submitBtn = false;
    if (strName == "kale" && strPass == "123456"){
        submitBtn = true;
    }
   // Response.Write(submitBtn);
 ?>