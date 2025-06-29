<script>
    let { data } = $props();
</script>

<div class="flex flex-grow">
    {#each data.movies as movie}
        <div class="flex space-x-2 h-64 p-4 mb-4 rounded bg-blue-300">
            <img src="/api/v1/images/covers/{movie.cover}" alt="">
            <div>
                <h2 class="text-xl font-bold">{movie.title}</h2>
                <p>id: {movie.id}</p>
                <p class="text-gray-700">Release Date: {new Date(movie.release).toLocaleDateString()}</p>
                <a href="/movie/{movie.id}"><div class="bg-blue-600 w-fit rounded items-center text-center text-amber-50"><p>details</p></div></a>
            </div>
        </div>
    {/each}

    {#if data.movies.length === 0}
        <p class="text-gray-500">No movies found.</p>
    {/if}

    
</div>
<a href="/createMovie"><div class="rounded bg-blue-600 text-amber-50 text-sm m-5 p-5 max-w-40">add a movie</div></a>