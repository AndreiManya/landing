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


  let form = document.querySelector('form');

  // form.addEventListener('sumbit', (e)=>{
  //   let user = {
  //     name: 'John',
  //     surname: 'Smith'
  //   };
    
  //   return fetch('/data.txt', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8'
  //     },
  //     body: JSON.stringify(document.querySelector('form'))
  //   });
    
  
  // });


  let isScrolling = false;
 
window.addEventListener("scroll", throttleScroll, false);
 
function throttleScroll(e) {
    if (isScrolling == false ) {
        window.requestAnimationFrame(()=> {
         function k (e) {
          const screenPosition = window.innerHeight / 1.35;
          const arr = [document.querySelector('.skills-container'), document.querySelector('.lessons-block'), document.querySelector('.form')];

          arr.forEach((item)=>{
            if(item.getBoundingClientRect().top < screenPosition){
              item.classList.add('active');
            }
          })
          
         }
         k();
          isScrolling = false;
        
    });
    isScrolling = true;
}
 


}
});
