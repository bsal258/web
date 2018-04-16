
$( "#alertmessage" ).hide();
function validation(){
var status = true;
var validName = "Bishal";
var validPassword = "Bishal123";
var expectedName = document.getElementById("username").value;
var expectedPassword = document.getElementById("password").value;
if(validName.localeCompare(expectedName) !== 0 || validPassword.localeCompare(expectedPassword) != 0 || (validName.localeCompare(expectedName) && expectedPassword.localeCompare(expectedPassword)) !== 0){
$( "#alertmessage" ).show();
	status = false;
	
}
else{
$( "#alertmessage" ).hide();
}
if(status == true) {
    setTimeout(function(){
 	document.location.href = "pages/home.html";
 }, 3000);

}
}


$(document).ready(function(){
	$('button').click(validation);
   $('body').keypress(function(e){
   	if(e.keyCode == 13){
   		 validation();
   	}

   });
});
