// 자바스크립트 동작 순서_ 함수 후에 나중에 동작
// 나중 동작 되는 이벤트
// 1.setTimeout, ajax, dom event
function first() {
  second();
  console.log("첫번째");
}
function second() {
  third();
  console.log("두번째");
}
setTimeout(function () {
  console.log("나는 제일 나중에");
}, 0);
function third() {
  console.log("세번째");
}
first();

//글자 쪼개기 효과를 위한 함수 호출
Splitting();

const num = 10;
let person = { name: "장성호", age: 20, weight: 80, hobby: {} }; //object
//  이벤트 (~시점에, ~때)

// 표준화 JSON
// const swiperObj = {
//   speed: 1000,
//   loop: true,
//   // effect: "cube",
//   effect: "fade",
//   autoplay: {
//     delay: 3000,
//   },
//   pagination: {
//     el: ".main-visual__pagination",
//     type: "bullets",
//   },
// };

// const swiper = new Swiper(".main-visual", swiperObj);

// 위에처럼 쓸수도 있고 아래로 쓸 수도 있다.

// 이벤트  (~시점에, ~때)

const swiper = new Swiper(".main-visual", {
  speed: 400,
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".main-visual__pagination",
    type: "bullets",
    clickable: true,
  },
  on: {
    init: function () {
      console.log("swiper initialized");
    },
    //1. 문법적 오류
    //2. 오탈자...
    //3. 로직   junior  vs senior
    slideChangeTransitionStart: function () {
      console.log("slide change");
      gsap.fromTo(
        ".swiper-slide-active .main-visual__slogan .char",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, stagger: 0.03, ease: "power4", duration: 1 }
      );
    },
    slideChangeTransitionEnd: function () {
      console.log("slide transition end");
    },
  },
});
