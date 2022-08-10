
$(document).ready(function () {
    var owl = $('.slider');
    owl.owlCarousel({
        nav: true,
        navText: ['<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.828 7.00005H16V9.00005H3.828L9.192 14.364L7.778 15.778L0 8.00005L7.778 0.222046L9.192 1.63605L3.828 7.00005Z" fill="#8D9FBB"/></svg>', '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.172 7.00005L6.808 1.63605L8.222 0.222046L16 8.00005L8.222 15.778L6.808 14.364L12.172 9.00005H0V7.00005H12.172Z" fill="#8D9FBB"/></svg>'],
        margin: 24,
        center: false,
        autoHeight: true,
        loop: true,

        responsive: {
            0: {
                items: 1
            },
            760: {
                items: 2
            },
            980: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })
});