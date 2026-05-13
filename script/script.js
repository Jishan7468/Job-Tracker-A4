let totalJobs = document.getElementById('total-jobs')
let totalInterview = document.getElementById('total-interview')
let totalRejected = document.getElementById('total-rejected')
const sectionCount = document.getElementById('section-count')

const allSection = document.getElementById('all-section')
const interviewSection = document.getElementById('interview-section')
const rejectedSection = document.getElementById('rejected-section')
const noJobsSection = document.getElementById('no-jobs-section')

const allTab = document.getElementById('all-tab')
const interviewTab = document.getElementById('interview-tab')
const rejectedTab = document.getElementById('rejected-tab')

let activeTab = 'all'


// toggle buttons
const primaryButtons = document.querySelector('.primary-buttons')
const allButtons = primaryButtons.querySelectorAll('.btn')
primaryButtons.addEventListener('click', function (event) {
  for (const button of allButtons) {
    button.classList.remove('custom-color')
  }
  const selected = event.target
  selected.classList.add('custom-color')
})


let allJobs = []
let interviewList = []
let rejectedList = []


// grab all the cards already in the HTML and store them
for (const card of allSection.children) {
  const companyName = card.querySelector('.company-name').innerText
  const role = card.querySelector('.role').innerText
  const jobType = card.querySelector('.job-type').innerText
  const jobTime = card.querySelector('.job-time').innerText
  const salary = card.querySelector('.salary').innerText

  const cardInfo = {
    companyName,
    role,
    jobType,
    jobTime,
    salary,
    status: 'none'
  }

  allJobs.push(cardInfo)
}


function calculateJobs() {
  totalJobs.innerText = allJobs.length
  totalInterview.innerText = interviewList.length
  totalRejected.innerText = rejectedList.length

  if (activeTab === 'all') sectionCount.innerText = allJobs.length
  else if (activeTab === 'interview') sectionCount.innerText = interviewList.length
  else if (activeTab === 'rejected') sectionCount.innerText = rejectedList.length
}
calculateJobs()


// hide section
function showSection(tab) {
  activeTab = tab  // set activeTab first
  calculateJobs() // now calculateJobs knows the correct tab

  allSection.classList.add('hidden')
  interviewSection.classList.add('hidden')
  rejectedSection.classList.add('hidden')
  noJobsSection.classList.add('hidden')

  if (tab === 'all') {
    if (allJobs.length === 0) {
      noJobsSection.classList.remove('hidden')
    } else {
      transferToAll()
      allSection.classList.remove('hidden')
    }
  }

  else if (tab === 'interview') {
    if (interviewList.length === 0) {
      noJobsSection.classList.remove('hidden')
    } else {
      transferToInterview()
      interviewSection.classList.remove('hidden')
    }
  }

  else if (tab === 'rejected') {
    if (rejectedList.length === 0) {
      noJobsSection.classList.remove('hidden')
    } else {
      transferToRejected()
      rejectedSection.classList.remove('hidden')
    }
  }
}


primaryButtons.addEventListener('click', function (event) {
  const btn = event.target

  if (btn.innerText === 'All') {
    showSection('all')
  }

  else if (btn.innerText === 'Interview') {
    showSection('interview')
  }

  else if (btn.innerText === 'Rejected') {
    showSection('rejected')
  }
})


// card button clicks
const mainContainer = document.querySelector('main')
mainContainer.addEventListener('click', function (event) {

  if (event.target.innerText === 'Interview') {
    const parent = event.target.parentNode
    const companyName = parent.querySelector('.company-name').innerText
    const role = parent.querySelector('.role').innerText
    const jobType = parent.querySelector('.job-type').innerText
    const jobTime = parent.querySelector('.job-time').innerText
    const salary = parent.querySelector('.salary').innerText

    const cardInfo = {
      companyName,
      role,
      jobType,
      jobTime,
      salary,
      status: 'interview'
    }

    // update status in allJobs
    const jobInAll = allJobs.find(item => item.companyName === companyName)
    if (jobInAll) {
      jobInAll.status = 'interview'
    }

    // remove from rejectedList if it was there
    rejectedList = rejectedList.filter(item => item.companyName !== companyName)

    // add to interviewList if not already there
    const checkExist = interviewList.find(item => item.companyName === companyName)
    if (!checkExist) {
      interviewList.push(cardInfo)
    }

    calculateJobs()
    showSection(activeTab)
  }


  else if (event.target.innerText === 'Rejected') {
    const parent = event.target.parentNode
    const companyName = parent.querySelector('.company-name').innerText
    const role = parent.querySelector('.role').innerText
    const jobType = parent.querySelector('.job-type').innerText
    const jobTime = parent.querySelector('.job-time').innerText
    const salary = parent.querySelector('.salary').innerText

    const cardInfo = {
      companyName,
      role,
      jobType,
      jobTime,
      salary,
      status: 'rejected'
    }

    // update status in allJobs
    const jobInAll = allJobs.find(item => item.companyName === companyName)
    if (jobInAll) {
      jobInAll.status = 'rejected'
    }

    // remove from interviewList if it was there
    interviewList = interviewList.filter(item => item.companyName !== companyName)

    // add to rejectedList if not already there
    const checkExist = rejectedList.find(item => item.companyName === companyName)
    if (!checkExist) {
      rejectedList.push(cardInfo)
    }

    calculateJobs()
    showSection(activeTab)
  }


  else if (event.target.classList.contains('delete-btn')) {
    const parent = event.target.parentNode.parentNode
    const companyName = parent.querySelector('.company-name').innerText

    allJobs = allJobs.filter(item => item.companyName !== companyName)
    interviewList = interviewList.filter(item => item.companyName !== companyName)
    rejectedList = rejectedList.filter(item => item.companyName !== companyName)

    calculateJobs()
    showSection(activeTab)
  }

})


function transferToAll() {
  allSection.innerHTML = ''
  for (let job of allJobs) {
    let div = document.createElement('div')

    let borderColor = 'border-gray-200'
    if (job.status === 'interview') {
      borderColor = 'border-green-300'
    }
    else if (job.status === 'rejected') {
      borderColor = 'border-red-300'
    }

    let badgeHTML = '<button class="badge btn bg-blue-100 text-black font-normal" disabled>Not Applied</button>'
    if (job.status === 'interview') {
      badgeHTML = '<button class="badge btn text-green-500 font-bold border-2 border-green-400 bg-transparent" disabled>Interview</button>'
    }
    else if (job.status === 'rejected') {
      badgeHTML = '<button class="badge btn text-red-500 font-bold border-2 border-red-400 bg-transparent" disabled>Rejected</button>'
    }

    div.innerHTML = `
      <div class="space-y-5 bg-white p-7 rounded-3xl relative border-l-10 ${borderColor}">
        <h1 class="company-name font-bold text-xl">${job.companyName}</h1>

        <p class="role text-neutral/50">${job.role}</p>

        <div class="flex gap-8 text-neutral/50">
          <p class="job-type">${job.jobType}</p>
          <li class="job-time">${job.jobTime}</li>
          <li class="salary">${job.salary}</li>
        </div>

        <div>${badgeHTML}</div>

        <p>
          Build cross-platform mobile applications using React Native. Work
          on products used by millions of users worldwide.
        </p>

        <button class="btn hover:bg-green-300 hover:text-white text-green-500 font-bold border-2 border-green-400">
          Interview
        </button>

        <button class="btn hover:bg-red-300 hover:text-white text-red-400 font-bold border-2 border-red-400 mb-[20px]">
          Rejected
        </button>

        <div class="absolute top-5 right-10">
          <button class="delete-btn btn h-full bg-base-200 rounded-[100%] p-3 border-2 border-gray-400 hover:bg-red-400">
            <i class="fa-regular fa-trash-can"></i>
          </button>
        </div>
      </div>
    `
    allSection.append(div)
  }
}


function transferToInterview() {
  interviewSection.innerHTML = ''
  for (let interview of interviewList) {
    let div = document.createElement('div')

    div.innerHTML = `
      <div class="space-y-5 bg-white p-7 rounded-3xl relative border-l-10 border-green-300">
        <h1 class="company-name font-bold text-xl">${interview.companyName}</h1>

        <p class="role text-neutral/50">${interview.role}</p>

        <div class="flex gap-8 text-neutral/50">
          <p class="job-type">${interview.jobType}</p>
          <li class="job-time">${interview.jobTime}</li>
          <li class="salary">${interview.salary}</li>
        </div>

        <div>
          <button class="badge btn text-green-500 font-bold border-2 border-green-400 bg-transparent" disabled>
            Interview
          </button>
        </div>

        <p>
          Build cross-platform mobile applications using React Native. Work
          on products used by millions of users worldwide.
        </p>

        <button class="btn hover:bg-green-300 hover:text-white text-green-500 font-bold border-2 border-green-400">
          Interview
        </button>

        <button class="btn hover:bg-red-300 hover:text-white text-red-400 font-bold border-2 border-red-400 mb-[20px]">
          Rejected
        </button>

        <div class="absolute top-5 right-10">
          <button class="delete-btn btn h-full bg-base-200 rounded-[100%] p-3 border-2 border-gray-400 hover:bg-red-400">
            <i class="fa-regular fa-trash-can"></i>
          </button>
        </div>
      </div>
    `
    interviewSection.append(div)
  }
}


function transferToRejected() {
  rejectedSection.innerHTML = ''
  for (let reject of rejectedList) {
    let div = document.createElement('div')

    div.innerHTML = `
      <div class="space-y-5 bg-white p-7 rounded-3xl relative border-l-10 border-red-300">
        <h1 class="company-name font-bold text-xl">${reject.companyName}</h1>

        <p class="role text-neutral/50">${reject.role}</p>

        <div class="flex gap-8 text-neutral/50">
          <p class="job-type">${reject.jobType}</p>
          <li class="job-time">${reject.jobTime}</li>
          <li class="salary">${reject.salary}</li>
        </div>

        <div>
          <button class="badge btn text-red-500 font-bold border-2 border-red-400 bg-transparent" disabled>
            Rejected
          </button>
        </div>

        <p>
          Build cross-platform mobile applications using React Native. Work
          on products used by millions of users worldwide.
        </p>

        <button class="btn hover:bg-green-300 hover:text-white text-green-500 font-bold border-2 border-green-400">
          Interview
        </button>

        <button class="btn hover:bg-red-300 hover:text-white text-red-400 font-bold border-2 border-red-400 mb-[20px]">
          Rejected
        </button>

        <div class="absolute top-5 right-10">
          <button class="delete-btn btn h-full bg-base-200 rounded-[100%] p-3 border-2 border-gray-400 hover:bg-red-400">
            <i class="fa-regular fa-trash-can"></i>
          </button>
        </div>
      </div>
    `
    rejectedSection.append(div)
  }
}


transferToAll()