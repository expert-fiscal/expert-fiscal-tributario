$(function (){
	$('#sendemail').on('click', function (event) {
		
		event.preventDefault();	
	
		var templateParams = {
			// user_name: $("#fname").val() +" "+ $("#lname").val(),
			user_email: $("#email").val()
			// msg:$("#message").val()
		};		
			
		emailjs.send('smtp_godaddy', 'ebook_expertfiscaltributario', templateParams)
			.then(function(response) {			   
			   // alert("Thanks for your contact, we get in touch as soon as possible.");
			   window.location="http://www.expertfiscaltributario.com.br/obrigado"
			}, function(error) {			   
			   alert("Infelizmente seu e-mail parece ser invalido. Por favor informe outro email e tente novamente.");	
		});	
	});	
});			