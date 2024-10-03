<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { telegramId } from "$lib/store.js";

    let storeTelegramId: number;
    telegramId.subscribe((value) => {
        storeTelegramId = value;
    });

    const dispatch = createEventDispatcher();
</script>

<div class="p-3">
    <div class="has-text-centered">
        <button on:click={() => dispatch("settings")} class="button">
            {storeTelegramId} профиль
        </button>
    </div>
</div>
