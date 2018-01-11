$(function(){	 	
  	$("#Clicky").on('click', function(){
  		$.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=" +new Date().getTime(), function(data) {
  			$("#qText").html(data[0].content);
  			$("#autor").html(data[0].title);
    	});
  	});
});
