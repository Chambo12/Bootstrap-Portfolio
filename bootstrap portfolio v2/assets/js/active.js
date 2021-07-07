(function() {
    "use strict";

    jQuery(document).ready(function($) {

        //$("#navigation").clone().prependTo($(".nav-mobile"));

        $(".scroll-btn").on("click", function() {
            $("body,html").stop(false, false).animate({
                scrollTop: 0
            }, 800);
            return false;
        });


        $(".sidebar-onOff").on("click", function () {
            $('.sidebar').toggleClass("active");
            $(this).toggleClass("active");
        });
        $(".components li").on("click", function () {
            $('.sidebar').removeClass("active");
            $('.sidebar-onOff').removeClass("active");
        });
    
    });

}(jQuery));

var i = 0;
    var element = document.getElementsByClassName('typing-effect')[0];
    var txt = element.innerText;
    var speed = 100;
    element.innerText = "";
    function typeWriter() {
        if (i < txt.length) {
            element.innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    window.addEventListener('load', typeWriter);