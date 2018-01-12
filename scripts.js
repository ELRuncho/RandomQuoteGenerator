$(function(){

	//this creates a random 6 d9igits hex number and returns it including the # simbol
  	function getRandomColor() {
  		var letters = '0123456789ABCDEF';
  		var color = '#';
  		for (var i = 0; i < 6; i++) {
    		color += letters[Math.floor(Math.random() * 16)];
  		}
  		return color;
	}

	// takes the random hex color and assigns it to the background of the body
	function setRandomColor() {
  		$(".bod").css("background-color", getRandomColor());//assiging randomly generated color to the bacground of the body and buttons
  		$(".text").css("color", getRandomColor());
  	}
  	
 	setRandomColor();
	//gets a random quote from an extenral api and adds the text as html, also sets the color for the background and buttons
  	$("#Clicky").on('click', function(){
  		$.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=" +new Date().getTime(), function(data) {
  			$("#qText").html(data[0].content);
  			$("#autor").html(data[0].title);
    	});
    	setRandomColor();

    	$("#qText").fadeOut();
    	$("#autor").fadeOut();
    	$("#bQ").fadeOut();
    	$("#qText").fadeIn();
    	$("#autor").fadeIn();
    	$("#bQ").fadeIn();
  	});
});
