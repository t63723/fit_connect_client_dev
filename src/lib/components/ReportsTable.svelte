<script lang="ts">
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import { getReports } from "$lib/utils/reports";
    import Chart from "chart.js/auto"; // Import Chart.js

    export let telegramId: number;

    let reportsData: any | null = null;
    let error: string | null = null;

    let ctx;
    let chartCanvas: any;
    let chartData: any;

    type TableRow = {
        date: string;
        type_0: string;
        type_1: string;
        type_2: string;
    };

    let tableData: TableRow[] = [];

    onMount(async () => {
        try {
            reportsData = await getReports(telegramId);

            tableData = reportsData.reduce((acc: TableRow[], report: any) => {
                const date = new Date(report.report_date).toLocaleDateString();
                const existingRow = acc.find((row) => row.date === date);

                if (existingRow) {
                    if (report.report_type === 0) {
                        existingRow.type_0 = report.value.value;
                    } else if (report.report_type === 1) {
                        existingRow.type_1 = report.value.value;
                    } else if (report.report_type === 2) {
                        existingRow.type_2 = report.value.value;
                    }
                } else {
                    const newRow: TableRow = {
                        date: date,
                        type_0:
                            report.report_type === 0 ? report.value.value : "",
                        type_1:
                            report.report_type === 1 ? report.value.value : "",
                        type_2:
                            report.report_type === 2 ? report.value.value : "",
                    };
                    acc.push(newRow);
                }

                return acc;
            }, []); // Prepare data for the chart

            let ai_x = tableData.map((row) => row.date);
            let ai_y = tableData.map((row) => parseFloat(row.type_1) || 0);

            chartData = {
                labels: ai_x,
                datasets: [
                    {
                        label: "шаги",
                        data: ai_y,
                    },
                ],
            };
        } catch (err) {
            error = (err as Error).message;
            console.error(err);
        }
    });

    $: if (chartCanvas) {
        ctx = chartCanvas.getContext("2d");
        if (ctx) {
            let chart = new Chart(ctx, {
                type: "line",
                data: chartData,
            });
        }
    }
</script>

{#if error}
    {error}
{:else if reportsData}
    {#if $page.url.pathname === "/"}
        <div class="py-2">
            <canvas id="myChart" bind:this={chartCanvas}></canvas>
        </div>
    {/if}

    <table class="table is-fullwidth">
        <thead>
            <tr>
                <th>дата</th>
                <th>шаги</th>
                <th>вес</th>
                <th>ккал</th>
            </tr>
        </thead>
        <tbody>
            {#each tableData as row}
                <tr>
                    <td>{row.date}</td>
                    <td>{row.type_1}</td>
                    <td>{row.type_0}</td>
                    <td>{row.type_2}</td>
                </tr>
            {/each}
        </tbody>
    </table>
{:else}
    <p>loading...</p>
{/if}
