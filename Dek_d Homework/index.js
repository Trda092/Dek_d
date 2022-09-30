const slideContainer = document.querySelector('.container');
const slideBlog = document.querySelector('.slider');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const radioSet = document.querySelectorAll('.radio')



let slide = document.querySelectorAll('.slide');
let index = 1; //image index not list index by default
let slideID;

console.log(slideContainer)
console.log(slideBlog);
console.log(slide[1])
console.log(radioSet[index-1])
const firstSlide = slide[0].cloneNode(true);
const lastSlide = slide[slide.length - 1].cloneNode(true);

firstSlide.id = 'first-slide';
lastSlide.id = 'last-slide';

slideBlog.append(firstSlide);
slideBlog.prepend(lastSlide);
// for (let i=1;i<slide.length - 1;i++){
//     slideBlog.append(slide[i].cloneNode(true))
//     slideBlog.prepend(slide[slide.length-(i+1)].cloneNode(true))
// }

const slideWidth = slide[index].clientWidth;

slideBlog.style.transform = `translateX(${-slideWidth * index}px)`;
console.log(slideBlog)

const fetchSlide = () => document.querySelectorAll('.slide');

slideBlog.addEventListener('transitionend', () => {
    slide = fetchSlide();
    if (slide[index].id === firstSlide.id) {
      slideBlog.style.transition = 'none';
      index = 1;
      slideBlog.style.transform = `translateX(${-slideWidth * index}px)`;
    }
  
    if (slide[index].id === lastSlide.id) {
      slideBlog.style.transition = 'none';
      index = slide.length - 2;
      slideBlog.style.transform = `translateX(${-slideWidth * index}px)`;
    }
  });
  const moveToNextSlide = () => {
    slide = fetchSlide();
    if (index >= slide.length - 1) return;
    index++;
    slideBlog.style.transition = '.7s ease-out';
    slideBlog.style.transform = `translateX(${-slideWidth * index}px)`;
    // radioSet[index].setAttribute("checked", true);
    console.log(index)
  };
  
  const moveToPreviousSlide = () => {
    slide = fetchSlide();
    if (index <= 0) return;
    index--;
    slideBlog.style.transition = '.7s ease-out';
    slideBlog.style.transform = `translateX(${-slideWidth * index}px)`;
    // radioSet[index].setAttribute("checked", true);
    console.log(index)
  };

  const selectionMove = ()=>{
    slide = fetchSlide();
    let selectedVal;
    for (let i=0;i<radioSet.length;i++) {
        if (radioSet[i].checked) {
            selectedVal = radioSet[i].value;
            console.log(selectedVal)
            break;
        }
  }
  slideBlog.style.transition = '.7s ease-out';
  slideBlog.style.transform = `translateX(${-slideWidth * (selectedVal-1)}px)`;
}
prevBtn.addEventListener("click", moveToPreviousSlide);
  nextBtn.addEventListener("click", moveToNextSlide);

  selectionMove();
