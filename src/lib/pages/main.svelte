<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
</script>

<div>
    <h1>main</h1>

    <button on:click={() => dispatch("settings")}>Настройки</button>
</div>
