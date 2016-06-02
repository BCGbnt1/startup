function showElement()
{
	$("#hide").fadeIn(2000);
	//document.getElementById("hide").style.display = "block";
	//alert("Page is loaded");
}
function getResponse()
{
	var config = new Object();
	config.url = document.getElementById("url").value;
	var promise = new Promise(function(resolve,reject)
	{
		var call = $.ajax({
				url: config.url,
				type: 'GET',
				dataType: 'html',
				success: function(responseText){
					$('section').removeClass("error");
					$('section').addClass("success");
					Promise.resolve($("#result").html(responseText));
					document.getElementById("#result").style.display = "block";
			},
				error: function(){
					$('section').removeClass("success");
					$('section').addClass("error");
					Promise.reject($("#result").html("ERROR url not resolve"));
					document.getElementById("#result").style.display = "block";
			}
		})
	})

	promise.then(function(result){
			document.write(result);
		}, function(error){
			alert(error);
		});

}