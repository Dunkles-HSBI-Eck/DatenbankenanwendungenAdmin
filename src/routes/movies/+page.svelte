<script>
    let { data } = $props();
</script>

<div class="flex flex-grow">
    {#each data.movies as movie}
        <div class="flex space-x-2 h-64 p-4 mb-4 rounded bg-blue-300">
            <img src="/api/v1/images/covers/{movie.cover}" alt="">
            <div>
                <h2 class="text-xl font-bold">{movie.title}</h2>
                <p class="text-gray-700">Release Date: {new Date(movie.release).toLocaleDateString()}</p>
            </div>
        </div>
    {/each}

    {#if data.movies.length === 0}
        <p class="text-gray-500">No movies found.</p>
    {/if}
</div>