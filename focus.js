$('.project').each( function(i){
            
    var top_of_object = $(this).offset().top;
    var bottom_of_object = top_of_object + $(this).height();
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    
    /* If the object is completely visible in the window, fade it it */
    if( bottom_of_window > top_of_object ) && bottom_of_window <= bottom_of_object {
        
        $(this).animate({
            'opacity':'1',
    },1500);
            
    }; 
});