;define('views/LoginView', ['appframework', 'controllers/Login'], (function ($, controller) {
	
	var $errorMessage;
	var $username, $password, $loginForm;

	var initInteraction = function(){

		$username 	= $('#username');
		$password 	= $('#password');
		$loginForm 	= $('#login-form');

		$errorMessage = $('.errorMessage');

		$loginForm.bind('submit', onSubmit);

		controller.init()

	};

	var onSubmit = function(evt){

		evt.preventDefault();

		controller.login($username, $password);	

	};

	var doClearMessages = function(){

		if($errorMessage){

			$errorMessage.text('');

		}

	};

	var displayMessage = function(msg, field){

		if($errorMessage){

			$errorMessage.text(msg);
			$errorMessage.insertAfter(field);
			
		}

	};

	var handleSuccesfulLogin = function(status){

		console.log(status);

		if(status){

			$.ui.popup('we, password corretta');

			$('#loggedin').bind('loadpanel', function(){

				require(['views/ProfileView'], function(view){

					view.init();

				});

			});

			$.ui.loadContent('loggedin', false, false, 'up');
			
		}else{

			$.ui.popup('You are NOT logged in');
			
		}

	};

	var doShowLoader = function(msg, destroy){

		if(!destroy){

			$.ui.showMask(msg || 'Loading...');

		}else{

			$.ui.hideMask();

		}

	};

	return {

		init: initInteraction,
		showErrorMessage: displayMessage,
		succesfulLogin: handleSuccesfulLogin,
		clearMessages: doClearMessages,
		showLoader: doShowLoader

	};

}))