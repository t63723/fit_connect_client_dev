export async function apiRequest(method: 'GET' | 'POST', endpoint: string, data?: any) {
    try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL;
        const token = import.meta.env.VITE_API_TOKEN;

        const headers = {
            'Authorization': `Token ${token}`,
            'Content-Type': 'application/json' // Для POST-запросов
        };

        const options: RequestInit = {
            method,
            headers
        };

        if (data) {
            options.body = JSON.stringify(data);
        }

        const response = await fetch(`${baseUrl}/${endpoint}`, options);

        if (!response.ok) {
            throw new Error(`error: ${response.status} ${response.statusText}`);
        }

        return await response.json();

    } catch (err) {
        console.error('error:', err);
        throw err;
    }
}