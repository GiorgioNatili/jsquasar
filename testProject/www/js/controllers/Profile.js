;define('controllers/Profile', [], (function () {
	
	var view;

	var doInitController = function(v){

		view = v;

		var user = localStorage.getItem('twitteruser');

		if(user){

			view.setTwitterUser(user);

		}

	};

	var doGetPicture = function(){

		var options = {   quality : 75,
						  destinationType : Camera.DestinationType.FILE_URI,
						  sourceType : Camera.PictureSourceType.CAMERA,
						  allowEdit : true,
						  encodingType: Camera.EncodingType.JPEG,
						  targetWidth: 160,
						  saveToPhotoAlbum: false };

		navigator.camera.getPicture(onCameraSuccess, onCameraError, options);

	};

	var onCameraSuccess = function(){

		console.log(arguments);

	};

	var onCameraError = function(error){

		view.showErrorMessage('The error is ' + error);

	};

	var doSaveTwitter = function(){

		localStorage.setItem('twitteruser', view.getTwitterUser());
		console.log(localStorage.getItem('twitteruser'));

	};

	var doOpenTwitter = function(){

		var ref = window.open('https://twitter.com/' + view.getTwitterUser(), '_blank', 'location=yes');
		
		setTimeout(function(){

			ref.close();

		}, 2000);

	};

	return{

		init: doInitController,
		getPicture: doGetPicture,
		saveTwitter: doSaveTwitter,
		openTwitter: doOpenTwitter

	}

}));