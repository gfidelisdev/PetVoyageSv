<script lang="ts">
	export let darkImg = '/src/lib/images/dark-s.svg';
	export let lightImg = '/src/lib/images/light-s4.svg';
</script>

<div>
	<label class="swap swap-flip text-9xl">
		<!-- this hidden checkbox controls the state -->
		<input type="checkbox" />

		<div class="swap-on"><img src={darkImg} alt="dark" /></div>
		<div class="swap-off"><img src={lightImg} alt="light" /></div>
	</label>
</div>

<style>
	img {
		width: 100px;
		height: 100px;
		border-radius: 50%;
	}
</style>
