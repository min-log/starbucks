// 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      //var player;
      function onYouTubeIframeAPIReady() {
        //<div id="player"></div> 아이디 선택자 
		new YT.Player('player', {
          //height: '360',
          //width: '640',
          videoId: '_DrYKjOajqI', //최초 재생할 유튜브 영상 id
		  playerVars:{
			  autoplay: true,//자동 재생 유무
			  loop:true,//반복재생 유무
			  playlist:'_DrYKjOajqI' //반복 재생할 유튜브 영상의 id
		  },
		  //추가옵션
		  events:{
			  //동영상이 준비가 되면 함수 실행
			  onReady:function(event){ 
				event.target.mute() //음소거
			  }
		  }
          
        });
      }