(function(bespoke) {

	bespoke.plugins.inifiniteloop = function(deck, options) {
			options.nbSlideBefore = options.nbSlideBefore !== undefined ? options.nbSlideBefore : 1;

			deck.on('activate', function(e) {
			    if (e.index > options.nbSlideBefore) {
			    	deck.slides.push(deck.slides.shift());
			    }
		  });
	};

}(bespoke));
