new Splide( '#events-carousel', {
	perPage    : 3,
	perMove    : 1,
    autoWidth  : true,
	autoHeight : true,
    arrows     : false,
	focus      : 'center',
	trimSpace  : false,
	breakpoints: {
		600: {
			
		}
	}
} ).mount( {  } );

new Splide( '#insights-carousel', {
	perPage    : 3,
	perMove    : 1,
    autoWidth  : true,
	autoHeight : true,
    arrows     : false,
	focus      : 'center',
	trimSpace  : false,
	breakpoints: {
		600: {
			
		}
	}
} ).mount( {  } );

document.getElementById('menu-check').addEventListener("click", function(){
    if (this.checked) {
        document.getElementById('modal-overlay').style.display = "block";
    } else {
        document.getElementById('modal-overlay').style.display = "none";
    }
});

document.getElementById('modal-overlay').addEventListener("click", function(){
    document.getElementById('menu-check').checked = false;
    this.style.display = "none";
});
