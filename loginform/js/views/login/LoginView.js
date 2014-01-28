// Updated the path due to the new folder structure
;define('views/login/LoginView', [/* Added the path to the controller as a dependency */ 
								  'controllers/Login'], 
								 (function (controller) {
	
	var $username, $password, $submit, $errorMessage;

	console.log('module loaded');

	var initInteraction = function(user){

		controller.init(this);

		$username 	= $('#username');
		$password 	= $('#pwd');
		$submit		= $('#submit');

		$username.val(user);

		$errorMessage = $('.error');

		$submit.click(onSubmit);

	};

	var onSubmit = function(evt){
		
		evt.preventDefault();

		controller.login($username, $password);

	};

	var doShowErrorMessage = function(field, msg){

		$errorMessage.css('display', 'block').text(msg);
        field.after($errorMessage);

        $errorMessage.parent().css('background-color', 'red');

	};

	var doClearErrorMessage = function(){

		// Executed only if the checkField function returns true
		$errorMessage.css('display', 'none');
		$errorMessage.parent().css('background-color', 'transparent');

	};

	return {

		init : initInteraction,
		showErrorMessage: doShowErrorMessage,
		clearErrorMessage: doClearErrorMessage

	}

}))