<script>
    import { createEventDispatcher } from "svelte";

    import { userStore } from "$lib/store.js";

    let userInfo;
    let telegramId;

    userStore.subscribe((value) => {
        userInfo = value;
        telegramId = value.id;
    });

    const dispatch = createEventDispatcher();
</script>

<div>
    <p>Ошибка входа. Попробуйте еще раз.</p>
    <pre>
        {telegramId}
    </pre>
    <pre>
        {JSON.stringify(userInfo)}
    </pre>
</div>

<button on:click={() => dispatch("back")}>назад</button>
