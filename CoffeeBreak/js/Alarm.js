class Alarm{
    constructor(alarmService = chrome.alarms){
        this.AlarmService = alarmService;
    }

    setEventAlarm(eventKey, time){
        const alarmKey = eventKey;
        const alarmInfo = {
            when: time
        }
        this.AlarmService.create(alarmKey, alarmInfo);
    }

    setEventAlarms(events){
        for(event in events){
            console.log(events[event], event);
            this.setEventAlarm(event, events[event].date);
        }
    }

    async clearEventAlarm(eventKey){
        const alarmKey = eventKey;
        await this.AlarmService.clear(alarmKey);
    }

    waitForAlarms(onAlarm = (alarm) => {}){
        this.AlarmService.onAlarm.addListener(onAlarm);
    }

}