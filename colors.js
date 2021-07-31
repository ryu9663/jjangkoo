
  var Body = {
    setPhoto : function(img){
      $('#myImage').css('src',img);

      // var target=document.querySelector('body')
      // target.style.color=color;
    },
    setBackColor : function(color){
      $('body').css('backgroundColor',color);

      // var target=document.querySelector('body')
      // target.style.backgroundColor=color;
    },
    setColor : function(color){
       // var alist=document.querySelectorAll('a');
       // var i=0;
       // while(i<alist.length)
       // {
       //   alist[i].style.color=color;
       //   i++;
       // }
      $('a').css('color',color);
    }
  };



  function changePhoto(self){
  var target=document.querySelector('#myImage').src;
  if(self.value==='.sen1'){
  Body.setPhoto('#img1');

  self.value='.sen2';
  }
  else{
  Body.setPhoto('#img2');
  self.value='.sen1';
    }
  }
