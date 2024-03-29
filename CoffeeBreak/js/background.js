
chrome.runtime.onInstalled.addListener(async function(){

    let fakeEvents = await generateEvents();

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

async function generateEvents(){

    let fakeEvent1 = new CoffeeEvent(new Date().getTime() + (1000 * 15), 5, "You need to take a break");
    let fakeEvent2 = new CoffeeEvent(new Date().getTime() + (1000 * 30), 5, "Catchup with Sage");
    let fakeEvent3 = new CoffeeEvent(new Date().getTime() + (1000 * 45), 5, "Catchup with Jagmeet");
    let fakeEvent4 = new CoffeeEvent(new Date().getTime() + (1000 * 60), 5, "Catchup with Chuksy");

    let eventsManager = new Events();
    eventsManager.clearEvents();

    await eventsManager.addOrUpdateEvent(fakeEvent1);
    await eventsManager.addOrUpdateEvent(fakeEvent2);
    await eventsManager.addOrUpdateEvent(fakeEvent3);
    await eventsManager.addOrUpdateEvent(fakeEvent4);

    console.log({"Next Event": await eventsManager.getNextEvent()});

    return await eventsManager.getFromStore();

}