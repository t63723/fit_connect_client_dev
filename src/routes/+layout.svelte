<script>
	import { fade } from "svelte/transition";

	import Login from "$lib/pages/login.svelte";
	import Error from "$lib/pages/error.svelte";
	import Main from "$lib/pages/main.svelte";
	import Settings from "$lib/pages/settings.svelte";

	let currentScreen = "login";

	function goToScreen(screenName) {
		currentScreen = screenName;
	}
</script>

<div class="app">
	{#if currentScreen === "login"}
		<Login
			on:login={() => goToScreen("main")}
			on:error={() => goToScreen("error")}
		/>
	{:else if currentScreen === "error"}
		<Error on:back={() => goToScreen("login")} />
	{:else if currentScreen === "main"}
		<div>
			<Main
				on:settings={() => goToScreen("settings")}
			/>
		</div>
	{:else if currentScreen === "settings"}
		<Settings on:back={() => goToScreen("main")} />
	{/if}
</div>
