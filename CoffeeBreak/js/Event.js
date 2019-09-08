class CoffeeEvent{
    constructor(date, duration, name = "", suggested = false){

        let endDate = date + (1000 * duration); //duration in seconds

        return {
            date: date,
            duration: duration,
            endDate: endDate,
            name: name,
            suggested: suggested
        };
    }
}