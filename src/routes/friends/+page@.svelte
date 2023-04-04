<script>
	import axios from 'axios';
	import { onMount } from 'svelte';
	import Layout from './+layout@.svelte';
	import DarkLightButton from '../../components/DarkLightButton.svelte';
	// import light from '$lib/images/light-s.svg';

	axios
		.post('https://localhost:10443/api/friends')
		.then((data) => {
			console.log(data.data);
		})
		.catch((error) => {
			console.error(error);
		});

	function toggle() {
		const button = document.querySelector('.button-a');
		button?.classList.toggle('active');
	}
	function handleMouseClick() {
		console.warn('clicked');
	}
</script>

<layout>
	<Layout />
</layout>
<div class="friend">
	olá friends
	<button class="button-a" on:click={toggle} />
	<!-- <img src="/src/lib/images/light-s2.svg" alt="" /> -->
	<div id="catioro" />
	<DarkLightButton size="20em" selected="light" delay="1" />
</div>

<style>
	#catioro {
		background: url('/src/lib/images/light-s3.svg');
		width: 300px;
		height: 300px;
		border-radius: 50%;
		background-color: white;
	}
	.friend {
		display: flex;
		justify-content: flex-end;
	}
	.button-a {
		background: url('/src/lib/images/light-s3.svg');
		background-size: cover;
		border-radius: 50%;
		width: 100px;
		height: 100px;
		transition: background-position 1s ease-in-out;
	}

	.button-a:hover {
		background-image: url('/src/lib/images/dark-s.svg'), url('/src/lib/images/light-s3.svg');
		background-position: left center, right center;
	}

	.button-a.active {
		background-image: url('/src/lib/images/dark-s.svg');
		background-position: right center;
	}

	.animate {
		animation: slide-in-out 1s ease-in-out;
	}

	@keyframes slide-in-out {
		0% {
			background-position: left center, right center;
		}
		100% {
			background-position: right center, left center;
		}
	}
</style>
