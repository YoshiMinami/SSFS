 function fstation()
 {
     
     var stationId=$("#stationId").val();
     var stationName=$("#StationName").val();
     var location=$("#location").val();
     var fp91Db=$("#fp91Db").val();
     var fp98Db=$("#fp98Db").val();
     var fpDieselDb=$("#fpDieselDb").val();
     var fp91User=$("#fp91User").val();
     var fp98User=$("#fp98User").val();
     var fpDieselUser=$("#fpDieselUser").val();
     var service1=$("#service1").val();
     var service2=$("#service2").val();
     var service3=$("#service3").val();
     var like=$("#like").val();
     
     var dataString="&Fistname="+Fastname+"&Lastname="+Lastname+"&Contactaddress="+Contactaddress+"&insert=";
 if($.trim(title).length>0 & $.trim(duration).length>0 & $.trim(price).length>0)
 {
 $.ajax({
    type: "POST",
	url:"http://tk2-202-10820.vs.sakura.ne.jp/insert_mycar.php",
	data: dataString,
	crossDomain: true,
	cache: false,
	beforeSend: function(){ $("#insert").val('Connecting...');},
    success: function(data){
	if(data=="success")
	{
	alert("inserted");
	$("#insert").val('submit');
	}
	else if(data=="error")
	{
	alert("error");
	}
	}
 });
 }return false;
 };