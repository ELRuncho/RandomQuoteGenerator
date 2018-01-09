$(function(){	
	$("#Clicky").on("click", function(){
		$.getJSON("http://quotes.rest/qod.json";function(json){
			var q1 = "";
			json.forEach(function(val){
				var keys = Object.keys(val);
				q1 += "<div class = 'quote2'>";
				keys.forEach(function(key){
					q1+="<strong>"+ key + "</strong>: "+ val[key]+"<br>";
				});
				q1+="</div><br>";
			});
			$(".quote").html(q1);
		});
	});
});
