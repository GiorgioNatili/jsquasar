;define('controllers/Login', ['require'], (function (require) {
	
	var view;

	var doLogin = function(username, password){

		if(username.val().length < 3){

			view.showErrorMessage('Insert the username', username);
			return;

		}

		if(password.val().length < 3){

			view.showErrorMessage('Insert the password', password);
			return;		

		}

		view.clearMessages();
		view.showLoader('Cargando...');

		$.ajax({
				  type: 'POST',
				  url: 'http://localhost/loginservice/login.php',
				  data: JSON.stringify({'username': username.val(), 'password': password.val()}),
				  success: function(result){

					var data = JSON.parse(result);	

					if(data.success == true ){

						view.succesfulLogin(true);

					}else if(data.success == false){

						view.succesfulLogin(false);

					}

						view.showLoader('', true);

					

					}
				}
			);	

	};

	var doInit = function(){

		require(['views/LoginView'], function(v){

			view = v;

		});

	};

	return{

		login: doLogin,
		init: doInit

	}

}))