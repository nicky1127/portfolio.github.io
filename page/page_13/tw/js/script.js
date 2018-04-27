$(function () {
			$("nav li ul").hide();
			$("nav li").hover(function () {
				$(".subs", this).slideDown("fast");
			},function () {
				$(">ul", this).slideUp("fast");
			});

			let stickyNavTop = $('nav').offset().top;
		   	
		   	// our function that decides weather the navigation bar should have "fixed" css position or not.
		   	let stickyNav = function(){
			    var scrollTop = $(window).scrollTop(); // our current vertical position from the top
			         
			    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
			    // otherwise change it back to relative
			    if (scrollTop > stickyNavTop) { 
			        $('nav').addClass('sticky');
			    } else {
			        $('nav').removeClass('sticky'); 
			    }
			};

			stickyNav();
			// and run it again every time you scroll
			$(window).scroll(function() {
				stickyNav();
			});

			$('.spicy li').on('click', event => {
				 $(event.currentTarget).siblings().removeClass('active');  
				 $(event.currentTarget).addClass('active');
			});

			$('.meat li').on('click', event => {
				 $(event.currentTarget).siblings().removeClass('active');  
				 $(event.currentTarget).addClass('active');
			});
		});


// $(document).ready( () => {
// 	$('.subs').hide();
// 	$('nav > ul > li').on('mouseenter', event =>{
// 		$(event.currentTarget.subs).show();
// 	});

// 	});
