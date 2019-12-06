$(document).ready( function () {
    /**
     * Stars rating init
     */
    $.ratePicker("#demo", {
        rate : function (stars){
        }
      });
    /**
     * Tab switcer
     */
    $('.card__header').on('click', 'li', (e) => {                       
        let target;
        let previous;
    
        if ( !$(e.target).hasClass('card__tab') ) {
            target = $(e.target).parents('.card__tab');
        } else {
            target = e.target;
        }

        if ( !$(target).hasClass('card__tab-active') ) {
            previous = $('.card__tab-active').attr('id');               // remember previous tab id
            $(`#card-${previous}`).addClass('hidden');                  // hide active tab content
            $('.card__tab-active').removeClass('card__tab-active');     // stop highlight previous selected tab
            $(target).addClass('card__tab-active');                     // highlight new selected tab
            target = $('.card__tab-active').attr('id');                 // set target to new tab id
            $(`#card-${target}`).removeClass('hidden');                 // show active tab content
        }
    });

});