// let positionX;
// let isPressed = false;


// let slider = document.querySelector(".comments__container");
// let sliderControlButtons = [...document.querySelectorAll(".slider__dot")];
// let numberOfControlButtons = sliderControlButtons.length;
// let maxScrollWidth = slider.scrollWidth-slider.clientWidth;

// styleControlButtons();

// slider.addEventListener("mousedown", start);
// slider.addEventListener("touchstart", start);

// slider.addEventListener("mousemove", move);
// slider.addEventListener("touchmove", move);

// slider.addEventListener("mouseup", end);
// slider.addEventListener("touchend", end);
// slider.addEventListener("mouseleave", end)
// function getNumberOfActiveSlide(){
//    let value = Math.floor(
//       (slider.scrollLeft/maxScrollWidth*100)/(numberOfControlButtons*10)
//       )
//    if(value > numberOfControlButtons-1){
//       value = numberOfControlButtons-1;
//    }
//    if(value < 0){
//       value = 0
//    }   
//    return value;
// }

// function start(e){
//    e.preventDefault();
//    positionStart = e.pageX- slider.offsetLeft;
//    isPressed = true;
//    styleControlButtons();
// }
// function move(e){   
//    if(!isPressed) return;
//    e.preventDefault();
//    styleControlButtons();
//    slider.classList.add("comments__container--grabbing");

//    let position = e.pageX - slider.offsetLeft - positionStart;
//    console.log(getNumberOfActiveSlide(), slider.scrollLeft)
//    if(slider.scrollLeft == maxScrollWidth && position<=0){
//       console.log(position)
//       slider.classList.toggle("comments__container--scrolling");
//       slider.scrollTo(1,0);
//       slider.classList.toggle("comments__container--scrolling");      
//    }   
//    else if(slider.scrollLeft == 0 && position >0){
//       slider.style.transition = 0;
//       slider.classList.toggle("comments__container--scrolling");
//       slider.scrollTo(maxScrollWidth, 0);
//       slider.classList.toggle("comments__container--scrolling");      
//    } 
//    else{
//       slider.scrollTo(slider.scrollLeft-position, 0);  
//    }

// }


// function end(e){
//    isPressed = false;
//    slider.classList.remove("comments__container--grabbing");
// }

// function styleControlButtons(){   
//    sliderControlButtons.forEach(e => e.classList.remove("slider__dot--active"));
//    sliderControlButtons[getNumberOfActiveSlide()].classList.add("slider__dot--active");
// }

// sliderControlButtons.forEach(element => element.addEventListener("click", (e)=>{
   
//    sliderControlButtons.forEach(e => e.classList.remove("slider__dot--active"));
//    e.target.classList.add("slider__dot--active");
   
//    slider.scrollTo((sliderControlButtons.indexOf(element))*0.5*maxScrollWidth,0);
   
   

// }))



document.querySelector(".header__menuBtn").addEventListener("click", ()=>{
   document.querySelector(".header__nav-wrapper").classList.toggle("header__nav-wrapper--active");
})

document.querySelector(".cookies__btn").onclick = () =>{
   document.querySelector(".cookies").classList.add("cookies--hide");
}