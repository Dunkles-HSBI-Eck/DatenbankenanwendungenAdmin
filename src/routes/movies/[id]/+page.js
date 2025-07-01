export async function load({ params, fetch }) {
	const moviesResponse = await fetch(`/api/v1/movies/${params.id}`);
    const movie = await moviesResponse.json();

    const licensesResponse = await fetch(`/api/v1/movies/${params.id}/licenses`);
    const licenses = await licensesResponse.json();

	return {
		movieId: params.id,
		movie,
        licenses: licenses || [],
	};
}