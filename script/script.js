let totalJobs =document.getElementById('total-jobs')
let totalInterview =document.getElementById('total-interview')
let totalRejected =document.getElementById('total-rejected')

const allSection = document.getElementById('all-section')
const interviewSection = document.getElementById('interview-section')
const rejectedSection = document.getElementById('rejected-section')
const noJobsSection = document.getElementById('no-jobs-section')

const allTab = document.getElementById('all-tab')
const interviewTab = document.getElementById('interview-tab')
const rejectedTab = document.getElementById('rejected-tab')


// toggle buttons
const primaryButtons = document.querySelector('.primary-buttons')
const allButtons = primaryButtons.querySelectorAll('.btn')
primaryButtons.addEventListener('click' , function(event){
  for(const button of allButtons){
    button.classList.remove('custom-color')
  }
  const selected = event.target
  selected.classList.add('custom-color')
  
})
function calculateJobs(){
  totalJobs.innerText = allSection.children.length
  totalInterview.innerText = interviewSection.children.length
  totalRejected.innerText = rejectedSection.children.length
  
}
calculateJobs()
// hide section
primaryButtons.addEventListener('click', function (event) {
  const btn = event.target

  if (btn.innerText === 'Interview') {

    if (interviewSection.children.length === 0) {
      noJobsSection.classList.remove('hidden')
      allSection.classList.add('hidden')
      rejectedSection.classList.add('hidden')
      interviewSection.classList.add('hidden')
    }

    else {
      allSection.classList.add('hidden')
      rejectedSection.classList.add('hidden')
      interviewSection.classList.remove('hidden')
      noJobsSection.classList.add('hidden')
    }
  }

  else if (btn.innerText === 'All') {

    if (allSection.children.length === 0) {
      noJobsSection.classList.remove('hidden')
      allSection.classList.add('hidden')
      interviewSection.classList.add('hidden')
      rejectedSection.classList.add('hidden')
    }

    else {
      allSection.classList.remove('hidden')
      interviewSection.classList.add('hidden')
      rejectedSection.classList.add('hidden')
      noJobsSection.classList.add('hidden')
    }
  }

  else if (btn.innerText === 'Rejected') {

    if (rejectedSection.children.length === 0) {
      noJobsSection.classList.remove('hidden')
      allSection.classList.add('hidden')
      interviewSection.classList.add('hidden')
      rejectedSection.classList.add('hidden')
    }

    else {
      allSection.classList.add('hidden')
      interviewSection.classList.add('hidden')
      rejectedSection.classList.remove('hidden')
      noJobsSection.classList.add('hidden')
    }
  }
})

