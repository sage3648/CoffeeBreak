chrome.runtime.onInstalled.addListener(function(){
    let fakeEvents = {
        "fakeKey1": {
            date: new Date().getTime() + (1000 * 5),
            name: "Its time for your computer break"
        },
        "fakeKey2": {
            date: new Date().getTime() + (1000 * 30),
            name: "Catchup with Sage"
        },
        "fakeKey3": {
            date: new Date().getTime() + (1000 * 45),
            name: "Catchup with Jagmeet"
        }
    }

    let setupAlarms = new Alarm();

    setupAlarms.setEventAlarms(fakeEvents);

    let alarmCallback = (alarm) => {
        chrome.extension.getBackgroundPage().console.log(alarm);
        chrome.extension.getBackgroundPage().console.log("New Event Alarm Fired");
        let eventDetails = fakeEvents[alarm.name];
        if(!eventDetails) {
            return;
        }
        new LocalNotification(eventDetails.name);
    }

    setupAlarms.waitForAlarms(alarmCallback);

});

function generateEvents(){
    events = {
        "fakeKey1": {
            date: new Date().getTime() + (1000 * 15),
            name: "Its time for your computer break"
        },
        "fakeKey2": {
            date: new Date().getTime() + (1000 * 30),
            name: "Catchup with Sage"
        },
        "fakeKey3": {
            date: new Date().getTime() + (1000 * 45),
            name: "Catchup with Jagmeet"
        }
    }

    return events;
}
