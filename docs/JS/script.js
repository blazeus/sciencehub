$('.hamburger').on('click',function() {
    if($('.hamburger').hasClass('is-active'))
    {
        $('.hamburger').removeClass('is-active');
    } else 
    {
        $('.hamburger').addClass('is-active');
    }
})