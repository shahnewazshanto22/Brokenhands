$(function(){
// counterup js area
  $('.counter').counterUp({
    delay: .140,
    time: 100,
});

new VenoBox({
    selector: '.my-video-links',
});

// stickymenu js area

$(window).on ('scroll',function(){
    var sticky = $( this ).scrollTop()
    if ( sticky > 100 ) {
        $('.navbar').addClass('sticky-menu')
    }

    else {
        $('.navbar').removeClass('sticky-menu')
    }
})

// scrollbtn js area

$('#srcoll-btn').on ('click',function(){
    $('html,body').animate({scrollTop:0},2000)
})

$(window).on('scroll',function(){
    var btn = $(this).scrollTop()
    if ( btn > 200 ) {
        $('#srcoll-btn').fadeIn (100)
    }

    else{
        $('#srcoll-btn').fadeOut (100)
    }
})




})