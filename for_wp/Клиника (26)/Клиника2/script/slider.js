
$(document).ready(function () {
    var owl = $('.slider');
    owl.owlCarousel({
        nav: true,
        navText: ['<svg width="16" height="26" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M14.7174 0.449124C15.1612 0.892902 15.2015 1.58734 14.8384 2.07669L14.7174 2.21689L3.93516 12.9997L14.7174 23.7825C15.1612 24.2262 15.2015 24.9207 14.8384 25.41L14.7174 25.5502C14.2736 25.994 13.5792 26.0343 13.0898 25.6713L12.9496 25.5502L1.28295 13.8836C0.83917 13.4398 0.798825 12.7453 1.16192 12.256L1.28295 12.1158L12.9496 0.449124C13.4378 -0.0390311 14.2292 -0.0390311 14.7174 0.449124Z" fill="#768C9F"/> </svg>','<svg width="16" height="26" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.28262 25.5509C0.838843 25.1071 0.798499 24.4127 1.16159 23.9233L1.28262 23.7831L12.0648 13.0003L1.28262 2.21754C0.838843 1.77376 0.798499 1.07932 1.16159 0.58997L1.28262 0.449774C1.7264 0.0059948 2.42084 -0.0343494 2.91019 0.328743L3.05039 0.449774L14.7171 12.1164C15.1608 12.5602 15.2012 13.2547 14.8381 13.744L14.7171 13.8842L3.05039 25.5509C2.56223 26.039 1.77078 26.039 1.28262 25.5509Z" fill="#768C9F"/> </svg>'],
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


$(document).ready(function () {
    var owl = $('.slider2');
    owl.owlCarousel({
        nav: true,
        navText: ['<svg width="16" height="59" viewBox="0 0 16 59" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M14.7174 0.85399C15.1612 1.86486 15.2015 3.44672 14.8384 4.5614L14.7174 4.88076L3.93516 29.4427L14.7174 54.0046C15.1612 55.0155 15.2015 56.5973 14.8384 57.712L14.7174 58.0314C14.2736 59.0422 13.5792 59.1341 13.0898 58.3071L12.9496 58.0314L1.28295 31.4561C0.83917 30.4452 0.798825 28.8633 1.16192 27.7486L1.28295 27.4293L12.9496 0.85399C13.4378 -0.257971 14.2292 -0.257971 14.7174 0.85399Z" fill="#768C9F"/> </svg>','<svg width="16" height="59" viewBox="0 0 16 59" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.28262 58.146C0.838843 57.1351 0.798499 55.5533 1.16159 54.4386L1.28262 54.1192L12.0648 29.5573L1.28262 4.9954C0.838843 3.98453 0.798499 2.40268 1.16159 1.28799L1.28262 0.968639C1.7264 -0.0422325 2.42084 -0.134132 2.91019 0.692944L3.05039 0.968639L14.7171 27.5439C15.1608 28.5548 15.2012 30.1367 14.8381 31.2514L14.7171 31.5707L3.05039 58.146C2.56223 59.258 1.77078 59.258 1.28262 58.146Z" fill="#768C9F"/> </svg>'],
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
                items: 5
            }
        }
    })
});