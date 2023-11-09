function waitForElm(selector) {
          return new Promise(resolve => {
              if (document.querySelector(selector)) {
                  return resolve(document.querySelector(selector));
              }
      
              const observer = new MutationObserver(mutations => {
                  if (document.querySelector(selector)) {
                      observer.disconnect();
                      resolve(document.querySelector(selector));
                  }
              });
      
              observer.observe(document.body, {
                  childList: true,
                  subtree: true
              });
          });
      }

      

    waitForElm('video').then((elm) => {

      elm.addEventListener("canplay", function(){
        console.log('Video can Play');
        console.log(elm);
        elm.play();        
        document.querySelectorAll('div')[5].style.display='none';
      }, false);
      elm.addEventListener('ended',function(){
          console.log('Video has ended!');
        }, false);  
      elm.addEventListener('play', e => {
        console.log('video playing');
      });    
    });
