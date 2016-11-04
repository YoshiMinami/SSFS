 function mystation() 
 {
     
     var fuelType=$("#fuelType").val();
     var litter=$("#litter").val();
     var unitFp=$("#unitFp").val();
     var totalCost=$("#totalCost").val();
     var odometer=$("#odometer").val();
     var carBrand=$("#carBrand").val();
     var dataString="&fuelType="+fuelType+"&litter="+litter+"&unitFp="+unitFp+"&totolCost="+totalCost+"&odometer="+odometer+"&carBrand="+carBrand+"&insert=";
 if($.trim(title).length>0 & $.trim(duration).length>0 & $.trim(price).length>0)
 {
 $.ajax({
    type: "POST",
	url:"http://tk2-202-10820.vs.sakura.ne.jp/insert_mystation.php",
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
 
 function myFuelCost() 
 {
     
 };
 