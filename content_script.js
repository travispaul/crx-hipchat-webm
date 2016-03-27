(function webmify() {

    'use strict';

    setTimeout(function () {
        var
            selector = '.hc-chat-scrollbox .file-video-default-poster:not(.webmify)',
            spans = document.querySelectorAll(selector),
            batchSize = 5,
            video,
            src,
            ea;

        for (ea = 0; ea < spans.length && ea < batchSize; ea += 1) {
            spans[ea].classList.add('webmify');
            src = spans[ea].parentElement.nextSibling.children[0].href;
            if (src.split('.').pop() === 'webm') {
                video = document.createElement('video');
                video.src = src;
                video.autoplay = false;
                video.controls = true;
                spans[ea].parentNode.replaceChild(video, spans[ea]);
                delete spans[ea];
            }
        }

        webmify();

    }, 2500);

}());