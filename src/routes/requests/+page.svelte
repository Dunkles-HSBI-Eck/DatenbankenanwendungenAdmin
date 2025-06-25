<script>
    let { data } = $props();
</script>

<div class="flex flex-col items-center p-4">
    {#each data.requests as request}
        <div class="p-4 mb-4 rounded bg-blue-300">
            <h2 class="text-xl font-bold">{request.id}</h2>
            <p class="text-gray-700">Requested by: {request.user_id}</p>
            <p class="text-gray-600">Status: {request.status}</p>
            <p>Massage: {request.massage}</p>
            <p class="text-gray-500 text-sm">Requested on: {new Date(request.requested_at).toLocaleDateString()}</p>
        </div>
    {/each}

    {#if data.requests.length === 0}
        <p class="text-gray-500">No requests found.</p>
    {/if}
</div>
