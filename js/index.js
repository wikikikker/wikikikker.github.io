window.onload = function(){
      setThumbSizes();

      var page_height = document.documentElement.scrollHeight;
      var view_height = window.innerHeight;

      var footer = document.getElementById('footer');
      footer.style.bottom = (-page_height + view_height) + 'px';

      var newsData = document.getElementsByClassName('fraction');
      for(i = 0;i<newsData.length;i++){
        newsData[i].setAttribute('custom-color', newsClrHistory[i]);
        newsData[i].addEventListener('mouseover',function(){
          var title = this.getElementsByClassName('news-title')[0];
          var info = this.getElementsByClassName('news-info')[0];
          info.style.marginTop = "0px";
          this.style.backgroundColor = "rgb(255,50,50)";
        });

        newsData[i].addEventListener('mouseout',function(){
          var title = this.getElementsByClassName('news-title')[0];
          var info = this.getElementsByClassName('news-info')[0];
          info.style.marginTop = "200px";
          this.style.backgroundColor = this.getAttribute('custom-color');
        });
      }

      window.addEventListener('scroll', function(){
        var nav_img = document.getElementById('nav-logo');
        var nav = document.getElementById('navbar');
        if(scrollY >= 200){
          nav_img.style.visibility = 'visible';
          nav_img.style.opacity = 1;
          nav.style.opacity = 0.98;
        }else{
          nav_img.style.visibility = 'hidden';
          nav_img.style.opacity = 0;
          nav.style.opacity = 1;
        }
      });

      window.addEventListener('resize', function(){
        view_height = window.innerHeight;
        footer.style.bottom = (-page_height + view_height) + 'px';
      });
}

function setThumbSizes(){
  var thumbnails = document.getElementsByClassName('thumb-img');
  for(var i = 0;i < thumbnails.length; i++){
    var oH = thumbnails[i].height;
    var oW = thumbnails[i].width;
    thumbnails[i].className = 'thumb-img col-xl-3 img img-responsive';
    var nW = thumbnails[i].width;
    var scale = oW / nW;
    thumbnails[i].height = oH / scale;
  }
}
