<script lang="ts">
	import Header from "./Header.svelte";
	import ReportTable from "$lib/components/ReportsTable.svelte";

	const telegramId = 123;
</script>

<svelte:head>
	<title>home</title>
	<meta name="description" content="fit connect, client, dev" />
</svelte:head>

<section>
	<Header />
	<ReportTable {telegramId} />
</section>
