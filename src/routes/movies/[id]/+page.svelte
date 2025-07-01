<script>
    let { data } = $props();
    let { movieId, movie } = data; 
</script>

<div>
    <div>
        <p><strong>id:</strong> {movieId}</p>
    </div>
    <div>
        <p><strong>title:</strong> {movie.title}</p>
    </div>
    <div class="flex">
        <p><strong>description:</strong> </p>
        <div class=" w-100">
            <p>{movie.description}</p>
        </div>
    </div>
    <div>
        <p><strong>price (€): </strong> {movie.price}</p>
    </div>

    <br>
    <div>
        <p><strong>cover:</strong></p>
        <div class="w-100">
        <img
	    	src="/api/v1/images/covers/{movie.cover}"
	    	alt="thumbnail"
	    	class="w-full object-cover brightness-75"
	    />
        </div>
    </div>
    <div>
        <p><strong>banner:</strong></p>
        <div class="w-100">
        <img
	    	src="/api/v1/images/banners/{movie.banner}"
	    	alt="thumbnail"
	    	class="w-full object-cover brightness-75"
	    />
        </div>
    </div>


</div>