//select all the elements
var toggle_btn = document.querySelector(".toggle-btn")
var big_wrapper =  document.querySelector(".big-wrapper")
const main = document.querySelector("main")

function toggleAnimation(){
    //clone the wrapper
    let clone = big_wrapper.cloneNode(true)
    main.appendChild(clone)
}

toggle_btn.addEventListener("click", toggleAnimation)