export async function load({ fetch }) {
    let hasMore = true;
    let lastId = 0;
    const movies = [];

    while (hasMore) {
        const response = await fetch(`/api/v1/movies?last_id=${lastId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch movies');
        }
        const data = await response.json();
        movies.push(...data.movies);
        hasMore = data.has_more;
        lastId = data.last_id
    }

    return { movies };
}