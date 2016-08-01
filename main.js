//when click add button
	//Each contact should be stored as an object
	//Submitting a form should create a new object
	//all fills are required
	//when click add first name and last name will appear in the ul contactList

//the first name and last name will transfer to information button
	//add contact information selecter in html,appear on the right of the page;
	//when click the contact'name, information appear in the selector


$(document).ready(function(){
	
 	var contactArr=[];

  
	$('#add').on("click",function(e){
		e.preventDefault();
		var contact={
			firstName:$('#firstName').val(),
			lastName:$('#lastName').val(),
			phoneNumber:$('#phoneNumber').val(),
			street:$('#street').val(),
			city:$('#city').val(),
			state:$('#state').val(),
		}
		contactArr.push(contact);
		console.log(contactArr)
	})
	
	

})
	