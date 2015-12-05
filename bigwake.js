$(document).ready(function(){

    // Sticky header

    $(window).scroll(function() {
         if ($(document).scrollTop() > 72) {
             $('header').addClass("sticky");
            } else {
             $('header').removeClass("sticky");  
            }
         });

    // Link Animation

    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 80
        }, 'slow', function () {
            window.location.hash = target;
        });
    });

    // Scroll through a gallery of background images 

    var bgImages = [
                "images/styTown.jpg", 
                "images/eitangerry.jpg",
                "images/jeffmarty.jpg",
                "images/trio.jpg",
                "images/drom.jpg",
            ];

        var current = 0;
        //     $('.photo').css({'background-image': 'url(' + bgImages[Math.floor(Math.random() * bgImages.length)] + ')'
        // });
            $(".photo").click(function() {
                $(".photo").css("background-image", "url(" + bgImages[current] + ")");
                current = (current++ < bgImages.length - 1) ? current : 0 ;
            });
        });