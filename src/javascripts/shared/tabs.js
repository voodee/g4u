export default () => {
  let $tabs = $('#tabs')
    
  $tabs.find('.ui-tabs-panel').each(function(i) {
    let totalSize = $tabs.find('.ui-tabs-panel').size() - 1
  
    if (i != totalSize) {
        let next = i + 1
        $(this).find('.tabs__next').append("<a href='#' class='tabs__next-link' rel='" + next + "'></a>")
    }
    
    if (i != 0) {
        let prev = i - 1
        $(this).find('.tabs__prev').append("<a href='#' class='tabs__prev-link' rel='" + prev + "'></a>")
    }
  })
  
  $('.tabs__next-link, .tabs__prev-link').click(function() { 
       $tabs.tabs('option', 'active', $(this).attr("rel"))
       return false
   })
}