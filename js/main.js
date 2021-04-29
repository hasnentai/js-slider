
setInterval(()=>{
    animateSlider();
},3000);

var activeSlide = 0;


function animateSlider(){
    var slider = document.getElementsByClassName("slider-wrapper");
    var sliderImage = document.getElementsByClassName("slide");
    var imageWidth = sliderImage[0].offsetWidth;
   
    var totalChild = slider[0].children.length;
    

    if(activeSlide == totalChild-1)
    {
        activeSlide=0
    } else {

        activeSlide +=1;
    }
    slider[0].scrollTo({
        left:imageWidth * activeSlide,
        behavior: 'smooth'
    });

    var sliderDots = document.getElementsByClassName("dot");

    
    for(el=0;el<sliderDots.length;el++){
        console.log(sliderDots[el])
        if(sliderDots[el].tagName === "DIV"){
            sliderDots[el].classList.remove("active");
        }
        sliderDots[activeSlide].classList.add("active")
    }

}