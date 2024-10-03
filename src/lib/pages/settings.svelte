<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import { userInfo, telegramId } from "$lib/store.js";

    let storeUserInfo: {};
    let storeTelegramId: number;

    userInfo.subscribe((value) => {
        storeUserInfo = value;
    });
    telegramId.subscribe((value) => {
        storeTelegramId = value;
    });

    const dispatch = createEventDispatcher();
</script>

<div class="p-3">
    <section class="hero is-small">
        <div class="hero-body has-text-centered">
            <p class="title">настройки</p>
        </div>
    </section>
    <div class="container-fluid">
        <div class="pt-2">
            <pre>{storeTelegramId}</pre>
        </div>
        <div class="py-2">
            <pre>{JSON.stringify(storeUserInfo)}</pre>
        </div>
    </div>
    <div class="has-text-centered">
        <button on:click={() => dispatch("back")} class="button">назад</button>
    </div>
</div>
