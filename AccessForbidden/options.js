function save_options() {
  chrome.storage.local.set({
    'blacklist': document.getElementById('blacklist').value,
    'whitelist': document.getElementById('whitelist').value,
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
    'blacklist',
    'whitelist'
  ], function(items) {
    document.getElementById('blacklist').value = items['blacklist'];
    document.getElementById('whitelist').value = items['whitelist'];
  });
}

window.addEventListener('DOMContentLoaded', function(e) {
  restore_options();
  document.querySelector('#save').addEventListener('click', save_options);
}, false);
