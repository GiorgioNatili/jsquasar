;define('controllers/Login', [], (function () {
	
	var view;
	var initController = function(v){

		view = v;
		console.log(view);

	};

	var doLogin = function($username, $password){

		if(!checkField($username, 'where is the username?'))return;
		if(!checkField($password, 'where is the password?'))return;

		localStorage.setItem('username', $username.val());

	};

	var checkField = function(field, msg){

		var result = true;

		if(field.val().length <= 3){

			view.showErrorMessage(field, msg);	
			result = false;

		}else{

			view.clearErrorMessage();

		}

		return result;

	};

	return{

		init: initController,
		login: doLogin

	};

}));