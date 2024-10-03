<script lang="ts">
	import { telegramId, userInfo } from "$lib/store";
	import { apiRequest } from "$lib/utils/api";

	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	let storeTelegramId: number;
	telegramId.subscribe((value) => {
		storeTelegramId = value;
	});

	let firstName = "";
	let lastName = "";
	let username = "";

	userInfo.subscribe((value) => {
		firstName = value.first_name;
		lastName = value.last_name;
		username = value.username;
	});

	async function handleSubmit() {
		const formData = {
			qa_data: {
				qa: [
					{
						text_question: "username",
						answer_type: "text",
						answer: username,
					},
					{
						text_question: "Имя",
						answer_type: "text",
						answer: firstName,
					},
					{
						text_question: "Фамилия",
						answer_type: "text",
						answer: lastName,
					},
				],
			},
		};

		try {
			const url = `clients/create_general_questionnaire/?telegram_uid=${storeTelegramId}`;

			apiRequest("POST", url, formData);
			dispatch("success");
		} catch (error) {
			console.error("error:", error);
		}
	}
</script>

<div class="p-3">
	<section class="hero is-small">
		<div class="hero-body has-text-centered">
			<p class="title">анкета</p>
		</div>
	</section>

	<div class="container">

		<form on:submit|preventDefault={handleSubmit}>
			<div class="field">
				<label class="label" for="firstName">Имя</label>
				<div class="control">
					<input
						class="input"
						type="text"
						placeholder="name"
						id="firstName"
						bind:value={firstName}
						required
					/>
				</div>
			</div>

			<div class="field">
				<label class="label" for="lastName">Фамилия</label>
				<div class="control">
					<input
						class="input"
						type="text"
						placeholder="name"
						id="lastName"
						bind:value={lastName}
						required
					/>
				</div>
			</div>

			<div class="field">
				<label class="label" for="username">username</label>
				<div class="control">
					<input
						class="input"
						type="text"
						placeholder="name"
						id="lastName"
						bind:value={username}
						required
					/>
				</div>
			</div>

			<div class="row">
				<div class="col">
					<div class="has-text-centered">
						<button type="submit" class="button is-primary">
							сохранить
						</button>
					</div>
				</div>
			</div>

		</form>
	</div>
</div>
