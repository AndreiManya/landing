window.addEventListener('DOMContentLoaded', function() {
  'use strict';

  // let nav = document.querySelector('.nav'),
  //     scrolled = document.querySelectorAll('.scro'),
  //     btns = document.querySelectorAll('.bt'),
  //     doc = document.getElementsByClassName('contentThree')[0];
  
  // nav.addEventListener('click', function(event) {
  //   if(event.target && event.target.classList.contains('bt')){
  //     for(let i=0; i<scrolled.length; i++){
  //       if (event.target == btns[i]){
  //         scrolled[i].scrollIntoView({behavior:"smooth", block: "center"});
  //       }
  //     }
  //   }

  //------------------BURGER-----------------
  let burger = document.querySelector('.nav__burger'), 
  nav  = document.querySelector('.top-nav');
  burger.addEventListener('click', (e)=>{
    burger.classList.toggle('active');
    nav.classList.toggle('active');
  });

  // let link = 

  //-------------------------



//----------------Animation----------
const arr = [document.querySelector('.skills-container'), document.querySelector('.lessons-block'), document.querySelector('.form')];

let isScrolling = false;
 
window.addEventListener("scroll", throttleScroll, false);
 
function throttleScroll(e) {
    if (isScrolling == false ) {
        window.requestAnimationFrame(()=> {
         function k (e) {
          const screenPosition = window.innerHeight / 1.35;

          arr.forEach((item)=>{
            if(item.getBoundingClientRect().top < screenPosition){
              item.classList.add('active');
            } 
          });  
         }
         k();
          isScrolling = false;        
    });
    isScrolling = true;
}
}
//-----------------------

//-------ScrollByclick--------------
let topnav = document.querySelector('.top-nav'),
    li = document.querySelectorAll('li');

topnav.addEventListener('click', function(event) {
  arr.forEach((item)=>{
    if(event.target && event.target.classList.contains('btn')){
      for(let i=0; i<arr.length; i++){
        if (event.target == li[i]){
          arr[i].scrollIntoView({behavior:"smooth", block: "center"});
          burger.classList.toggle('active');
          nav.classList.toggle('active');      
        }
      }
    }
  });
 
});



//----FORM-----

let myForm = document.getElementsByClassName('form-block')[0];
  myForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  // const formData = new FormData();

  // fetch("../server.php", {
  //   method:'POST',
  //   body: formData
  // }).then((response)=>{response.text()}).then((text)=>{console.log(text)});
});


});