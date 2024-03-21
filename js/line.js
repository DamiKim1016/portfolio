$(function () {

    const LINE1 =  $('#s0 .page_line1');
    const LINE2 =  $('#s1 .page_line2');
    const LINE3 =  $('#s1 .page_line3');
    const LINE4 =  $('#s1 .page_line4');
    const LINE5 =  $('#s2 .page_line5');
    const LINE6 =  $('#s2 .page_line6');
    const LINE7 =  $('#s2 .page_line7');
    const LINE8 =  $('#s2 .page_line8');
    const LINE9 =  $('#s2 .page_line9');
    const LINE10 =  $('#s2 .page_line10');
    const LINE11 =  $('#s3 .page_line11');
    const LINE12 =  $('#s3 .page_line12');
    const LINE13 =  $('#s4 .page_line13');
    const LINE14 =  $('#s4 .page_line14');
    const LINE15 =  $('#s5 .page_line15');
    const LINE16 =  $('#s5 .page_line16');
    const LINE17 =  $('#s6 .page_line17');
    const LINE18 =  $('#s6 .page_line18');

    var updatePositions = function (line) {
        if (line <= 480) {
            LINE1.css({ "width": "1.4rem", "height": line });
            LINE2.css({ "opacity" : "0"});
        } else if (line <= 760) {
            LINE2.css({ "opacity": "1", "height": "1.4rem", "width": line - 480});
            LINE3.css({ "opacity" : "0"});
        } else if (line <= 800) {
            LINE3.css({ "opacity":"1", "height": "1.4rem", "width": line - 650});
            LINE4.css({ "opacity" : "0"});
        } else if (line <= 963) {
            LINE4.css({ "opacity":"1", "width": "1.4rem", "height": line - 800});
            LINE5.css({ "opacity" : "0"});
        } else if (line <= 1680) {
            LINE5.css({ "opacity":"1", "height": "1.4rem", "width": line - 1540});
            LINE6.css({ "opacity" : "0"});
        } else if (line <= 1740) {
            LINE6.css({ "opacity":"1", "width": "1.4rem", "height": line - 1680});
            LINE7.css({ "opacity" : "0"});
        } else if (line <= 1938) {
            LINE7.css({ "opacity":"1", "width": "1.4rem", "height": line - 1304});
            LINE8.css({ "opacity" : "0"});
        } else if (line <= 2475) {
            LINE8.css({ "opacity":"1", "height": "1.4rem", "width": line - 1840});
            LINE9.css({ "opacity" : "0"});
        } else if (line <= 2650) {
            LINE9.css({ "opacity":"1", "height": "1.4rem", "width": line - 2475});
            LINE10.css({ "opacity" : "0"});
        } else if (line <= 2750) {
            LINE10.css({ "opacity":"1", "width": "1.4rem", "height": line - 2650}); 
            LINE11.css({ "opacity" : "0"});
        } else if (line <= 2910) {
            LINE11.css({ "opacity":"1", "width": "1.4rem", "height": line - 2058});
            LINE12.css({ "opacity" : "0"});
        } else if (line <= 3325) {
            LINE12.css({ "opacity":"1", "height": "1.4rem", "width": line - 2520});
            LINE13.css({ "opacity" : "0"});
        } else if (line <= 3800) {
            LINE13.css({ "opacity":"1", "height": "1.4rem", "width": line - 3325});
            LINE14.css({ "opacity" : "0"});
        } else if (line <= 3900) {
            LINE14.css({ "opacity":"1", "width": "1.4rem", "height": line - 3600});
        } else if (line <= 4830) {
            LINE15.css({ "opacity" : "0"});
            LINE16.css({ "opacity" : "0"});
        } else if (line <= 4840) {
            LINE15.css({ "opacity":"1", "height": "1.4rem", "width": line - 4800});
        } else if (line <= 5105) {
            LINE16.css({ "opacity":"1", "width": "1.4rem", "height": line - 4700});
            LINE17.css({ "opacity" : "0"});
        } else if (line <= 5625) {
            LINE17.css({ "opacity":"1", "width": "1.4rem", "height": line - 5450});
            LINE18.css({ "opacity" : "0"});
        } else {
            LINE18.css({ "opacity":"1", "height": "1.4rem", "width": line - 5100});
        }
    }

    $(window).scroll(function()
    {
        var newLocation = $(document).scrollTop();
        console.log(newLocation);
        var newScale = newLocation;

        updatePositions(newScale);
    })
});


