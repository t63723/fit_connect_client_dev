import { apiRequest } from '$lib/utils/api';

export async function getProfileStatus(id: number) {
    return await apiRequest('GET', `clients/get_general_questionnaire/?telegram_uid=${id}`);
}