//JQuery
//axios // react/vue


const itemList = document.querySelector(".itemList");
const filter = document.querySelector("#filter ul");
let iso = null;

//제이슨 불러오는 방법 세가지
//첫번째 방법
fetch("../data/typo.json")
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    const typoList = result.typoList;
    let tempHtml = "";
    typoList.forEach(function (item,idx) {
      tempHtml += `
    <li class="item ${item.category}">
      <a href="../images/${item.img}" data-fancybox="${item.category}"> //팬시박스 적용: 클릭하면 바로 이미지 폴더가 뜬다
        <div class="img">
          <img src="../images/${item.img}" alt="" />
        </div>
        <div class="info">
          <h2>${item.title}</h2>
          <p class="desc">${item.desc}</p>
          <p class="point">
            <span>${item.point}</span>
          </p>
        </div>
      </a>
    </li>
    `;
    });
    itemList.innerHTML = tempHtml; // li 가 생성됨
    imagesLoaded( itemList, function(){
        iso = new Isotope( itemList, {
            // options
            itemSelector: '.item',
            layoutMode: 'masonry',
            getSortData: {
                point:".point", 
                //내가 키워드 삼을 것/내가 이름 지정:".클래스
                title:".title",
            },
            sortBy:["point","title"], //포인트로 정렬 , 타이틀 정렬
            sortAsending:false, //내림차순 true로 바꾸면 올림차순
        });
    });
  });

  

//제이쿼리로 불러오는 방법 두번째
/*
$.ajax({
  url: "../data/typo.json",
  success: function (result) {
    const typoList = result.typoList;
    console.log(result);
    let tempHtml = "";
    typoList.forEach(function (item, idx) {
      tempHtml += `
        <li class="item ${item.category}">
          <a href="title">
            <div class="img">
              <img src="../images/${item.img}" alt="" />
            </div>
            <div class="info">
              <h2>${item.title}</h2>
              <p class="desc">${item.desc}</p>
              <p class="point">
                <span>${item.point}</span>
              </p>
            </div>
          </a>
        </li>
    `;
    });
    $(".itemList").html(tempHtml);
  },
});
*/


//axios로 불러오는 방법 세번째_axios.js연결
// axios
// .get("../data/typo.json")
// .then(function (result) {
//   console.log(result.data);
//   const typoList = result.data.typoList;
//   let tempHtml="";
//   typoList.forEach(function(item,idx){
//     tempHtml+=`
//     <li class="item ${item.category}">
//       <a href="title">
//         <div class="img">
//           <img src="../images/${item.img}" alt="" />
//         </div>
//         <div class="info">
//           <h2>${item.title}</h2>
//           <p class="desc">${item.desc}</p>
//           <p class="point">
//             <span>${item.point}</span>
//           </p>
//         </div>
//       </a>
//     </li>
//     `
//   })
//   itemList.innerHTML = tempHtml;
// });

const cursor = document.querySelector(".cursor");
const cursorTxt = document.querySelector(".cursor .txt");


window.addEventListener("mousemove",function(e){
// console.log(e);

//cursor.style.left = e.clientX+"px";
//cursor.style.top = e.clientY+"px";
gsap.to(cursor,{left: e.clientX, top: e.clientY});

// 마우스 움직임 
$("input[name='clientY']").val(e.clientY);
$("input[name='pageY']").val(e.pageY);
$("input[name='offsetY']").val(e.offsetY);
$("input[name='screenY']").val(e.screenY);
});

// document.body.addEventListener("mouseenter",function(e){
//     console.log(e.target);
// });


//마우스 올렸을때 커지면서 글자나타나기
itemList.addEventListener("mouseenter",function(e){
   // console.log(e.target);
   gsap.to(cursor,{width:80,height:80,backgroundColor:"#c92a2a",ease: "elastic", duration:1});
   cursorTxt.textContent="VIEW";
});
//마우스 떠나면 작아지면서 글자사라지기
itemList.addEventListener("mouseleave",function(e){
    // console.log(e.target);
    gsap.to(cursor,{width:10,height:10,backgroundColor:"#ffffff",ease: "elastic", duration:1});
    cursorTxt.textContent="";
 });

 filter.addEventListener("mouseenter",function(e){
    gsap.to(cursor,{width:60,height:30,backgroundColor:"blue",ease: "elastic", duration:1});
   cursorTxt.textContent="Click";
 });
 filter.addEventListener("mouseleave",function(e){
    // console.log(e.target);
    gsap.to(cursor,{width:10,height:10,backgroundColor:"#ffffff",ease: "elastic", duration:1});
    cursorTxt.textContent="";
 });

const items = filter.querySelectorAll("li"); // 필터에 리스트 찾기 변수지정

 filter.addEventListener("click", function (e) {
    const item = e.target;
    const filterWord = `.${item.dataset.filter}`;
 
    //  메뉴에 클래스 떼어주기
    items.forEach(function(item,idx){
        item.classList.remove("on");
    });
    console.log(item.parentElement);
    item.classList.add("on");
    console.log("🚀 ~ file: main.js:140 ~ filterWord", filterWord);
    iso.arrange({ filter: filterWord ,sortBy: "point" }); //소팅 순서대로 나열
    //iso.arrange();
 });

 //자동 코드 작성
 // html ul li create
