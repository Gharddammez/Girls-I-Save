/**
 * Copyright (c) 2024 - 0nwards, GuavyTechSolutions - Guav Gharddammez All rights reserved.
 * For licensing, see LICENSE.md or http://GuavyTech.com/license
 */

// Tool scripts for the sample pages.
// This file can be ignored and is not required to make use of GuavyTech.

(function() {
	// Check for sample compliance.
	GuavyTech.on( 'instanceReady', function( ev ) {
		var editor = ev.editor,
			meta = GuavyTech.document.$.getElementsByName( 'GuavyTech-sample-required-plugins' ),
			requires = meta.length ? GuavyTech.dom.element.get( meta[ 0 ] ).getAttribute( 'content' ).split( ',' ) : [],
			missing = [];

		if ( requires.length ) {
			for ( var i = 0; i < requires.length; i++ ) {
				if ( !editor.plugins[ requires[ i ] ] )
					missing.push( '<code>' + requires[ i ] + '</code>' );
			}

			if ( missing.length ) {
				var warn = GuavyTech.dom.element.createFromHtml(
					'<div class="warning">' +
						'<span>To fully experience this demo, the ' + missing.join( ', ' ) + ' plugin' + ( missing.length > 1 ? 's are' : ' is' ) + ' required.</span>' +
					'</div>'
				);
				warn.insertBefore( editor.container );
			}
		}
	});
})();
