document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: [ 'timeGrid' ],
        events: [
            {
                title  : 'Lunch with Molly!',
                start  : '2019-09-06T12:00:00',
                end  : '2019-09-06T13:30:00',

                allDay : false // will make the time show
            },
            {
                title  : 'Breakfast with Izy!',
                start  : '2019-09-07T09:15:00',
                end  : '2019-09-07T09:16:00',

                allDay : false // will make the time show
            },
            {
                title  : 'Breakfast with Chuksy',
                start  : '2019-09-08T12:30:00',
                end  : '2019-09-08T14:30:00',

                allDay : false // will make the time show
            }, {
                title  : 'Dinner with Jagmeet!',
                start  : '2019-09-05T17:30:00',
                end  : '2019-09-05T19:30:00',

                allDay : false // will make the time show
            }
        ]
    });

    calendar.render();
});