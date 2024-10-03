import { writable } from 'svelte/store';

export const selectedReportType = writable(0);

export const userInfo = writable({});
export const telegramId = writable(0);