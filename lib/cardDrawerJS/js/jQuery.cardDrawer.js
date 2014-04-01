/*	CardDrawerJS - jQuery.cardDrawer.js
*	author: Thomas Brodusch;
*	April 2014.
*	jQuery plugin who print a drawed card !
*/

(function($) {
	$.fn.drawCard = function(){
		return $(this).find('div[card-drawer="card"]').each(function() {
			var $t = $(this);
			var cardObj = $.fn.cardValidate($t.text());
			if (cardObj){
				var $t = $(this);
				var type = $.fn.getCardType(cardObj.family);
				$t.addClass('drawed'); 
				$t.addClass(type.color); 
				$t.html('<h1 id="number" >'
							+ cardObj.val
							+'</h1>'
			 				+ '<h1 id="type">'
			 				+ type.family
			 				+'</h1>');

			}
		});	
	};

	$.fn.cardValidate = function(card){
		var cardObj = {};
		if( (card.length == 2) ){
			cardObj.val = card.substring(0,1);
			cardObj.family = card.substring(1,2);
			return cardObj;
		}
		if( (card.length == 3) && (card.substring(0,2) == '10') ){
			cardObj.val = card.substring(0,2);
			cardObj.family = card.substring(2,3);
			return cardObj;
		}
		console.log("Error: Non-valid card number: '"+card+"'");
		return false;
	}

	$.fn.getCardType = function(string){
		var type = {};
		//Determine family.
		if (string == 'h' ) type.family = '&hearts;';
		if (string == 'd' ) type.family = '&diams;';
		if (string == 'c' ) type.family = '&clubs;';
		if (string == 's' ) type.family = '&spades;';

		//Determine color.
		if( string == 'h' || string == 'd') type.color = 'redcard';
		else type.color = 'blackcard';

		return type;
	};
})(jQuery);
$('div[card-drawer=packet]').drawCard();
