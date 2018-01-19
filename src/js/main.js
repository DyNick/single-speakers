$(document).ready(function($){
    //open popup
    $('.container-buy__button__link ').on('click', function(event){
        event.preventDefault();
        $('.popup-section').addClass('is-visible');
    });

    //close popup
    $('.popup-section').on('click', function(event){
        if( $(event.target).is('.fa-close') || $(event.target).is('.cd-popup') ) {
            event.preventDefault();
            $(this).removeClass('is-visible');
        }
    });
    //close popup when clicking the esc keyboard button
    $(document).keyup(function(event){
        if(event.which=='27'){
            $('.popup-section').removeClass('is-visible');
        }
    });
});

/*==========youtube========*/

$(function() {
    $(".youtube").each(function() {
        // Based on the YouTube ID, we can easily find the thumbnail image
        $(this).css('background-image', 'url(http://i.ytimg.com/vi/' + this.id + '/sddefault.jpg)');

        // Overlay the Play icon to make it look like a video player
        $(this).append($('<div/>', {'class': 'play'}));

        $(document).delegate('#'+this.id, 'click', function() {
            // Create an iFrame with autoplay set to true
            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1&list=0&rel=0";
            if ($(this).data('params')) iframe_url+='&'+$(this).data('params');

            // The height and width of the iFrame should be the same as parent
            var iframe = $('<iframe/>', {'frameborder': '0', 'src': iframe_url, 'width': $(this).width(), 'height': $(this).height() })

            // Replace the YouTube thumbnail with YouTube HTML5 Player
            $(this).replaceWith(iframe);
        });
    });
});

/*==========//youtube========*/


$(document).ready(function() {

    $('#phone').mask('+38(099) 999-99-99');

});