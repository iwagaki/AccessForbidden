function save_options() {
  chrome.storage.local.set({
    'urls': document.getElementById('urls').value
  }, function() {
    var status = document.getElementById('status');
    status.innerHTML = 'Options saved.';
    setTimeout(function() {
      status.innerHTML = '';
    }, 750);
  });
}

function restore_options() {
  chrome.storage.local.get([
    'urls'
  ], function(items) {
    document.getElementById('urls').value = items['urls'];
  });
}

window.addEventListener('DOMContentLoaded', function(e) {
  restore_options();
  document.querySelector('#save').addEventListener('click', save_options);
}, false);
