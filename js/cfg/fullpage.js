const isMobileFullPage = {
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
         isMobileFullPage.Android() ||
         isMobileFullPage.BlackBerry() ||
         isMobileFullPage.iOS() ||
         isMobileFullPage.Opera() ||
         isMobileFullPage.Windows()
      )
   }
}

function pcFullPage() {
   if (isMobileFullPage.any()) {

   } else {
      new fullpage('#fullpage', {
         autoScrolling: true,
         scrollHorizontally: true,
         navigation: true
      });
   }

}
pcFullPage()


