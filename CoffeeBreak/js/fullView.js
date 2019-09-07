document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: [ 'timeGrid' ],
        eventBorderColor: 'black',
        views: {
            timeGrid: {
                type: 'timeGridDay',
                duration: {days: 1},
                buttonText: '1 day'
            }
        },
        businessHours: true,
        allDaySlot: false,

        events: [
            {
                title  : 'Lunch with Molly!',
                start  : '2019-09-06T12:00:00',
                end  : '2019-09-06T13:30:00',

            },
            {
                title  : 'Breakfast with Izy!',
                start  : '2019-09-07T09:15:00',
                end  : '2019-09-07T09:16:00',

            },
            {
                title  : 'Breakfast with Chuksy',
                start  : '2019-09-08T12:30:00',
                end  : '2019-09-08T14:30:00',

            }, {
                title  : 'Dinner with Jagmeet!',
                start  : '2019-09-05T17:30:00',
                end  : '2019-09-05T19:30:00',

            }
        ]
    });

    calendar.render();
});