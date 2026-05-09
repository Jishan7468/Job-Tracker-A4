
// toggle buttons
const primaryButtons = document.querySelector('.primary-buttons')
primaryButtons.addEventListener('click' , function(event){
  const allButtons = primaryButtons.querySelectorAll('.btn')
  for(const button of allButtons){
    button.classList.remove('custom-color')
  }
  const selected = event.target
  selected.classList.add('custom-color')
  
})