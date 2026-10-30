// Animated loop diagram (layouts/_partials/hbx/blocks/loop-diagram): lights the five steps in turn while the
// diagram is on screen. Clicking a step holds it for a while. Reduced motion: no auto-advance.
( () => {

	const root = document.querySelector( '[data-loop-diagram]' );
	if ( ! root ) return;
	const keys = [ ...root.querySelectorAll( '.ld-steps button' ) ].map( b => b.dataset.k );
	const STEP_MS = 2600, HOLD_MS = 9000;
	const still = window.matchMedia( '(prefers-reduced-motion: reduce)' ).matches;
	let i = 0, timer = 0, visible = false, holdUntil = 0;

	const show = k => {

		root.dataset.step = k;
		root.querySelectorAll( '.ld-steps button' ).forEach( b => b.setAttribute( 'aria-pressed', String( b.dataset.k === k ) ) );

	};
	const tick = () => {

		if ( visible && ! still && Date.now() >= holdUntil ) {

			i = ( i + 1 ) % keys.length;
			show( keys[ i ] );

		}
		timer = window.setTimeout( tick, STEP_MS );

	};

	root.querySelectorAll( '.ld-steps button' ).forEach( b => b.addEventListener( 'click', () => {

		i = keys.indexOf( b.dataset.k );
		show( b.dataset.k );
		holdUntil = Date.now() + HOLD_MS;

	} ) );

	new IntersectionObserver( ( [ e ] ) => { visible = e.isIntersecting; }, { threshold: 0.3 } ).observe( root );
	show( keys[ 0 ] );
	timer = window.setTimeout( tick, STEP_MS );

} )();
