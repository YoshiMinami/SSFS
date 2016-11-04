 function fpreport()
 {
     var userId = 1; // Need LocalStorage.userId
     var stationId=$("#stationId").val();
     var fp91User=$("#fp91User").val();
     var fp98User=$("#fp98User").val();
     var fpDieselUser=$("#fpDieselUser").val();
     var updateDate="";
     
     var dataString="&userId="+userId+"&stationId="+stationId+"&fp91User="+fp91User+"&fp98User="+fp98User+"&fpDieselUser="+fpDieselUser+"&updateDate="+updateDate+"&insert=";
 if($.trim(stationId).length>0)
 {
 $.ajax({
    type: "POST",
	url:"http://tk2-202-10820.vs.sakura.ne.jp/insert_fpreport.php",
	data: dataString,
    dataType:'text',
	crossDomain: true,
	cache: false,
    success: function(data){ 
        
            alert("You get 10 pt");
 
//　
        	$('#insert').val("Sucess"); 
//            $.mobile.changePage('Map.html'); // Redirecting to other page.
	 }
 });
 }return false;
 };