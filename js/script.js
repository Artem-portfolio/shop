let count = 0
const carts = document.querySelectorAll('.cart__counter')
carts.forEach((element) => {
  element.addEventListener('click', () => {
    count++
    element.innerText = count
  })
})

const buttons = document.querySelectorAll('.info-dot')
const hint = document.querySelectorAll('.info-hint')

for (let btn of buttons) {
  btn.addEventListener('click', showHint)
}

function showHint(e) {
  for (let hintItem of hint) {
    hintItem.classList.add('none')
  }

  this.parentNode.querySelector('.info-hint').classList.toggle('none')
  e.stopPropagation()
}

document.addEventListener('click', hideHint)

function hideHint() {
  for (let hintItem of hint) {
    hintItem.classList.add('none')
  }
}

for (let hintItem of hint) {
  hintItem.addEventListener('click', (e) => {
    e.stopPropagation()
  })
}

// swiper-slider ================

const swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  spaceBetween: 42,

  navigation: {
    nextEl: '.slider__btn--next',
    prevEl: '.slider__btn--prev',
  },
  breakpoints: {
    270: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1440: {
      slidesPerView: 4,
    },
  },
})

const tabs = document.querySelectorAll('[data-tab]')
const tabsProducts = document.querySelectorAll('[data-tab-value]')
tabs.forEach((tabsOn) => {
  tabsOn.addEventListener('click', function () {
    tabs.forEach((tabsOff) => {
      tabsOff.classList.remove('tab-controls__btn--active')
    })
    this.classList.add('tab-controls__btn--active')

    for (let product of tabsProducts) {
      if (this.dataset.tab === 'all') {
        product.classList.remove('none')
        continue
      }

      if (product.dataset.tabValue !== this.dataset.tab) {
        product.classList.add('none')
      } else {
        product.classList.remove('none')
      }
    }

    swiper.update()
  })
})

// burger-menu opening ===========
const btn = document.querySelector('.nav__btn')
const menu = document.querySelector('.mobile-nav-wrapper')
const btnClose = document.querySelector('.mobile-nav-btn-close')
const mask = document.querySelector('.mask')

btn.addEventListener('click', () => {
  menu.classList.add('active')
  mask.classList.add('active')
  document.body.classList.add('active')
})

btnClose.addEventListener('click', () => {
  menu.classList.remove('active')
  mask.classList.remove('active')
  document.body.classList.remove('active')
})

mask.addEventListener('click', () => {
  menu.classList.remove('active')
  mask.classList.remove('active')
  document.body.classList.remove('active')
})
