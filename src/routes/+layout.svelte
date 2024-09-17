<script>
	import ProfileRoute from "$lib/components/ProfileRoute.svelte";

	const telegramId = 123;
</script>

<div class="app">
	<ProfileRoute {telegramId} />

	<main>
		<slot />
	</main>
</div>

<style>
	main {
		padding-left: 10px;
		padding-right: 10px;
	}
</style>
