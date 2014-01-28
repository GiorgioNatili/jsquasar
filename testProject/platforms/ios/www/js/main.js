;define('main', ['appframework', 'appframeworkui', 'views/LoginView'], (function ($, $ui, login) {

	console.log(arguments)

	var init = function (){

		login.init();

	};

	$(document).ready(function(evt){

		$('#afui').get(0).className = 'ios7';
		login.init();
		$ui.launch();

	});
	document.addEventListener('deviceready', init);

}));