 ;define('main', ['views/login/LoginView'], (function (login){

	console.log('main loaded');

	var checkExistingData = function(){

		var username = localStorage.getItem('username');
		login.init(username || '');

	}

	return {

		init: checkExistingData

	};

}));