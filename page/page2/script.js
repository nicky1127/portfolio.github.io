$(document).ready( () => {

//Financial plan
$button_plan = $('.button_plan');
$button_plan.on('mouseenter', ()=>{

	$button_plan.css({
		backgroundColor: '#8b008b'
	});

});
$button_plan.on('mouseleave', ()=>{

	$button_plan.css({
		backgroundColor: '#c71585'
	});

});

//login
$login = $('.login');

$login.on('mouseenter', ()=>{

	$login.css({
		backgroundColor: '#8b008b'
	});
	$('.top_bar .form').slideDown();
	$('.login .arrow').attr("src","Pics/up.PNG");


});
$login.on('mouseleave', ()=>{

	$login.css({
		backgroundColor: '#191970'
	});

	$('.top_bar .form').slideUp();
	$('.login .arrow').attr("src","Pics/down.PNG");

});

//Nav
$nav = $('.nav_list');
$nav.on('mouseenter', ()=>{

	$(event.currentTarget).css({
		textDecoration: 'underline'
	});

}).on('mouseleave', ()=>{

	$(event.currentTarget).css({
		textDecoration: 'none'
	});

});

//menu
$menu = $('.menu');
$menu.on('click', ()=>{

	$('.menu_content').slideToggle();

});

//search
$search = $('.search');
$search_bar = $('.search_bar');
$search.on('click', ()=>{

	$search_bar.slideToggle();

});

});