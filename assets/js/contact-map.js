// Contact map (layouts/_partials/hbx/blocks/contact). The static map images show first; when the map scrolls into
// view, a zoomable MapLibre map with the same palette and framing (OpenFreeMap vector tiles) fades in over them.
// If the library or the tiles can't load (offline, blocked networks, data-saver) the static image simply stays.
// Follows the site's light/dark theme; zoom with the +/− buttons, Ctrl/⌘ + scroll, or two fingers on phones.
( () => {

	const fig = document.querySelector( '[data-contact-map]' );
	if ( ! fig || ( navigator.connection && navigator.connection.saveData ) ) return;

	const LIB = 'https://cdn.jsdelivr.net/npm/maplibre-gl@4.7.1/dist/';
	const STYLE = 'https://tiles.openfreemap.org/styles/positron';
	const pin = fig.dataset.pin.split( ',' ).map( Number );
	const zh = document.documentElement.lang.startsWith( 'zh' );
	// same framing as the static images: desktop 4:3 column, phone 9:10 full width
	const view = () => ( window.matchMedia( '(max-width: 639px)' ).matches
		? { center: [ 114.1812, 22.3028 ], zoom: 14.3, districts: [ 'East Tsim Sha Tsui' ] }
		: { center: [ 114.1802, 22.3040 ], zoom: 14.55, districts: [ 'Hung Hom', 'Tsim Sha Tsui', 'East Tsim Sha Tsui', 'Gun Club Hill', 'King\'s Park' ] } );
	// chokurei.net palette: pink harbour, pale land, thin grey roads
	const PALETTE = {
		light: { bg: '#F2F2F2', building: '#E7E7E7', park: '#EAEAEA', water: '#FAA4A4', road: '#FFFFFF', roadCase: '#DADADA',
			motorway: '#D2D2D2', rail: '#BDBDBD', label: '#8C8C8C', strong: '#3A3A3A', halo: '#F2F2F2' },
		dark: { bg: '#161616', building: '#202020', park: '#1C1C1C', water: '#5C2A2A', road: '#2C2C2C', roadCase: '#161616',
			motorway: '#3A3A3A', rail: '#444444', label: '#7A7A7A', strong: '#D8D8D8', halo: '#161616' },
	};
	const theme = () => ( document.documentElement.classList.contains( 'dark' ) ? 'dark' : 'light' );

	// thin roads like the static images at the starting zoom (≈14.5), widening as you zoom in: [z12, z14.5, z18]
	const ROAD = { motorway_casing: [ 0.6, 3.6, 22 ], major_casing: [ 0.5, 2.8, 18 ], motorway_inner: [ 0.4, 2.4, 18 ], major_inner: [ 0.3, 1.8, 14 ], minor: [ 0.2, 1, 8 ] };
	const roadWidth = id => {

		const motorway = /motorway/.test( id );
		const w = ROAD[ /casing/.test( id ) ? ( motorway ? 'motorway_casing' : 'major_casing' ) : motorway ? 'motorway_inner' : /major/.test( id ) ? 'major_inner' : 'minor' ];
		return [ 'interpolate', [ 'exponential', 1.6 ], [ 'zoom' ], 12, w[ 0 ], 14.5, w[ 1 ], 18, w[ 2 ] ];

	};

	const load = ( tag, attrs ) => new Promise( ( ok, fail ) => document.head.append( Object.assign( document.createElement( tag ), attrs, { onload: ok, onerror: fail } ) ) );

	function style( base, t, districts ) {

		const s = structuredClone( base );
		const en = [ 'coalesce', [ 'get', 'name:en' ], [ 'get', 'name:latin' ], [ 'get', 'name' ] ];
		const name = zh ? [ 'coalesce', [ 'get', 'name:zh-Hant' ], [ 'get', 'name:zh' ], [ 'get', 'name:nonlatin' ], [ 'get', 'name' ] ] : [ 'upcase', en ];
		const keep = /^(background|park|water|landuse_residential|landcover_wood|building|highway_(minor|major_casing|major_inner|motorway_casing|motorway_inner|motorway_bridge_casing|motorway_bridge_inner)|tunnel_motorway_.*|railway(_transit)?|label_other|label_village|label_town|highway-name-(minor|major))$/;
		s.layers = s.layers.filter( l => keep.test( l.id ) );
		for ( const l of s.layers ) {

			const p = l.paint = l.paint || {};
			if ( l.id === 'background' ) p[ 'background-color' ] = t.bg;
			else if ( l.id === 'water' ) { p[ 'fill-color' ] = t.water; l.filter = [ '==', [ 'get', 'class' ], 'ocean' ]; }
			else if ( l.id === 'park' || l.id === 'landcover_wood' ) { p[ 'fill-color' ] = t.park; p[ 'fill-opacity' ] = 1; }
			else if ( l.id === 'landuse_residential' ) p[ 'fill-color' ] = t.bg;
			else if ( l.id === 'building' ) { p[ 'fill-color' ] = t.building; p[ 'fill-outline-color' ] = t.building; }
			else if ( /casing/.test( l.id ) ) { p[ 'line-color' ] = t.roadCase; p[ 'line-width' ] = roadWidth( l.id ); }
			else if ( /motorway_inner/.test( l.id ) ) { p[ 'line-color' ] = t.motorway; p[ 'line-width' ] = roadWidth( l.id ); }
			else if ( /^highway_/.test( l.id ) ) { p[ 'line-color' ] = t.road; p[ 'line-width' ] = roadWidth( l.id ); }
			else if ( /^railway/.test( l.id ) ) p[ 'line-color' ] = t.rail;
			else if ( l.id.startsWith( 'highway-name' ) ) {

				// street names only once zoomed in to street level (the starting view stays as clean as the static image)
				l.minzoom = 15.5;
				Object.assign( l.layout, { 'text-field': zh ? name : en, 'text-font': [ 'Noto Sans Regular' ], 'text-size': 11, 'text-letter-spacing': 0 } );
				Object.assign( p, { 'text-color': t.label, 'text-halo-color': t.halo, 'text-halo-width': 1.4 } );

			} else if ( l.type === 'symbol' ) {

				l.filter = [ 'in', [ 'coalesce', [ 'get', 'name:en' ], [ 'get', 'name:latin' ] ], [ 'literal', districts ] ];
				Object.assign( l.layout, { 'text-field': name, 'text-font': [ 'Noto Sans Regular' ], 'text-size': 12, 'text-letter-spacing': zh ? 0.05 : 0.18 } );
				Object.assign( p, { 'text-color': t.label, 'text-halo-color': t.halo, 'text-halo-width': 1.4 } );

			}

		}
		s.layers.push( { id: 'landmarks', type: 'symbol', source: 'openmaptiles', 'source-layer': 'poi',
			filter: [ 'any', [ 'all', [ '==', [ 'get', 'class' ], 'railway' ], [ '==', [ 'get', 'subclass' ], 'station' ] ],
				[ '==', [ 'coalesce', [ 'get', 'name:en' ], [ 'get', 'name:latin' ] ], 'The Hong Kong Polytechnic University' ] ],
			layout: { 'text-field': [ 'case', [ '==', [ 'get', 'class' ], 'railway' ], [ 'concat', zh ? name : en, zh ? '站' : ' Station' ], zh ? name : en ],
				'text-font': [ 'Noto Sans Bold' ], 'text-size': 12.5, 'text-max-width': 9, 'text-letter-spacing': 0.02 },
			paint: { 'text-color': t.strong, 'text-halo-color': t.halo, 'text-halo-width': 1.6 } } );
		return s;

	}

	async function start() {

		await Promise.all( [ load( 'link', { rel: 'stylesheet', href: LIB + 'maplibre-gl.css' } ), load( 'script', { src: LIB + 'maplibre-gl.js' } ) ] );
		const base = await ( await fetch( STYLE ) ).json();
		const { districts, ...camera } = view();
		const box = document.createElement( 'div' );
		box.className = 'ct-map-live';
		fig.querySelector( 'figcaption' ).before( box );

		let current = theme();
		const map = new window.maplibregl.Map( { container: box, style: style( base, PALETTE[ current ], districts ), ...camera,
			minZoom: 11, maxZoom: 18, cooperativeGestures: true, attributionControl: false, dragRotate: false, pitchWithRotate: false, touchPitch: false,
			locale: zh ? { 'CooperativeGesturesHandler.WindowsHelpText': '按住 Ctrl 并滚动以缩放地图', 'CooperativeGesturesHandler.MacHelpText': '按住 ⌘ 并滚动以缩放地图',
				'CooperativeGesturesHandler.MobileHelpText': '用两根手指移动地图', 'NavigationControl.ZoomIn': '放大', 'NavigationControl.ZoomOut': '缩小' } : {} } );
		map.touchZoomRotate.disableRotation();
		map.addControl( new window.maplibregl.NavigationControl( { showCompass: false } ), 'top-left' );
		const el = document.createElement( 'div' );
		el.className = 'ct-map-pin';
		el.innerHTML = '<svg viewBox="0 0 30 40" width="30" height="40" aria-hidden="true"><path d="M15 39C15 39 28 24.6 28 14.5 28 7 22.2 1.5 15 1.5S2 7 2 14.5C2 24.6 15 39 15 39Z"/><circle cx="15" cy="14.5" r="5" fill="#fff"/></svg>';
		new window.maplibregl.Marker( { element: el, anchor: 'bottom' } ).setLngLat( pin ).addTo( map );
		map.once( 'idle', () => fig.classList.add( 'is-live' ) );

		new MutationObserver( () => {

			if ( theme() === current ) return;
			current = theme();
			map.setStyle( style( base, PALETTE[ current ], districts ) );

		} ).observe( document.documentElement, { attributes: true, attributeFilter: [ 'class' ] } );

	}

	new IntersectionObserver( ( entries, io ) => {

		if ( ! entries.some( e => e.isIntersecting ) ) return;
		io.disconnect();
		start().catch( () => {} );

	}, { rootMargin: '200px' } ).observe( fig );

} )();
