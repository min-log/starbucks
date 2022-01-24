const searchEl = document.querySelector('.search'); //HTML 
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function(){
    searchInputEl.focus();//focus 강재 적용
});

searchInputEl.addEventListener('focus',function(){
    searchEl.classList.add('focused'); // 클레스 추가
    searchInputEl.setAttribute('placeholder','통합검색')//html 속성 지정
});
searchInputEl.addEventListener('blur',function(){ 
    //focus 가 제거 되면 
    searchEl.classList.remove('focused'); // 클레스 추가
    searchInputEl.setAttribute('placeholder','')//html 속성 지정
});

//header scroll animation  플러그인 사용
const badgesEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

//플러그인 함수의 개수를 일정시간에 한번씩만 활용되도록  scroll  이벤트시 많이 사용
//_.throttle(함수,시간)
window.addEventListener('scroll',_.throttle(function(){
    console.log(window.scrollY);
    if(window.scrollY > 500){
       // 배지 숨기기 
        //badgesEl.style.display = 'none';
        //gsap.to(요소,지속시간,옵션);
        gsap.to(badgesEl,0.6,{
           opacity:0,
           display:'none'
        });

        // top  버튼 보이기
        //gsap.to('#to-top',0.2,{
        gsap.to(toTopEl,0.2,{
            x: 0
        })
    }else{
      //배지 보이기
      //badgesEl.style.display = 'block';
        gsap.to(badgesEl,0.6,{
            opacity:1,
            display:'block'
        });
        // top  버튼 숨기기
        //gsap.to('#to-top',0.2,{
        gsap.to(toTopEl,0.2,{
            x: 100
        })
    }
},300)); 

//gsap - ScrollToPlugin 
toTopEl.addEventListener('click',function(){
    gsap.to(window,0.7,{
        scrollTo:0
    });
});



// main visual
const fadeEls = document.querySelectorAll('.visual .fade-in');
// 반복
fadeEls.forEach(function(fadeEl, index){ // 객채 , 갯수
     //gsap.to(요소,지속시간,옵션);
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7, // 몇초뒤 실행 - 1번요소 0.7 , 2번 1.4,3번 2.1 , 4번 2.7 초뒤 동작
        opacity: 1
    });
});

//notice -swiper

//new Swiper //생성자 자바스크립트 문법
// 선택자 , 옵션
const noticSwiper = new Swiper('.notice-line .swiper-container',{
    direction:'vertical',
    autoplay: true,
    loop:true,
    
});





const promotionSwiper = new Swiper('.promotion .swiper-container',{
    slidesPerView: 3,
    spaceBetween:10, // 사이 여백 10px
    centeredSlides:true,//가운데 정렬
    loop: true,
    //autoplay: {
    //    delay : 5000 // 5초
    //}
    pagination:{
        el:'.promotion .swiper-pagination', // 페이지 번호요소 선택자
        clickable: true, //클릭하여 제어 가능
    },
    navigation:{
        prevEl:'.promotion .swiper-prev',
        nextEl:'.promotion .swiper-next',
    }
});

new Swiper('.awards .swiper-container', {
    //direction:'horizontal',
    autoplay:true,
    loop:true,
    spaceBetween:30,
    slidesPerView: 5,
    navigation:{
        prevEl:'.awards .swiper-prev',
        nextEl:'.awards .swiper-next',
    }
})



const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false; // 프로모션 영역이 숨겨져 있는지 확인 - 재할당가능

promotionToggleBtn.addEventListener('click',function(){
    //! 반대값으로 변경 false  였으면 true 로
    isHidePromotion = !isHidePromotion 
    if(isHidePromotion){
        //숨김처리
        //console.log('hide');
        promotionEl.classList.add('hide');
    }else{
        //보여주기
        //console.log('show');
        promotionEl.classList.remove('hide');
        
    }


});



/*============================
애니메이션
============================*/
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
 // `.toFixed()`를 통해 반환된 문자 데이터를,
 // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
 return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, sizey){
    //gsap.to(요소,시간,옵션);
    gsap.to(
        selector, //셀렉터
        random(1.5, 2.5), // 지속시간
        { // 옵션
            y: sizey, //y축에서 20
            repeat:-1, //반복 -1 = 무한반복
            yoyo: true, //뒤로 돌리기
            ease: Power1.easeInOut, // 움직임 제어
            delay:random(0, delay), // 초 동안정지

        }
    );
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);




const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
    new ScrollMagic
        .Scene({
           //감시 하는 옵션 Scene
            triggerElement: spyEl, //보여짐의 여부를 감시할 요소를 선택
            triggerHook: .8// 뷰포트의 지점 옵션 상단 0 하단 1 
        })
        .setClassToggle(spyEl, 'show')//클레스 지정 setClassToggle
        .addTo(new ScrollMagic.Controller());
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date(); //오늘의 날짜 

