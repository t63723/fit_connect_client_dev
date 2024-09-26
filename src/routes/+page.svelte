<script lang="ts">
	import { userStore } from "$lib/store.js";

	import Header from "./Header.svelte";
	import ReportTable from "$lib/components/ReportsTable.svelte";

	let telegramId: number;
	userStore.subscribe((value) => {
		telegramId = value.id;
	});
</script>

<svelte:head>
	<title>home</title>
	<meta name="description" content="fit connect, client, dev" />
</svelte:head>

<section>
	<Header />
	<ReportTable {telegramId} />
</section>
