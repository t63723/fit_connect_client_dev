<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
</script>

<div>
    <div class="text-center">
        <pre>
            настройки
        </pre>
    </div>

    <button on:click={() => dispatch("back")}>Назад</button>
</div>
