// toggle color function
const cards = document.getElementById('all-card')
const interCards = document.getElementById('interview-cards')
const section = document.getElementById('no-jobs')
const rejectCards = document.getElementById('rejected-cards')
const totalInterview = document.getElementById('total-inter')
const totalReject = document.getElementById('total-reject')
function toggleColor(id){
const allBtn = document.getElementById('all-btn')
const interBtn = document.getElementById('inter-btn')
const rejectBtn = document.getElementById('reject-btn')

allBtn.classList.remove('custom-color')
interBtn.classList.remove('custom-color')
rejectBtn.classList.remove('custom-color')

const selected = document.getElementById(id)
selected.classList.add('custom-color')
}

function totalJobs(){
  const totalJob =   document.getElementById('total-jobs')
  totalJob.innerText = cards.children.length
  
  
  
    totalInterview.innerText = interCards.children.length

    
  
    totalReject.innerText = rejectCards.children.length
}

totalJobs()

document.getElementById('inter-btn').addEventListener('click',function(){
    const totalJobs = document.getElementById('total')
    const interCards = document.getElementById('interview-cards')
    totalJobs.innerText = interCards.children.length
   
    section.classList.remove('hidden')
    cards.classList.add('hidden')
})
document.getElementById('reject-btn').addEventListener('click',function(){
     const totalJobs = document.getElementById('total')
    const rejectCards = document.getElementById('rejected-cards')
    totalJobs.innerText = rejectCards.children.length
  
    section.classList.remove('hidden')
    cards.classList.add('hidden')
})
function show(){
      const totalJobs = document.getElementById('total')
    totalJobs.innerText = cards.children.length
       
}
show()
document.getElementById('all-btn').addEventListener('click',function(){
  const totalJobs = document.getElementById('total')
    totalJobs.innerText = cards.children.length
    section.classList.add('hidden')
    cards.classList.remove('hidden')
})


