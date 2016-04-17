export default () => {

  $(document).on('click', '.button--quick-look', function() {
    if ($(this).data('look') == '2') {
      $('.popup__quicklook--type2').fadeIn(100)
    } else {
      $('.popup__quicklook--type1').fadeIn(100)
    }
  })

}