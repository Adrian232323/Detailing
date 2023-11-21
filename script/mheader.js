const sliderBox = document.querySelector('.slider-box')
const carouselImages = document.querySelectorAll('.slider-img')
const carouselWidth = 300
const carouselSpeed = 1500
let index = 0


const handCarousel = () => {
    index++
    changeImages ()
}
let startCarousel = setInterval( handCarousel, carouselSpeed)

const changeImages = () => {
    if(index > carouselImages.length -1){
        index = 0
    }
    else if 
        (index < 0){
            index = carouselImages.length -1
        }
    sliderBox.style.transform = `translateX(${- index * carouselWidth}px)`

}