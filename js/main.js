function readMore() {
    var dots = document.getElementById("dots");
    var more = document.getElementById("more");
    var btn = document.getElementById("btn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btn.innerHTML = "Подробнее";
        more.style.display = "none";
    } else {
        dots.style.display = "none";
        btn.innerHTML = "Скрыть";
        more.style.display = "inline";
    }
}
$(function () {


    $(".star").rateYo({
        starWidth: "20px",
        normalFill: "#cccccc",
        ratedFill: "#ff6b00",
        spacing: "1px",
        readOnly: true,

        starSvg: '<svg width="20" height="20" viewBox="0 0 16 15" fill="none"  xmlns="http://www.w3.org/2000/svg"><path  d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z" /></svg>',
    });

    $(".star-book").rateYo({
        starWidth: "34px",
        normalFill: "#cccccc",
        ratedFill: "#ff6b00",
        spacing: "4px",
        rating: 3.6,


        starSvg: '<svg width="20" height="20" viewBox="0 0 16 15" fill="none"  xmlns="http://www.w3.org/2000/svg"><path  d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z" /></svg>',
    });





    //слайдер сайдбара
    $('.sidebar__new-inner').slick({
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        fade: true,
        autoplay: false, //авт. прокручивания слайдера


        prevArrow: '<button type="button" class="slick-prev"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 13L1 7L7 1" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 13L7 7L1 1" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    });

    $('.sidebar__popular-inner').slick({
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        fade: true,
        autoplay: false, //авт. прокручивания слайдера


        prevArrow: '<button type="button" class="slick-prev"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 13L1 7L7 1" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 13L7 7L1 1" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    });




});