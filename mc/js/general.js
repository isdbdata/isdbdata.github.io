$(document).ready(function () {
	//initial
	$('#content').load('AFG.html');

	$('ul#nav li a').click(function() {
		$('a').removeClass('active');
		$(this).addClass("active");

		var page = $(this).attr('href');
		$('#content').load(page +'.html');
		return false;
	});
});