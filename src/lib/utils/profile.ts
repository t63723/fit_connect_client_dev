import { apiRequest } from '$lib/api';

export async function getProfileStatus(id: number) {
    return await apiRequest('GET', `clients/get_general_questionnaire/?telegram_uid=${id}`);
}