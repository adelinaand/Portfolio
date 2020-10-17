$(document).ready(function () { // Tells the function to wait to preform until everything on the page has loaded.

    $(".menu-item-1").addClass("current-menu-item");

    $(window).scroll(function() { 

        var border = document.getElementById("img-wrapper");

        border.style.transform = "rotate("+window.pageYOffset/12+"deg)";
        
       /* var scroll = $(window).scrollTop();
        $('.about, .slogan').css({'opacity':(( 180-scroll )/400)+0.4}); */
        
        var Top = $(window).scrollTop() + 1, // This variable finds the distance you have scrolled from the top.
                    SectionOneOffset = $('#welcome').offset().top, // This variable finds the distance between #section-one and the top. Replace #section-one with the ID of your section.
                    SectionTwoOffset = $('#previous').offset().top; // This variable finds the distance between #section-two and the top. Replace #section-two with the ID of your section. You can duplicate this for as many sections as you want.
                    SectionThreeOffset = $('#contact').offset().top;


        if (Top > SectionOneOffset) { // If you have scrolled past section one do this.
            $(".menu-item-1").addClass("current-menu-item"); // Adds class of current-menu-item to the menu item with a class of menu-item-1
        } 
            if (Top > SectionTwoOffset) { // If you have scrolled past section two do this.You can duplicate this for as many sections as you want.
            $(".menu-item-2").addClass("current-menu-item"); // Adds class of current-menu-item to the menu item with a class of menu-item-2
                    $(".menu-item-1").removeClass("current-menu-item"); // Removes class of current-menu-item to the menu item with a class of menu-item-1
        } else { // If you have not scrolled section two do this.
            $(".menu-item-2").removeClass("current-menu-item"); // Removes class of current-menu-item to the menu item with a class of menu-item-2
        }
        if (Top > SectionThreeOffset) { // If you have scrolled past section two do this.You can duplicate this for as many sections as you want.
            $(".menu-item-3").addClass("current-menu-item"); // Adds class of current-menu-item to the menu item with a class of menu-item-2
                    $(".menu-item-2").removeClass("current-menu-item"); // Removes class of current-menu-item to the menu item with a class of menu-item-1
        } else { // If you have not scrolled section two do this.
            $(".menu-item-3").removeClass("current-menu-item"); // Removes class of current-menu-item to the menu item with a class of menu-item-2
        }
        if ($(window).scrollTop() + $(window).height() == $(document).height()) { // If you have scrolled past section two do this.You can duplicate this for as many sections as you want.
            $(".menu-item-3").addClass("current-menu-item"); // Adds class of current-menu-item to the menu item with a class of menu-item-2
                    $(".menu-item-2").removeClass("current-menu-item");
         } // Removes class of current-menu-item to the menu item with a class of menu-item-1

            var Bottom = $(window).scrollTop() + $(window).height();
            ProjectOneOffset = $('.project1').offset().top;
            ProjectTwoOffset = $('.project2').offset().top;

            $('.project1').addClass("inactive_project");
            $('.project2').addClass("inactive_project");
            $('.project3').addClass("inactive_project");
    
            if (Bottom > ProjectTwoOffset) {
                $('.project1').removeClass("inactive_project");
        }

            if(Top > ProjectOneOffset) {
            $('.project2').removeClass("inactive_project");
            $('.project1').addClass("inactive_project");
            }

            if(Top > ProjectTwoOffset) {
                $('.project3').removeClass("inactive_project");
                $('.project2').addClass("inactive_project");
                }

        });


    });

