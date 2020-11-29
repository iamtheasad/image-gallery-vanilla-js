// Short Formula
/*
const [current, imgs] = [document.querySelector('#current'), document.querySelectorAll('.imgs img')];
imgs.forEach(img => img.addEventListener('click', e => (current.src = e.target.src)));
*/

// Long Formula
/*
const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');

imgs.forEach(function (img) {
    img.addEventListener('click', function (e) {
        current.src = e.target.src;
    })
});*/


const sliderHeader = document.getElementById('current');
const sliderThumbnailImg = document.querySelectorAll('.imgs img');

// set Opacity
const opacity = 0.5;
// set first image opacity
sliderThumbnailImg[0].style.opacity = opacity;

sliderThumbnailImg.forEach(function (img) {
    img.addEventListener('click', function (e) {
        // reset opacity after click
        sliderThumbnailImg.forEach(img => (img.style.opacity = 1));
        // current image source change
        sliderHeader.src = e.target.src;
        // activate opacity after click
        e.target.style.opacity = opacity;
        // add fade in class
        current.classList.add('fade-in');

        // remove fade in after .5 seconds
        setTimeout(function () {
           current.classList.remove('fade-in');
        }, 500);
    })
});












