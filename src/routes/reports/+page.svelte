<script lang="ts">
	import { goto } from "$app/navigation";
	import { userStore } from "$lib/store.js";
	import { selectedReportType } from "$lib/store.js";

	import Header from "../Header.svelte";
	import ReportTable from "$lib/components/ReportsTable.svelte";

	let telegramId: number;
	userStore.subscribe((value) => {
		telegramId = value.id;
	});

	function navigateToReport(reportType: number) {
		selectedReportType.set(reportType);
		goto("/report");
	}
</script>

<svelte:head>
	<title>reports</title>
	<meta name="description" content="reports" />
</svelte:head>

<section>
	<Header />

	<div class="report-buttons">
		<button on:click={() => navigateToReport(0)}>вес</button>
		<button on:click={() => navigateToReport(1)}>шаги</button>
		<button on:click={() => navigateToReport(2)}>кжбу</button>
	</div>

	<ReportTable {telegramId} />
</section>

<style>
	.report-buttons {
		text-align: center;
	}

	.report-buttons button {
		display: inline-block; /* Чтобы `text-align` работал */
	}
</style>
