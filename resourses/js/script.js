$(document).ready(function(){
    $('.js--section-feature').waypoint(function(direction){
        if(direction =="down")
        {
            $('nav').addClass('sticky');
        }
        else{
            $('nav').removeClass('sticky');
        }
    },
    {
        offset: '60px'
    });
    /*----------------------- scroll -----------------*/
    $('.js--go-to-section-plans').click(function()
    {
        $('html,body').animate({scrollTop: $('.js--section-plans').offset().top},1000);
    });

    $('.js--go-to-section-start').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-feature').offset().top},1000);
    });
    /*-------------------navigation-smooth-scroll-------------------------*/
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html, body').animate({
                scrollTop: target.offset().top
              }, 1000);
              target.focus(); // Setting focus
              if (target.is(":focus")){ // Checking if the target was focused
                return false;
              } else {
                target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                target.focus(); // Setting focus
              };
              return false;
            }
          }
        });
      });

      /*--------------------------animation-on-scroll-------------------*/
      $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animate__animated animate__fadeIn');
      },{
        offset: '50%'
      });
      $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
      },{
        offset: '50%'
      });
      $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animate__animated animate__fadeIn');
      },{
        offset: '50%'
      });
      $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animate__animated animate__pulse');
      },{
        offset: '50%'
      });
      /*------------------------mobile nav toggle-------------*/
      $('.js--nav-icon').click(function(){
        var nav =$('.js--main-nav');
        var icon=$('.js--nav-icon ion-icon');

        if(icon.attr('name')=='menu-outline'){
        
        icon.attr('name','close-outline');
        
        }else{
        
        icon.attr('name','menu-outline');
        
        }
        
        nav.slideToggle(200);
      });
      
      $(window).resize(function(){

        var nav = $('.js--main-nav');
        
        var icon = $('.js--nav-icon ion-icon');
        
        if ($(window).width() > 767){
        
        nav.css("display", "block");
        
        
        } else {
        
        nav.css("display", "none");
        
         }
        
        });

});
/*
var waypoint = new Waypoint({
    element: document.getElementById('px-offset-waypoint'),
    handler: function(direction) {
      notify('I am 20px from the top of the window')
    },
    offset: 20 
  })
  */