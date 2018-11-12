var navItems = document.getElementsByClassName('nav-item');
var navAItems = document.getElementsByClassName('nav-a-class');
var navStyle = document.getElementsByTagName('nav');
var aTag = document.getElementsByTagName('a');

var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
console.log(viewportHeight);

var partialViewportHeight = viewportHeight / 9.1;


function setNavbar(){

}



var last_known_scroll_position = 0;
var ticking = false;

function doSomething(scroll_pos) {

    //

  if (scroll_pos < viewportHeight-partialViewportHeight){
      navItems[0].classList.add('activeli');
      navItems[1].classList.remove('activeli');
      navItems[3].classList.remove('activeli');
      navItems[4].classList.remove('activeli');
//
//      navAItems[0].classList.add('active');
//      navAItems[1].classList.remove('active');


      navStyle[0].classList.add('bg1');
      navStyle[0].classList.remove('bg2');
      navStyle[0].classList.remove('bg3');
      navStyle[0].classList.remove('bg4');

      aTag[0].style.color = "black";
      aTag[1].style.color = "black";
      aTag[2].style.color = "black";
      aTag[3].style.color = "black";
      aTag[4].style.color = "black";


  }

    else if(scroll_pos > viewportHeight-partialViewportHeight && scroll_pos < viewportHeight*2-partialViewportHeight){
        console.log("Scrollolol position ="+scroll_pos);
        navItems[0].classList.remove('activeli');
        navItems[1].classList.add('activeli');
        navItems[3].classList.remove('activeli');
        navItems[4].classList.remove('activeli');

//        navAItems[0].classList.remove('active');
//        navAItems[1].classList.add('active');
//        navAItems[3].classList.remove('active');
//        navAItems[4].classList.remove('active');

        navStyle[0].classList.remove('bg1');
        navStyle[0].classList.add('bg2');
        navStyle[0].classList.remove('bg3');
        navStyle[0].classList.remove('bg4');


        aTag[0].style.color = "black";
      aTag[1].style.color = "black";
      aTag[2].style.color = "black";
      aTag[3].style.color = "black";
      aTag[4].style.color = "black";




    }

    else if(scroll_pos > viewportHeight*2-partialViewportHeight && scroll_pos < viewportHeight*3-partialViewportHeight){
        console.log("Scrollolol position ="+scroll_pos);
        navItems[0].classList.remove('activeli');
        navItems[1].classList.remove('activeli');
        navItems[3].classList.add('activeli');
        navItems[4].classList.remove('activeli');

//        navAItems[0].classList.remove('active');
//        navAItems[1].classList.remove('active');
//        navAItems[3].classList.add('active');
//        navAItems[4].classList.remove('active');

        navStyle[0].classList.remove('bg2');
        navStyle[0].classList.add('bg3');
        navStyle[0].classList.remove('bg4');
        navStyle[0].classList.remove('bg1');

        aTag[0].style.color = "white";
        aTag[1].style.color = "white";
        aTag[2].style.color = "white";
        aTag[3].style.color = "white";
        aTag[4].style.color = "white";



    }

     else if(scroll_pos > viewportHeight*3-partialViewportHeight ){
        console.log("Scrollolol position ="+scroll_pos);
        navItems[0].classList.remove('activeli');
        navItems[1].classList.remove('activeli');
        navItems[3].classList.remove('activeli');
        navItems[4].classList.add('activeli');

//        navAItems[0].classList.remove('active');
//        navAItems[1].classList.remove('active');
//        navAItems[3].classList.remove('active');
//        navAItems[4].classList.add('active');

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

window.addEventListener('scroll', function(e) {

  last_known_scroll_position = window.scrollY;

  if (!ticking) {

    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;

  }

});
