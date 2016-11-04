function initMap(){
   
   var mcount = 0;
  
//   var height =$( window ).height();
//   var width =$( window ).width();
//   $('map_canvas').css({"hight":height});
//   $('map_canvas').css({"width":width});
// 
    var id = navigator.geolocation.watchPosition(success, error, options);
    var markerData1 = "";
   
            var markerData = [ 
    {
        stationId:1,
        name:'City',
        companyName: 'Caltex',
        lat: -36.8484,
        lng: 174.7753,
        icon: './images/Caltex_logo.png',
        fp91Db:170.1,
        fp98Db:178.1,
        fpDieselDb:99.1,
        fp91User:171.2,
        fp98User:178.3,
        fpDiesel1User:100.1
        
    }, {
        stationId:2,
        name:'City',
        companyName: 'BP',
        lat: -36.8500,
        lng: 174.761,
        icon: './images/BP_logo.png',
        fp91Db:170.3,
        fp98Db:178.1,
        fpDieselDb:99.1,
        fp91User:171.5,
        fp98User:178.3,
        fpDiesel1User:100.1
         
    }, {
        stationId:3,
        name:'City',
        companyName: 'ZEnergy',
        lat: -36.8525,
        lng: 174.7723,
        icon: './images/ZEnergy_logo.png',
        fp91Db:171.3,
        fp98Db:178.1,
        fpDieselDb:99.1,
        fp91User:172.1,
        fp98User:178.3,
        fpDiesel1User:100.1
    }, {
        stationId:4,
        name:'City',
        companyName: 'Gull',
        lat: -36.8510,
        lng: 174.7543,
        icon: './images/Gull_logo.png',
        fp91Db:171.5,
        fp98Db:178.1,
        fpDieselDb:99.1,
        fp91User:172.8,
        fp98User:178.3,
        fpDiesel1User:100.1
    }, {
        stationId:5,
        name:'City',
        companyName: 'Mobil',
        lat: -36.8630,
        lng: 174.7671,
        icon: './images/Mobil_logo.png',
        fp91Db:171.6,
        fp98Db:178.1,
        fpDieselDb:99.1,
        fp91User:172.8,
        fp98User:178.3,
        fpDiesel1User:100.1
    }
];

    function success(pos) {
        
        var marker = [];
        var infoWindow = [];
        var fuelType="fp91Db";

        latitude = pos.coords.latitude;
        longitude = pos.coords.longitude;
 
 
        var mapDiv = document.getElementById('map_canvas');
    
   
//        mapDiv.innerHTML = 'Longtude: ' + longitude     + '<br />' +
//                            'latitude: ' + latitude    + '<br />' +
//                            '<hr />' + mapDiv.innerHTML;
//     
//        
             var currentPosition = new google.maps.LatLng(latitude, longitude); 
             var mapCenter = currentPosition;

// serching condition

//       var fp =$('[name=select-1]').val();
//       var fc =$('[name=select-2]').val();
//    
//       if (fp==0 && fc==10 ){
//        var fuelType = "fp91Db"
//        var senddata={"aLat":latitude, "aLng":longitude, "fuelType":fuelType};
//        
//        $.getJSON('http://tk2-202-10820.vs.sakura.ne.jp/json_search_fp.php',senddata,
//                    function(result){                  
//                            makerData1 = result;
//                    });
//        
//       }
//    
             
//            var marker1 = search_fp(latitude, longitude, fuelType);
           
          
             
             var mapOptions = {
                zoom:13,                
                center:mapCenter,       
                  mapTypeId:google.maps.MapTypeId.ROADMAP,
                  scaleControl:true      
            };
            
           
        // 
          var map = new google.maps.Map(mapDiv,mapOptions);
        // 
        var marker0 = new google.maps.Marker({
            position:mapCenter,
            map:map,
            title:"Current Position"}
        );
//        map.setCenter(mapCenter);
         
    
       
             for (var i = 0; i < markerData.length; i++) {
                    markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']}); // 緯度経度のデータ作成
                    marker[i] = new google.maps.Marker({ 
                        position: markerLatLng, 
                        map: map  
                    });
 
                    infoWindow[i] = new google.maps.InfoWindow({ // 
        					content:"<div id=\'infoWindow\'><span>"+markerData[i]['name']+"</span><br>" +
              　　　　　　　　　　   　　 "<input type=\"submit\" id=\"mystation\" value=\"My station\"></div>"
                    });
                    
                
                    var urlImage = "./images/"+markerData[i]['companyName']+"_logo.png";
                    marker[i].setOptions({
                                 icon: {
                                           url: urlImage
                                 }
                    });
//                     markerEvent(i); 
            }
            
        // Set initial position of marker     
         markerEvent(mcount);
         
        // Next
    　　$('#markerNext').on('click',function(e){
       
		var e = e || window.event ;
		e.preventDefault() ;
		e.stopPropagation() ;
        
        if(mcount<markerData.length-1){
        infoWindow[mcount].close();
        mcount++;
       
        markerEvent(mcount);
        } else {
            
        };         
       });
    
       // Back
    　　$('#markerBack').on('click',function(e){
       
    	var e = e || window.event ;
		e.preventDefault() ;
		e.stopPropagation() ;
       
       if(mcount>0){
        infoWindow[mcount].close();
        mcount--;
     
        markerEvent(mcount);
       } else {
         
       };
	             
       });
       
       
       // Navigation
       $('#navigation').click(function(){
           
         var targetLat =markerData[mcount]['lat'];
         var targetLng =markerData[mcount]['lng'];
          
        　var current = new google.maps.LatLng(latitude, longitude);
          var target = new google.maps.LatLng(targetLat, targetLng);
          
          var directionsService = new google.maps.DirectionsService();
          var directionsDisplay = new google.maps.DirectionsRenderer();    
          
          directionsDisplay.setMap(map);
          directionsService.route({
             origin : current,
             destination:target,
             travelMode: google.maps.DirectionsTravelMode.DRIVING
        },function(response, status){
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }else{
                alert("fail to search route");
        }
    });

})
         
       
       
        function markerEvent(i) 
        {    
             var latlng = marker[i].position;
    	     map.panTo( latlng ) ;
            
            infoWindow[i].open(map, marker[i]); 
            $('#mystation').on('click', function(){
                
                localStorage.staionId=markerData[i]['stationId'];
                $.mobile.changePage('Myfavorite.html');
            });
            $('#fpDb').html('$'+markerData[i]['fp91Db']+'<br>/100L');
            $('#fpUser').html('$'+markerData[i]['fp91User']+'<br>/100L');
        }           
    
  
    };

    function error(err) {
        console.warn('ERROR(' + err.code + '): ' + err.message);
	};

   
	var options = {
		enableHighAccuracy: false,
		timeout: 5000,
		maximumAge: 10000000
	};
    
   



function search_fp(latitude, longitude, fuelType){
    
    
    var Lat = latitude;;
    var Lng = longitude;
    var fuelType = "fp91Db";
    
    var senddata={"aLat":Lat, "aLng":Lng, "fuelType":fuelType};
   

//        $.ajax({
//                url:'http://tk2-202-10820.vs.sakura.ne.jp/json_search_fp.php',
//                type: 'POST',
//                dataType: 'text',
//                async: false,
//                data: senddata,
//                crossDomain: true,
//                success: function(result){
//                   alert(result);
//                     for (var i =0; i<result.length; i++) 
//                {
//                    alert(result[i].stationId);
//                }
//                
//                  return result;
//                
//                },
//                     error:function(){alert("Error");}
//        });
//                    $.getJSON('http://tk2-202-10820.vs.sakura.ne.jp/json_search_fp.php',senddata,
//                        function(result){
//                        $.each(result, function(i, field){
//                            var len=field.len;
//                            var fp=field.fp91Db;
//                           
//                        });
//                    });

    };
    
  
    
};


