angular.module('directive.LiBerry', [])
	.directive('liBerry', function($timeout, $rootScope){
		return{
			scope: {
			books: '='
			},
			templateUrl: 'app/LiBerry/LiBerry.html',
			link: function(scope, $elm, attrs){
				$timeout(function(){

// INIT LIBERRY OBJECT
var LiBerry = {
	container: $('.lb-container'),
	shelf: $('.lb-shelf'),
	bookends: $('.lb-bookend'),
	books: $('.lb-book'),
	spines: $('.lb-spine'),
	clickedBook: null,

	params: {
		containerW: 0,
		shelfW: 0,
		bookendW: 0,
		bookW: 0,
		bookHoverW: 10,
		shelfLeftMargin: 0,
		browseView: true,
		clickState: false,
		clickAnimating: false,
	},

	init: function(){
		LiBerry.arrangeShelf();
		LiBerry.bindUIEvents();
	},

	arrangeShelf: function(){
		LiBerry.params.shelfW = 0; //reset for window resizing
		LiBerry.params.bookW = parseInt($(LiBerry.books).outerWidth(true));
		LiBerry.params.bookendW = parseInt(LiBerry.bookends.css('width'));
		LiBerry.params.containerW = parseInt(LiBerry.container.css('width'));
		for(var i = 0; i < LiBerry.books.length; ++i){
			LiBerry.params.shelfW += LiBerry.params.bookW;
		}
		LiBerry.params.shelfW += 2 * LiBerry.params.bookendW;
		LiBerry.shelf.css({'width' : LiBerry.params.shelfW});
		LiBerry.params.shelfLeftMargin = LiBerry.params.containerW/2 - LiBerry.params.shelfW/2 + 20;
		LiBerry.shelf.css({'margin-left' : LiBerry.params.shelfLeftMargin})
	},

	bindUIEvents: function(){
		LiBerry.bindWindowResize();
		LiBerry.bindMouseEvent();
		LiBerry.bindHoverEvent();
		LiBerry.bindClickEvent(LiBerry.reMasonry);
	},

	bindWindowResize: function(){
		$(window).resize(function(e){
			if(!LiBerry.params.clickState){
				LiBerry.arrangeShelf();
			}else{
				//we need to adjust elements based on the new window width
				//this is especially important for resizing content within lb-content
				LiBerry.params.containerW = LiBerry.container.width();
				LiBerry.shelf.css({'width' : LiBerry.params.containerW});
				if(LiBerry.clickedBook != null){
					LiBerry.clickedBook.css({'width' : LiBerry.params.containerW});
					LiBerry.calcContentHeight();
				}
			}
		});
	},

	bindMouseEvent: function(){
	if(!LiBerry.params.clickAnimating){
		$(document).mousemove(function(e) {
		if(!LiBerry.params.clickState){
			if(LiBerry.params.browseView){
			var xOffset = (LiBerry.params.shelfW*0.5) - e.pageX;
			if (xOffset <= 0){
				LiBerry.shelf.css(
				{'margin-left' : LiBerry.params.shelfLeftMargin - (Math.abs(xOffset)*0.05)}
				);
			}else{
				LiBerry.shelf.css(
				{'margin-left' : LiBerry.params.shelfLeftMargin + (Math.abs(xOffset)*0.05)}
				);
			}
			}
		}
		});
	}
	},

	bindHoverEvent: function(){
		LiBerry.books.hover(function(e){
			var hoverBook = $(this);
			if(!LiBerry.params.clickState){
				$(hoverBook).hoverFlow(e.type,
					{'width': LiBerry.params.bookW + LiBerry.params.bookHoverW}, 360);
				$(LiBerry.shelf).stop().hoverFlow(e.type,
					{'width': LiBerry.params.shelfW + LiBerry.params.bookHoverW},
					{'margin-left' : '-=5'}, 360);
			}
		}, function(e){
			var hoverBook = $(this);
			if(!LiBerry.params.clickState){
				$(LiBerry.shelf).hoverFlow(e.type,
					{'width': LiBerry.params.shelfW},
					{'margin-left' : '+=5'}, 360);
				$(hoverBook).hoverFlow(e.type,
					{'width': LiBerry.params.bookW - 2}, 360);
				}
		});
	},

	bindClickEvent: function(callback){
		LiBerry.spines.click(function(e){
			LiBerry.params.clickAnimating = true;
			LiBerry.params.clickState = !LiBerry.params.clickState;
			$('*').stop( true ); //stop all other animations

			LiBerry.clickedBook = $(this).parent();
			var clickedBookIndex = LiBerry.clickedBook.data('order');
			for(var i = 0; i < LiBerry.books.length; ++i){
				if(clickedBookIndex !== i){
					$(LiBerry.books[i]).toggleClass('clickHide');
					$(LiBerry.books[i]).animate({
					'width' : LiBerry.params.clickState ?
					0 : 100 }, 550);
				}
			}
			for(var i = 0; i < LiBerry.bookends.length; ++i){
				$(LiBerry.bookends[i]).toggleClass('clickHide');
			}

			LiBerry.shelf.animate({
				'width' : LiBerry.params.clickState ?
					LiBerry.params.containerW : LiBerry.params.shelfW,
				'margin-left' : LiBerry.params.clickState ?
					0 : LiBerry.params.shelfLeftMargin},
				500, 'easeOutCubic');
			LiBerry.clickedBook.animate({
				'width' : LiBerry.params.clickState ?
				LiBerry.params.containerW : LiBerry.params.bookW},
				500, 'easeOutCubic');

			LiBerry.calcContentHeight();
			callback(); // reMasonry
		});
	},

	reMasonry: function(){
		if(LiBerry.params.clickState){
			var reMasonry = setTimeout(function(){
				// broadcast forcing masonry to reload
				$rootScope.$broadcast('masonry.reload');
			}, 500);
		}
	},

	calcContentHeight: function(){
		contentHeight = LiBerry.clickedBook.find('.lb-content').height();
		LiBerry.container.animate({
			'height' : LiBerry.params.clickState ?
			((contentHeight == 0) ? '400px' : contentHeight) : '400px'},
			500, 'easeOutCubic');
	}};
// END LIBERRY OBJECT

					LiBerry.init();       	
				});
			}
		};
	});

$.extend($.easing, {
	def: 'easeOutCubic',
	easeInCubic: function (x, t, b, c, d) {return c*(t/=d)*t*t + b;},
	easeOutCubic: function (x, t, b, c, d) {return c*((t=t/d-1)*t*t + 1) + b;}
});
