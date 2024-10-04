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

<div class="button-container">
    <div class="has-text-centered">
        <div class="py-2">
            <button class="button is-large is-responsive is-fullwidth"
                >шаги</button
            >
        </div>

        <div class="py-2">
            <button class="button is-large is-responsive is-fullwidth"
                >вес</button
            >
        </div>
        <div class="py-2">
            <button
                on:click={() => dispatch("back")}
                class="button is-large is-responsive is-fullwidth"
            >
                ккал
            </button>
        </div>
    </div>
</div>

<style>
    .button-container {
        display: flex;
        justify-content: center; /* Центрируем горизонтально */
        align-items: center; /* Центрируем вертикально */
        height: 100vh; /* Устанавливаем высоту контейнера на 100% высоты viewport */
    }
</style>
