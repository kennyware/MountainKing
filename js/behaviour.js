$(document).ready(function(){
				var size = window.innerWidth;

				Respond('.bg', 'mt-5');
				Respond('#gallery img');

				$(".dropdown-button").dropdown({
					inDuration: 300,
					outDuration: 225,
					constrainWidth: false, // Does not change width of dropdown to that of the activator
					hover: true,
					gutter: 0, // Spacing from edge
					belowOrigin: true // Displays dropdown below the button
				});

				$('.parallax').parallax();

				$('.modal').modal({
					startingTop: '4%',
					endingTop: '20%'
				});

				$('.carousel.carousel-slider').carousel({
					fullWidth: true,
				});

				$('.img-toggle').first().click(function(){
					$('.carousel.carousel-slider').carousel('set', 0);
				});

				$('.img-toggle').eq(1).click(function(){
					$('.carousel.carousel-slider').carousel('set', 1);
				});

				$('.img-toggle').eq(2).click(function(){
					$('.carousel.carousel-slider').carousel('set', 2);
				});

				$('.img-toggle').eq(3).click(function(){
					$('.carousel.carousel-slider').carousel('set', 3);
				});

				$('.img-toggle').eq(4).click(function(){
					$('.carousel.carousel-slider').carousel('set', 4);
				});

				$('.img-toggle').last().click(function(){
					$('.carousel.carousel-slider').carousel('set', 5);
				});

				$('#carousel-btn-prev').click(function(){
					$('.carousel.carousel-slider').carousel('prev');
				});

				$('#carousel-btn-next').click(function(){
					$('.carousel.carousel-slider').carousel('next');
				});

				$('.img-toggle').hover(function(){
					$(this).children('.img-cover').addClass('visible');
				},
				function(){
					$(this).children('.img-cover').removeClass('visible');
				});

				if($(window).scrollTop() < 750){
					$(".btn-floating").hide();
				}

				$(".btn-floating").click(function(){
					var hash = this.hash;

					$('html, body').animate({
						scrollTop:$(hash).offset().top
					}, 2000);
				});

				$(window).scroll(function(){
					if($(window).scrollTop() > 750){
						$(".btn-floating").fadeIn("slow");
						
					}
					else{
						$(".btn-floating").fadeOut("slow");
					}
					
				});

				$(window).resize(function(){
					
					Respond('.bg', 'mt-5');
					

				});

				$('.button-collapse').sideNav();

				function Respond(element, classToAdd){
					if(size < 500){
						$(element).addClass(classToAdd);
					}
				}

				
  				$('#message').trigger('autoresize');


			});

			function myMap() {
			    var mapOptions = {
			        center: new google.maps.LatLng(40.704814, -73.992279),
			        zoom: 10
			    };
			var map = new google.maps.Map(document.getElementById("map"), mapOptions);
			}