const menu = document.querySelector('#menu')
const bar = document.querySelector('#bar')
const hamIcon = document.querySelector('.fa-bars')

// show
bar.addEventListener('click', () => {
  if (menu.classList.contains('top-[-100vh]')) {
    menu.classList.remove('top-[-100vh]')
    menu.classList.add('top-0')
    hamIcon.classList.add('fa-times')
  }
  else {
    menu.classList.add('top-[-100vh]')
    menu.classList.remove('top-0')
    hamIcon.classList.remove('fa-times')
  }
})


// Modal
const openModalBtn = document.querySelectorAll('.modal-btn')
const colseModal = document.querySelector('#close')
const modal = document.querySelector('#modal')
const overlay = document.querySelectorAll('.overlay')

openModalBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    let target = btn.getAttribute('data-target')
    if (target.valueOf = 'modal') {
      modal.classList.toggle('hidden')
    }
  })
})
colseModal.addEventListener('click', () => {
  modal.classList.toggle('hidden')
})


// Join Us Modal
const joinUsBtn = document.querySelector('#join-us-btn')
const joinUs = document.querySelector('#join-us')
const colseJoinUs = document.querySelector('#close-join-us')

if (joinUsBtn) {
  joinUsBtn.addEventListener('click', () => {
    joinUs.classList.toggle('hidden')
  })
}

if (colseJoinUs) {
  colseJoinUs.addEventListener('click', () => {
    joinUs.classList.toggle('hidden')
  })
}

window.addEventListener('click', (e) => {
  overlay.forEach((over)=>{
    if (e.target == over) {
      modal.classList.add('hidden')
      if(joinUs){
        joinUs.classList.add('hidden')
      }
    }
  })
})


// ====== latest project 
var swiper = new Swiper('#projects', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  autoplay: {
    delay: 5000
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
});

//======= Reviews
var swiper = new Swiper("#reviews", {
  loop: true,
  grabCursor: true,
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 10000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


var swiper = new Swiper("#technologies", {
  loop: true,
  grabCursor: true,
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 10000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});


var swiper = new Swiper("#related-post", {
  loop: true,
  grabCursor: true,
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 10000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

