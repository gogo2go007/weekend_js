//popup
//$(document).ready(function () {});
Splitting();
const loadingTL = gsap.timeline();
loadingTL.to(".loading .char", {
  y: -50,
  repeat: -1,
  yoyo: true,
  stagger: {
    each: 0.02,
  },
});

$("body")
  .imagesLoaded()
  .always(function (instance) {
    //console.log("all images loaded");
    gsap.to(".loading", {
      opacity: 0,
      duration: 2,
      onComplete: function () {
        $(".loading").remove();
        scrollAnimation();
      },
    });
  });

function scrollAnimation() {
  const mySkill = {
    html: 90,
    js: 80,
    design: 85,
  };

  const disappear = function () {
    gsap.to("#popup", {
      top: -600,
      ease: "back.in",
      duration: 0.75,
      onComplete: function () {
        $("#popup").hide();
      },
    });
  };
  $("#popup .btnClose").on("click", function () {
    disappear();
  });
  $("#popup .btnOneday").on("click", function () {
    disappear();
    Cookies.set("popupDisplay", "none", { expires: 1 });
  });
  if (Cookies.get("popupDisplay") !== "none") {
    $("#popup").show();
  }

  // scroll-trigger

  const mainVisualTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#mainVisual",
      markers: true,
      scrub: 1,
      start: "top top",
      end: "bottom+=200% top",
      pin: true,
    },
  });
  mainVisualTL
    .from("#mainVisual .rose01", {
      opacity: 0,
    })
    .from("#mainVisual .rose02", {
      opacity: 0,
    })

    .from("#mainVisual .title .char", {
      opacity: 0,
      stagger: {
        each: 0.05,
      },
    })
    .from("#mainVisual .subTitle  .char", {
      opacity: 0,
      stagger: {
        each: 0.05,
      },
    })
    .from("#mainVisual", {
      duration: 5,
    });

  const introduceTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#introduce",
      markers: true,
      scrub: 1.5,
      start: "top top",
      pin: true,
    },
  });
  introduceTL
    .from("#introduce .main p .char", {
      opacity: 0,
      x: "+=100",
      stagger: {
        each: 0.05,
      },
    })
    .from("#introduce .main strong .char", {
      x: "+=100",
      opacity: 0,
      stagger: {
        each: 0.05,
      },
    })
    .from(CSSRulePlugin.getRule("#main #introduce .main strong:before"), {
      cssRule: {
        scaleX: 0,
      },
    })
    .from("#introduce .no", {
      opacity: 0,
    })
    .from("#introduce .sub .char", {
      opacity: 0,
      x: "+=100",
      stagger: {
        each: 0.05,
      },
    })
    .from("#introduce .imgContents .prince", {
      scale: 0,
      opacity: 0,
    })
    .from("#introduce", {
      duration: 10,
    });

  const introduce02TL = gsap.timeline({
    scrollTrigger: {
      trigger: "#introduce02",
      markers: true,
      pin: true,
      scrub: 1,
      start: "top top",
      end: "bottom top",
    },
  });
  introduce02TL
    .to("#introduce02 .door-in", {
      rotationY: -45,
    })
    .from("#introduce02 .intro .char", {
      opacity: 0,
      x: "+=100",
      stagger: {
        each: 0.05,
      },
    })
    .from(CSSRulePlugin.getRule("#main #introduce02 .me strong:before"), {
      cssRule: {
        scaleX: 0,
      },
      stagger: {
        each: 1,
      },
    })
    .from("#introduce02", {
      duration: 10,
    });

  const portfolioTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#portfolio",
      markers: true,
      pin: true,
      scrub: 1,
      start: "top top",
      end: "bottom top",
    },
  });
  portfolioTL
    .from("#portfolio .main .char", {
      opacity: 0,
      x: "+=100",
      stagger: {
        each: 0.05,
      },
    })
    .from(CSSRulePlugin.getRule("#main #portfolio .main strong:before"), {
      cssRule: {
        scaleX: 0,
      },
      stagger: {
        each: 1,
      },
    })
    .from("#portfolio .sub .char", {
      opacity: 0,
      x: "+=100",
      stagger: {
        each: 0.05,
      },
    })
    .from("#portfolio .no", {
      opacity: 0,
    })
    .from("#portfolio .prince", {
      opacity: 0,
      y: "+=300",
    });
  const portfolioListTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#portfolioList",
      markers: true,
      pin: true,
      scrub: 1,
      start: "top top",
      end: "bottom top",
    },
  });
  portfolioListTL
    .from("#portfolioList h2 .char", {
      opacity: 0,
      x: "+=100",
      stagger: {
        each: 0.05,
      },
    })
    .from("#portfolioList .no", {
      opacity: 0,
    })
    .from("#portfolioList h3 .char", {
      opacity: 0,
      x: "+=100",
      stagger: {
        each: 0.05,
      },
    })
    .from("#portfolioList .linkList li", {
      opacity: 0,
      scale: 0,
      stagger: {
        each: 0.05,
      },
    })
    .from("#portfolioList", {
      duration: 10,
    });

  const roseTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#rose",
      markers: true,
      pin: true,
      scrub: 1,
      start: "top top",
      end: "bottom top",
    },
  });
  roseTL
    .from("#rose .main .char", {
      opacity: 0,
      x: "+=100",
      stagger: {
        each: 0.05,
      },
    })
    .from(CSSRulePlugin.getRule("#main #rose .txtContents p strong:before"), {
      cssRule: {
        scaleX: 0,
      },
    })
    .from("#rose .no", {
      opacity: 0,
    })
    .from("#rose .sub .char", {
      opacity: 0,
      x: "+=100",
      stagger: {
        each: 0.05,
      },
    })
    .from("#rose .prince", {
      opacity: 0,
      y: "+=300",
    });
  const skillTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#skill",
      markers: true,
      pin: true,
      scrub: 1,
      start: "top top",
      end: "bottom top",
    },
  });
  skillTL
    .from("#skill h2 .char", {
      opacity: 0,
      x: "+=100",
      stagger: {
        each: 0.05,
      },
    })

    .from("#skill .no", {
      opacity: 0,
    })
    .from("#skill h3 .char", {
      opacity: 0,
      x: "+=100",
      stagger: {
        each: 0.05,
      },
    })
    .from("#skill .skillBox ul li", {
      opacity: 0,
      x: "+=100",
      stagger: {
        each: 0.05,
      },
    })
    .from(mySkill, {
      html: 0,
      js: 0,
      design: 0,
      duration: 5,
      onComplete: function () {},
      onUpdate: function () {
        $("#skill .skillBox li:nth-child(1) .num .txt").text(Math.round(mySkill.html));
        $("#skill .skillBox li:nth-child(2) .num .txt").text(Math.round(mySkill.js));
        $("#skill .skillBox li:nth-child(3) .num .txt").text(Math.round(mySkill.design));
      },
    })
    .from("#skill", {
      duration: 10,
    });

  const contactTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#contact",
      start: "top top",
      end: "bottom top",
      pin: true,
      scrub: 1,
    },
  });
  contactTL
    .from("#contact .txtContents .main .char", {
      opacity: 0,
      x: "+=100",
      stagger: {
        each: 0.1,
      },
    })
    .from(CSSRulePlugin.getRule("#main #contact .main strong::before"), {
      cssRule: {
        scaleX: 0,
      },
    })
    .from("#contact .no", {
      opacity: 0,
    })
    .from("#contact .txtContents .sub .char", {
      opacity: 0,
      x: "+=100",
      stagger: {
        each: 0.1,
      },
    })
    .from("#contact .info .char", {
      opacity: 0,
      x: "+=100",
      stagger: {
        each: 0.1,
      },
    })
    .to("#contact .ship", {
      opacity: 0,
      y: -1300,
      duration: 5,
    })
    .from("#contact .prince", {
      opacity: 0,
    });
}
