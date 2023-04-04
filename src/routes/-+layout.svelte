<script lang="ts">
	import Header from './Header.old.svelte';
	import Left from './Left.svelte';
	import Right from './Right.svelte';
	import './styles.css';
	import '../app.css';

	import { onMount } from 'svelte';
	let isShowingPanel = true;
	let isShowingRightPanel = true;
	/**
	 * @type {HTMLElement | null}
	 */
	let leftPanel: HTMLElement | null = null;
	let rightPanel: HTMLElement | null = null;
	// let showButton = null;
	// let hideButton = null;
	onMount(() => {
		leftPanel = document.getElementById('leftPanel');
		rightPanel = document.getElementById('rightPanel');
	});

	function showHide() {
		if (isShowingPanel) {
			leftPanel?.style.removeProperty('display');
			leftPanel?.style.setProperty('display', 'none');
		} else {
			leftPanel?.style.removeProperty('display');
			leftPanel?.style.setProperty('display', 'block');
		}
	}
	function showHideRight() {
		if (isShowingRightPanel) {
			rightPanel?.style.removeProperty('display');
			rightPanel?.style.setProperty('display', 'none');
		} else {
			rightPanel?.style.removeProperty('display');
			rightPanel?.style.setProperty('display', 'block');
		}
	}
</script>

<div class="app">
	<Header />
	<div class="myContainer mx-auto w-1/2">
		<div class="left" id="left">
			<label class="btn btn-circle swap swap-rotate" id="buttonSwapPanel">
				<!-- this hidden checkbox controls the state -->
				<input type="checkbox" bind:checked={isShowingPanel} on:change={showHide} />

				<!-- hamburger icon -->
				<svg
					class="swap-off fill-current"
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 512 512"
					><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg
				>

				<!-- close icon -->
				<svg
					class="swap-on fill-current"
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 512 512"
					><polygon
						points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
					/></svg
				>
			</label>
			<!-- <button class="button rounded bg-red-300 p-1" on:click={show} id="show">Show</button> -->
			<!-- <button on:click={hide} id="hide">Hide</button> -->
			<div id="leftPanel" class="bg-primary-content text-base-content">
				<Left />
			</div>
		</div>
		<main>
			<slot />
		</main>
		<div class="right w-1/6 mr-2" id="right">
			<label class="btn btn-circle swap swap-rotate" id="buttonSwapRightPanel">
				<!-- this hidden checkbox controls the state -->
				<input type="checkbox" bind:checked={isShowingRightPanel} on:change={showHideRight} />

				<!-- hamburger icon -->
				<svg
					class="swap-off fill-current"
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 512 512"
					><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg
				>

				<!-- close icon -->
				<svg
					class="swap-on fill-current"
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 512 512"
					><polygon
						points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
					/></svg
				>
			</label>
			<div id="rightPanel" class="text-base-content">
				<Right />
			</div>
		</div>
	</div>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>

<style lang="postcss">
	#leftPanel {
		/* background-color: ; */
		z-index: 10;
		/* background-color: rgba(180, 180, 180, 1); */
		border-radius: 1rem;
	}
	@media (min-width: 720px) {
		#leftPanel {
			max-width: 20vw;
			display: block !important;
		}
		#buttonSwapPanel {
			display: none !important;
		}
	}
	@media (max-width: 719px) {
		#leftPanel {
			position: absolute;
			max-width: 90vw;
			display: none;
		}
	}
	#rightPanel {
		/* background-color: ; */
		z-index: 10;
		/* background-color: rgba(180, 180, 180, 1); */
		border-radius: 1rem;
	}
	@media (min-width: 720px) {
		#rightPanel {
			max-width: 20vw;
			display: block !important;
		}
		#buttonSwapRightPanel {
			display: none !important;
		}
	}
	@media (max-width: 719px) {
		#rightPanel {
			position: absolute;
			max-width: 90vw;
			display: none;
		}
	}
	.myContainer {
		/* @apply container; */
		width: 95vw;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		align-content: flex-start;
		margin-left: 2rem;
		margin-right: 2rem;
	}
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		width: 100vw;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
