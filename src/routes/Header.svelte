<script>
	import { page } from "$app/stores";
</script>

<header>
	<nav class="nav">
		<div class="nav-center">
			<a href="/" class:active={$page.url.pathname === '/'}>home</a>
			<a href="/reports" class:active={$page.url.pathname === '/reports'}>reports</a>
			<a href="/config" class:active={$page.url.pathname === '/config'}>config</a>
		</div>
	</nav>
</header>
