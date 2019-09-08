document.addEventListener('DOMContentLoaded', async function () {
    document.getElementById('full_view').addEventListener('click', changeView);

    function changeView() {
        chrome.tabs.create({
            url: "/fullView.html"
        });
    }

    let nextEvent = await new Events().getNextEvent();

    let endDate = nextEvent.date;

    let clockComponent = document.getElementById("tiles");

    countDownClock = new CountDownClock(endDate, clockComponent);
    countDownClock.start();
    document.querySelector('#go-to-options').addEventListener('click',function() {
        if (chrome.runtime.openOptionsPage) {
          chrome.runtime.openOptionsPage();
        } else {
          window.open(chrome.runtime.getURL('options.html'));
        }
    });
    // chrome.storage.sync.get(['test'], function(result){
    //     document.getElementById('daily-schedule').innerHTML = result.test;
    // });

});
