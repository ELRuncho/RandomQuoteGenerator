$(function(){	
  var quoteStorage=[];	
  	$.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=40&callback=", function(data) {
    	data.forEach(function(val){
    		quoteStorage.push(val);
    	})
    	rotateQuote();
  	});

  	function rotateQuote(){
  		var randQ = Math.floor((Math.random() * 39))

  		$()
  		$()
  		$()
  		$()
  		$()
  	}
  	
  	$("#Clicky").on('click', function(){
  		rotateQuote();
  	});
});
