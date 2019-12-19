$('.carrossel').slick({
    speed: 900,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3100,
}); 

$(window).scroll(function()
{
	if($(this).scrollTop() > 1200)
	{
	    $('#grid_navbar').addClass('fixed');
	}else if ($(this).scrollTop() < 1000)
	{
	    $('#grid_navbar').removeClass('fixed');
	}
});

$("#btnEnviar").click(function()
{
	var dados = $form.serialize();

	$.ajax(
	{
		url: '../../../../var/www/html/PHP/envioMensagem.php',
		type: 'post',
		data: dados,
		dataType:'json'
	}).done(function(data)
	{
		Swal.fire({
			icon: 'success',
			title: 'Mensagem Enviada!',
			text: 'Você será contatado por email em breve.'
		});
	});
});