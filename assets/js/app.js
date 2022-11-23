$(function() {

    const intro = $("#intro");
    const header = $("#header");
    let introH = intro.innerHeight();
    let headerH = header.innerHeight();
    let scrollTop = $(window).scrollTop();
    
    

    // Header class on scroll ===================

    headerScroll();

    $(window).on("scroll", function() {
        headerScroll();
    });

    function headerScroll() {
        introH = intro.innerHeight();
        headerH = header.innerHeight();

        const scrollTop = $(this).scrollTop();
    
        if (scrollTop >= (introH - headerH)) {
            header.addClass("header--dark");
        } else {
            header.removeClass("header--dark");
        }
    }


    // Smooth scroll to sections =====================

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        const scrollEl = $(this).data("scroll");
        const scrollElPos = $(scrollEl).offset().top;

        $("html, body").animate({
            scrollTop: scrollElPos - headerH
        }, 500)
    });


    // ScrollSpy =====================================
    const windowH = $(window).height();
    scrollSpy(scrollTop); 

    $(window).on("scroll", function() {
        scrollTop = $(this).scrollTop();
        scrollSpy(scrollTop); 
    });

    function scrollSpy(scrollTop) {
        $("[data-scrollspy]").each(function() {

            const $this = $(this);
            const sectionId = $this.data("scrollspy");
            let sectionOffset = $this.offset().top;
            sectionOffset = sectionOffset - (windowH * 0.3);

            if (scrollTop >= sectionOffset) {
                $('#nav [data-scroll]').removeClass('active');
                $('#nav [data-scroll="' + sectionId + '"]').addClass('active');
            }

            if (scrollTop === 0) {
                $('#nav [data-scroll]').removeClass('active');
            }
        });
    }


    // Modal =========================================
    $("[data-modal]").on("click", function(event) {
        event.preventDefault();
        const modal = $(this).data('modal');

        $('body').addClass('no-scroll');
        $(modal).addClass('show');

        setTimeout(function() {
            $(modal).find('.modal__content').css({
                transform: 'translateY(0)',
                opacity: '1'
            });
        });
    });

    $("[data-modal-close]").on("click", function(event) {
        event.preventDefault();
        const modal = $(this).parents('.modal');

        modalClose(modal);        
    });

    $('.modal').on("click", function() {
        const modal = $(this);

        modalClose(modal);        
    });

    $('.modal__content').on("click", function(event) {
        event.stopPropagation();
    });

    function modalClose(modal) {
        modal.find('.modal__content').css({
            transform: 'translateY(-100px)',
            opacity: '0'
        });
        
        setTimeout(function() {
            $('body').removeClass('no-scroll');
            modal.removeClass('show'); 
        }, 200);
    }
});















