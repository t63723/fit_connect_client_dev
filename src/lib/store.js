import { writable } from 'svelte/store';

export const selectedReportType = writable(0);
export const userStore = writable({});