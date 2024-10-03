<script>
	import Login from "$lib/pages/login.svelte";
	import Error from "$lib/pages/error.svelte";
	import Success from "$lib/pages/success.svelte";
	import Main from "$lib/pages/main.svelte";
	import Profile from "$lib/pages/profile.svelte";
	import Settings from "$lib/pages/settings.svelte";

	let currentScreen = "login";

	/**
	 * @param {string} screenName
	 */
	function goToScreen(screenName) {
		currentScreen = screenName;
	}
</script>

<div class="app container-fluid">
	<main>
		{#if currentScreen === "login"}
			<Login
				on:login={() => goToScreen("main")}
				on:error={() => goToScreen("error")}
			/>
		{:else if currentScreen === "success"}
			<Success on:back={() => goToScreen("main")} />
		{:else if currentScreen === "error"}
			<Error on:back={() => goToScreen("login")} />
		{:else if currentScreen === "main"}
			<div>
				<Main
					on:settings={() => goToScreen("settings")}
					on:profile={() => goToScreen("profile")}
				/>
			</div>
		{:else if currentScreen === "settings"}
			<Settings on:back={() => goToScreen("main")} />
		{:else if currentScreen === "profile"}
			<Profile on:success={() => goToScreen("success")} />
		{/if}
		<slot />
	</main>
</div>
