// document.getElementById('save').addEventListener('click', save);
// document.getElementById('15min').addEventListener('click', set15);
// document.getElementById('30min').addEventListener('click', set30);
// document.addEventListener('DOMContentLoaded', load );

// var current = document.getElementById('current');

//     function set15() {
//         current.textContent = "Current frequency set: 15 Minutes";
//         save();
//     }

//     function set30() {
//         current.textContent = "Current frequency set: 30 Minutes";
//         save();
//     }
//     //load currently assigned options
//      function load() {
//          chrome.storage.sync.get(['saveFreq'], function (result) {
//              if (load) {
//                  current.textContent = "" + result.saveFreq;
//              } else {
//                  current.textContent = "" + result.saveFreq;
//              }
//          });
//      }

//      //save currently assigned options
//      function save() {
//          chrome.storage.sync.set({saveFreq:current.textContent}, function() {
//             // console.log('Value is set to ' + value);
//          })





//      }

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
