$("#login").click(function(){
var email=$("#email").val();
var password=$("#password").val();
var dataString="email="+email+"&password="+password+"&login=";
if($.trim(email).length>0 & $.trim(password).length>0)
{
   var senddata={"email":email, "password":password}; 
   
   $.ajax({
        type: "POST",
        url:"http://tk2-202-10820.vs.sakura.ne.jp/login.php",
        data: senddata,
        dataType:"json",
        crossDomain: true,
        cache: false,
        async:false
    }).then(
        function(data){
            
            if(data.length!=0)
            {
                 alert("login success");
                 $.mobile.changePage('Map.html'); // Redirecting to other page.
    	    }
        	else if(data.length==0)
	        {
	             alert("Login error");
                 $.mobile.changePage('Login.html'); // Redirecting to other page.
	         };
            
        },// function success close
        function()
        {
            alert("Login error");
            $.mobile.changePage('Login.html'); // Redirecting to other page.
        }// function error close
);// ajax close
}return false;
});
