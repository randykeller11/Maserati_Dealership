//hide preloader
window.addEventListener('load', () => document.querySelector('.preloader').classList.add('hidePreloader'))

function allOff(){
	$(".featured-photo").addClass("noDisplay");
};


$("#ghibli").on("click", function(){
	allOff();
	$(".ghibli").toggleClass("noDisplay");
	$(".featured-link").attr("href", "https://www.maseratiofnewportbeach.com/inventoryphotos/51/zam57xsaxk1313307/ip/1.jpg");
});

$("#levante").on("click", function(){
	allOff();
	$(".levante").toggleClass("noDisplay");
	$(".featured-link").attr("href", "https://res.cloudinary.com/carsguide/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/Maserati_Levante_2018_blue_1.jpg");
});

$("#quatro").on("click", function(){
	allOff();
	$(".quatro").toggleClass("noDisplay");
	$(".featured-link").attr("href", "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBMueex.img?h=373&w=624&m=6&q=60&o=f&l=f&x=700&y=1017");
});

$("#granturismo").on("click", function(){
	allOff();
	$(".granturismo").toggleClass("noDisplay");
	$(".featured-link").attr("href", "https://www.maseratiofsandiego.com/assets/stock/presskit/white/640/usc80msc052a01300.jpg");
});

$("#18_quatro").on("click", function(){
	allOff();
	$(".18_quatro").toggleClass("noDisplay");
	$(".featured-link").attr("href", "https://postmediadriving.files.wordpress.com/2016/06/2016-06-18-07-11-08.jpg?quality=100&strip=all&w=800&h=520&crop=1");
});

$("#4_door").on("click", function(){
	$(".inv_car").addClass("noDisplay");
	$(".4_door").toggleClass("noDisplay");
});

$("#coupe").on("click", function(){
	$(".inv_car").addClass("noDisplay");
	$(".coupe").toggleClass("noDisplay");
});

$("#all").on("click", function(){
	$(".inv_car").addClass("noDisplay");
	$(".inv_car").toggleClass("noDisplay");
});





