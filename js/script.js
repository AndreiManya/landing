window.addEventListener('DOMContentLoaded', function() {
  'use strict';

  let nav = document.querySelector('.nav'),
      scrolled = document.querySelectorAll('.scro'),
      btns = document.querySelectorAll('.bt'),
      doc = document.getElementsByClassName('contentThree')[0];
  
  nav.addEventListener('click', function(event) {
    if(event.target && event.target.classList.contains('bt')){
      for(let i=0; i<scrolled.length; i++){
        if (event.target == btns[i]){
          scrolled[i].scrollIntoView({behavior:"smooth", block: "center"});
        }
      }
    }

  });