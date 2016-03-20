
$(document).ready(function() {
  

  $('.main_menu-list li.has_submenu:not(.search) > a').on('click', function(event) {

    let mq = checkMQ()

    if( mq == 'mobile' || mq == 'tablet' ) {
      event.preventDefault();

      $(this).parent().toggleClass('has_submenu--open')

    }

  })

})


function checkMQ() {
  //check if mobile or desktop device
  return window.getComputedStyle(document.querySelector('body'), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "")
}