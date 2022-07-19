const isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i)
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i)
   },
   iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i)
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i)
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i)
   },
   any: function () {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry() ||
         isMobile.iOS() ||
         isMobile.Opera() ||
         isMobile.Windows()
      )
   }
}


function popupFunction() {
   const turnPopups = document.querySelectorAll('.turn-popup')
   const popup = document.querySelector('.popup-signup')
   const popupCrosses = document.querySelectorAll('.popup-signup__cross')

   const menuIcon = document.querySelectorAll('.menu__icon')
   const menu = document.querySelectorAll('.menu')
   const lockBody = document.querySelector('body')
   const menuHeader = document.querySelectorAll('.menu__header')

   const fixed = document.querySelector('.fixed')


   if (turnPopups.length > 0) {
      turnPopups.forEach((turnPopup) => {
         turnPopup.addEventListener('click', () => {
            popup.classList.add('_active')
            lockBody.classList.add('_active')
            fixed.classList.remove('_active')

         })
      })

      popup.addEventListener('click', (event) => {
         if (!event.target.closest('.popup-signup__body')) {
            popup.classList.remove('_active')

            menu.forEach((e) => {
               e.classList.remove('_active')
            })
            menuIcon.forEach((e) => {
               e.classList.remove('_active')
            })
            menuHeader.forEach((e) => {
               e.classList.remove('_active')
            })

            lockBody.classList.remove('_active')


         }
      })

      if (popupCrosses.length > 0) {
         popupCrosses.forEach((popupCross) => {
            popupCross.addEventListener('click', () => {
               popup.classList.remove('_active')

               menu.forEach((e) => {
                  e.classList.remove('_active')
               })
               menuIcon.forEach((e) => {
                  e.classList.remove('_active')
               })
               menuHeader.forEach((e) => {
                  e.classList.remove('_active')
               })

               lockBody.classList.remove('_active')


            })
         })
      }


   }


}
popupFunction()




function burger() {
   const menuIcons = document.querySelectorAll('.menu__icon')
   const menu = document.querySelector('.menu')
   const lockBody = document.querySelector('body')
   const menuHeader = document.querySelector('.menu__header')

   if (menuIcons.length > 0) {
      menuIcons.forEach((menuIcon) => {
         menuIcon.addEventListener('click', () => {
            menu.classList.toggle('_active')
            menuIcon.classList.toggle('_active')
            lockBody.classList.toggle('_active')
            menuHeader.classList.toggle('_active')
   
         })
      })
   }

}
burger()


function langSpoilerFn() {
   const btn = document.querySelector('[data-lang-spoiler-btn]')
   const body = document.querySelector('[data-lang-spoiler-body]')
   const arrow = document.querySelector('[data-arrow]')

   const langs = document.querySelectorAll('[data-lang]')
   const actualLang = document.querySelector('[data-actual-lang]')

   const btnScan = document.querySelectorAll('[data-lang-spoiler-btn]')

   if (btnScan.length > 0) {
      btn.addEventListener('click', () => {
         body.classList.toggle('_active')
         arrow.classList.toggle('_active')
      })
   
      document.addEventListener('click', (event) => {
         if (!event.target.closest('[data-lang-spoiler-btn]') && !event.target.closest('[data-lang-spoiler-body]')) {
            body.classList.remove('_active')
            arrow.classList.remove('_active')
         }
      })
   
      langs.forEach((lang) => {
         lang.addEventListener('click', () => {
            const langText = lang.textContent
            actualLang.textContent = langText
   
            body.classList.remove('_active')
            arrow.classList.remove('_active')
         })
      })
   }
}
langSpoilerFn()



function spoilersFn() {
   const onArrows = document.querySelectorAll('[data-spoiler-arrow]')
   onArrows.forEach((onArrow) => {
      onArrow.classList.add('_on')
   })

   const btns = document.querySelectorAll('[data-spoiler-btn]')
   if (btns.length > 0) {

      btns.forEach((btn) => {
         btn.addEventListener('click', (event) => {
            event.preventDefault()
            const targetBtn = event.target.closest('[data-spoiler-btn]')
            const btnArrow = targetBtn.querySelector('[data-spoiler-arrow]')
            const targetBody = targetBtn.nextElementSibling

            targetBody.classList.toggle('_active')
            btnArrow.classList.toggle('_active')

            const unicalAttribute = targetBtn.getAttribute('data-spoiler-btn')


            btns.forEach((checkBtn) => {
               const btnAttribute = checkBtn.getAttribute('data-spoiler-btn')
               if (btnAttribute !== unicalAttribute) {
                  checkBtn.classList.remove('_active')
                  checkBtn.nextElementSibling.classList.remove('_active')
                  checkBtn.querySelector('[data-spoiler-arrow]').classList.remove('_active')
               }
            })
         })
      })
   }
}

if (window.innerWidth < 768) {
   spoilersFn()

}




function scrollFixed() {
   const fixed = document.querySelector('.fixed')
   const getStarted = document.querySelector('.get-started')

   window.addEventListener('scroll', (event) => {

      const top = getStarted.getBoundingClientRect().top

      if (top < 0) {
         fixed.classList.add('_active')
      } else {
         fixed.classList.remove('_active')
      }

   })
}
scrollFixed()
function animationsBtnFb() {
   const bigBtns = document.querySelectorAll(['.btn-big', '.btn-mini'])

   bigBtns.forEach((bigBtn) => {
      bigBtn.addEventListener('mousedown', () => {
         bigBtn.classList.add('_animation')
      })

      document.addEventListener('mouseup', () => {
         bigBtn.classList.remove('_animation')
      })
   })


}
animationsBtnFb()



