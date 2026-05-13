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
let interviewList = []
let rejectedList = []
const mainContainer = document.querySelector('main')
mainContainer.addEventListener('click' , function(event){
if(event.target.innerText === 'Interview'){
  const parent = event.target.parentNode
  const companyName = parent.querySelector('.company-name').innerText
  const role = parent.querySelector('.role').innerText
  const jobType = parent.querySelector('.job-type').innerText
  const jobTime = parent.querySelector('.job-time').innerText
  const salary = parent.querySelector('.salary').innerText
  const badge = parent.querySelector('.badge').innerText

  const cardInfo = {
    companyName,
    role,
    jobType,
    jobTime,
    salary,
    badge
  }

  const checkExist = interviewList.find(item => item.companyName == cardInfo.companyName)
  parent.querySelector('.badge').innerText = 'Interview'
  parent.querySelector('.badge').className = 'badge btn text-green-500 font-bold border-2 border-green-400 bg-transparent'
  parent.classList.add('border-green-300')

  if(!checkExist){
    interviewList.push(cardInfo)
    
  }
  
  transferToInterview()
    calculateJobs()
}
})

function transferToInterview(){
  interviewSection.innerHTML = ''
  for(let interview of interviewList){
    let div = document.createElement('div')
    div.innerHTML = `
    
    <div
            class="border-green-300 space-y-5 bg-white p-7 rounded-3xl relative border-l-10 "
          >
            <h1 class="company-name font-bold text-xl">
              ${interview.companyName}
            </h1>

            <p class="role text-neutral/50">${interview.role}</p>

            <div class="flex gap-8 text-neutral/50">
              <p class="job-type">${interview.jobType}</p>
              <li class="job-time">${interview.jobTime}</li>
              <li class="salary">${interview.salary}</li>
            </div>

            <!-- badge container -->
            <div>
              <button
                class="badge btn text-green-500 font-bold border-2 border-green-400 bg-transparent"
                disabled
              >
                Interview
              </button>
            </div>

            <p>
              Build cross-platform mobile applications using React Native. Work
              on products used by millions of users worldwide.
            </p>

            <button
              class="btn hover:bg-green-300 hover:text-white text-green-500 font-bold border-2 border-green-400"
            >
              Interview
            </button>

            <button
              class="btn hover:bg-red-300 hover:text-white text-red-400 font-bold border-2 border-red-400 mb-[20px]"
            >
              Rejected
            </button>

            <div class="absolute top-5 right-10">
              <button
                class="btn h-full bg-base-200 rounded-[100%] p-3 border-2 border-gray-400 hover:bg-red-400"
              >
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </div>
          </div>
    
    `
    interviewSection.append(div)
  }
}