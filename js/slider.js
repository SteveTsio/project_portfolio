let currentSlide = 0;
const slides = document.querySelectorAll(".slide") //tried with getElementByClassName but did not work
const dots = document.querySelectorAll('.dot')

const init = (n) => {
  slides.forEach((slide, index) => { // tried with several ways, .forEach worked  Mozzila docs helped
    slide.style.display = "none"
    dots.forEach((dot, index) => {
      dot.classList.remove("active")
    })
  })
  slides[n].style.display = "block"
  dots[n].classList.add("active")
}
document.addEventListener("DOMContentLoaded", init(currentSlide))
const next = () => {
  currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++
  init(currentSlide)
}

const prev = () => {
  currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--
  init(currentSlide)
}

let interval = null;

const clickStart = (flag) => {
  if (flag)
  {
    interval = setInterval(()=> {
      next()}, 500);
  
  } 
  else {
    clearInterval(interval);
  }  
  
}

// na valw ena flag giati kanei to interval number

const clickStop = () => { // do not know how to stop interval
  //clearInterval(interval);
  clickStart(false);
  console.log(interval);
}

document.querySelector(".next").addEventListener('click', next)

document.querySelector(".prev").addEventListener('click', prev)

document.querySelector(".start").addEventListener('click', clickStart)

document.querySelector(".stop").addEventListener('click', clickStop)


dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    console.log(currentSlide)
    init(i)
    currentSlide = i
  })
})

