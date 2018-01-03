$("#Clicky").on("click", function(){
	$.getJSON("http://quotes.rest/quote/random.json",function(json){
		$(".quote").html(JSON.stringify(json));
	});
})
