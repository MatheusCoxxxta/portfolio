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

$("#btnCalc").click(function(){

	const design = $("#design option:selected").val();
	const quant_responsivo = $("#quant_responsivo option:selected").val();
	const foco = $("#foco option:selected").val();
	var valorFinal = 0;

	if(design == "vazio" || quant_responsivo == "vazio" || foco == "vazio")
	{
		Swal.fire({
			icon: 'warning',
			title: 'Você não preencheu tudo...'
		});
	}
	else
	{

	
		
		
		if(foco == "ap")
		{
			if(quant_responsivo == "mais5")
			{
				valorFinal += (18*8*5);
				if(design == "sim") valorFinal += 80;
				else if(design == "nao") valorFinal = valorFinal;
			} 
			else if(quant_responsivo == "menos5")
			{ 
				valorFinal += (17*8*5);
				if(design == "sim") valorFinal += 80;
				else if(design == "nao") valorFinal = valorFinal;
			}
		} 
		else if(foco == "fn")
		{
			if(quant_responsivo == "menos5")
			{
				valorFinal += (15*8*15);
				if(design == "sim") valorFinal += 80;
				else if(design == "nao") valorFinal = valorFinal;
			}
			else if(quant_responsivo == "mais5")
			{
				valorFinal += (17*8*15);
				if(design == "sim") valorFinal += 80;
				else if(design == "nao") valorFinal = valorFinal;
			}
		}
		Swal.fire({
			icon: 'info',
			title: 'Orçamento',
			text: 'R$' + valorFinal,
			footer: 'Entre em contato para mais informações e valores precisos.'
		});
	}

	
});

$(function()
{
	$("#btnOpenMenu").click(function(){
		$("#grid_navbar").attr('style', "width: 100%; z-index: 8");
		$(".navbar").attr('style', "width: 70%; left: 0");
		$("#btnCloseMenu").attr('style', "display: inline"); 
		$("#btnOpenMenu").attr('style', "display: none");
	});

	$("#btnCloseMenu").click(function(){
		$("#grid_navbar").attr('style', "height: ;");
		$(".navbar").attr('style', "height: 0");
		$("#btnCloseMenu").attr('style', "display: none"); 
		$("#btnOpenMenu").attr('style', "display: inline");
	});
});

$('.carrossel_mobile').slick({
    speed: 900,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3100,
}); 