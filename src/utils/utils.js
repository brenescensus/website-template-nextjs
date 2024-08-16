import React from 'react'

export default function AnimationsCreate() {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '30px',
        duration: 1000,
        delay: 400,
      });
      
       sr.reveal('.here_text',{origin:'left'});
       sr.reveal('.stp',{distance:'20px',origin:'left',interval:100});
    
}





   