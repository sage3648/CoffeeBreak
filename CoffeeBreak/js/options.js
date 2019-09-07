
document.addEventListener('DOMContentLoaded', function () {
    
    document.getElementById('save').addEventListener('click', function(){
        var interval = document.getElementById('interval').value;
        document.getElementById('hi').innerHTML=interval;
        chrome.storage.sync.set({'interval':interval},function(){
            window.close();
            chrome.tabs.query({active:true, currentWindow:true},function(tab){
                
            });
            // chrome.tabs.getCurrent(function(tab){
            //     chrome.storage.sync.set({test:JSON.stringify(tab, null, 4)});
            // });
        });
    });
});