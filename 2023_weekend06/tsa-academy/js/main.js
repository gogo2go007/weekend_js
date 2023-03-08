Splitting(); //글자 쪼개기
gsap.defaults({duration:1, ease: "power4"});
// 첫번째 페이지에 애니메이션이 5개
const section01TL = gsap.timeline({
    scrollTrigger:{
        markers: true, // 나중에 진짜 마무리할때는 주석처리해야함 내가 확인하기 위한 가이드 필요해서 
        trigger:".section01",
        scrub:2,
        pin:true,
        start:"top top",
        end:"bottom+=2000 top" // 전체적인 시간 늘릴때 +숫자 써주면 스크롤 내릴때 글씨 그 수치만큼 천천히 애니메이션됨
    },
});
section01TL
.from(".section01 .txt01 .char",{
    opacity:0, 
    xPercent:100, 
    stagger:0.1,
})
.from(CSSRulePlugin.getRule(".tsa .section01 .txt01:after"),{
    cssRule: {scaleX:0},
})
.from(".section01 .txt02 .char",{
    opacity:0, 
    xPercent:100, 
    stagger:0.1,
})
.from(".section01 .txt03 .char",{
    opacity:0, 
    xPercent:100, 
    stagger:0.1,
})
.from(".section01 .txt04 .char",{
    opacity:0, 
    xPercent:100, 
    stagger:0.1,
})
.from(".section01 .txt04 img",{
    opacity:0, 
    stagger:3,
})
// 스크롤 내리고 바로 애니메이션 효과 나타났다가 잠깐 멈추고 싶어서 넣은 속성
// 효과 마지막에 딜레이를 붙여주면 
.from(".section01 .txt04 img",{
    delay: 5,
});

//section02
const section02TL = gsap.timeline({
    scrollTrigger: {
      markers: true,
      trigger: ".section02",
      scrub: 2,
      pin: true,
      start: "top top",
      end: "bottom+=2000 top",
    },
});
section02TL
.from(".section02 .title", {
    backgroundColor: "transparent",
})
.from(".section02 .title .char", {
    opacity: 0,
    xPercent: 100,
    stagger: 0.1,
})

.from(".section02 .mainTxt .char", {
    opacity: 0,
    xPercent: 100,
    stagger: 0.1,
})
.from(".section02 .circleList li", {
    opacity: 0,
    xPercent: 100,
    stagger: 0.1,
})
.from(".section02 .cduBox", {
    opacity: 0,
    scale: 3,
})
.from(".section02", {
    delay: 10,
});

    
// section03
const section03TL = gsap.timeline({
    scrollTrigger: {
      markers: true,
      trigger: ".section03",
      scrub: 2,
      pin: true,
      start: "top top",
      end: "bottom+=2000 top",
    },
  });
section03TL
    .from(".section03 .title", {
      backgroundColor: "transparent",
    })
    .from(".section03 .title .char", {
      opacity: 0,
      xPercent: 100,
      stagger: 0.1,
    })
  
    .from(".section03 .mainTxt .char", {
      opacity: 0,
      xPercent: 100,
      stagger: 0.1,
    })
    .from(".section03 .list li", {
      opacity: 0,
      xPercent: 100,
      stagger: 0.1,
    })
    .from(".section03 .airplane", {
      opacity: 0,
      xPercent: -100,
      yPercent: 100,
    })
    .from(".section03", {
      delay: 10,
    });

  // section04
const section04TL = gsap.timeline({
    scrollTrigger: {
      markers: true,
      trigger: ".section04",
      scrub: 2,
      pin: true,
      start: "top top",
      end: "bottom+=2000 top",
    },
  });
section04TL
    .from(".section04 .title", {
      backgroundColor: "transparent",
    })
    .from(".section04 .title .char", {
      opacity: 0,
      xPercent: 100,
      stagger: 0.1,
    })
  
    .from(".section04 .mainTxt .char", {
      opacity: 0,
      xPercent: 100,
      stagger: 0.1,
    })
    .from(".section04 .list li", {
      opacity: 0,
      xPercent: 100,
      stagger: 0.1,
    })
  
    .from(".section04", {
      delay: 10,
    });
