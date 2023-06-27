// Script para o Google Plus
(function() {
		var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
		po.src = 'https://apis.google.com/js/plusone.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
	  })();

$(document).ready(function(){
    $("#plusone-div").html('<g:plusone size="medium"></g:plusone>');
	$("#plusone-div2").html('<g:plusone size="tall"></g:plusone>');
});

// Script para o Facebook Like
(function($){  
    $.fn.extend({
        oneFBLike: function(options) {  
        
            //Set the default values, use comma to separate the settings 
            var defaults = {  
            	//appID: '',
            	siteTitle: '',
            	siteName: '',
            	siteImage: '',
            	buttonWidth: 100,
            	buttonHeight: 50,
            	showfaces: false,
            	font: 'verdana',
            	layout: 'button_count',
				//layout: 'box_count',
            	action: 'like',
            	colorscheme: 'light'
            }  
            
            var options =  $.extend(defaults, options);  
                        
            return this.each(function() {  
                var o = options;  
                var obj = $(this);
                
                // Add Meta Tags for additional data - options
                jQuery('head').append('<meta property="og:title" content="'+o.siteTitle+'"/>');
                jQuery('head').append('<meta property="og:site_name" content="'+o.siteName+'"/>');
                jQuery('head').append('<meta property="og:image" content="'+o.siteImage+'"/>');
                jQuery('head').append('<meta property="og:url" content="'+window.location.href+'"/>');
                
                // Add #fb-root div - mandatory - do not remove
                jQuery('body').append('<div id="fb-root"></div>');
                
                // setup FB Developers App Link - do not touch
                window.fbAsyncInit = function() {
				FB.init({appId: o.appID, status: true, cookie: true, xfbml: true});
				};
				(function() {
				var e = document.createElement('script'); e.async = true;
				e.src = document.location.protocol +
				'//connect.facebook.net/pt_BR/all.js';
				document.getElementById('fb-root').appendChild(e);
				}());

                // Grab the URL and assign it to a variable
                var dynUrl = document.location;
                var fbDIV = obj;
                                         
                // Apply the like button to an element on the page and include all available options
                // If no options are passed in from the page, the defaults will be applied            
                jQuery(fbDIV).html('<fb:like href="'+dynUrl+'" width="'+o.buttonWidth+'" height="'+o.buttonHeight+'" show_faces="'+o.showfaces+'" font="'+o.font+'" layout="'+o.layout+'" action="'+o.action+'" colorscheme="'+o.colorscheme+'"/>')
                              
            });  
        } 
    }); 
})(jQuery);
