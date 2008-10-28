/*! Copyright (c) 2008 Brandon Aaron (http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Based on Making Compact Forms More Accessible by Mike Brittain (http://alistapart.com/articles/makingcompactformsmoreaccessible)
 */

(function($){

$.fn.overlabel = function() {
	this.each(function() {
		var $label = $(this), $input = $('#' + $label.attr('for'));

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