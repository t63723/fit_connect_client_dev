<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import { onMount } from "svelte";
    import { userInfo, telegramId } from "$lib/store.js";

    const debugMode = import.meta.env.VITE_DEBUG === "true";

    let webAppData = null;

    onMount(async () => {

        // @ts-ignore
        webAppData = window.Telegram.WebApp;
        let userData = webAppData.initDataUnsafe?.user;

        if (userData != undefined) {
            userInfo.set(userData);
            telegramId.set(userData.id);
        }

        if (debugMode) {
            userInfo.set({});
            telegramId.set(123);
            console.log("debug true, telegram id = 123");
        }
    });

    const dispatch = createEventDispatcher();

    function handleLogin() {
        console.log(telegramId);
        if (debugMode || telegramId != undefined) {
            dispatch("login");
        } else {
            dispatch("error");
        }
    }
</script>

<div class="button-container">
    <div class="has-text-centered pt-5">
        <button on:click={handleLogin} class="button">войти</button>
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
