function trim(str) {
    return str.replace(/^\s+|\s+$/g, "");
}

chrome.storage.local.get([
  'blacklist',
  'whitelist'
], function(items) {
    var arrayOfBlackList = items['blacklist'].split('\n');
    var arrayOfWhiteList = items['whitelist'].split('\n');

    for (var i = 0; i < arrayOfWhiteList.length; i++) {
        var regex = trim(arrayOfWhiteList[i]);
        if (regex != '') {
            var re = new RegExp(regex);
            if (re.test(document.URL)) {
                return;
            }
        }
    }

    for (var i = 0; i < arrayOfBlackList.length; i++) {
        var regex = trim(arrayOfBlackList[i]);
        if (regex != '') {
            var re = new RegExp(regex);
            if (re.test(document.URL)) {
                window.stop();
                window.location = 'about:blank';
                return;
            }
        }
    }
});
