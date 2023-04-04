<script>
	import { onMount } from 'svelte';

	export let darkImg = '/src/lib/images/dark-s.svg';
	export let lightImg = '/src/lib/images/light-s3.svg';
	/**
	 * @type {HTMLElement | null}
	 */
	let dark = null;
	/**
	 * @type {HTMLElement | null}
	 */
	let light = null;
	export let delay = 0.5;
	export let selected = 'dark';
	onMount(() => {
		dark = document.getElementById('dark');
		light = document.getElementById('light');
		dark?.style.setProperty('transition', `transform ${delay}s ease-in-out`);
		light?.style.setProperty('transition', `transform ${delay}s ease-in-out`);
		dark?.style.setProperty('background', `url(${darkImg})`);
		light?.style.setProperty('background', `url(${lightImg})`);
		if (selected === 'dark') {
			dark?.style.setProperty('z-index', '10');
			light?.style.setProperty('z-index', '0');
		}
		if (selected === 'light') {
			light?.style.setProperty('z-index', '10');
			dark?.style.setProperty('z-index', '0');
		}
	});

	function handleClickContainer() {
		if (selected === 'dark') {
			selected = 'light';
			dark?.style.setProperty('transform', 'translate(-100%,0)');
			setTimeout(() => {
				dark?.style.setProperty('z-index', '0');
				light?.style.setProperty('z-index', '1');
				dark?.style.setProperty('transform', 'translate(0,0)');
			}, delay * 1000);
		} else if (selected === 'light') {
			selected = 'dark';
			light?.style.setProperty('transform', 'translate(100%,0)');
			setTimeout(() => {
				light?.style.setProperty('z-index', '0');
				dark?.style.setProperty('z-index', '1');
				light?.style.setProperty('transform', 'translate(0,0)');
			}, delay * 1000);
		}
	}
	function handleMouseEnterContainer() {
		if (selected === 'dark') dark?.style.setProperty('transform', 'translate(-50%,0)');
		else if (selected === 'light') light?.style.setProperty('transform', 'translate(50%,0)');
	}

	function handleMouseLeaveContainer() {
		light?.style.setProperty('transform', 'translate(0,0)');
		dark?.style.setProperty('transform', 'translate(0,0)');
	}
</script>

<button
	class="container"
	on:click={handleClickContainer}
	on:mouseenter={handleMouseEnterContainer}
	on:mouseleave={handleMouseLeaveContainer}
>
	<div id="dark" />
	<div id="light" />
</button>

<style>
	#dark,
	#light {
		position: absolute;
		top: 0;
		left: 0;
		height: 200px;
		width: 200px;
		border-radius: 50%;
		overflow: hidden;
		/* transition: transform {delay}ms ease-in-out; */
	}
	/* #a {
	} */
	/* 
	#a:hover {
		transform: translate(-50%, 0);
	} */
	.container {
		position: relative;
		width: 200px;
		height: 200px;
		max-width: 200px;
		max-height: 200px;
		overflow: hidden;
		border-radius: 50%;
	}
</style>
