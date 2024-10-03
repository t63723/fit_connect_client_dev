import { apiRequest } from '$lib/api';

export async function getService(id: number) {
    return await apiRequest('GET', `clients/get_int_service_auth/?telegram_uid=${id}`);
}