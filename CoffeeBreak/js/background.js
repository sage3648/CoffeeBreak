chrome.runtime.onInstalled.addListener(function(){
    chrome.alarms.create("Regular Reminder",{delayInMinutes:1, periodInMinutes:1} );
});

chrome.alarms.onAlarm.addListener(function(){
    // alert("alarm has gone off");
    chrome.alarms.get("Regular Reminder", function(alarm){   
        //alert(JSON.stringify(alarm, null, 4));
        //alert(alarm["periodInMinutes"]);
        chrome.alarms.clear("Regular Reminder");
        var newInterval = 1.5;
        chrome.alarms.create("Regular Reminder",{delayInMinutes:newInterval, periodInMinutes:newInterval} );

    });
});