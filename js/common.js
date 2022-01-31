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


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date(); //오늘의 날짜 

