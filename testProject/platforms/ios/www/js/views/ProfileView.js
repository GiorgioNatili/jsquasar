;define('views/ProfileView', ['appframework', 'controllers/Profile'], (function ($, controller) {
	
	var $currentImage, $getPicture, $saveTwitter, $openTwitter, $twitter;

	var initView = function(){

		$currentImage = $('#current-image');
		$getPicture = $('#get-picture');

		$twitter = $('#twitter');
		$saveTwitter = $('#save-twitter');
		$openTwitter = $('#open-twitter');

		controller.init(this);

		$getPicture.bind('tap',  controller.getPicture);
		$saveTwitter.bind('tap', controller.saveTwitter);
		$openTwitter.bind('tap', controller.openTwitter);		
		
	};

	var doShowErrorMessage = function(msg){



	};

	return {

		init: initView,
		showErrorMessage: doShowErrorMessage,

		getTwitterUser: function(){return $twitter.val();},
		setTwitterUser: function(value){$twitter.val(value);},

		setImagePath: function(value){$currentImage.attr('src', value);}

	}

}));