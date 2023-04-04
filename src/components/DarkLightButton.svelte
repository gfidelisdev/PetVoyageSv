<script lang="ts">
	import { onMount } from 'svelte';

	export let darkImg = '/src/lib/images/dark-s.svg';
	export let lightImg = '/src/lib/images/light-s4.svg';
	export let size = '100px';
	export let delay = 0.5;
	export let selected: string = 'dark';
	/**
	 * @type {(() => void) | null}
	 */
	export let click: (() => void) | null = null;

	/**
	 * @type {HTMLElement | null}
	 */
	let dark: HTMLElement | null = null;
	/**
	 * @type {HTMLElement | null}
	 */
	let light: HTMLElement | null = null;

	let mask: HTMLElement | null = null;
	onMount(() => {
		let theme = document.querySelector('html')?.getAttribute('data-theme');
		if (theme) selected = theme;
		dark = document.getElementById('dark');
		light = document.getElementById('light');
		mask = document.getElementById('darklight_button_mask');
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

	/**
	 * @param {string} theme
	 */
	function changeTheme(theme: string) {
		document.querySelector('html')?.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
		// setTimeout(() => {
		fadeOut();
		// }, 500);
		setTimeout(() => {
			fadeIn();
		}, 500);
	}

	function fadeOut() {
		let html = document.querySelector('html');
		html?.style.setProperty('transition', 'opacity 0.5s ease-in-out');
		html?.style.setProperty('opacity', '0');
	}

	function fadeIn() {
		let html = document.querySelector('html');
		html?.style.setProperty('transition', 'opacity 0.5s ease-in-out');
		html?.style.setProperty('opacity', '1');
	}

	function handleClickContainer() {
		if (typeof click === 'function') click();
		if (selected === 'dark') {
			selected = 'light';
			changeTheme('light');
			dark?.style.setProperty('transform', 'translate(-100%,0)');
			mask?.style.setProperty('border', '2px solid white');
			setTimeout(() => {
				dark?.style.setProperty('z-index', '0');
				light?.style.setProperty('z-index', '1');
				dark?.style.setProperty('transform', 'translate(0,0)');
			}, delay * 1000);
		} else if (selected === 'light') {
			selected = 'dark';
			changeTheme('dark');
			light?.style.setProperty('transform', 'translate(100%,0)');
			mask?.style.setProperty('border', '2px solid black');
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
	style="--size:{size}"
>
	<div class="mask">
		<div class="darklight_button bg-current" id="dark" style="--size:{size}" />
		<div class="darklight_button" id="light" style="--size:{size}" />
	</div>
</button>

<style>
	.darklight_button {
		position: absolute;
		top: 0;
		left: 0;
		height: var(--size);
		width: var(--size);
		border-radius: 50%;
		overflow: hidden;
	}

	#dark {
		border: 0.2rem solid white;
	}
	#light {
		border: 0.2rem solid black;
	}

	.container {
		position: relative;
		width: var(--size);
		height: var(--size);
		max-width: var(--size);
		max-height: var(--size);
		overflow: hidden;
		border-radius: 50%;
	}

	.mask {
		top: 0;
		left: 0;
		border: 2px solid rgba(128, 128, 128, 1);
		/* box-shadow: ; */
		pointer-events: none;
		border-radius: 50%;
		z-index: 3;
		height: var(--size);
		width: var(--size);
		background-color: aqua;
	}
</style>
