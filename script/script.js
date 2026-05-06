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


function deleteCard(id){
  document.getElementById(id).remove()
  const totalJob =   document.getElementById('total-jobs')
  totalJob.innerText = cards.children.length
  const totalJobs = document.getElementById('total')
    totalJobs.innerText = cards.children.length

    totalInterview.innerText = interCards.children.length
    totalReject.innerText = rejectCards.children.length
    if(totalJobs.innerText==='0'){
      section.classList.remove('hidden')
    } 
}
function transferToInterview(id){
  const card = document.getElementById(id)
  const btn = document.getElementById('card-1-inter')
  btn.setAttribute('disabled', true)
  btn.style.backgroundColor = 'light-gray'
  

  const container = document.getElementById('interview-cards')

  const newDiv = document.createElement('div')

  newDiv.innerHTML = `
  
  <div id="card-1" class="space-y-5 bg-white p-7 rounded-3xl b border-l-10 border-gray-200">
                    <h1 class="font-bold text-xl">Mobile First Corp</h1>
                    <p class="text-neutral/50">React Native Developer</p>
                    <div class="flex gap-8 text-neutral/50">
                        <p>Remote</p>
                        <li>Full-time</li>
                        <li>$130,000-$175,000</li>
                    </div>
                    <!-- badge container -->
                    <div>
                        <button class="btn bg-blue-100 text-black font-normal" disabled>Not Applied</button>
                    </div>
                    <p>Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                    
                    
                    <button class="btn hover:bg-green-300 hover:text-white text-green-500 font-bold border-2 border-green-400">Interview</button>
                    <button class="btn hover:bg-red-300 hover:text-white text-red-400 font-bold border-2 border-red-400 mb-[20px]">Rejected</button>
                    
                    </div>
                </div>
                
  
  
  `
  container.appendChild(newDiv)

}
