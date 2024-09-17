<script lang="ts">
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    import { getProfileStatus } from "$lib/profile";

    let profileData: any | null = null;
    let error: string | null = null;

    let hasProfile: boolean | null = false;

    export let telegramId = 123;

    onMount(async () => {
        try {
            profileData = await getProfileStatus(telegramId);
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
