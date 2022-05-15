let slides = document.querySelectorAll('.slider__item'),
    dots = document.querySelectorAll('.slider__dots-item'),
    sliderText = document.querySelector('.slider__text')
    currentSlide = 1

    showSlide(currentSlide)

function showSlide(n) {
  if (n < 1) {
    currentSlide = slides.length
  } else if (n > slides.length) {
    currentSlide = 1
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('show')
  }


  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active')
  }

  slides[currentSlide - 1].classList.add('show')
  dots[currentSlide - 1].classList.add('active')
  sliderText.innerHTML = `<span>${slides[currentSlide - 1].alt}</span>`
}

function switchSlide(n) {
  showSlide(currentSlide = n)
}

dots.forEach((el, i) => {
  el.addEventListener('click', () => switchSlide(i + 1))
})
