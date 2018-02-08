var container = $('div.containerr');

$("input#get").click(function(){
	$.ajax({
		type: 'GET',
		url: 'http://localhost:8080/get/all/complaint',
		dataType: 'json',
		success: function(data){
			reply("yeah got it")
			// $.each(data, function(index, item){
			// 	$.each(item, function(key, value){
			// 		container.append(key + ': ' + value + '</br>');
			// 	});
			// 	container.append('</br></br>')
			// });
		}
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
							
					console.log("yeah got it")
				},
				error : function(err){
					alert("err");
				}
			});
		})
});


