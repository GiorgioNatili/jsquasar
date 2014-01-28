require.config({

 	paths: {

        appframework: 'libs/appframework/appframework',
        appframeworkui: 'libs/appframework/appframework.ui.min'

        },

    shim: {

    	'appframework':{

    		exports: '$'

    	},

    	'appframeworkui':{

    		exports: '$.ui'

    	}

    },

    waitseconds: 10

});

require(['main'], function(main){

    

});
