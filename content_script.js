function webmify() {
    setTimeout(function () {
    const spans = $$(option.video_file_css_selector);
    var video, src;
    for (let ea = 0; ea < spans.length && ea < option.batch_size; ea += 1) {
      spans[ea].classList.add('webmify');
      src = spans[ea].parentElement.nextSibling.children[0].href;
      if (src.split('.').pop() === 'webm') {
        video = document.createElement('video');
        video.src = src;
        video.autoplay = option.video_autoplay;
        video.controls = option.video_controls;
        video.loop = option.video_loop;
        video.muted = option.video_muted;
        video.volume = option.video_initial_volume;
        spans[ea].parentNode.replaceChild(video, spans[ea]);
        delete spans[ea];
      }
    }
    webmify();
  }, polling_frequency);
}

function updatePollingFrequency(battery) {
  polling_frequency = battery.charging ?
    option.polling_frequency : option.polling_frequency_on_battery;
}

var option, polling_frequency;
chrome.storage.sync.get(CONFIG_DEFAULTS, function (config) {
  option = config;
  polling_frequency = option.polling_frequency;
  navigator.getBattery().then(function(battery) {
    updatePollingFrequency(battery);
    battery.addEventListener('chargingchange', function() {
      updatePollingFrequency(battery);
    });
  });
  webmify();
});