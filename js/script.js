// ###############################################################
// ##################  IMPORTS  ###############################
// ###############################################################

// ###############################################################
// ##################  VARIABLES   ###############################
// ###############################################################

var navItems = document.getElementsByClassName('nav-item');
var navStyle = document.getElementsByTagName('nav');
var aTag = document.getElementsByTagName('a');

// ###############################################################
// ################## CODE #######################################
// ###############################################################

// Receive devices Viewportheight with the maximum of .clientHeight or .innerHeight

var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);


// Devide 9.1 of it to get the nice effect later

var partialViewportHeight = viewportHeight / 9.1;



var last_known_scroll_position = 0;
var ticking = false;

function doSomething(scroll_pos) {

    //

    if (scroll_pos < viewportHeight - partialViewportHeight) {
        navItems[0].classList.add('activeli', 'animated', 'fadeInDown');
        navItems[1].classList.remove('activeli', 'animated', 'fadeInDown');
        navItems[3].classList.remove('activeli', 'animated', 'fadeInDown');
        navItems[4].classList.remove('activeli', 'animated', 'fadeInDown');


        navStyle[0].classList.add('bg1');
        navStyle[0].classList.remove('bg2');
        navStyle[0].classList.remove('bg3');
        navStyle[0].classList.remove('bg4');

        aTag[0].style.color = "black";
        aTag[1].style.color = "black";
        aTag[2].style.color = "black";
        aTag[3].style.color = "black";
        aTag[4].style.color = "black";


    } else if (scroll_pos > viewportHeight - partialViewportHeight && scroll_pos < viewportHeight * 2 - partialViewportHeight) {
        console.log("Scrollolol position =" + scroll_pos);
        navItems[0].classList.remove('activeli', 'animated', 'fadeInDown');
        navItems[1].classList.add('activeli', 'animated', 'fadeInDown');
        navItems[3].classList.remove('activeli', 'animated', 'fadeInDown');
        navItems[4].classList.remove('activeli', 'animated', 'fadeInDown');

        navStyle[0].classList.remove('bg1');
        navStyle[0].classList.add('bg2');
        navStyle[0].classList.remove('bg3');
        navStyle[0].classList.remove('bg4');


        aTag[0].style.color = "black";
        aTag[1].style.color = "black";
        aTag[2].style.color = "black";
        aTag[3].style.color = "black";
        aTag[4].style.color = "black";




    } else if (scroll_pos > viewportHeight * 2 - partialViewportHeight && scroll_pos < viewportHeight * 3 - partialViewportHeight) {
        console.log("Scrollolol position =" + scroll_pos);
        navItems[0].classList.remove('activeli', 'animated', 'fadeInDown');
        navItems[1].classList.remove('activeli', 'animated', 'fadeInDown');
        navItems[3].classList.add('activeli', 'animated', 'fadeInDown');
        navItems[4].classList.remove('activeli', 'animated', 'fadeInDown');


        navStyle[0].classList.remove('bg2');
        navStyle[0].classList.add('bg3');
        navStyle[0].classList.remove('bg4');
        navStyle[0].classList.remove('bg1');

        aTag[0].style.color = "white";
        aTag[1].style.color = "white";
        aTag[2].style.color = "white";
        aTag[3].style.color = "white";
        aTag[4].style.color = "white";



    } else if (scroll_pos > viewportHeight * 3 - partialViewportHeight) {
        console.log("Scrollolol position =" + scroll_pos);
        navItems[0].classList.remove('activeli', 'animated', 'fadeInDown');
        navItems[1].classList.remove('activeli', 'animated', 'fadeInDown');
        navItems[3].classList.remove('activeli', 'animated', 'fadeInDown');
        navItems[4].classList.add('activeli', 'animated', 'fadeInDown');


        navStyle[0].classList.remove('bg1');
        navStyle[0].classList.add('bg4');
        navStyle[0].classList.remove('bg2');
        navStyle[0].classList.remove('bg3');

        aTag[0].style.color = "white";
        aTag[1].style.color = "white";
        aTag[2].style.color = "white";
        aTag[3].style.color = "white";
        aTag[4].style.color = "white";
    }
}

window.addEventListener('scroll', function (e) {

    last_known_scroll_position = window.scrollY;

    if (!ticking) {

        window.requestAnimationFrame(function () {
            doSomething(last_known_scroll_position);
            ticking = false;
        });

        ticking = true;

    }

});





// ###############################################################
// ################## Back to top#################################
// ###############################################################

let viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

console.log(viewportWidth);


let backToTopPositionWidth = viewportWidth / 10;

backToTopPositionWidth1 = backToTopPositionWidth*8;

backToTopPositionWidth2 = backToTopPositionWidth*1;

console.log(backToTopPositionWidth1);

let backToTop = document.querySelectorAll('.backtotop');

backToTop[0].style.left = backToTopPositionWidth1+'px';
backToTop[1].style.left = backToTopPositionWidth2+'px';


window.addEventListener("resize", function(){

let viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);



let backToTopPositionWidth = viewportWidth / 10;
backToTopPositionWidth1 = backToTopPositionWidth*8;
backToTopPositionWidth2 = backToTopPositionWidth*1;
let backToTop = document.querySelectorAll('.backtotop');
let backToTop2 = document.querySelectorAll('.backtotop2');
backToTop[0].style.left = backToTopPositionWidth1-20+'px';
backToTop[1].style.left = backToTopPositionWidth2+'px';
}, true);



