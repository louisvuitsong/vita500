$(function(){
    
    $('.menu-trigger').on('click',function(){
        $(this).toggleClass('active');
        $('nav').toggleClass('active');
    });

    $('.vita').on('click',function(){
        $('.vita').toggleClass('active');
    });

    $('section article').on('click',function(e){
        $('.copy').slideToggle();
    });

    $('.pop_view').on('click',function(){
        $('.popup').addClass('active');
    });
    $('.pop_exit').on('click',function(){
        $('.popup').removeClass('active');
    });
    
    






});