class Events extends Storage {

    constructor(){
        super();
    }

    async getFromStore(key = "events"){
        return await super.getFromStore(key);
    }

    async saveToStore(value, key = "events") {
        return await super.saveToStore(value, key);
    }

    async getEvent(eventKey){
        return await this.getFromStore()[eventKey];
    }

    getNextEvent(sort = false){
        let allEvents = await this.getFromStore();
        let sortedEvents;

        if (sort) {
            sortedEvents = this.sortEvents(allEvents);
        } else {
            sortedEvents = allEvents;
        }

        let firstEvent;
        for (let currentEvent in sortedEvents) {
            // object[prop]
            firstEvent = currentEvent;
            break;
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
        events.sort((a, b) => {
            if (a.date < b.date) return 1;
            if (a.date > b.date) return -1;
        });
        return events;
    }

    async addOrUpdateEvent(event, key = null){
        let update = (key === null) ? true : false;
        if(key === null){
            //generate uuid
            key = this.generateEventKey();
        }

        let allEvents = await this.getFromStore();
        allEvents[key] = event;

        //Don't sort if it is an update request
        let sortedEvents;
        if(update){
            sortedEvents = this.sortEvents(allEvents);
        } else {
            sortedEvents = allEvents;
        }

        //store sortedEvents
        this.saveToStore(sortedEvents);

    }

}