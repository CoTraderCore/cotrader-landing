$(document).ready(function ($) {
    var GOOGLE_ANALYTICS_USER_TRACKER_PROJECT_TOKEN = 'G-CYCNE6RGB2';
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', GOOGLE_ANALYTICS_USER_TRACKER_PROJECT_TOKEN);

    // gtag('event', 'screen_view', {});

    $('#outer-wrapper a').click(function () {
        debugger
        // event.preventDefault();
        var getCickedButtonValue = $(this).attr('value');
        // console.log("Google analytics User Clicked on ", getCickedButtonValue);
        // gtag('event', 'screen_view', {
        //     'screen_name': getCickedButtonValue
        // });
        gtag('event', getCickedButtonValue+"Clkd", {
            'source': getCickedButtonValue
        });
    });
    


    $('#exampleModal a').click(function () {
        debugger
        // event.preventDefault();
        var getCickedButtonValue = $(this).attr('value');
        // console.log("Google analytics User Clicked on ", getCickedButtonValue);
        // gtag('event', 'screen_view', {
        //     'screen_name': getCickedButtonValue
        // });
        gtag('event', "Clkd" + getCickedButtonValue, {
            'source': getCickedButtonValue
        });
    });

}); 