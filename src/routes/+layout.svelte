<script lang="ts">
	import { onMount } from "svelte";
	import { userStore } from "$lib/store.js";
	import ProfileRoute from "$lib/components/ProfileRoute.svelte";

	let telegramId: number;

	let isTelegramWebApp: boolean | undefined = false;
	let webAppData: any = null;
	let userInfo: any | undefined;
	let err: string | undefined | null;

	onMount(async () => {
		isTelegramWebApp = window.Telegram && window.Telegram.WebApp;
		webAppData = window.Telegram?.WebApp;
		userInfo = webAppData?.initDataUnsafe?.user;

		// console.log(isTelegramWebApp);
		// console.log(webAppData);
		// console.log(userInfo);

		if (userInfo != undefined) {
			userStore.set(userInfo);
			telegramId = userInfo.id;
		}
	});
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
