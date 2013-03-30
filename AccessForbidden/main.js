function trim(str) {
    return str.replace(/^\s+|\s+$/g, "");
}

chrome.storage.local.get([
  'urls'
], function(items) {
    var arrayOfLines = items['urls'].split('\n');
    for (var i = 0; i < arrayOfLines.length; i++) {
        var regex = trim(arrayOfLines[i]);
        if (regex != '') {
            var re = new RegExp(regex);
            if(re.test(document.URL)) {
                window.stop();
                break;
            }
        }
    }
});
