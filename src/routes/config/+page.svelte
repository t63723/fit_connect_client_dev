<script lang="ts">
    import Header from "../Header.svelte";
    import ServiceTable from "$lib/components/ServicesTable.svelte";

    const telegramId = 123;

</script>

<svelte:head>
    <title>conf</title>
    <meta name="description" content="conf" />
</svelte:head>

<section>
    <Header />

    <div class="text-center">
        <div class="row">
            <div class="col">
                <a href="/profile">открыть анкету</a>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col">
            <ServiceTable {telegramId} />
        </div>
    </div>
</section>
