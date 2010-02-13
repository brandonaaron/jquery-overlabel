/*! Copyright (c) 2010 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version 1.0
 *
 * Based on Making Compact Forms More Accessible by Mike Brittain (http://alistapart.com/articles/makingcompactformsmoreaccessible)
 */

(function($){

$.fn.overlabel = function() {
    this.each(function() {
        var $label = $(this),
            $input = $('#' + $label.attr('for'));

        $label
            .addClass('overlabel')
            .bind('click', function(event) {
                $input.focus();
            });

        $input
            .bind('focus blur', function(event) {
                $label.css('display', (event.type == 'blur' && !$input.val() ? '' : 'none'));
            }).trigger('blur');
    });
};

})(jQuery);