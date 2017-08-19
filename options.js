function createInput($parent, key, value) {
  const
    $div = document.createElement('div'),
    $label = document.createElement('label'),
    $span = document.createElement('span'),
    $input = document.createElement('input'),
    input = {
      number: 'number',
      boolean: 'checkbox',
      string: 'text'
    };
  $input.id = key;
  $input.placeholder = CONFIG_DEFAULTS[key];
  $input.value = value;
  $input.type = input[typeof CONFIG_DEFAULTS[key]];
  if ($input.type === 'checkbox' && value) {
    $input.checked = true;
  }
  $span.innerText = key.replace(/_/g, ' ') + ': ';
  $label.for = key;
  $label.title = CONFIG_DESC[key] + "\n" +
    '(default: ' + CONFIG_DEFAULTS[key] + ')';
  $label.appendChild($span);
  $label.appendChild($input);
  $div.appendChild($label);
  $parent.appendChild($div);
}

function restore() {
  const $parent = $('#options');
  chrome.storage.sync.get(CONFIG_DEFAULTS, function(items) {
    Object.keys(items).forEach(function(key, index) {
      createInput($parent, key, items[key]);
    });
  });
}

function save() {
  const options = {};
  $save.disabled = true;
  $$('#options input').forEach(function (field) {
    var value;
    switch(field.type) {
      case 'number':
        value = field.valueAsNumber
        break;
      case 'checkbox':
        value = field.checked;
        break;
      default:
        value = field.value;
    }
    options[field.id] = value;
  });
  console.log(options);
  chrome.storage.sync.set(options, function() {
    var status = $('#status');
    status.innerHTML = 'Options saved... &nbsp;';
    setTimeout(function() {
      status.innerHTML = '';
      $save.disabled = false;
    }, 2000);
  });
}

var $save;
document.addEventListener('DOMContentLoaded', function () {
   $save = $('#save');
   $save.addEventListener('click', save);
   restore();
});
