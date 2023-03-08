// 지삭에서 스크롤트리거.js 파일 연결 후 옵션 추가
gsap.to(".red",{
  x: 1200, 
  rotation: 180, 
  duration: 5, 
  scrollTrigger:{
    trigger:".red",
    markers: true, //표시해줌 
    start: "top center", // 앞에 수치가 오브젝트 뒤에 수치가 브라우저 고정값
    end:"bottom top",
    //scrub:1, // 자동재생이 아니라 스크롤 따라서 움직인다 이거 안주면 자동으로 브라우저 센터 탑 되면 움직임
    pin: true, // 화면 고정 시키기
    toggleActions: "play pause reverse reset", // 앞에 두개는 내려갈때 뒤에 두개는 올라갈때.. 
    },
}); 
gsap.to(".green",{
  x:1200, 
  rotation: 180, 
  duration:5,
  scrollTrigger:{
    trigger:".green",
    markers: true,
    start: "top bottom",
    end:"bottom top",
    
    },
});
gsap.to(".blue",{
  x:1200, 
  rotation: 180, 
  duration:5,
  scrollTrigger:{
    trigger:".green",
    markers: true,
    start: "top bottom", 
    end:"bottom top",
    },
});