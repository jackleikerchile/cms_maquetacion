/*=============================================
SLIDE            
=============================================*/
var numeroSlide = 1;
var formatearLoop = false;
var cantidadImg = $("#slide ul li").length;

$("#slide ul").css({"width": (cantidadImg*100) + "%"})
$("#slide ul li").css({"width": (100/cantidadImg) + "%"})

/* INDICADORES */

$("#indicadores li").click(function(){

	 var roleSlide = $(this).attr("role-slide");
			
	 $("#slide ul li").css({"display":"none"});
			
	 $("#slide ul li:nth-child("+roleSlide+")").fadeIn();
			
	 $("#indicadores li").css({"opacity":".5"});
			
	 $("#indicadores li:nth-child("+roleSlide+")").css({"opacity":"1"});

	 formatearLoop = true;

	numeroSlide = roleSlide;

})

/* FLECHA AVANZAR */

function avanzar(){

	if(numeroSlide >= cantidadImg){numeroSlide = 1;}

	else{numeroSlide++}

	$("#slide ul li").css({"display":"none"});
			
	$("#slide ul li:nth-child("+numeroSlide+")").fadeIn();
			
	$("#indicadores li").css({"opacity":".5"});
			
	$("#indicadores li:nth-child("+numeroSlide+")").css({"opacity":"1"});
}


$("#slideDer").click(function(){

	avanzar();

	formatearLoop = true;

})

/* FLECHA RETROCEDER */

$("#slideIzq").click(function(){

	if(numeroSlide <= 1){numeroSlide = cantidadImg;}

	else{numeroSlide--}


	$("#slide ul li").css({"display":"none"});
			
	$("#slide ul li:nth-child("+numeroSlide+")").fadeIn();
			
	$("#indicadores li").css({"opacity":".5"});
			
	$("#indicadores li:nth-child("+numeroSlide+")").css({"opacity":"1"});

	formatearLoop = true;

})

/* LOOP */

setInterval(function(){

	if(formatearLoop == true){

		formatearLoop = false;
	}

	else{

	avanzar();

	}

},5000);

/*=====  Fin de SLIDE  ======*/





/*=============================================
Google Maps          
=============================================*/
function initMap() {

	const ubicacion = new localizacion(()=>{

		const myLatLng = {lat: ubicacion.latitude, lng: ubicacion.longitude};

		var texto = '<h1> calle nueva 141 </h1>' + '<p> calle nueva 141, dpt 611, la comuna florida </p>' + '<a href="https://wwww.google.com">Pagina web</a>';

		const options = {
			center: myLatLng,
			
			zoom: 14
		}

		var map = document.getElementById('map');

		const mapa = new google.maps.Map(map, options);

		const marcador = new google.maps.Marker({
			position: myLatLng,
			map: mapa,
			title: "Calle Nueva 141"
		});

		var informacion = new google.maps.InfoWindow({
			content: texto
		});

		marcador.addListener('click', function(){
			informacion.open(mapa, marcador);
		});



});

}
/*=====  Fin de Google Maps  ======*/
