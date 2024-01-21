
const reviewBtn = document.querySelectorAll(".review-box > div > p")
const showReview = document.querySelectorAll(".review-box > div > div")
const disableReview = document.querySelector(".disable-review");

for(let i = 0 ; i<reviewBtn.length ; i++){
    reviewBtn[i].addEventListener('click',(function(event){filter(event)}));
}


const render = () => {
    showReview[0].classList.add('review-hidden');
    showReview[1].classList.add('review-hidden');
    showReview[2].classList.add('review-hidden');
    showReview[3].classList.add('review-hidden');
    showReview[4].classList.add('review-hidden');
    showReview[5].classList.add('review-hidden');
    disableReview.classList.add('show');
}

function filter(event){
let mode = event.target.id


if( mode === "weasel"){
    render();
    showReview[0].classList.remove('review-hidden');
}

if( mode === "doggy" ){
    render();
    showReview[1].classList.remove('review-hidden');
}
if(mode === "kitty"){
    render();
    showReview[2].classList.remove('review-hidden');

}
if(mode === "baby-bird"){
    render();
    showReview[3].classList.remove('review-hidden');

}if(mode === "horse"){
    render();
    showReview[4].classList.remove('review-hidden');

}else if(mode === "fox"){
    render();
    showReview[5].classList.remove('review-hidden');
} 

}


const reviewCloseBtn = document.querySelectorAll(".review-box > div > div > span");

const reviewCloserFn = () => {
    render();
    disableReview.classList.remove('show');
}

for (let i = 0; i < reviewCloseBtn.length; i++) {
    reviewCloseBtn[i].addEventListener("click", reviewCloserFn);
  }


//   팝업창

const popCloseBtn = document.querySelector('.page-popup1 .page-popup-box span');
const popBox1 = document.querySelector('.page-popup1');
const popBg1 = document.querySelector('.popup-bg1');

popCloseBtn.addEventListener('click', ()=> {
    popBox1.classList.add('review-hidden');
    popBg1.classList.add('review-hidden');
})

const popCloseBtn2 = document.querySelector('.page-popup2 .page-popup-box span');
const popBox2 = document.querySelector('.page-popup2')
const popBg2 = document.querySelector('.popup-bg2');
popCloseBtn2.addEventListener('click', ()=> {
    popBox2.classList.add('review-hidden');
    popBg2.classList.add('review-hidden');
})