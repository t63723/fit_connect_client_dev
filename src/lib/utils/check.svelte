<script lang="ts">
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    import { telegramId } from "$lib/store";

    import { getProfileStatus } from "$lib/utils/profile";

    let profileData: any | null = null;
    let error: string | null = null;

    let hasProfile: boolean | null = false;

    let storeTelegramId: number;
    telegramId.subscribe((value) => {
        storeTelegramId = value;
    });

    onMount(async () => {
        try {
            profileData = await getProfileStatus(storeTelegramId);
            hasProfile = profileData.detail === "profile not found";

            if (hasProfile) {
                goto("/profile");
            }
        } catch (err) {
            error = (err as Error).message;
            console.error(err);
        }
    });
</script>

<section>
    {#if error}
        <p>{error}</p>
    {/if}
</section>
