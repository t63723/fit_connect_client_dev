<script lang="ts">
    import { onMount } from "svelte";
    import { createEventDispatcher } from "svelte";
    import { telegramId } from "$lib/store.js";

    import ReportsTable  from "$lib/components/ReportsTable.svelte";

    import { getProfileStatus } from "$lib/utils/profile";

    let storeTelegramId: number;
    telegramId.subscribe((value) => {
        storeTelegramId = value;
    });

    const dispatch = createEventDispatcher();

    // проверка есть анкета
    let error: string | null = null;
    let profileData: any | null = null;
    let hasProfile: boolean | null = false;

    onMount(async () => {
        try {
            profileData = await getProfileStatus(storeTelegramId);
            hasProfile = profileData.detail === "profile not found";

            if (hasProfile) {
                dispatch("profile");
            }
        } catch (err) {
            error = (err as Error).message;
            console.error(error);
        }
    });
</script>

<div class="p-3">
    <div class="has-text-centered">
        <button on:click={() => dispatch("settings")} class="button">
            {storeTelegramId} профиль
        </button>
    </div>
    <div class="container">
        <ReportsTable telegramId={storeTelegramId} />
    </div>
</div>
