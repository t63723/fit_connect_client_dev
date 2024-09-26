<script>
    import { createEventDispatcher } from "svelte";

    import { onMount } from "svelte";
    import { userStore } from "$lib/store.js";

    let isTelegramWebApp = false;
    let webAppData = null;

    let userInfo;
    let telegramId;

    onMount(async () => {
        isTelegramWebApp = window.Telegram && window.Telegram.WebApp;
        webAppData = window.Telegram.WebApp;
        userInfo = webAppData.initDataUnsafe?.user;

        if (userInfo != undefined) {
            userStore.set(userInfo);
            telegramId = userInfo.id;
        }
    });

    const dispatch = createEventDispatcher();

    function handleLogin() {
        if (telegramId != undefined) {
            dispatch("login");
        } else {
            dispatch("error");
        }
        // Если вход неудачен:
    }
</script>

<button on:click={handleLogin}>войти</button>
