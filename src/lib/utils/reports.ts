import { apiRequest } from '$lib/utils/api';

export async function getReports(id: number) {
    return await apiRequest('GET', `reports/get_reports/?telegram_uid=${id}`);
}