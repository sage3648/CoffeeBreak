document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: [ 'timeGrid' ],
        events: [
            {
                title  : 'Event Test',
                start  : '2019-09-05T12:30:00',
                allDay : false // will make the time show
            }
        ]
    });

    calendar.render();
});