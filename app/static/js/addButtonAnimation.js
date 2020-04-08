/*function that controls the "add" button animation using the TweenMax Library*/
const button = document.querySelector(".circle");

button.addEventListener("mouseenter", onMouseEnter);
button.addEventListener("mouseleave", onMouseLeave);

function onMouseEnter() {
    TweenMax.to(button, 0.35, {width: 135, backgroundColor: "#2cd5c4", alpha: 1, ease: Power3.easeOut});
    TweenMax.to(".arrow", 0.2, {scale: 0.80, alpha: 1});

}

function onMouseLeave() {
    TweenMax.to(button, 0.35, {width: 60, backgroundColor: "#2cd5c4", alpha: 0.8, ease: Power3.easeIn});
    TweenMax.to(".arrow", 0.25, {scale: 1, alpha: 0.8});
}