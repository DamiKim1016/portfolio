const menuList = document.querySelectorAll('.folder_wrap .folder');
const CONTENT = document.querySelectorAll('.show_box .design');

menuList.forEach(function(btn, q){
    btn.addEventListener('dblclick', function() {
        console.log(q);

        //클릭한 요소 외의 다른 함수 적용 없애기
        for(let i = 0; i < menuList.length; i++){
            menuList[i].classList.remove('On');
            CONTENT[i].classList.remove('Act');
        }

        //클릭한 요소 색 바꾸기
        menuList[q].classList.add('On');
        CONTENT[q].classList.add('Act');
    });
});

const swiper = new Swiper(".design", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});