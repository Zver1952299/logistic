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
});















