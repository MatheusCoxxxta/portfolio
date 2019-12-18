$('.carrossel').slick({
    speed: 900,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3100,
}); 

$(window).scroll(function()
{
	if($(this).scrollTop() > 1000)
	{
	    $('#grid_navbar').addClass('fixed');
	}else
	{
	    $('#grid_navbar').removeClass('fixed');
	}
});