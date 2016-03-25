(function () {

    'use strict';

    function replaceVids() {
    	setTimeout(function () {
	    	var
	    		spans = document.querySelectorAll('.file-video-default-poster:not(.webmify)'),
	    		video;

	    	for (var ea in spans) {
	    		spans[ea].classList.add('webmify');
	    		video = document.createElement('video');
	    		video.src = spans[ea].parentElement.nextSibling.children[0].href;
	    		video.autoplay = false;
	    		video.controls = true;
	    		spans[ea].parentNode.replaceChild(video, spans[ea]);
	    	}
    	}, 1000);
    }

	replaceVids();

}());