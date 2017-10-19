$(document).ready(function(){
    $('.language-list .html5lightbox').on('click',function(e){
      e.preventDefault();
      switchVideo( $(this) );
    });

    $('.video-auto-link').on('click',function (e) {
      e.preventDefault();
      var videosrc = $(this).data('videosrc');
      if(typeof videosrc!='undefined' && videosrc != null && videosrc != ''){

        var videotitle = '';
        if(typeof videosrc!='undefined' && videosrc != null && videosrc != ''){
          videotitle = $(this).data('videotitle');
        }
        if (html5Lightbox)
            html5Lightbox.showLightbox(4, videosrc, videotitle);
      }
        //createCookie('video-auto-load',$(this).attr('href')+'|'+$(this).data('videosrc')+'|'+$(this).data('videotitle'),7);
    });
});

// jQuery("document").ready(function(){
//   cookie=readCookie('video-auto-load');
//   console.log(cookie);
//   if(cookie!=null && cookie!=''){
//     cookielst = cookie.split("|");
//     if (window.location.href.indexOf(cookielst[0]) >= 0){
//               if (html5Lightbox)
//                   html5Lightbox.showLightbox(4, cookielst[1]!=null?cookielst[1]:'', cookielst[2]!=null?cookielst[2]:'');
//           eraseCookie('video-auto-load');
//     }
//   }
// });
function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');

    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}

function switchVideo($this){
  $('.language-list .html5lightbox').removeClass("active");
  $this.addClass("active");
  $('.thumbnail .play-icon')
          .attr('href', $this.attr("href"))
          .attr('data-group', $this.data("group"))
          .attr('data-thumbnail', $this.data("thumbnail"));
}
