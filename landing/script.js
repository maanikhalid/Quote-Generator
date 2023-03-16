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
if (mainlikeCount || sociallikeCount > 0 ){
mainLikeCounterEl.innerHTML= mainlikeCount
socialLikeCounterEl.innerHTML= sociallikeCount
} else {
    mainLikeCounterEl.innerHTML= 0
    socialLikeCounterEl.innerHTML= 0
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
}

function toggleSocialLikeBtn() {
        this.classList.add("active")
        console.log("You like me")
        sociallikeCount ++
        socialLikeCounterEl.innerHTML= sociallikeCount
        localStorage.setItem("Social Like", JSON.stringify(sociallikeCount))
}



/* Random Messages */
const msg1 = 
`
<img src="https://khalidmaani.com/landing/face.png">
<p>This is my new message</p>
`

const msg2 = 
`
<p>New Message</p>
`

const msg3 = 
`
<img src="https://khalidmaani.com/landing/face.png">
<p>3rd Message</p>
`








/* Add new messages to array */
const currentMessage = [msg1, msg2, msg3]


/* Pick a random message */
let content = currentMessage[Math.floor(Math.random()*currentMessage.length)];
contentEl.innerHTML = content

refreshEl.addEventListener("click", function(){

    var content = currentMessage[Math.floor(Math.random()*currentMessage.length)];
    contentEl.innerHTML = content
    
    return content
})

