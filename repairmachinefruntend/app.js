var container = $('div.containerr');

$(window).bind("load", function(){
	$.ajax({
		type: 'GET',
		url: 'http://localhost:8080/get/all/complaint',
		dataType: 'json',
		success: function(data){
			var trHTML = '';
			for (var i = 0; i < data.data.length; i += 1) {
            	trHTML = "<tr><td> "+ data.data[i]._id +" </td><td>" + data.data[i].machineid +"</td><td>"+data.data[i].phonenumber+ "</td><td>" +data.data[i].problemmsg + "</td><td>" + data.data[i].createdat + "</td><td></td><td></td><td></td><td></td><td></td><td></td><td><button class='edit-button'>Edit</button><button class='delete-button'>Delete</button></td></tr>"
	        	$('#updatetable').append(trHTML);
            }     
	    }
	});
})

// DELETE

$(document).ready(function(){
	$('button#btnn').click(function(){
		console.log('I am hear');
	});
})

$(document).ready(function(){
	$('#save').click(function(){

		var oneModel = {}
		var machinid = $('#machineid').val();
		var phone = $('#phonenumber').val();
		var problem = $('#problem').val();

		oneModel.machineid = machinid;
		oneModel.phonenumber = phone;
		oneModel.problemmsg = problem;


			$.ajax({
				url : "http://127.0.0.1:8080/complaint/submition/form",
				type : "POST",
				data : oneModel,
				success : function(json){
					var msgHTMl = '';
					msgHTMl = "<center><p></p><center>"
	        		$('#bg').append(msgHTMl);
					console.log("yeah got it")
				},
				error : function(err){
					alert("Pleas fill all this field");
				}
			});
		})
});

// $("#login").click(function(){
//     console.log('hello');
//    });
