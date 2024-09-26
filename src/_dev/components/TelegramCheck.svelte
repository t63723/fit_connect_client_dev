<script lang="ts">
    import { onMount } from "svelte";
    import { userStore } from "$lib/store.js";

    let isTelegramWebApp: boolean | undefined = false;
    let webAppData: any = null;

    let userInfo: any | undefined;
    let telegramId: number | undefined;

    onMount(async () => {
        isTelegramWebApp = window.Telegram && window.Telegram.WebApp;
        webAppData = window.Telegram?.WebApp;
        userInfo = webAppData?.initDataUnsafe?.user;

        if (userInfo != undefined) {
            userStore.set(userInfo);
            telegramId = userInfo.id;
        }
    });
</script>

<div>
    <pre>
        {telegramId}
    </pre>
    <pre>
        {JSON.stringify(userInfo)}
    </pre>
</div>
