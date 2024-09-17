<script lang="ts">
    import { onMount } from "svelte";
    import { getReports } from "$lib/reports";
    import Chart from "chart.js/auto"; // Import Chart.js

    export let telegramId: number;

    let reportsData: any | null = null;

    let chart: Chart | null = null;

    let ctx;
    let chartCanvas: any;
    let chartData: any;

    let error: string | null = null;

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
            let ai_y = tableData.map((row) => parseFloat(row.type_0) || 0);

            chartData = {
                labels: ai_x,
                datasets: [
                    {
                        label: "Вес",
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
            chart = new Chart(ctx, {
                type: "line",
                data: chartData,
            });
        }
    }
</script>

{#if error}
    {error}
{:else if reportsData}
    <div class="row">
        <div class="col">
            <div>
                <canvas id="myChart" bind:this={chartCanvas}></canvas>
            </div>
        </div>
    </div>

    <div>
        <table>
            <thead>
                <tr>
                    <th>дата</th>
                    <th>вес</th>
                    <th>шаги</th>
                    <th>кбжу</th>
                </tr>
            </thead>
            <tbody>
                {#each tableData as row}
                    <tr>
                        <td>{row.date}</td>
                        <td>{row.type_0}</td>
                        <td>{row.type_1}</td>
                        <td>{row.type_2}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
{:else}
    <p>loading...</p>
{/if}
