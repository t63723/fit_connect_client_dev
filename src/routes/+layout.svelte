<script>
	import { fade } from "svelte/transition";

	import Login from "$lib/pages/login.svelte";
	import Error from "$lib/pages/error.svelte";
	import Main from "$lib/pages/main.svelte";

	// import Login from "./Login.svelte";
	// import Error from "./Error.svelte";
	// import Main from "./Main.svelte";
	// import Settings from "./Settings.svelte";

	let currentScreen = "login";

	function goToScreen(screenName) {
		currentScreen = screenName;
	}
</script>

{#if currentScreen === "login"}
	<Login
		on:login={() => goToScreen("main")}
		on:error={() => goToScreen("error")}
	/>
{:else if currentScreen === "error"}
	<Error on:back={() => goToScreen("login")} />
{:else if currentScreen === "main"}
	<div class="app">
		<main>
			<slot />
		</main>
	</div>
	<Main on:back={() => goToScreen("main")} />
{/if}
