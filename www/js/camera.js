function snapPicture () {
        navigator.camera.getPicture (onSuccess, onFail, 
            { quality: 75,destinationType:Camera.DestinationType.DATA_URL,
              sourceType: Camera.PictureSourceType.CAMERA });


        function onSuccess (imageURI) 
        {
             $('#camera_pic')
                   .css('display', 'block')
                   .attr('src', 'data:image/jpeg;base64,' + imageURI);
                   alert(imageURI);
                   
        　　　　var image = "data:image/png;base64" + imageURI; // to create a image read the previous example
//
//                $.ajax({
//                       url:"http://tk2-202-10820.vs.sakura.ne.jp/insert_image.php",
//                           // send the base64 post parameter
//                       data:{ base64: image  },
//                          // important POST method !
//                             type:"post",
//                           complete:function(){
//                               console.log("Ready");
//                            }
//                });
       };

      function onFail (message) {
          alert('An error Occured: ' + message);
      };
};
