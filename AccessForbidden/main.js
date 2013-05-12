function trim(str) {
    return str.replace(/^\s+|\s+$/g, "");
}

chrome.storage.local.get([
  'urls'
], function(items) {
    var arrayOfLines = items['urls'].split('\n');
    for (var i = 0; i < arrayOfLines.length; i++) {
        var regex = trim(arrayOfLines[i]);
        var isWhiteList = false;
        if (regex != '') {
            if (regex.substring(0, 1) == '!') {
                regex = regex.substring(1, regex.length);
                isWhiteList = true;
            }
            var re = new RegExp(regex);

            if (re.test(document.URL)) {
                if (isWhiteList) {
                    break;
                } else { 
                    window.stop();
                    break;
                }
            }
        }
    }
});
