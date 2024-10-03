import { writable } from 'svelte/store';

export const selectedReportType = writable(0);

export const userInfo = writable({
    id: 123,
    first_name: "Иван",
    last_name: "Петров",
    username: "ivan_petrov",
});
export const telegramId = writable(0);