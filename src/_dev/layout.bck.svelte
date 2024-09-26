<script lang="ts">
	import { userStore } from "$lib/store.js";
	import TelegramCheck from "./components/TelegramCheck.svelte";
	import ProfileRoute from "./components/ProfileRoute.svelte";

	let telegramId: number | undefined;
	userStore.subscribe((value) => {
		telegramId = value.id;
	});
</script>

<div class="app">
	{#if telegramId}
		<ProfileRoute {telegramId} />

		<main>
			<slot />
		</main>
	{:else}
		<TelegramCheck />
	{/if}
</div>

<style>
	main {
		padding-left: 10px;
		padding-right: 10px;
	}
</style>
