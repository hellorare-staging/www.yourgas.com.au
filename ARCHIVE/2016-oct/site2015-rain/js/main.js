var main = {
    menu: function() {
        $('#nav-icon').click(function() {
            $(this).toggleClass('open');
            $(this).next('.mainNav').slideToggle();
        });
    },
    bodyScroll: function() { 
                    $("body").mCustomScrollbar({
                    	theme:"minimal",
                        axis:"y"
                    });
    }
}

$(document).ready(main.menu);
$(window).load(main.bodyScroll);
