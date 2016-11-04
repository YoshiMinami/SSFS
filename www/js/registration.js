function registration()
{
      
     var userName=$("#userName").val();
     var firstName=$("#firstName").val();
     var lastName=$("#lastName").val()
     var email=$("#email").val();
     var contactNumber=$("#contactNumber").val();
     var city=$("#city").val();
     var suburb=$("#suburb").val();
     var password=$("#password").val();
     var dataEmail ="&email="+email+"&select=";
     var dataString ="&userName="+userName+"&firstName="+firstName+"&lastName="+lastName+"&email="+email+"&contactNumber="+contactNumber+"&city="+city+"&suburb="+suburb+"&password="+password+"&insert=";
  
  if($.trim(userName).length>0 & $.trim(email).length>0 & $.trim(password).length>0)
    {
        $.ajax({
            type: "POST",
            url:"http://tk2-202-10820.vs.sakura.ne.jp/signup.php",
            data: dataEmail,
            crossDomain: true,
        	cache: false,
            success: function(result){
            　   alert("Success");
                 if(result=="error")
               {
        	　　alert("You alreay has account! you can login with us");
                $.mobile.changePage('Login.html'); // Redirecting to other page.
               }else if(result=='success')
               {
	             $.ajax({
                        type: "POST",
                        url:"http://tk2-202-10820.vs.sakura.ne.jp/insert_User.php",
                        data: dataString,
                        crossDomain: true,
                        cache: false,
                        success: function(result){
        	            if(result.toString()=="success")
                    	{
        	              alert("success");
                          $.mobile.changePage('Map.html'); // Redirecting to other page.
    	                 }
                        else if(result.toString()=="error")
	                     {
	                      alert("Success");
	                     }
	                    }// function success close
                    });// ajax close
	         };
            
	         },// function success close
             
            
        });// ajax close
        
 
     }return false; //if sentense close
  };//click.close
 

 