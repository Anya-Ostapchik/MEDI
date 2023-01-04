;(function(){
    let body = document.querySelector('body');
    let burger = document.querySelector('.burger');
    let burger__itm = document.querySelector('.burger__itm');
    let btn = document.querySelector('.main-nav__btn');
    let nav = document.querySelector('.nav');

    burger.addEventListener('click', function() {
        burger.classList.toggle('active');
        burger__itm.classList.toggle('active');
        body.classList.toggle('active');
        nav.classList.toggle('active');
    });
})();
;(function(){
    let oursalons__main = document.querySelector('.oursalons__main');
    let header__oursalons = document.querySelector('.header__our-salons');
    let oursalons = document.querySelector('.oursalons');

    header__oursalons.addEventListener('click', () => {
        oursalons__main.classList.toggle('active');
        oursalons.classList.toggle('active');
    });

})();
;(function(){
    let btn = document.querySelector('.main-nav__btn');
    let body = document.querySelector('body');
    let popap = document.querySelector('.popap');

    let unlock = true;
    let timeout = 800;
    
    btn.addEventListener('click', function() {
        popap.classList.add('open');
        body.classList.add('open');
    });

    let close = document.querySelector('.popap__close');

    close.addEventListener('click', closePopap);
    popap.addEventListener('click', function(event) {
        if(!event.target.closest('.popap__content')){
            closePopap(event.target.closest('.popap'));
        }
    });
    function closePopap(){
        popap.classList.remove('open');
        body.classList.remove('open');
    }

    let popap__btn = document.querySelector('.popap__btn');
    let popap__input_one = document.querySelector('.popap__input_one');
    let popap__input_two = document.querySelector('.popap__input_two');
    let popap__input_three = document.querySelector('.popap__input_three');
    let popap__text = document.querySelector('.popap__text');

    popap__btn.addEventListener('click', () => {
        if(popap__input_one.value === '' || popap__input_two.value === '' || popap__input_three.value === ''){
            if(popap__input_one.value === ''){
                popap__input_one.style.background = 'rgba(255, 0, 0, 0.575)';
                popap__text.textContent = 'Пожалуйста, заполните все поля';
                popap__input_one.addEventListener('focus', () => {
                    popap__input_one.style.background = 'white';
                });
            }
            if(popap__input_two.value === ''){
                popap__input_two.style.background = 'rgba(255, 0, 0, 0.575)';
                popap__text.textContent = 'Пожалуйста, заполните все поля';
                popap__input_two.addEventListener('focus', () => {
                    popap__input_two.style.background = 'white';
                });
            }
            if(popap__input_three.value === ''){
                popap__input_three.style.background = 'rgba(255, 0, 0, 0.575)';
                popap__text.textContent = 'Пожалуйста, заполните все поля';
                popap__input_three.addEventListener('focus', () => {
                    popap__input_three.style.background = 'white';
                });
            }
        } 
        else{
            popap__input_one.value = '';
            popap__input_two.value = '';
            popap__input_three.value = '';

            popap__text.innerHTML = 'Ваша заявка успешно принята, <br> ожидайте звонок оператора';
        }
    }); 
})();
;(function(){
    // let center__arrow_left = document.querySelector('.center__arrow_left');
    // let center__arrow_rigth = document.querySelector('.center__arrow_rigth');

    // let slideIndex = 1;
    // showSlides(slideIndex);

    // center__arrow_left.addEventListener('click', function minusSlides(){
    //     showSlides(slideIndex -= 1);
    // });
    // center__arrow_rigth.addEventListener('click', function plusSlides(){
    //     showSlides(slideIndex += 1);
    // });

    // function showSlides(n){
    //     let i;
    //     let slides = document.querySelectorAll('.center__desc');
        
    //     if(n > slides.length){
    //         slideIndex = 1;
    //     }
    //     if(n < 1){
    //         slideIndex = slides.length;
    //     }
    //     for(i = 0; i < slides.length; i++){
    //         slides[i].style.display = 'none';
    //     }
    //     slides[slideIndex - 1].style.display = 'flex';
    // }

    // let center__arrow_left = document.querySelector('.center__arrow_left');
    // let center__arrow_rigth = document.querySelector('.center__arrow_rigth');
    let desc = document.querySelectorAll('.center__desc');

    desc[0].classList.add('center__desc_active');

    

    // for(let i = 0; i < desc.length; i++){
    //     let dataNum = desc[i].dataset.number;

    //     center__arrow_left.addEventListener('click', () => {
    //         for(let i = 0; i < desc.length; i++){
    //             for(let j = 0; j < desc.length; j++){
    //                 if(desc[j].classList.contains('center__desc_active')){
    //                     desc[j].classList.remove('center__desc_active');
    //                 }
    //             }
    //             if(desc[i].dataset.num === 1){
    //                 dataNum = 5;

    //                 // desc[dataNum].classList.add('center__desc_active');
    //             }
    //             desc[dataNum -= 1].classList.add('center__desc_active');
    //             console.log(dataNum);

    //         }
        
    //     });
    // }

})();

;(function(){
    let num = document.querySelectorAll('.numbers__item_num');
    let text = document.querySelectorAll('.numbers__item_text');
    let img = document.querySelectorAll('.numbers__img');

    let i = 0;

    setInterval(() => {

        if(i === num.length - 1){
            addClassActive();
            i = 0;
        } else{  
            addClassActive();
            i++;
        }
    }, 3000);


    function addClassActive(){
        for(let j = 0; j < num.length; j++){
            num[j].classList.remove('numbers__item_num_active');
            text[j].classList.remove('numbers__item_text_active');
            img[j].classList.remove('numbers__img_active');
        }
        num[i].classList.add('numbers__item_num_active');
        text[i].classList.add('numbers__item_text_active');
        img[i].classList.add('numbers__img_active');
    }
})();
;(function(){
    let items = document.querySelectorAll('.news__elems_item');
    let desc = document.querySelectorAll('.news__desc_item');

    items[0].classList.toggle('news__elems_item_active');
    desc[0].classList.toggle('news__desc_item_active');

    for(let item of items){
        item.addEventListener('click', function() {
            for(let i = 0; i < desc.length; i++){
                desc[i].classList.remove('news__desc_item_active');
            }
            for(let elem of desc){
                if(this.dataset.num === elem.dataset.num){
                    elem.classList.toggle('news__desc_item_active');
                }
            }
            for(let i = 0; i < items.length; i++){
                items[i].classList.remove('news__elems_item_active');
            }
            this.classList.toggle('news__elems_item_active');
        });
    }
    
})();