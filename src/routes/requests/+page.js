export async function load({ fetch }) {
    const response = await fetch('/api/v1/requests');
    if (!response.ok) {
        throw new Error('Failed to fetch requests');
    }
    const requests = await response.json();
    return { requests }
}