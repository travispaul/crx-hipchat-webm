const CONFIG_DEFAULTS = {
  polling_frequency: 2500,
  polling_frequency_on_battery: 5000,
  batch_size: 5,
  video_file_css_selector: '.hc-chat-scrollbox .file-video-default-poster:not(.webmify)',
  video_autoplay: false,
  video_controls: true,
  video_loop: false,
  video_muted: false,
  video_initial_volume: 1
};

const CONFIG_DESC = {
  polling_frequency: 'How frequently (in milliseconds) to search the DOM for new WebM files.',
  polling_frequency_on_battery: 'How frequently (in milliseconds) to search the DOM for new WebM files when running on battery.',
  batch_size: 'How many videos to embed per interval.',
  video_file_css_selector: 'CSS selector used to find WebM files which need to be embedded in the page.',
  video_autoplay: 'Auomatically play video after it has been embedded.',
  video_controls: 'Show video controls',
  video_loop: 'When enabled will continously loop the video.',
  video_muted: 'Start the video muted.',
  video_initial_voluem: 'Value from 0 to 1 for the initial volume level.'
};

const 
  $ = document.querySelector.bind(document),
  $$ = document.querySelectorAll.bind(document);