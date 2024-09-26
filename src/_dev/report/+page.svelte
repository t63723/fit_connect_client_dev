<script lang="ts">
	import { goto } from "$app/navigation";
	import { selectedReportType } from "$lib/store.js";
	import { userStore } from "$lib/store.js";

	import { apiRequest } from "$lib/api";
	import Header from "../Header.svelte";

	let telegramId: number;
	userStore.subscribe((value) => {
		telegramId = value.id;
	});

	let reportType: any;
	selectedReportType.subscribe((value) => {
		reportType = value;
	});

	const reportTypeTitle: any = {
		0: "вес",
		1: "шаги",
		2: "кбжу",
	};

	const reportTypeDisplay: string = reportTypeTitle[reportType];

	let reportDate: string = new Date().toISOString().split("T")[0];
	let reportValue: string;

	async function handleClick() {
		const url = `reports/get_service_value/?report_type=${reportType}&telegram_uid=${id}&report_date=${reportDate}`;

		const response = await apiRequest("GET", url);

		reportValue = response["value"];
	}

	async function handleSubmit() {
		const formData = {
			value: reportValue,
			reportDate: reportDate,
		};

		try {
			const url = `reports/create_report/?report_type=${reportType}&telegram_uid=${id}`;

			const response = await apiRequest("POST", url, formData);
			console.log("response:", response);

			goto("/");
		} catch (error) {
			console.error("error:", error);
		}
	}
</script>

<svelte:head>
	<title>добавить отчет</title>
	<meta name="description" content="добавить отчет" />
</svelte:head>

<section>
	<Header />

	<div class="text-center">
		<p>добавить {reportTypeDisplay}</p>
	</div>

	<form on:submit|preventDefault={handleSubmit}>
		<div class="row">
			<div class="col">
				<input
					type="date"
					id="clientReportDate"
					required
					bind:value={reportDate}
				/>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<input
					type="number"
					id="value"
					bind:value={reportValue}
					min="0"
					step="0.01"
					required
				/>
			</div>
			<div class="col">
				<div class="text-center">
					<button type="button" on:click={handleClick}
						>получить</button
					>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<div class="text-center">
					<button type="submit">Отправить</button>
				</div>
			</div>
		</div>
	</form>
</section>
