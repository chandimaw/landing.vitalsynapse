/*!
 * jQuery easypreloader plugin 
 * Original author: @responsivewemmobile
 * Version 1.0 2015-01-19
 * Further changes, comments: @responsivewemmobile.com
 */
$(window).load(function() {
	var easypreloader = $('.easypreloader');
	$(easypreloader).animate({'opacity': 0}, function() {
		$(easypreloader).remove();
	});
});