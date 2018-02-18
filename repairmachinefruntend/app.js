// DISPLAY ALL DATA IN HTML WITH TABLE

$(window).bind("load", function(){
	$.ajax({
		type: 'GET',
		url: 'http://localhost:8080/get/all/complaint',
		dataType: 'json',
		success: function(data){
			var trHTML = '';
			for (var i = 0; i < data.data.length; i += 1) {
            	trHTML = "<tr class='id'><td> "+ data.data[i]._id +" </td><td>" + data.data[i].machineid +"</td><td>"+data.data[i].phonenumber+ "</td><td>" +data.data[i].problemmsg + "</td><td>" + data.data[i].createdat + "</td><td></td><td></td><td></td><td></td><td></td><td></td><td><button id='btnnn' style='font-size: 12px; padding-right: 10px; padding: 2px !important; outline: none;' type='button' class='btn btn-danger btn-lg' data-toggle='modal' data-target='#myModal'>Delete</button><button style='font-size: 12px; margin-top: 5px; padding: 0px !important; outline: none;'type='button' class='btn btn-primary' data-toggle='modal' data-target='#exampleModal' data-whatever='@mdo'>Edit</button></td></tr>"
	        	$('#updatetable').append(trHTML);
            }     
	    }
	});
})




$('table').on('click', '#btnnn', function(){
	var rowEl = $(this).closest('tr');
	var id = rowEl.find('.id').val();
	console.log(id);
	$.ajax({
		url: '/delete/specific/complaintById/'+id,
		method: 'DELETE',
		contentType: 'aplication/json',
		success: function(response){
			console.log(response);
		}
	});
});


// POST AND CHECK PHONE NUMBER

$(document).ready(function(){
	$('#save').click(function(){

		var oneModel = {}
		var machinid = $('#machineid').val();
		var phone = $('#phonenumber').val();
		var problem = $('#problem').val();

		oneModel.machineid = machinid;
		oneModel.phonenumber = phone;
		oneModel.problemmsg = problem;
		
		if (phone === "") {
			alert("Please fill all this field");
			return false;
		}
		if (isNaN(phone)) {
			alert("Phone Number is wrong Enter only numeric value");
			return false;
		}
		if (phone.length<10) {
			alert("Mobile number must be 10 digit");
			return false
		}
		if (phone.length>10) {
			alert("Mobile number must be 10 digit");
			return false
		}
		if ((phone.charAt(0) !=9) && (phone.charAt(0) !=8) && (phone.charAt(0) !=7)) {
			alert("Mobile number must start width 9, 8 and 7")
		}
			$.ajax({
				url : "http://127.0.0.1:8080/complaint/submition/form",
				type : "POST",
				data : oneModel,
				success : function(json){
					location.reload();
				},
				error : function(err){
					alert("Pleas fill all this field");
				}  
			});
		})
});


$(document).ready(function(){
	$('#AddComplaint').click(function(){

		var secondModel = {}
		var machinid = $('#MachineID').val();
		var phone = $('#PhoneNumber').val();
		var problem = $('#CommentMsg').val();

		secondModel.machineid = machinid;
		secondModel.phonenumber = phone;
		secondModel.problemmsg = problem;
		
		if (phone === "") {
			alert("Please fill all this field");
			return false;
		}
		if (isNaN(phone)) {
			alert("Phone Number is wrong Enter only numeric value");
			return false;
		}
		if (phone.length<10) {
			alert("Mobile number must be 10 digit");
			return false
		}
		if (phone.length>10) {
			alert("Mobile number must be 10 digit");
			return false
		}
		if ((phone.charAt(0) !=9) && (phone.charAt(0) !=8) && (phone.charAt(0) !=7)) {
			alert("Mobile number must start width 9, 8 and 7")
		}
			$.ajax({
				url : "http://127.0.0.1:8080/complaint/submition/form",
				type : "POST",
				data : secondModel,
				success : function(json){
					location.reload();
				},
				error : function(err){
					alert("Pleas fill all this field");
				}  
			});
		})
});

// Login button

$(function (){
	$('#bloding').click(function(){
		$(this).html('<img src="img/preloader.gif"  width="30" height="20" align="center"/>').fadeOut(3000, function (){
			location.href = "login.html"

		});
		// return true;
	});
})


// SEARCH
  $(document).ready(function(){
  $("#sort-news").on("click", function() {
    var value = $(this).val().toLowerCase();
    $("#updatetable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      if (value == 'all') {
      	location.reload();
      }
    });
  });
});

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}