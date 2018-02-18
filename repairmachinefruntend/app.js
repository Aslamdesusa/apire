// DISPLAY ALL DATA IN HTML WITH TABLE

$(window).bind("load", function(){
	$.ajax({
		type: 'GET',
		url: 'http://localhost:8080/get/all/complaint',
		dataType: 'json',
		success: function(data){
			var trHTML = '';
			for (var i = 0; i < data.data.length; i += 1) {
<<<<<<< HEAD
            	trHTML = "<tr class='id'><td> "+ data.data[i]._id +" </td><td>" + data.data[i].machineid +"</td><td>"+data.data[i].phonenumber+ "</td><td>" +data.data[i].problemmsg + "</td><td>" + data.data[i].createdat + "</td><td></td><td></td><td></td><td></td><td></td><td></td><td><button id='btnnn' style='font-size: 12px; padding-right: 10px; padding: 2px !important; outline: none;' type='button' class='btn btn-danger btn-lg' data-toggle='modal' data-target='#myModal'>Delete</button><button style='font-size: 12px; margin-top: 5px; padding: 0px !important; outline: none;'type='button' class='btn btn-primary' data-toggle='modal' data-target='#exampleModal' data-whatever='@mdo'>Edit</button></td></tr>"
=======
            	trHTML = "<tr id=" + data.data[i]._id + "><td id='1'> "+ data.data[i]._id +" </td><td id='2' data-id1="+ data.data[i].machineid + ">" + data.data[i].machineid +"</td><td id='3' data-id2="+data.data[i].phonenumber+ ">"+data.data[i].phonenumber+ "</td><td id='4' data-id3="+data.data[i].problemmsg + ">" +data.data[i].problemmsg + "</td><td>" + data.data[i].createdat + "</td><td></td><td></td><td></td><td></td><td></td><td></td><td><button data-id=" + data.data[i]._id + " style='font-size: 12px; padding-right: 10px; padding: 2px !important; outline: none;' type='button' class='btn btn-danger btn-lg delete' data-toggle='modal'>Delete</button><button style='font-size: 12px; margin-top: 5px; padding: 0px !important; outline: none;'type='button' class='btn btn-primary edit' data-toggle='modal'  data-whatever='@mdo' data-id=" + data.data[i]._id + ">Edit</button></td></tr>"
>>>>>>> 404a3ef45e8d98295dcb84e529db81e2ebb9aa9f
	        	$('#updatetable').append(trHTML);
            }     
	    }
	});
})


// delete a specific complaint from table

$('table').on('click', '.delete', function(e){
        e.preventDefault();
        var dataId = $(this).attr("data-id");
        console.log(dataId);
        $.ajax({
		    url: 'http://localhost:8080/delete/specific/complaintById/'+ dataId,
		    type: 'DELETE',
		    success: function(result) {
		        location.reload();
		    },
			error : function(err){
				alert(err);
			}  
		});
});


// edit a specific complaint from table
$('table').on('click', '.edit', function(e){
        e.preventDefault();
        var dataId = $(this).attr("data-id");
        // console.log(dataId);
        var machineid = $(this).parents('tr').find("td[id='2']").attr('data-id1');
        var phonenumber = $(this).parents('tr').find("td[id='3']").attr('data-id2');
        var message = $(this).parents('tr').find("td[id='4']").attr('data-id3');

        $('#exampleModal').modal({
		    show: 'true'
		});

        $('input#machineid').val(machineid);
        $('input#number').val(phonenumber);
        $('textarea#message').val(message);

        $('button#updatecomplaint').click(function(e){
        	e.preventDefault();
			var updatedmachineid = $('input#machineid').val();
			var updatednumber = $('input#number').val();
			var updatedmessage = $('textarea#message').val();

			updatedetails= {}

			updatedetails.machineid = updatedmachineid.toString()
			updatedetails.phonenumber = updatednumber
			updatedetails.problemmsg = updatedmessage


	        $.ajax({
			    url: 'http://localhost:8080/update/specific/complaintById/'+ dataId,
			    type: 'PUT',
			    data: updatedetails,
			    success: function(result) {
			    	console.log("yeah we got it");
			        location.reload();
			    },
				error : function(err){
					alert(err);
				}  
			});
        })


<<<<<<< HEAD

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
=======
>>>>>>> 404a3ef45e8d98295dcb84e529db81e2ebb9aa9f
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