const e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.on("play",(function(){console.log("played the video!")})),t.getVideoTitle().then((function(e){console.log("title:",e)})),t.getCurrentTime().then((function(e){})).catch((function(e){})),t.getCurrentTime().then((function(e){localStorage.setItem(this.seconds)})).catch((function(e){}));
//# sourceMappingURL=02-video.e5d5d3cb.js.map
