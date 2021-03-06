$(function() {
	$('.fa-bars').mouseover(function() {
		$('.header__hamburger-menu').show();
		$('.header__menu_hamb').show();
	});

	$('.header__menu_hamb').mouseover(function() {
		$('.header__hamburger-menu').hide();
		$('.header__menu_hamb').hide();
	});
});