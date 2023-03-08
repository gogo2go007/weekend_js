

//상수는 보통 변수 대문자
//상수를 직접 넣지 않아서 변수로 치환해서 삽입
const Z_VALUE = 5000;
const WHEEL_STEP = 2;
const Z_STEP = Z_VALUE / WHEEL_STEP;

$.ajax({
        url:"../data/mario.json",
        success:function(result){
            console.log(result);
            let tempHtml="";
            //result.items.forEach(function(item,idx){})
            //제이쿼리에서는 반대
            $.each(result.items,function(idx,item){
                tempHtml+=`
                <li style="background:${item.bg}; transform: translateZ(-${idx*Z_VALUE}px); z-index:${100-idx}"> 
                    <div class="img">
                        <img src="${item.img}">
                    </div>    
                    <div class="info">
                        <h2 class="title">${item.title}</h2>
                        <p class="desc">${item.desc}</p>
                        <a href="${item.link}" target="_blank">MORE</a>
                    </div>
                </li>
                `;
            });
            $("#itemList").html(tempHtml);
        },
    });

    $(window).on("mousewheel", function(e){
        console.log(e);
        const wheel = e.originalEvent.deltaY;
        //조건 걸어보기 _이미지 너무 커지지 않게 작아지지않게
        if(wheel > 0){
            // 아래
            $("#itemList li").each(function(idx,item){
                gsap.to(item,{z:`+=${Z_STEP}`})
            });
        }
        else{
            // 위
            $("#itemList li").each(function(idx,item){
                gsap.to(item,{z:`-=${Z_STEP}`})
            });
        }
    });