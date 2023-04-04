<script lang="ts">
	import axios from 'axios';

	interface Friend {
		name: string;
		picture: string;
	}

	let friends: Array<Friend> = [];

	axios
		.get('https://localhost:10443/api/friends')
		.then((response) => {
			console.log(response.data.friends);
			friends = response.data.friends;
		})
		.catch((error) => {
			console.error(error);
		});
</script>

<div class="right_nav">
	{#each friends as friend}
		<div class="content">
			<div class="avatar">
				<div class="w-24 mask mask-squircle">
					<img src={friend.picture} alt="picture of {friend.name}" />
				</div>
			</div>
			<div class="flex justify-center">{friend.name}</div>
		</div>
	{/each}
</div>

<style>
	.right_nav {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		flex-direction: row;
	}
	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
</style>
