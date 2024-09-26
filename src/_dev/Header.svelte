<script>
	import { page } from "$app/stores";
	import { goto } from "$app/navigation";
</script>

<header>
	<nav class="nav">
		<div class="nav-center">
			<a
				href="/"
				on:click={() => goto("/")}
				class:active={$page.url.pathname === "/"}>home</a
			>
			<a
				href="/reports"
				on:click={() => goto("/reports")}
				class:active={$page.url.pathname === "/reports"}>reports</a
			>
			<a
				href="/config"
				on:click={() => goto("/config")}
				class:active={$page.url.pathname === "/config"}>config</a
			>
		</div>
	</nav>
</header>
