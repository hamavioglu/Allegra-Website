const entrance=document.querySelector('.entrance');
const logo=document.querySelector('.logo-button');
const navigation=document.querySelector('#site-navigation');
function setOpen(open){
  if(!open&&navigation.contains(document.activeElement))logo.focus();
  entrance.classList.toggle('is-open',open);
  logo.setAttribute('aria-expanded',String(open));
  logo.setAttribute('aria-label',open?'Close Allegra navigation':'Open Allegra navigation');
  navigation.inert=!open;
  navigation.setAttribute('aria-hidden',String(!open));
}
logo.addEventListener('click',()=>{if(entrance.classList.contains('models-open')){document.querySelector('#back-menu').click();return}setOpen(logo.getAttribute('aria-expanded')!=='true')});
document.addEventListener('keydown',event=>{if(event.key==='Escape')setOpen(false)});
