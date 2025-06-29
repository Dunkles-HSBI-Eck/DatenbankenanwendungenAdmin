<script>
    let { data } = $props();
    
    async function markAsPending(id){
        const reserveRespond = await fetch('/api/v1/updateRequest', {
			method: 'POST',
			body: JSON.stringify({
				id: id,
                status: "pending"
			})
		});
        location.reload();
    }

    async function markAsDeclined(id){
        const reserveRespond = await fetch('/api/v1/updateRequest', {
			method: 'POST',
			body: JSON.stringify({
				id: id,
                status: "decline"
			})
		});
        location.reload();
    }

    async function markAsFulfilled(id){
        const reserveRespond = await fetch('/api/v1/updateRequest', {
			method: 'POST',
			body: JSON.stringify({
				id: id,
                status: "fulfilled"
			})
		});
        location.reload();
    }

</script>

<div class="flex items-center p-4">
    {#each data.requests as request}
        <div class="p-4 m-4 rounded bg-blue-300 max-w-96">
            <h2 class="text-xl font-bold">{request.id}</h2>
            <p class="text-gray-700">Requested by: {request.user_id}</p>
            <p class="text-gray-600">Status: {request.status}</p>
            <p>Message: {request.message}</p>
            <p class="text-gray-500 text-sm">Requested on: {new Date(request.requested_at).toLocaleDateString()}</p>
            <br>
            <div class="">
                <button class="rounded w-fit bg-yellow-500 p-2 m-1" onclick={() => markAsPending(request.id)}>mark as pending</button>
                <button class="rounded w-fit bg-green-500 p-2 m-1" onclick={() => markAsFulfilled(request.id)}>mark as fulfilled</button>
                <button class="rounded w-fit bg-red-500 p-2 m-1" onclick={() => markAsDeclined(request.id)}>mark as declined</button>
            </div>
        </div>
    {/each}

    {#if data.requests.length === 0}
        <p class="text-gray-500">No requests found.</p>
    {/if}
</div>
