// userScroll
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar')
    const toTopBtn = document.querySelector('#to-top')
  
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-sticky')
            toTopBtn.classList.add('show')
        }
        else {
            navbar.classList.remove('navbar-sticky')
            toTopBtn.classList.remove('show')
        }
    })
})


// incrementStats
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter')
  
    counters.forEach(counter => {
        counter.innerText = 0
    
        const updateCounter = () => {
            const target = +counter.getAttribute('data-target')
            const c = +counter.innerText

            if (c < target) {
                counter.innerText = Math.ceil(c + target / 200)
                setTimeout(updateCounter, 1)
            }
            else { counter.innerText = target }
        }
        updateCounter()
    })
})


// scrollToTop
document.querySelector('#to-top').addEventListener('click', () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})
  