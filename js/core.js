function burgerMenu(selector){
    let menu = $(selector);
    let button = menu.find('.burger-menu__button');
    let links = menu.find('.burger-menu__link');
    let overlay = menu.find('burger-menu__overlay');

    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());

    function toggleMenu() {
        menu.toggleClass ('burger-menu_active');

        if (menu.hasClass('burger-menu_active')) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overFlow', 'visible');
        }
    }
}

burgerMenu('.burger-menu');

document.querySelectorAll('.accordion').forEach((el) => {
    el.addEventListener('click', () => {

        let content = el.nextElementSibling;
        console.log(content)

        if(content.style.maxHeight) {
            document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null)
        } else {
            document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null)
            content.style.maxHeight = content.scrollHeight + 'px'
        }
    })
})


var tab;
var tabContent;

window.onload=function () {
    tabContent=document.getElementsByClassName('tabContent');
    tab=document.getElementsByClassName('tab');
    hideTabsContent(1);
}

function hideTabsContent(a) {
    for (var i=a; i<tabContent.length; i++){
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('whiteborder');
    }
}

document.getElementById('tabs').onclick=function (event) {
    var target=event.target;
    if (target.className=='tab'){
        for (var i=0; i<tab.length; i++){
            if(target == tab[i]){
              showTabsContent(i);
              break;
            }
        }
    }
}

function showTabsContent(b) {
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
};

const btns = document.querySelectorAll('.buttons button');
const imgs = document.querySelectorAll('.image img');

for(let i = 1; i < btns.length; i++) {
    btns[i].addEventListener('click', filterImg);
}

function setActiveBtn(e) {
    btns.forEach(btn => {
        btn.classList.remove('btn-clicked');
    });

    e.target.classList.add('btn-clicked');
}

function filterImg(e) {
    setActiveBtn(e);
    imgs.forEach(img =>{
        img.classList.remove('img-shrink');
        img.classList.add('img-expand');

        const imgType = parseInt(img.dataset.img);
        const btnType = parseInt(e.target.dataset.btn);

        if(imgType !== btnType){
            img.classList.remove('img-expand');
            img.classList.add('img-shrink');
        }
    });
}

btns[0].addEventListener('click', (e) => {
    setActiveBtn(e);
    imgs.forEach(img =>{
        img.classList.remove('img-shrink');
        img.classList.add('img-expand');
    });
})


document.getElementById('slider-left').onclick = sliderLeft;
var left = 0;
function sliderLeft() {
    var polosa = document.getElementById('polosa');
    left = left - 221;
    if (left < -884) {
        left = 0;
    }
    polosa.style.left = left +'px';
}

var modal = document.getElementById('myModal');
var btn = document.getElementById('myBtn');
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}
