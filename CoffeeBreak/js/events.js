class Events extends Storage {

    constructor(){
        super();
    }

    async getFromStore(key = "events"){
        let value =  await super.getFromStore(key);
        //console.log({ "Events Value Retrieved": value });
        return value;
    }

    async saveToStore(value, key = "events") {
        //console.log({"Events New Value Set": value});
        return await super.saveToStore(value, key);
    }

    async getEvent(eventKey){
        return await this.getFromStore()[eventKey];
    }

    async getNextEvent(sort = false){
        let allEvents = await this.getFromStore();
        let sortedEvents;

        if (sort) {
            sortedEvents = this.sortEvents(allEvents);
        } else {
            sortedEvents = allEvents;
        }

        let firstEvent = { date: new Date().getTime()};
        let previousEventTime = 0;
        let currentTime = new Date().getTime();
        for (let currentEvent in sortedEvents) {
            // object[prop]
            if (sortedEvents[currentEvent].date > currentTime){
                console.log("After Now");
                if (sortedEvents[currentEvent].date < previousEventTime || previousEventTime === 0){
                    firstEvent = sortedEvents[currentEvent];
                    previousEventTime = firstEvent.date;
                }
            }

            //break;
        }

        return firstEvent;
    }

    generateEventKey = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            // eslint-disable-next-line
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    sortEvents = (events) => {
        let sortedEvents = {};
        let sortedKeys = Object.keys(events).sort((a, b) => {
            // console.log(a);
            // console.log(events[a].name);
            // if (events[a].date < events[b].date) return 1;
            // if (events[a].date > events[b].date) return -1;
            if (a < b) return 1;
            if (a > b) return -1;
        });
        console.log({"Sorted Keys": sortedKeys});
        sortedKeys.forEach(function (key) {
            sortedEvents[key] = events[key];
        });
        // events.sort((a, b) => {
        //     if (a.date < b.date) return 1;
        //     if (a.date > b.date) return -1;
        // });
        return sortedEvents;
    }

    async addOrUpdateEvent(event, key = null){
        let update = (key === null) ? false : true;
        if(key === null){
            //generate uuid
            key = this.generateEventKey();
        }

        let allEvents = await this.getFromStore();
        //console.log({ "All Events Before": allEvents });
        //allEvents = { [key]: event };
        allEvents[key] =  event;
        //console.log({ "All Events After": allEvents });

        //Don't sort if it is an update request
        let sortedEvents;
        if(!update){
            console.log("Sortinggg");
            sortedEvents = this.sortEvents(allEvents);
        } else {
            sortedEvents = allEvents;
        }

        allEvents[key] = event;
        console.log({ "Sorted Events": allEvents });

        //store sortedEvents
        this.saveToStore(sortedEvents);

    }

    async clearEvent(eventKey){
        let allEvents = await this.getFromStore();
        delete allEvents[eventKey];
        this.saveToStore(allEvents);
    }

    async clearEvents() {
        this.saveToStore({});
    }


}