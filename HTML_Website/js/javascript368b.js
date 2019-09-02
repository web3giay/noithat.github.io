$(document).ready(function () {
    var $menu = $("#mainMenu").clone(); $menu.attr("id", "mainMenuMobile"); $menu.mmenu({ dragOpen: { open: true }, searchfield: { add: true, placeholder: "Tìm kiếm các mục...", noResults: "Không có mục nào!" }, extensions: ["theme-dark"], extensions: ["effect-zoom-menu", "effect-zoom-panels"], extensions: ["border-full"], extensions: ["pageshadow"] });
    var API = $("#mainMenuMobile").data("mmenu");
    $("#button-toggle-menu").click(function (e) { API.open(); });
});
$(window).scroll(function () {
    if ($(this).scrollTop() > 10) { $(".header").addClass("headerxd"); }
    else {
        $(".header").removeClass("headerxd");
    }
});
if ($(window).width() > 767) {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 141) {
            $('.menu').addClass('fixed');
        }
        else {
            $('.menu').removeClass('fixed');
        }
    })
}    
$(document).ready(function () {
    var owl = $(".owl-carousel-top"); var checkautoPlay = owl.find(".item3").length; owl.owlCarousel({ navigation: true, singleItem: true, autoPlay: (checkautoPlay > 1 ? 2500 : false), transitionStyle: "fade" }); var owlhome = $(".slider-home"); var checkautoPlayHome = owlhome.find(".item3").length; owlhome.owlCarousel({ navigation: true, singleItem: true, autoPlay: (checkautoPlayHome > 1 ? 2500 : false), transitionStyle: "fade", beforeInit: function () { if ($(window).width() > 991) { $(".slider-home .img-cover").height($(".slider-home").width() / 3) } else { $(".slider-home .img-cover").height($(".slider-home").width() /1.8) }; } }); $("#transitionType").change(function () { var newValue = $(this).val(); owl.data("owlCarousel3").transitionTypes(newValue); owl.trigger("owl.next"); }); $("#promotion-slider").owlCarousel({ navigation: true, singleItem: true, autoPlay: true, pagination: false, transitionStyle: "fade", beforeInit: function () { $("#promotion-slider .img-cover").height($("#promotion-slider").width() * 0.3541912632821724); } });
}); $(document).ready(function () { var owl = $(".slyder-item"); owl.owlCarousel({ navigation: true, singleItem: true, autoPlay: false, transitionStyle: "fade" }); $("#transitionType").change(function () { var newValue = $(this).val(); owl.data("owlCarousel3").transitionTypes(newValue); owl.trigger("owl.next"); }); }); $(document).ready(function () { var owl = $(".slyder-customer"); owl.owlCarousel({ navigation: true, singleItem: true, autoPlay: 2500, transitionStyle: "fade" }); $("#transitionType").change(function () { var newValue = $(this).val(); owl.data("owlCarousel3").transitionTypes(newValue); owl.trigger("owl.next"); }); }); $(function () {
    var Accordion = function (el, multiple) { this.el = el || {}; this.multiple = multiple || false; var links = this.el.find('.link'); links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown) }
Accordion.prototype.dropdown=function(e){var $el=e.data.el;$this=$(this),$next=$this.next();$next.slideToggle();$this.parent().toggleClass('open');if(!e.data.multiple){$el.find('.sub_menu').not($next).slideUp().parent().removeClass('open');};}
    var accordion = new Accordion($('.accordion'), false);
});
$(function () {
    $('#dg-container1').gallery();
    $('#dg-container2').gallery();
});
(function () { $('.naoTooltip-wrap').naoTooltip(); }); var totalSlide = 6; if ($(window).width() < 990) { totalSlide = 4; } if ($(window).width() < 500) { totalSlide = 2; } $(document).on('ready', function () { $(".banner-item").slick({ slidesToShow: totalSlide, slidesToScroll: 1, autoplay: true, autoplaySpeed: 2000, }); })
$(document).ready(function () {
    if ($(window).width() > 767) {
        $(".product-slider .slider").lightSlider({ item: 3, pager: false, slideMargin: 15, loop: false, slideMove: 1, easing: 'cubic-bezier(0.25, 0, 0.25, 1)', speed: 600, responsive: [{ breakpoint: 767, settings: { item: 2, slideMove: 1, slideMargin: 6, } }, { breakpoint: 480, settings: { item: 1, slideMove: 1 } }] });
    }
});
$('.item-w>table>tbody').addClass('sdfsfsdf');

