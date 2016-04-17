
import 'lib/packery'
import 'lib/imagesloaded'
import 'lib/Hyphenator'
import 'lib/select2'
import 'lib/jquery.sticky'
import 'lib/columnizer'


import 'partials/layout'


import tabs from 'shared/tabs'
import year from 'shared/year'
import initQuickLook from 'shared/quickLook'

$(document).ready(() => {
  
  $( '.nrg-tabs--ui' ).tabs()
  tabs()
  // Показываем дату в футере
  year()
  // Инициализируем нажатия на кнопки быстрого просмотра
  initQuickLook()





  const $gridPackery = $('.grid-packery').imagesLoaded( function() {
    $gridPackery.isotope({
      itemSelector: '.mdl-cell',
      layoutMode: 'packery'
    })
  })


  $("#sticky").sticky({topSpacing:0})


})



















function select() {
  $(".custom_select select").select2({
    minimumResultsForSearch: Infinity
  });
}


function mainGrid() {
  var $main = $('#main_blocks .grid').imagesLoaded( function(){
    $main.packery({
      itemSelector: ".square", 
      percentPosition: true,
      transitionDuration: 0,
      "gutter": 10,
    });
  });
}

function catalogueGrid() {
  var $grid = $('.catalogue_items.grid').imagesLoaded( function(){
    $grid.packery({
      // options
      itemSelector: '.grid-item',
      transitionDuration: 0,
      isResizeBound: true,
      "gutter": 10,
      stamp: '.stamp'
    }); 
  });
}


function blogGrid() {
  var $blogGrid = $('.blog .grid').imagesLoaded( function() {
    $blogGrid.packery({
      // options
      itemSelector: '.grid-item',
      transitionDuration: 0,
      isResizeBound: true,
      "gutter": 10,
      stamp: '.stamp'
    });
  });
}



$(document).on('click', ".item_info .thumbnail img", function() {
  var bigUrl = $(this).attr( "data-big" );
  $( ".item_info .big_view img" ).attr("src", bigUrl );
});


// REMOVING ORDERS IN HISTORY
$(document).on('click', ".order__remove", function() {
  $(this).parent(".order__info").slideUp(function() {
    $(this).remove()
  });
});

// Add some checking if there is any orders in history


// REMOVING FROM FAVOURITES
$(document).on('click', ".product .remove", function() {
  $(this).closest(".product_row").slideUp(function() {
    $(this).remove()
  });
});



$(document).on('click', ".icon.star", function() {
  $(this).addClass("remove").removeClass("star");
});

$(document).on('click', ".icon.remove", function() {
  $(this).removeClass("remove").addClass("star");
});




$(document).on('click', ".icon.heart", function() {
  $(this).addClass("unwish").removeClass("heart");
});

$(document).on('click', ".icon.unwish", function() {
  $(this).removeClass("unwish").addClass("heart");
});




$(document).on('click', ".hide_message", function() {
  $(this).closest(".message").slideUp(150);
});




// Sliders in filters

$(function() {
  $( ".slider-range#diamondWeight" ).slider({
    range: true,
    min: 0,
    max: 2,
    step: 0.01,
    values: [ 0, 2 ],
    slide: function( event, ui ) {
      $( "#diamondWeight .ui-slider-handle").eq(0).html( "<span class='val1'>" + ui.values[ 0 ] + "</span>");
      $( "#diamondWeight .ui-slider-handle").eq(1).html( "<span class='val2'>" + ui.values[ 1 ] + "</span>");
    }
  });
  $( "#diamondWeight .ui-slider-handle").eq(0).html( "<span class='val1'>" + $( "#diamondWeight" ).slider( "values", 0 ) + "</span>");
  $( "#diamondWeight .ui-slider-handle").eq(1).html( "<span class='val2'>" + $( "#diamondWeight" ).slider( "values", 1 ) + "</span>");
});


$(function() {
  $( ".slider-range#diamondColor" ).slider({
    range: true,
    min: 1,
    max: 6,
    step: 1,
    values: [ 0, 6 ],
    slide: function( event, ui ) {
      $( "#diamondColor .ui-slider-handle").eq(0).html( "<span class='val1'>" + ui.values[ 0 ] + "</span>");
      $( "#diamondColor .ui-slider-handle").eq(1).html( "<span class='val2'>" + ui.values[ 1 ] + "</span>");
    }
  });
  $( "#diamondColor .ui-slider-handle").eq(0).html( "<span class='val1'>" + $( "#diamondWeight" ).slider( "values", 0 ) + "</span>");
  $( "#diamondColor .ui-slider-handle").eq(1).html( "<span class='val2'>" + $( "#diamondWeight" ).slider( "values", 1 ) + "</span>");
});


$(function() {
  $( ".slider-range#diamondPrice" ).slider({
    range: true,
    min: 100,
    max: 3000000,
    step: 10,
    values: [ 3000, 500000 ],
    slide: function( event, ui ) {
      $( "#diamondPrice .ui-slider-handle").eq(0).html( "<span class='val1'>" + ui.values[ 0 ] + "</span>");
      $( "#diamondPrice .ui-slider-handle").eq(1).html( "<span class='val2'>" + ui.values[ 1 ] + "</span>");
    }
  });
  $( "#diamondPrice .ui-slider-handle").eq(0).html( "<span class='val1'>" + $( "#diamondWeight" ).slider( "values", 0 ) + "</span>");
  $( "#diamondPrice .ui-slider-handle").eq(1).html( "<span class='val2'>" + $( "#diamondWeight" ).slider( "values", 1 ) + "</span>");
});


$(function() {
  $( ".slider-range#diamondPurity" ).slider({
    range: true,
    min: 0,
    max: 100,
    step: 1,
    values: [ 0, 100 ],
    slide: function( event, ui ) {
      $( "#diamondPurity .ui-slider-handle").eq(0).html( "<span class='val1'>" + ui.values[ 0 ] + "</span>");
      $( "#diamondPurity .ui-slider-handle").eq(1).html( "<span class='val2'>" + ui.values[ 1 ] + "</span>");
    }
  });
  $( "#diamondPurity .ui-slider-handle").eq(0).html( "<span class='val1'>" + $( "#diamondWeight" ).slider( "values", 0 ) + "</span>");
  $( "#diamondPurity .ui-slider-handle").eq(1).html( "<span class='val2'>" + $( "#diamondWeight" ).slider( "values", 1 ) + "</span>");
});









// SHOW ENGRAVE POPUP
var check; 
$(document).on("click", "#add_engrave", function(){
    check = $("#add_engrave").prop("checked");
    if(check) {
         $(".popup__engrave").fadeIn(100)
    } else {
        return
    }
}); 

$(document).on("click", ".popup__engrave .cancel", function(){
   $(this).closest(".popup").fadeOut(100);
   $("#add_engrave").prop('checked', false);
}); 

$(document).on("click", ".popup__engrave .close", function(){
   $(this).closest(".popup").fadeOut(100);
   $("#add_engrave").prop('checked', false);
}); 

$(document).on("click", ".popup__engrave .ok", function(){
   $(this).closest(".popup").fadeOut(100);
   $("#add_engrave").prop('checked', true);
}); 












// FOR ALL POPUPS

$(document).on("click", ".popup .close", function(){
   $(this).closest(".popup").fadeOut(100);
}); 

$(document).on("click", ".popup .cancel", function(){
   $(this).closest(".popup").fadeOut(100);
}); 





$(document).ready(function() {
  // $( "#info" ).tabs();

  // $( ".additional_info" ).tabs();


  // $(function() {
  //   var $tabs = $('#tabs').tabs();
    
  //   $("#tabs .ui-tabs-panel").each(function(i){
    
  //     var totalSize = $("#tabs .ui-tabs-panel").size() - 1;
    
  //     if (i != totalSize) {
  //         let next = i + 1;
  //         $(this).append("<a href='#' class='next-tab mover' rel='" + next + "'></a>");
  //     }
      
  //     if (i != 0) {
  //         let prev = i - 1;
  //         $(this).append("<a href='#' class='prev-tab mover' rel='" + prev + "'></a>");
  //     }
        
  //   });
    
  //   $('.next-tab, .prev-tab').click(function() { 
  //        $tabs.tabs('option', 'active', $(this).attr("rel"));
  //        return false;
  //    });
  // });

  mainGrid();

  catalogueGrid();

  blogGrid();

  select();
  

  Hyphenator.run();

  $('.alphabet_places_list ul li').addClass("dontsplit");
  $('.alphabet_places_list ul').columnize({ columns: 3, lastNeverTallest: true });

  $("#sticky").sticky({topSpacing:0});


  $('.navbar-toggle').click( (e) => {
    e.preventDefault()

    $('.main_menu').toggleClass('main_menu--open')

  })
});


$(window).resize(function() {
});

