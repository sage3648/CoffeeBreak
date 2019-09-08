document.addEventListener('DOMContentLoaded', function () {
    
    document.getElementById('save').addEventListener('click', function(){
        var interval = document.getElementById('interval').value;
        chrome.storage.sync.set({interval:interval},function(){
            window.close();
            chrome.tabs.query({active:true, currentWindow:true},function(tab){
                tabID = tab[0].id;
                chrome.tabs.remove(tabID);
            });
        });
    });
});
