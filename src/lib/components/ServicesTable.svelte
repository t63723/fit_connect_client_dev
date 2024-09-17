<script lang="ts">
    import { page } from "$app/stores";
    import { onMount } from "svelte";

    import { getService } from "$lib/services";

    export let telegramId: number;

    let responseData: any | null = null;
    let error: string | null = null;

    onMount(async () => {
        try {
            responseData = await getService(telegramId);
        } catch (err) {
            error = (err as Error).message;
            console.error(err);
        }
    });
</script>

{#if error}
    {error}
{:else if responseData}
    <div class="text-center">
        {#each Object.entries(responseData) as [service, data]}
            <div class="row">
                <div class="col">
                    {service}:
                </div>
                <div class="col">
                    {#if data.status === "ok"}
                        OK
                    {:else}
                        <a href={data.url} target="_blank">Подключить</a>
                    {/if}
                </div>
            </div>
        {/each}
    </div>
{:else}
    <p>loading...</p>
{/if}
