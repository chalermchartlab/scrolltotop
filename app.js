const scrollBtn = document.querySelector(".top")
const rootEl = document.documentElement
document.addEventListener("scroll",showBtn)
scrollBtn.addEventListener("click",scrollToTop)

function showBtn(){
    const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight
    if(rootEl.scrollTop/scrollTotal>0.3){
        scrollBtn.classList.add("show-btn")
    }else{
        scrollBtn.classList.remove("show-btn")
    }
}

function scrollToTop(){
    rootEl.scrollTo({
      top: 0,
      behavior: "smooth"  
    })
}


// const progressEl = document.querySelector(".top")
// window.onscroll = () => scrollProgress()

// function scrollProgress() {
//     const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
//     const scrollTop = document.documentElement.scrollTop
//     const scrollPercentage = (scrollTop / pageHeight) * 100
//     if(scrollPercentage > 30){
//         progressEl.style.opacity = "1"
//         progressEl.style.transform = "translateY(0)"
//         progressEl.style.transition = "all 0.3"
//     }else{
//         progressEl.style.opacity = "0"
//         progressEl.style.transform = "translateY(10rem)"
//         progressEl.style.transition = ""
//     }
// }