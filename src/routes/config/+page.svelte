<script lang="ts">
    import Header from "../Header.svelte";
</script>

<svelte:head>
    <title>conf</title>
    <meta name="description" content="conf" />
</svelte:head>

<section>
    <Header />

    <div id="profile">
        <a href="/profile">открыть анкету</a>
    </div>
</section>

<style>
    #profile {
        text-align: center;
    }

    #profile a {
        display: inline-block; /* Чтобы `text-align` работал */
    }
</style>
