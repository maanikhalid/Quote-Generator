/* Getting DOMS */
const datePostEl = document.getElementById("datePostEl")
const contentEl = document.getElementById("contentEl")
const mainLikeBtnEl = document.getElementById("mainLikeEl")
const mainLikeCounterEl = document.getElementById("mainLikeCounterEl")
const socialLikeBtnEl = document.getElementById("socialLikeEl")
const socialLikeCounterEl = document.getElementById("socialLikeCounterEl")
const refreshEl = document.getElementById("refreshEl")



const mainLikesLocal = JSON.parse(localStorage.getItem("Main Like"))
const socialLikesLocal = JSON.parse(localStorage.getItem("Social Like"))


/* Lets and Const */
let mainlikeCount = mainLikesLocal
let sociallikeCount = socialLikesLocal



/* Render current like on page load */
if (mainlikeCount > 241 || sociallikeCount > 241 ){
mainLikeCounterEl.innerHTML=  mainlikeCount
socialLikeCounterEl.innerHTML= sociallikeCount
} else {
    mainLikeCounterEl.innerHTML= 241
    socialLikeCounterEl.innerHTML= 98
    localStorage.setItem("Main Like", JSON.stringify(241))
    localStorage.setItem("Social Like", JSON.stringify(98))
}


/* Event Listeners */
mainLikeBtnEl.addEventListener("mouseover", hoverLike)
mainLikeBtnEl.addEventListener("mouseout", hoverLikeOut)
mainLikeBtnEl.addEventListener("click", toggleLikeBtn)
socialLikeBtnEl.addEventListener("mouseover", hoverLike)
socialLikeBtnEl.addEventListener("mouseout", hoverLikeOut)
socialLikeBtnEl.addEventListener("click", toggleSocialLikeBtn)


/* Hover functions */
function hoverLike(){
    this.textContent = "😄"
}

function hoverLikeOut(){
    this.textContent = "😐"
}

function toggleLikeBtn() {
        this.classList.add("active")
        console.log("You like me")
        mainlikeCount ++
        mainLikeCounterEl.innerHTML= mainlikeCount
        localStorage.setItem("Main Like", JSON.stringify(mainlikeCount))
    
        setTimeout (function animateIn (){
        mainLikeBtnEl.classList.remove("active", 300)
        }, 250)
    
        setTimeout (function animateIn (){
        mainLikeBtnEl.textContent = "🥰"
        }, 250)
}

function toggleSocialLikeBtn() {
        this.classList.add("active")
        console.log("You like me")
        sociallikeCount ++
        socialLikeCounterEl.innerHTML= sociallikeCount
        localStorage.setItem("Social Like", JSON.stringify(sociallikeCount))
    
        setTimeout (function animateIn (){
        socialLikeBtnEl.classList.remove("active", 300)
        }, 250)
    
        setTimeout (function animateIn (){
        socialLikeBtnEl.textContent = "🥰"
        }, 250)
}       



/* Random Messages */
const msg1 = 
`
<img src="https://khalidmaani.com/landing/pitza.gif">
<p>If you're seeing this. I am on my break and enjoying my <span>pitza</span>. Let's talk next week, tomorrow.</p>
`

const msg2 = 
`
<img src="https://khalidmaani.com/landing/baby-cute.gif">
<p>When you're about to sneak out of work and the boss walks in. Oh wait! I am my own boss 😅</p>
`

const msg3 = 
`
<img src="https://khalidmaani.com/landing/steve-office.jpg">
<p>Can you send me the design in Microsoft Word so I can edit it.</p>
`

const msg4 = 
`
<video onloadstart="this.volume=0.2" width="100%" height="auto" controls autoplay >
    <source src="https://khalidmaani.com/landing/lionking.mp4" type="video/mp4">
</video>
<p>😺👑 Carol who? </p>
`

const msg5 = 
`
<video onloadstart="this.volume=0.2" width="100%" height="auto" controls autoplay >
    <source src="https://khalidmaani.com/landing/teadoc.mp4" type="video/mp4">
</video>
<p>I made a documentary. <span>Netflix</span> call me. </p>
`

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReducedMotion !== true) {
  // do animation
}




/* Add new messages to array */
const currentMessage = [msg1, msg2, msg3, msg4, msg5]
const dayPosted = ["1h ago","2h ago","3h ago","4h ago","5h ago","6h ago","7h ago","8h ago",]

/* Pick a random message */
let content = currentMessage[Math.floor(Math.random()*currentMessage.length)];
let dayPost = dayPosted[Math.floor(Math.random()*dayPosted.length)];

contentEl.innerHTML = content
datePostEl.innerHTML = dayPost

refreshEl.addEventListener("click", function(){
    contentEl.classList.add("animate")
    
    setTimeout (function animateIn (){
        contentEl.classList.remove("animate", 300)
    }, 1000)
    
    content = currentMessage[Math.floor(Math.random()*currentMessage.length)];
    contentEl.innerHTML = content
    
    var dayPost = dayPosted[Math.floor(Math.random()*dayPosted.length)];
    datePostEl.innerHTML = dayPost
    
})



