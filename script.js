// BURGER MENU

let screenWidth = window.screen.width
let burgerIcon = document.querySelector('.icons__burger')
let headerMenu = document.querySelector('.header__menu')
let menu=document.querySelector('.menu__list')
let discoveredElem = document.querySelector('.menu__item-hovered')
// let subMenu = document.querySelector('.sub-menu')



burgerIcon.addEventListener('click',()=>{
  menu.classList.toggle('menu__list-burger')
  
})


// CLICKED "DISCOVER" ON PHONE

let hoveredItem = document.querySelector('.menu__item-hovered')
let subMenu = document.querySelector('.sub-menu')



// hoveredItem.addEventListener('click', ()=>{
//   subMenu.classList.toggle('sub-menu__active')
//   console.log('hi')
// })
if(screenWidth<=992){
  hoveredItem.addEventListener('click', ()=>{
    subMenu.classList.toggle('sub-menu__active')
    
  })
}

// BEFORE-AFTER SLIDER

const sliderBeforeAfter = document.querySelector('.before-after__slider-images')
const beforeImgBlock = document.querySelector('.before-after__slider-before')
const beforeIMG = beforeImgBlock.querySelector('img')
const changer = document.querySelector('.before-after__slider-changer')



let isActive = false

document.addEventListener('DOMContentLoaded', () =>{
  let width = sliderBeforeAfter.offsetWidth
  beforeIMG.style.width = `${width}px`
})


const beforeAfterSlider = (x)=>{
  let shift = Math.max(0, Math.min(x, sliderBeforeAfter.offsetWidth))
  beforeImgBlock.style.width = `${shift}px`
  changer.style.left = `${shift}px`
}

const pauseEvents = (e) =>{
  e.stopPropagation()
  e.preventDefault()
  return false
}

sliderBeforeAfter.addEventListener('mousedown', ()=>{
  isActive = true
})

sliderBeforeAfter.addEventListener('mouseup', ()=>{
  isActive = false
})

sliderBeforeAfter.addEventListener('mouseleave', ()=>{
  isActive = false
})

sliderBeforeAfter.addEventListener('mousemove', (e) =>{
  if(!isActive){
    return
  }

  let x = e.pageX

  x -= sliderBeforeAfter.getBoundingClientRect().left

  beforeAfterSlider(x)
  pauseEvents(e)
})

sliderBeforeAfter.addEventListener('touchstart', ()=>{
  isActive = true
})

sliderBeforeAfter.addEventListener('touchend', ()=>{
  isActive = false
})

sliderBeforeAfter.addEventListener('touchcancel', ()=>{
  isActive = false
})

sliderBeforeAfter.addEventListener('touchmove', (e)=>{
  if(!isActive){
    return
  }

  console.log(e)

  let x;
  let i;

  for( i=0; i < e.changedTouches.length; i++){
    x = e.changedTouches[i].pageX
  }

  x -= sliderBeforeAfter.getBoundingClientRect().left

  beforeAfterSlider(x)
  pauseEvents(e)
})



// TESTEMONIALS CAROUSEL



let testemonials = document.querySelector('.testemonials__testemonials')
let testemonial = document.querySelectorAll('.testemonials__testemonial')
let testemonialArray =  Array.from(testemonial)
let buttonNext = document.querySelector('.testemonials__arrow-right')
let buttonPrev = document.querySelector('.testemonials__arrow-left')

let testemonialRaiting= document.querySelectorAll('.testemonial__raiting')
let testemonialRaitingArray =  Array.from(testemonialRaiting)

let testemonialContent = document.querySelectorAll('.testemonial__content')
let testemonialContentArray = Array.from(testemonialContent)

let testemonialSignature = document.querySelectorAll('.testemonial__signature')
let testemonialSignatureArray = Array.from(testemonialSignature)

let testimonialButton =document.querySelectorAll('.testimonial-button')
let testimonialButtonArray =  Array.from(testimonialButton)

// console.log(testemonialRaitingArray)

let step = 0
let ofsset = 0


buttonNext.addEventListener('click', ()=>{
  // console.log('h')
  // testemonials.style.left = -1275+'px'

  // setTimeout(()=>{
  //   console.log('start')
  //   testemonial[step].style.left = -1275+'px'
  // testemonials.appendChild(testemonial[step])
  // if(step + 1 == testemonialArray.length){
  //   step = 0;
  // } else{
  //   step++;
  // }
  // },500)

  buttonPrev.style.opacity= 1

  if(screenWidth>=1600){
    testemonial[step].style.left = -1275+'px'
  }else if(screenWidth>=1440 && screenWidth<1600){
    testemonial[step].style.left = -1075+'px'
  }else if(screenWidth>=1240 && screenWidth<1440){
    testemonial[step].style.left = -900+'px'
  }else if(screenWidth>=993 && screenWidth<1240){
    testemonial[step].style.left = -700+'px'
  }else if(screenWidth<=992 && screenWidth<=770){
    testemonial[step].style.left = -850+'px'
  }

  // testemonial[step].style.left = -1275+'px'
  testemonials.appendChild(testemonial[step])

  for(let i=0; i<testemonialRaitingArray.length;i++){
    testemonialRaitingArray[i].classList.toggle('testemonial-card-opasity')
  }

  for(let k=0; k<testemonialContentArray.length;k++){
    testemonialContentArray[k].classList.toggle('testemonial-card-opasity')
  }

  for(let j=0; j<testemonialSignatureArray.length;j++){
    testemonialSignatureArray[j].classList.toggle('display-none')
  }

  for(let l=0; l<testimonialButtonArray.length;l++){
    testimonialButtonArray[l].classList.toggle('display-none')
  }

  if(step + 1 == testemonialArray.length){
    step = 0;
  } else{
    step++;
  }

  // step++
  // for (let i=0; i<testemonialArray.length;i++){

  // }
})

buttonPrev.addEventListener('click', ()=>{

  if(screenWidth>=1600){
    testemonial[step].style.left = 1275+'px'
  }else if(screenWidth>=1440 && screenWidth<1600){
    testemonial[step].style.left = 1075+'px'
  }else if(screenWidth>=1240 && screenWidth<1440){
    testemonial[step].style.left = 900+'px'
  }else if(screenWidth>=993 && screenWidth<1240){
    testemonial[step].style.left = 700+'px'
  }else if(screenWidth<=992 && screenWidth<=770){
    testemonial[step].style.left = 850+'px'
  }
  
  // testemonial[step].style.left = 1275+'px'
  testemonials.appendChild(testemonial[step])

  for(let i=0; i<testemonialRaitingArray.length;i++){
    testemonialRaitingArray[i].classList.toggle('testemonial-card-opasity')
  }

  for(let k=0; k<testemonialContentArray.length;k++){
    testemonialContentArray[k].classList.toggle('testemonial-card-opasity')
  }

  for(let j=0; j<testemonialSignatureArray.length;j++){
    testemonialSignatureArray[j].classList.toggle('display-none')
  }

  for(let l=0; l<testimonialButtonArray.length;l++){
    testimonialButtonArray[l].classList.toggle('display-none')
  }

  if(step + 1 == testemonialArray.length){
    step = 0;
  } else{
    step++;
  }

})
