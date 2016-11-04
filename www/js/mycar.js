 function myCarInfo() 
 {
     var userId = 1;
     var fuelType=$("#fuelType").val();
     var litter=$("#litter").val();
     var unitFp=$("#unitFp").val();
     var totalCost=litter*unitFp;
     var odometer=$("#odometer").val();
     var carBrand=$("#carBrand").val();
     var dataString="&userId="+userId+"&fuelType="+fuelType+"&litter="+litter+"&unitFp="+unitFp+"&totalCost="+totalCost+"&odometer="+odometer+"&carBrand="+carBrand+"&insert=";

if($.trim(fuelType).length>0 & $.trim(litter).length>0 & $.trim(unitFp).length>0)
 {
 $.ajax({
    type: "POST",
	url:"http://tk2-202-10820.vs.sakura.ne.jp/insert_mycar.php",
	data: dataString,
	crossDomain: true,
	cache: false,
    success: function(data){
    	alert("Update Success");
	   // $.mobile.changePage('Map.html'); // Redirecting to other page.
	}
 });
 }return false;
 };
 
 function myFuelCost() 
 {
     
 };
 