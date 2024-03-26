$(document).ready(function(){
    // các hàmm
    function navbar_icon_rotate(){
        $(".icon-top").toggleClass("rotate-icon-top");
        $(".icon-bottom").toggleClass("rotate-icon-bottom");
    }
    function hide_menu_responsive(){
        $("#menu-responsive").slideUp();
        $(".icon-top").removeClass("rotate-icon-top");
        $(".icon-bottom").removeClass("rotate-icon-bottom");
        $(".navbar-searchs .navbar-menu-chill-parent").slideUp();

        $("#menu-responsive .sub-menu").slideUp();
        $(".menu-responsive-item #sub-menu-icon").removeClass("rotate-sub-menu-icon");
    }
    
    //các sự kiện
    $(window).resize(function(){hide_menu_responsive();})
    $(window).scroll(function(){hide_menu_responsive();})

    // sự kiện hover của pc
    $(".main-menu-item").hover(function(){
        $(this).children(".navbar-menu-chill-parent").stop().slideToggle();
    });

    $(".search-icon").click(function(){
        $(this).next(".navbar-menu-chill-parent").slideToggle();

        // đóng menu nếu mở search
        $("#menu-responsive").slideUp();
        $(".icon-top").removeClass("rotate-icon-top");
        $(".icon-bottom").removeClass("rotate-icon-bottom");
    });

    $(".navbar-icon-toggle").click(function(){
        $("#menu-responsive").slideToggle();
        navbar_icon_rotate();
    })
    $(".menu-responsive-item #sub-menu-icon").click(function(){
        $(this).toggleClass("rotate-sub-menu-icon");
        $(this).next(".sub-menu").slideToggle();

        // đóng nút seach khi mở sub-menu
        $(".navbar-searchs .navbar-menu-chill-parent").slideUp();
    })
});