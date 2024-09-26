<script lang="ts">
	import { goto } from "$app/navigation";
	import { userStore } from "$lib/store.js";
	import { apiRequest } from "$lib/api";

	let firstName = "";
	let lastName = "";
	let username = "";

	let telegramId: number;
	userStore.subscribe((value) => {
		telegramId = value.id;
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
			const url = `clients/create_general_questionnaire/?telegram_uid=${id}`;

			const response = await apiRequest("POST", url, formData);
			console.log("response:", response);

			goto("/");
		} catch (error) {
			console.error("error:", error);
		}
	}
</script>

<section>
	<div class="text-center">
		<p>Анкета</p>
	</div>

	<form on:submit|preventDefault={handleSubmit}>
		<div class="row">
			<div class="col">
				<label for="firstName">Имя:</label>
			</div>
			<div class="col">
				<input
					type="text"
					id="firstName"
					bind:value={firstName}
					required
				/>
			</div>
		</div>

		<div class="row">
			<div class="col">
				<label for="lastName">Фамилия:</label>
			</div>
			<div class="col">
				<input
					type="text"
					id="lastName"
					bind:value={lastName}
					required
				/>
			</div>
		</div>

		<div class="row">
			<div class="col">
				<label for="username">username:</label>
			</div>
			<div class="col">
				<input
					type="text"
					id="username"
					bind:value={username}
					required
				/>
			</div>
		</div>

		<div class="row">
			<div class="col">
				<div class="text-center">
					<button type="submit">Отправить</button>
				</div>
			</div>
		</div>
	</form>
</section>
