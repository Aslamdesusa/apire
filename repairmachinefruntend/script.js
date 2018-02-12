
$('#login').click(function(){
	var userdetails = {}
	var username = $('#email').val();
	var password = $('#password').val();
					

	userdetails.username = username
	userdetails.password =  password

	$.ajax({
			url : "http://127.0.0.1:8080/auth",
			type : "POST",
			data : userdetails,
			success : function(result){
				location.href = "file:///home/navgurukul/Documents/apire/repairmachinefruntend/index2.html"
				console.log("user success")
				console.log(result);
			},
			error : function(err){
				console.log(err);
				alert("You entered a wrong information !");
			}

		});	
});