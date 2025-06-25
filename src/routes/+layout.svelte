<script>
	import '../app.css';

	let { children } = $props();
</script>

<div class="sticky top-0 left-0 w-full flex justify-center bg-blue-500 h-16">
    <ol class="flex items-center space-x-4">
        <li>
            <a href="/" class="hover:underline">Home</a>
        </li>
        <li>
            <a href="/movies" class="hover:underline">Filme</a>
        </li>
        <li>
            <a href="/requests" class="hover:underline">Anfragen</a>
        </li>
    </ol>
</div>
<div class="py-2 px-4">
    {@render children()}
</div>
