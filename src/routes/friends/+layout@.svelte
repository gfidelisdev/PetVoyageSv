<script lang="ts">
	import Header from '../Header.old.svelte';
	import Left from '../Left.svelte';
	import Right from '../Right.svelte';
</script>

<div>
	<Header />
	<!-- <Left /> -->
	<main>
		<slot />
	</main>
	<Right />
</div>
