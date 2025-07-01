<script>
    let { data } = $props();
</script>

<div class="h-10">
    <a href="/createMovie" class="rounded bg-blue-600 text-amber-50 text-sm p-2">Add a movie</a>
</div>
<div class="flex flex-grow justify-center gap-2">
    {#each data.movies as movie}
        <div class="flex space-x-2 h-64 w-96 p-4 rounded bg-blue-300">
            <img class="rounded" src="/api/v1/images/covers/{movie.cover}" alt="">
            <div class="flex flex-col justify-between h-full">
                <div>
                    <h2 class="text-xl font-bold">{movie.title}</h2>
                    <p>id: {movie.id}</p>
                    <p class="text-gray-700">Release Date: {new Date(movie.release).toLocaleDateString()}</p>
                </div>
                <div class="flex justify-end">
                    <a href="/movies/{movie.id}" class="bg-blue-600 w-fit rounded p-2 items-center text-center text-amber-50">Details</a>
                </div>
            </div>
        </div>
    {/each}

    {#if data.movies.length === 0}
        <p class="text-gray-500">No movies found.</p>
    {/if}
</div>