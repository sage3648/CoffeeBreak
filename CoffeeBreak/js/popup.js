document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('full_view').addEventListener('click', changeView);

    function changeView() {
        chrome.tabs.create({
            url: "/fullView.html"
        });
    }

    let endDate = new Date().getTime() + (1000 * 60 * 10);

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
