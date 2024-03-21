(function(){
    //자바스크립트에서 거의 언제나 사용하는, IIFE(Immediately-invoked function expression: 즉시 작동하는 함수식)라는 구문입니다. "이 안에 들어있는 코드를 바로 실행해라" 라는 표현으로 이해하시면 되겠습니다.

    //ie foreach 대응 IE에서는 document.querySelectorAll()과 같은 노드 배열에 관해서는 forEach메소드를 지원을 하지 않는다.
    //  상단에 노드리스트에 관한 조건을 추가해준후 평소와 같이 사용한다.

    if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = Array.prototype.forEach;
    }

    const navList = document.querySelectorAll('nav li');
    let section = document.querySelectorAll('#wrap > section');
    let pageNum = 0;
    let totalNum = section.length;

    window.addEventListener('scroll', function(){
        let scroll = window.scrollY || window.pageYOffset;

        for(let i = 0; i < totalNum; i++) {
            if(scroll > section[i].offsetTop - window.outerHeight / 1.5 &&
            scroll < section[i].offsetTop - window.outerHeight / 1.5 + section[i].offsetHeight) {
                pageNum = i
                funcObj['f_' + i]();
            }
        }
        pageChangeFunc();
    });

    function pageChangeFunc(){
        for(let i = 0; i < totalNum; i++) {
            navList[i].classList.remove('active');
            section[i].classList.remove('active');
        }
        navList[pageNum].classList.add('active');
        section[pageNum].classList.add('active');
    }

    navList.forEach(function(btn, index){
        btn.addEventListener('click', function(){
            for(let i = 0; i < btn.length; i++){
                btn[i].classList.remove('active');
            }
            gsap.to(window, {
                scrollTo: {
                    y: '#s' + index
                }
            });
            btn.classList.add('active');
        });
    });

    //section function

    let funcObj = {
        f_0: function(){
            console.log(0);

            const tl = gsap.timeline();

            tl.to('#s0 .tit_wrap h1', {
                opacity: 1,
                stagger: .3
            });
            tl.to('#s0 .tit_wrap .circle', {
                opacity: 1,
                stagger: .3
            });
            tl.to('#s0 .tit_wrap .span_wrap span', {
                opacity: 1,
                stagger: .3
            });
        },
        f_1: function(){
            console.log(1);
        },
        f_2: function(){
            console.log(2);
        },
        f_3: function(){
            console.log(3);
        },
        f_4: function(){
            console.log(4);
        },
        f_5: function(){
            console.log(5);
        },
        f_6: function(){
            console.log(6);
        }
    }

    funcObj['f_0']();
}()) //script end